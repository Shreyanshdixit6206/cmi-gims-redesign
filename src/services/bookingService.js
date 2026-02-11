import { db } from '../lib/firebaseConfig'
import { collection, addDoc, getDocs, query, where, Timestamp } from 'firebase/firestore'
import emailjs from '@emailjs/browser'
import { startOfDay, endOfDay } from 'date-fns'

/*
 * Checks availability and Creates a new booking
 */
export const createBooking = async (bookingData) => {
    try {
        // 1. Check Availability (Race condition prevention logic should be here, simplified for now)
        const isAvailable = await checkSlotAvailability(bookingData.date, bookingData.time)

        if (!isAvailable) {
            throw new Error("This slot was just booked! Please choose another.")
        }

        // 2. Add to Firestore
        const docRef = await addDoc(collection(db, "bookings"), {
            ...bookingData,
            createdAt: Timestamp.now(),
            status: 'pending' // pending approval
        })

        // 3. Send Email (Client-side trigger)
        await sendEmailNotification(bookingData)

        return { success: true, id: docRef.id }
    } catch (error) {
        console.error("Error creating booking: ", error)
        throw error
    }
}

/*
 * Checks if a slot is taken in Firestore
 */
export const checkSlotAvailability = async (date, time) => {
    // Query bookings for the specific date and time
    // Note: In a real app, date should be stored consistently 
    // (e.g., ISO string at start of slot). adjusting logic to match UI.
    const q = query(
        collection(db, "bookings"),
        where("dateString", "==", date.toDateString()), // Simple string match
        where("time", "==", time)
    )

    const querySnapshot = await getDocs(q)
    return querySnapshot.empty // True if no documents found (Slot is free)
}

/*
 * Fetches all booked slots for a date
 */
export const getBookedSlots = async (date) => {
    const q = query(
        collection(db, "bookings"),
        where("dateString", "==", date.toDateString())
    )
    const querySnapshot = await getDocs(q)
    return querySnapshot.docs.map(doc => doc.data().time)
}

/*
 * Sends Email via EmailJS
 */
const sendEmailNotification = async (data) => {
    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY

    // These params must match your EmailJS Template variables
    const templateParams = {
        to_name: "Admin",
        from_name: data.name,
        from_email: data.email,
        appointment_date: data.dateString,
        appointment_time: data.time,
        reason: data.reason,
    }

    try {
        await emailjs.send(serviceId, templateId, templateParams, publicKey)
    } catch (error) {
        console.error("EmailJS Error:", error)
        // Don't block the UI success state if email fails, but log it.
    }
}
