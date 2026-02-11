import { useState } from 'react'
import { MapPin, Phone, Mail, Clock, Send, CheckCircle, ExternalLink } from 'lucide-react'

const contactInfo = [
    { icon: MapPin, title: 'Address', content: 'GIMS Hospital Campus, Greater Noida, Uttar Pradesh 201310' },
    { icon: Mail, title: 'Email', content: 'gimsincubator@gmail.com', href: 'mailto:gimsincubator@gmail.com' },
    { icon: Phone, title: 'Phone', content: '+91-XXX-XXX-XXXX' },
    { icon: Clock, title: 'Hours', content: 'Mon-Sat: 9:00 AM - 6:00 PM' },
]

function ContactPage() {
    const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' })
    const [submitted, setSubmitted] = useState(false)

    const handleSubmit = (e) => {
        e.preventDefault()
        setSubmitted(true)
    }

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }

    return (
        <>
            <section className="hero">
                <div className="container">
                    <div className="hero-content">
                        <span className="badge badge-primary section-badge">Get in Touch</span>
                        <h1 className="hero-title">Contact <span>CMI GIMS</span></h1>
                        <p className="hero-description">Have questions about our incubation program? We'd love to hear from you.</p>
                    </div>
                </div>
            </section>

            <section className="section">
                <div className="container">
                    <div className="contact-grid">
                        <div>
                            <h2 style={{ marginBottom: 'var(--space-6)' }}>Contact Information</h2>
                            <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-6)' }}>
                                {contactInfo.map((item) => (
                                    <div key={item.title} style={{ display: 'flex', gap: 'var(--space-4)' }}>
                                        <div className="icon-box">
                                            <item.icon size={20} color="var(--color-primary)" />
                                        </div>
                                        <div>
                                            <div style={{ fontWeight: 600, marginBottom: 'var(--space-1)' }}>{item.title}</div>
                                            {item.href ? (
                                                <a href={item.href} style={{ color: 'var(--color-primary)' }}>{item.content}</a>
                                            ) : (
                                                <div style={{ color: 'var(--color-text-muted)' }}>{item.content}</div>
                                            )}
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <div style={{ marginTop: 'var(--space-8)', padding: 'var(--space-6)', background: 'var(--color-background-alt)', borderRadius: 'var(--radius-xl)' }}>
                                <h4 style={{ marginBottom: 'var(--space-3)' }}>Visit GIMS Hospital</h4>
                                <p style={{ fontSize: 'var(--text-sm)', marginBottom: 'var(--space-4)' }}>Our incubation center is located at the GIMS Hospital Campus.</p>
                                <a href="https://gims.ac.in" target="_blank" rel="noopener noreferrer" className="btn btn-secondary btn-sm" style={{ display: 'inline-flex', alignItems: 'center', gap: 'var(--space-2)' }}>
                                    Visit GIMS Website <ExternalLink size={14} />
                                </a>
                            </div>
                        </div>

                        <div>
                            <h2 style={{ marginBottom: 'var(--space-6)' }}>Send us a Message</h2>

                            {submitted ? (
                                <div className="card" style={{ textAlign: 'center', padding: 'var(--space-12)' }}>
                                    <CheckCircle size={64} color="var(--color-cta)" style={{ marginBottom: 'var(--space-4)' }} />
                                    <h3>Message Sent!</h3>
                                    <p>Thank you for reaching out. We'll get back to you within 2-3 business days.</p>
                                </div>
                            ) : (
                                <form onSubmit={handleSubmit} className="card" style={{ padding: 'var(--space-8)' }}>
                                    <div className="form-group">
                                        <label className="form-label">Your Name *</label>
                                        <input type="text" name="name" required className="form-input" value={formData.name} onChange={handleChange} />
                                    </div>
                                    <div className="form-group">
                                        <label className="form-label">Email Address *</label>
                                        <input type="email" name="email" required className="form-input" value={formData.email} onChange={handleChange} />
                                    </div>
                                    <div className="form-group">
                                        <label className="form-label">Subject</label>
                                        <select name="subject" className="form-select" value={formData.subject} onChange={handleChange}>
                                            <option value="">Select a topic</option>
                                            <option value="General Inquiry">General Inquiry</option>
                                            <option value="Incubation Program">Incubation Program</option>
                                            <option value="Partnership">Partnership Opportunity</option>
                                            <option value="Media">Media Inquiry</option>
                                            <option value="Other">Other</option>
                                        </select>
                                    </div>
                                    <div className="form-group">
                                        <label className="form-label">Your Message *</label>
                                        <textarea name="message" required className="form-textarea" rows="5" value={formData.message} onChange={handleChange} placeholder="Tell us how we can help..."></textarea>
                                    </div>
                                    <button type="submit" className="btn btn-primary btn-lg" style={{ width: '100%' }}>
                                        <Send size={18} /> Send Message
                                    </button>
                                </form>
                            )}
                        </div>
                    </div>
                </div>
            </section>

            <section className="section section-alt">
                <div className="container">
                    <div style={{ background: 'var(--color-surface)', borderRadius: 'var(--radius-2xl)', padding: 'var(--space-4)', boxShadow: 'var(--shadow-lg)', overflow: 'hidden' }}>
                        <iframe
                            title="CMI GIMS Location"
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3507.2054698795946!2d77.4970!3d28.4560!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cc1e!2sGIMS%20Greater%20Noida!5e0!3m2!1sen!2sin!4v1234567890"
                            width="100%"
                            height="400"
                            style={{ border: 0, borderRadius: 'var(--radius-xl)' }}
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        ></iframe>
                    </div>
                </div>
            </section>
        </>
    )
}

export default ContactPage
