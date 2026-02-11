import { addMinutes, format, setHours, setMinutes, startOfDay } from 'date-fns'
import { getBookedSlots } from '../services/bookingService'

/* 
 * Generates slots and filters out booked ones
 */
export const fetchTimeSlots = async (date) => {
    const slots = []
    let current = setMinutes(setHours(startOfDay(date), 10), 0) // Start 10 AM
    const end = setMinutes(setHours(startOfDay(date), 17), 0)   // End 5 PM

    // Fetch taken slots from DB
    const bookedTimes = await getBookedSlots(date)

    while (current < end) {
        const timeString = format(current, 'hh:mm a')
        const isBooked = bookedTimes.includes(timeString)

        slots.push({
            time: timeString,
            iso: current.toISOString(),
            available: !isBooked
        })
        current = addMinutes(current, 30) // 30 min intervals
    }

    return slots
}
