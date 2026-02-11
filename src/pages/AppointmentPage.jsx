import React, { useState, useEffect } from 'react'
import { Calendar as CalendarIcon, Clock, CheckCircle, ChevronRight, User, Mail, FileText, ArrowLeft, Loader2 } from 'lucide-react'
import { format, addDays, startOfToday, isSameDay } from 'date-fns'
import { fetchTimeSlots } from '../utils/bookingLogic'
import { createBooking } from '../services/bookingService'

function AppointmentPage() {
    const [selectedDate, setSelectedDate] = useState(startOfToday())
    const [availableSlots, setAvailableSlots] = useState([])
    const [selectedSlot, setSelectedSlot] = useState(null)
    const [bookingStep, setBookingStep] = useState('date') // 'date', 'form', 'success', 'error'
    const [animating, setAnimating] = useState(false)
    const [loading, setLoading] = useState(false)
    const [errorMessage, setErrorMessage] = useState('')
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        reason: ''
    })

    // Generate next 14 days
    const calendarDays = Array.from({ length: 14 }, (_, i) => addDays(startOfToday(), i))

    useEffect(() => {
        const loadSlots = async () => {
            setAnimating(true)
            setLoading(true)
            try {
                const slots = await fetchTimeSlots(selectedDate)
                setAvailableSlots(slots)
            } catch (error) {
                console.error("Failed to load slots:", error)
            } finally {
                setLoading(false)
                setTimeout(() => setAnimating(false), 300)
            }
        }

        loadSlots()
        setSelectedSlot(null)
    }, [selectedDate])

    const handleSlotSelect = (slot) => {
        if (!slot.available) return
        setSelectedSlot(slot)
    }

    const proceedToForm = () => {
        if (selectedSlot) setBookingStep('form')
    }

    const handleFormSubmit = async (e) => {
        e.preventDefault()
        setLoading(true)
        setErrorMessage('')

        const bookingData = {
            ...formData,
            dateString: selectedDate.toDateString(),
            date: selectedDate,
            time: selectedSlot.time
        }

        try {
            await createBooking(bookingData)
            setBookingStep('success')
        } catch (error) {
            console.error("Booking failed:", error)
            setErrorMessage(error.message || "Something went wrong. Please try again.")
        } finally {
            setLoading(false)
        }
    }

    const resetBooking = () => {
        setBookingStep('date')
        setSelectedSlot(null)
        setFormData({ name: '', email: '', reason: '' })
        setErrorMessage('')
    }

    return (
        <div className="page-wrapper-minimal">
            <div className="background-accent"></div>

            <div className="container" style={{ position: 'relative', zIndex: 2 }}>
                <div className="minimal-card fade-in-up">

                    {/* HEADER SECTION */}
                    <div className="card-header">
                        {bookingStep === 'form' && (
                            <button onClick={() => setBookingStep('date')} className="back-btn">
                                <ArrowLeft size={20} />
                            </button>
                        )}
                        <div className="header-content">
                            <h1 className="title">Book an Appointment</h1>
                            <p className="subtitle">Select a time that works best for you.</p>
                        </div>
                    </div>

                    {/* CONTENT SECTION */}
                    <div className="card-body">

                        {/* SUCCESS VIEW */}
                        {bookingStep === 'success' && (
                            <div className="success-view fade-in">
                                <div className="success-icon-wrapper">
                                    <CheckCircle size={56} strokeWidth={1.5} />
                                </div>
                                <h2>Booking Confirmed</h2>
                                <p className="success-details">
                                    We've scheduled your appointment for<br />
                                    <strong>{format(selectedDate, 'EEEE, MMMM do')} at {selectedSlot?.time}</strong>
                                </p>
                                <button className="btn-primary-minimal" onClick={resetBooking}>
                                    Book Another Session
                                </button>
                            </div>
                        )}

                        {/* DATE & TIME VIEW */}
                        {bookingStep === 'date' && (
                            <div className="split-view fade-in">
                                <div className="left-panel">
                                    <h3 className="section-label">Select Date</h3>
                                    <div className="date-scroller">
                                        {calendarDays.map((date) => (
                                            <button
                                                key={date.toString()}
                                                className={`date-pill ${isSameDay(date, selectedDate) ? 'active' : ''}`}
                                                onClick={() => setSelectedDate(date)}
                                            >
                                                <span className="day-name">{format(date, 'EEE')}</span>
                                                <span className="day-number">{format(date, 'd')}</span>
                                            </button>
                                        ))}
                                    </div>

                                    <div className="selected-date-display">
                                        {format(selectedDate, 'EEEE, MMMM do, yyyy')}
                                    </div>
                                </div>

                                <div className="right-panel">
                                    <h3 className="section-label">Available Times</h3>
                                    {loading ? (
                                        <div className="loading-state">
                                            <Loader2 size={32} className="animate-spin text-primary" />
                                        </div>
                                    ) : (
                                        <div className={`slots-grid ${animating ? 'fade-out' : 'fade-in'}`}>
                                            {availableSlots.length > 0 ? (
                                                availableSlots.map((slot, index) => (
                                                    <button
                                                        key={index}
                                                        disabled={!slot.available}
                                                        className={`time-slot ${selectedSlot === slot ? 'active' : ''}`}
                                                        onClick={() => handleSlotSelect(slot)}
                                                    >
                                                        {slot.time}
                                                    </button>
                                                ))
                                            ) : (
                                                <p className="text-muted">No slots available for this date.</p>
                                            )}
                                        </div>
                                    )}

                                    <div className="action-area">
                                        <button
                                            className={`btn-proceed ${selectedSlot ? 'visible' : ''}`}
                                            onClick={proceedToForm}
                                            disabled={!selectedSlot}
                                        >
                                            Continue <ChevronRight size={18} />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        )}

                        {/* FORM VIEW */}
                        {bookingStep === 'form' && (
                            <div className="form-view fade-in-right">
                                <div className="booking-summary-mini">
                                    <div className="mini-item">
                                        <CalendarIcon size={16} /> {format(selectedDate, 'MMM do')}
                                    </div>
                                    <div className="mini-item">
                                        <Clock size={16} /> {selectedSlot?.time}
                                    </div>
                                </div>

                                {errorMessage && (
                                    <div className="error-banner" style={{ background: '#fee2e2', color: '#b91c1c', padding: '1rem', borderRadius: '8px', marginBottom: '1rem' }}>
                                        {errorMessage}
                                    </div>
                                )}

                                <form onSubmit={handleFormSubmit} className="minimal-form">
                                    <div className="form-row">
                                        <div className="input-group">
                                            <label>Full Name</label>
                                            <div className="input-wrapper">
                                                <User size={18} />
                                                <input
                                                    type="text"
                                                    required
                                                    value={formData.name}
                                                    onChange={e => setFormData({ ...formData, name: e.target.value })}
                                                    placeholder="Enter your name"
                                                />
                                            </div>
                                        </div>
                                        <div className="input-group">
                                            <label>Email Address</label>
                                            <div className="input-wrapper">
                                                <Mail size={18} />
                                                <input
                                                    type="email"
                                                    required
                                                    value={formData.email}
                                                    onChange={e => setFormData({ ...formData, email: e.target.value })}
                                                    placeholder="Enter your email"
                                                />
                                            </div>
                                        </div>
                                    </div>

                                    <div className="input-group">
                                        <label>What's this meeting about?</label>
                                        <div className="input-wrapper top-align">
                                            <FileText size={18} style={{ marginTop: '0.8rem' }} />
                                            <textarea
                                                required
                                                value={formData.reason}
                                                onChange={e => setFormData({ ...formData, reason: e.target.value })}
                                                placeholder="Briefly describe your topic..."
                                            />
                                        </div>
                                    </div>

                                    <button
                                        type="submit"
                                        className="btn-primary-minimal btn-block"
                                        disabled={loading}
                                    >
                                        {loading ? <Loader2 className="animate-spin" size={20} /> : 'Confirm Booking'}
                                    </button>
                                </form>
                            </div>
                        )}
                    </div>
                </div>
            </div>

            <style>{`
                /* VARIABLES */
                :root {
                    --bg-soft: #f8fafc;
                    --primary: #0f172a; /* Dark sleek blue */
                    --accent: #0ea5e9; /* Bright minimal blue */
                    --text-main: #334155;
                    --text-light: #94a3b8;
                    --card-shadow: 0 20px 40px -5px rgba(0,0,0,0.05), 0 8px 16px -6px rgba(0,0,0,0.05);
                }

                .page-wrapper-minimal {
                    min-height: 100vh;
                    background-color: var(--bg-soft);
                    padding: 8rem 1rem 4rem; /* Top padding for navbar */
                    position: relative;
                    font-family: 'Inter', sans-serif;
                }

                .background-accent {
                    position: absolute;
                    top: 0; left: 0; right: 0;
                    height: 400px;
                    background: linear-gradient(180deg, #e0f2fe 0%, rgba(240,249,255,0) 100%);
                    z-index: 1;
                    pointer-events: none;
                }

                /* CARD */
                .minimal-card {
                    background: white;
                    max-width: 900px;
                    margin: 0 auto;
                    border-radius: 24px;
                    box-shadow: var(--card-shadow);
                    overflow: hidden;
                    border: 1px solid rgba(255,255,255,0.8);
                }

                .card-header {
                    padding: 3rem 3rem 1.5rem;
                    border-bottom: 1px solid #f1f5f9;
                    display: flex;
                    align-items: center;
                    gap: 1.5rem;
                }

                .back-btn {
                    padding: 0.75rem;
                    border-radius: 50%;
                    background: #f1f5f9;
                    border: none;
                    cursor: pointer;
                    color: var(--text-main);
                    transition: all 0.2s ease;
                }
                .back-btn:hover { background: #e2e8f0; transform: translateX(-3px); }

                .title { font-size: 2rem; font-weight: 700; color: var(--primary); margin: 0; letter-spacing: -0.02em; }
                .subtitle { color: var(--text-light); margin-top: 0.5rem; font-size: 1.1rem; }

                .card-body { padding: 0; min-height: 500px; display: flex; flex-direction: column; }

                /* SPLIT VIEW */
                .split-view { display: grid; grid-template-columns: 300px 1fr; flex: 1; min-height: 500px; }
                .left-panel { background: #fafbfc; border-right: 1px solid #f1f5f9; padding: 2rem; }
                .right-panel { padding: 2.5rem; position: relative; }

                @media (max-width: 800px) {
                    .split-view { grid-template-columns: 1fr; }
                    .left-panel { border-right: none; border-bottom: 1px solid #f1f5f9; }
                }

                /* SECTION LABELS */
                .section-label {
                    text-transform: uppercase;
                    letter-spacing: 0.1em;
                    font-size: 0.75rem;
                    font-weight: 700;
                    color: var(--text-light);
                    margin-bottom: 1.5rem;
                }

                /* DATE SCROLLER */
                .date-scroller {
                    display: flex;
                    flex-direction: column;
                    gap: 0.75rem;
                    max-height: 400px;
                    overflow-y: auto;
                    padding-right: 0.5rem;
                }
                .date-scroller::-webkit-scrollbar { width: 4px; }
                .date-scroller::-webkit-scrollbar-thumb { background: #e2e8f0; border-radius: 4px; }

                .date-pill {
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    padding: 1rem 1.5rem;
                    background: white;
                    border: 1px solid transparent;
                    border-radius: 12px;
                    cursor: pointer;
                    transition: all 0.2s cubic-bezier(0.25, 1, 0.5, 1);
                    color: var(--text-main);
                }
                .date-pill:hover { background: #fff; transform: translateY(-2px); box-shadow: 0 4px 12px rgba(0,0,0,0.05); }
                .date-pill.active {
                    background: var(--primary);
                    color: white;
                    box-shadow: 0 8px 20px -4px rgba(15, 23, 42, 0.3);
                }
                .date-pill .day-name { font-size: 0.9rem; font-weight: 500; opacity: 0.8; }
                .date-pill .day-number { font-size: 1.2rem; font-weight: 700; }

                /* TIME SLOTS */
                .slots-grid {
                    display: grid;
                    grid-template-columns: repeat(auto-fill, minmax(110px, 1fr));
                    gap: 1rem;
                }
                .time-slot {
                    padding: 0.8rem;
                    border: 1px solid #e2e8f0;
                    border-radius: 10px;
                    background: white;
                    color: var(--text-main);
                    font-weight: 500;
                    cursor: pointer;
                    transition: all 0.2s ease;
                }
                .time-slot:hover:not(:disabled) { border-color: var(--accent); color: var(--accent); background: #f0f9ff; }
                .time-slot.active { background: var(--accent); color: white; border-color: var(--accent); box-shadow: 0 4px 12px rgba(14, 165, 233, 0.3); }
                .time-slot:disabled { opacity: 0.4; cursor: not-allowed; border-color: transparent; background: #f8fafc; }

                .selected-date-display { margin-top: 2rem; font-size: 0.9rem; color: var(--text-light); text-align: center; display: none; }
                @media(max-width: 800px) {
                    .date-scroller { flex-direction: row; overflow-x: auto; padding-bottom: 1rem; }
                    .date-pill { min-width: 80px; flex-direction: column; justify-content: center; gap: 0.25rem; }
                    .selected-date-display { display: block; }
                }

                .loading-state { display: flex; justify-content: center; padding: 2rem; }
                .animate-spin { animation: spin 1s linear infinite; }
                @keyframes spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }

                /* ACTION AREA */
                .action-area { margin-top: 3rem; display: flex; justify-content: flex-end; }
                .btn-proceed {
                    display: flex; align-items: center; gap: 0.5rem;
                    background: var(--primary);
                    color: white;
                    padding: 1rem 2rem;
                    border-radius: 50px;
                    border: none;
                    font-weight: 600;
                    font-size: 1rem;
                    cursor: pointer;
                    opacity: 0; pointer-events: none; transform: translateY(10px);
                    transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
                }
                .btn-proceed.visible { opacity: 1; pointer-events: auto; transform: translateY(0); }
                .btn-proceed:hover { background: var(--text-main); transform: translateY(-2px); box-shadow: 0 10px 20px -5px rgba(0,0,0,0.2); }

                /* FORM */
                .form-view { padding: 3rem; animation: slideInRight 0.4s ease-out; }
                .booking-summary-mini {
                    display: flex; gap: 1.5rem; margin-bottom: 2.5rem; padding-bottom: 1.5rem; border-bottom: 1px solid #f1f5f9;
                }
                .mini-item { display: flex; align-items: center; gap: 0.5rem; color: var(--text-main); font-weight: 600; font-size: 0.95rem; }
                
                .minimal-form { max-width: 600px; }
                .form-row { display: grid; grid-template-columns: 1fr 1fr; gap: 1.5rem; margin-bottom: 1.5rem; }
                @media(max-width: 600px) { .form-row { grid-template-columns: 1fr; } }

                .input-group label { display: block; font-size: 0.85rem; font-weight: 600; color: var(--text-main); margin-bottom: 0.5rem; }
                .input-wrapper {
                    display: flex; align-items: center; gap: 1rem;
                    background: #f8fafc;
                    border: 2px solid transparent;
                    border-radius: 12px;
                    padding: 0.2rem 1rem;
                    transition: all 0.2s ease;
                }
                .input-wrapper:focus-within { background: white; border-color: var(--accent); box-shadow: 0 0 0 4px rgba(14, 165, 233, 0.1); }
                .input-wrapper svg { color: var(--text-light); }
                .input-wrapper.top-align { align-items: flex-start; }
                
                .input-wrapper input, .input-wrapper textarea {
                    width: 100%; border: none; background: transparent; padding: 0.8rem 0;
                    font-size: 1rem; color: var(--primary); outline: none; font-family: inherit;
                }
                .input-wrapper textarea { min-height: 100px; resize: vertical; }

                .btn-primary-minimal {
                    width: 100%; background: var(--accent); color: white; border: none;
                    padding: 1.2rem; border-radius: 12px; font-weight: 700; font-size: 1rem;
                    cursor: pointer; margin-top: 1rem;
                    transition: all 0.2s ease;
                    display: flex; justify-content: center; align-items: center;
                }
                .btn-primary-minimal:hover { filter: brightness(1.1); transform: translateY(-2px); box-shadow: 0 10px 25px -5px rgba(14, 165, 233, 0.4); }
                .btn-primary-minimal:disabled { opacity: 0.7; cursor: not-allowed; }

                /* SUCCESS */
                .success-view { text-align: center; padding: 4rem 2rem; display: flex; flex-direction: column; align-items: center; }
                .success-icon-wrapper {
                    width: 100px; height: 100px; background: #ecfdf5; color: #10b981;
                    border-radius: 50%; display: flex; align-items: center; justify-content: center;
                    margin-bottom: 2rem; animation: popIn 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275);
                }
                .success-details { font-size: 1.1rem; color: var(--text-main); margin-bottom: 3rem; line-height: 1.6; }

                /* ANIMATIONS */
                @keyframes fade-in-up { 0% { opacity: 0; transform: translateY(20px); } 100% { opacity: 1; transform: translateY(0); } }
                .fade-in-up { animation: fade-in-up 0.6s ease-out forwards; }
                
                @keyframes fadeIn { 0% { opacity: 0; } 100% { opacity: 1; } }
                .fade-in { animation: fadeIn 0.4s ease-out forwards; }
                
                .fade-out { opacity: 0.5; transition: opacity 0.3s; pointer-events: none; }
                
                @keyframes slideInRight { 0% { opacity: 0; transform: translateX(20px); } 100% { opacity: 1; transform: translateX(0); } }
                
                @keyframes popIn { 0% { transform: scale(0); } 70% { transform: scale(1.1); } 100% { transform: scale(1); } }
            `}</style>
        </div>
    )
}

export default AppointmentPage
