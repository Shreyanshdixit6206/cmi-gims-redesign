import { useState } from 'react'
import { Link } from 'react-router-dom'
import {
    ArrowRight,
    Building2,
    User,
    Phone,
    Mail,
    MapPin,
    FileText,
    CheckCircle,
    AlertCircle
} from 'lucide-react'

// Indian states list
const indianStates = [
    'Andhra Pradesh', 'Arunachal Pradesh', 'Assam', 'Bihar', 'Chhattisgarh',
    'Goa', 'Gujarat', 'Haryana', 'Himachal Pradesh', 'Jharkhand', 'Karnataka',
    'Kerala', 'Madhya Pradesh', 'Maharashtra', 'Manipur', 'Meghalaya', 'Mizoram',
    'Nagaland', 'Odisha', 'Punjab', 'Rajasthan', 'Sikkim', 'Tamil Nadu',
    'Telangana', 'Tripura', 'Uttar Pradesh', 'Uttarakhand', 'West Bengal',
    'Delhi', 'Jammu and Kashmir', 'Ladakh', 'Puducherry', 'Chandigarh'
]

// Year options
const yearOptions = Array.from({ length: 10 }, (_, i) => 2024 - i)

function ApplyPage() {
    const [membershipType, setMembershipType] = useState('primary')
    const [formData, setFormData] = useState({
        incubatorName: '',
        websiteLink: '',
        phone: '',
        email: '',
        hostOrganization: '',
        yearStarted: '',
        legalStatus: '',
        establishmentSupport: '',
        streetLine1: '',
        streetLine2: '',
        landmark: '',
        city: '',
        state: '',
        postalCode: '',
        contactName: '',
        contactDesignation: '',
        contactPhone: '',
        contactEmail: '',
        totalArea: ''
    })

    const handleInputChange = (e) => {
        const { name, value } = e.target
        setFormData(prev => ({ ...prev, [name]: value }))
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        // Handle form submission
        alert('Application submitted! We will review and get back to you soon.')
    }

    return (
        <>
            {/* Hero Section */}
            <section className="hero" style={{ minHeight: 'auto', paddingTop: 'calc(var(--nav-height) + var(--space-12))', paddingBottom: 'var(--space-12)' }}>
                <div className="container">
                    <div className="hero-content" style={{ textAlign: 'center', maxWidth: '700px', margin: '0 auto' }}>
                        <h1 className="hero-title" style={{ fontSize: 'clamp(2rem, 4vw, 3rem)' }}>
                            Apply <span>Membership Form</span>
                        </h1>
                        <p className="hero-description" style={{ margin: '0 auto' }}>
                            Join India's first public hospital-based medical incubator and accelerate your healthcare innovation journey.
                        </p>
                    </div>
                </div>
            </section>

            {/* Application Form */}
            <section className="section" style={{ paddingTop: 'var(--space-8)' }}>
                <div className="container">
                    <form onSubmit={handleSubmit} style={{ maxWidth: '800px', margin: '0 auto' }}>

                        {/* Membership Type */}
                        <div className="card" style={{ padding: 'var(--space-6)', marginBottom: 'var(--space-6)' }}>
                            <h3 style={{
                                borderLeft: '4px solid var(--color-primary)',
                                paddingLeft: 'var(--space-4)',
                                marginBottom: 'var(--space-4)'
                            }}>
                                MEMBERSHIP TYPE *
                            </h3>
                            <div style={{ display: 'flex', gap: 'var(--space-6)', flexWrap: 'wrap' }}>
                                <label style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-2)', cursor: 'pointer' }}>
                                    <input
                                        type="radio"
                                        name="membershipType"
                                        value="primary"
                                        checked={membershipType === 'primary'}
                                        onChange={(e) => setMembershipType(e.target.value)}
                                        style={{ width: '18px', height: '18px' }}
                                    />
                                    <span>Primary Membership</span>
                                </label>
                                <label style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-2)', cursor: 'pointer' }}>
                                    <input
                                        type="radio"
                                        name="membershipType"
                                        value="associate"
                                        checked={membershipType === 'associate'}
                                        onChange={(e) => setMembershipType(e.target.value)}
                                        style={{ width: '18px', height: '18px' }}
                                    />
                                    <span>Associate Membership</span>
                                </label>
                            </div>
                        </div>

                        {/* Incubator Information */}
                        <div className="card" style={{ padding: 'var(--space-6)', marginBottom: 'var(--space-6)' }}>
                            <h3 style={{
                                borderLeft: '4px solid var(--color-primary)',
                                paddingLeft: 'var(--space-4)',
                                marginBottom: 'var(--space-6)'
                            }}>
                                INCUBATOR INFORMATION
                            </h3>

                            <div style={{ display: 'grid', gap: 'var(--space-5)' }}>
                                <div className="form-group">
                                    <label className="form-label">Name of Incubator *</label>
                                    <input
                                        type="text"
                                        name="incubatorName"
                                        value={formData.incubatorName}
                                        onChange={handleInputChange}
                                        className="form-input"
                                        required
                                    />
                                </div>

                                <div className="form-group">
                                    <label className="form-label">Website Link *</label>
                                    <input
                                        type="url"
                                        name="websiteLink"
                                        value={formData.websiteLink}
                                        onChange={handleInputChange}
                                        className="form-input"
                                        required
                                    />
                                </div>

                                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 'var(--space-4)' }}>
                                    <div className="form-group">
                                        <label className="form-label">Phone *</label>
                                        <input
                                            type="tel"
                                            name="phone"
                                            value={formData.phone}
                                            onChange={handleInputChange}
                                            className="form-input"
                                            required
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label className="form-label">Email *</label>
                                        <input
                                            type="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleInputChange}
                                            className="form-input"
                                            required
                                        />
                                    </div>
                                </div>

                                <div className="form-group">
                                    <label className="form-label">Name of Promoting (host) Organization</label>
                                    <input
                                        type="text"
                                        name="hostOrganization"
                                        value={formData.hostOrganization}
                                        onChange={handleInputChange}
                                        className="form-input"
                                    />
                                </div>

                                <div className="form-group">
                                    <label className="form-label">Year of Starting the Incubator / Incubation *</label>
                                    <select
                                        name="yearStarted"
                                        value={formData.yearStarted}
                                        onChange={handleInputChange}
                                        className="form-input"
                                        required
                                    >
                                        <option value="">Select</option>
                                        {yearOptions.map(year => (
                                            <option key={year} value={year}>{year}</option>
                                        ))}
                                    </select>
                                </div>

                                <div className="form-group">
                                    <label className="form-label">Legal Status of Incubator *</label>
                                    <div style={{ display: 'flex', gap: 'var(--space-4)', flexWrap: 'wrap', marginTop: 'var(--space-2)' }}>
                                        {['Society', 'Trust', 'Section 8 Co', 'Pvt. Ltd', 'Pub Ltd', 'Others'].map(status => (
                                            <label key={status} style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-2)', cursor: 'pointer' }}>
                                                <input
                                                    type="radio"
                                                    name="legalStatus"
                                                    value={status}
                                                    checked={formData.legalStatus === status}
                                                    onChange={handleInputChange}
                                                    style={{ width: '16px', height: '16px' }}
                                                />
                                                <span style={{ fontSize: 'var(--text-sm)' }}>{status}</span>
                                            </label>
                                        ))}
                                    </div>
                                </div>

                                <div className="form-group">
                                    <label className="form-label">Establishment supported by *</label>
                                    <input
                                        type="text"
                                        name="establishmentSupport"
                                        value={formData.establishmentSupport}
                                        onChange={handleInputChange}
                                        className="form-input"
                                        required
                                    />
                                </div>

                                <div className="form-group">
                                    <label className="form-label">Nominee Letter *</label>
                                    <div style={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: 'var(--space-3)',
                                        padding: 'var(--space-3)',
                                        border: '1px solid var(--color-border)',
                                        borderRadius: 'var(--radius-md)'
                                    }}>
                                        <button type="button" className="btn btn-secondary" style={{ fontSize: 'var(--text-sm)', padding: 'var(--space-2) var(--space-4)' }}>
                                            Choose file
                                        </button>
                                        <span style={{ color: 'var(--color-text-muted)', fontSize: 'var(--text-sm)' }}>No file chosen</span>
                                    </div>
                                </div>

                                <div className="form-group">
                                    <label className="form-label">Certificate of Registration of Incubator</label>
                                    <div style={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: 'var(--space-3)',
                                        padding: 'var(--space-3)',
                                        border: '1px solid var(--color-border)',
                                        borderRadius: 'var(--radius-md)'
                                    }}>
                                        <button type="button" className="btn btn-secondary" style={{ fontSize: 'var(--text-sm)', padding: 'var(--space-2) var(--space-4)' }}>
                                            Choose file
                                        </button>
                                        <span style={{ color: 'var(--color-text-muted)', fontSize: 'var(--text-sm)' }}>No file chosen</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Address */}
                        <div className="card" style={{ padding: 'var(--space-6)', marginBottom: 'var(--space-6)' }}>
                            <h3 style={{
                                borderLeft: '4px solid var(--color-primary)',
                                paddingLeft: 'var(--space-4)',
                                marginBottom: 'var(--space-6)'
                            }}>
                                ADDRESS
                            </h3>

                            <div style={{ display: 'grid', gap: 'var(--space-5)' }}>
                                <div className="form-group">
                                    <label className="form-label">Street Line 1 *</label>
                                    <input
                                        type="text"
                                        name="streetLine1"
                                        value={formData.streetLine1}
                                        onChange={handleInputChange}
                                        className="form-input"
                                        required
                                    />
                                </div>

                                <div className="form-group">
                                    <label className="form-label">Street Line 2</label>
                                    <input
                                        type="text"
                                        name="streetLine2"
                                        value={formData.streetLine2}
                                        onChange={handleInputChange}
                                        className="form-input"
                                    />
                                </div>

                                <div className="form-group">
                                    <label className="form-label">Landmark</label>
                                    <input
                                        type="text"
                                        name="landmark"
                                        value={formData.landmark}
                                        onChange={handleInputChange}
                                        className="form-input"
                                    />
                                </div>

                                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 'var(--space-4)' }}>
                                    <div className="form-group">
                                        <label className="form-label">City *</label>
                                        <input
                                            type="text"
                                            name="city"
                                            value={formData.city}
                                            onChange={handleInputChange}
                                            className="form-input"
                                            required
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label className="form-label">State *</label>
                                        <select
                                            name="state"
                                            value={formData.state}
                                            onChange={handleInputChange}
                                            className="form-input"
                                            required
                                        >
                                            <option value="">Select State</option>
                                            {indianStates.map(state => (
                                                <option key={state} value={state}>{state}</option>
                                            ))}
                                        </select>
                                    </div>
                                </div>

                                <div className="form-group" style={{ maxWidth: '200px' }}>
                                    <label className="form-label">Postal Code *</label>
                                    <input
                                        type="text"
                                        name="postalCode"
                                        value={formData.postalCode}
                                        onChange={handleInputChange}
                                        className="form-input"
                                        required
                                        pattern="[0-9]{6}"
                                        maxLength={6}
                                    />
                                </div>
                            </div>
                        </div>

                        {/* Contact */}
                        <div className="card" style={{ padding: 'var(--space-6)', marginBottom: 'var(--space-6)' }}>
                            <h3 style={{
                                borderLeft: '4px solid var(--color-primary)',
                                paddingLeft: 'var(--space-4)',
                                marginBottom: 'var(--space-6)'
                            }}>
                                CONTACT
                            </h3>

                            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 'var(--space-4)' }}>
                                <div className="form-group">
                                    <label className="form-label">Name</label>
                                    <input
                                        type="text"
                                        name="contactName"
                                        value={formData.contactName}
                                        onChange={handleInputChange}
                                        className="form-input"
                                    />
                                </div>
                                <div className="form-group">
                                    <label className="form-label">Designation</label>
                                    <input
                                        type="text"
                                        name="contactDesignation"
                                        value={formData.contactDesignation}
                                        onChange={handleInputChange}
                                        className="form-input"
                                    />
                                </div>
                                <div className="form-group">
                                    <label className="form-label">Phone</label>
                                    <input
                                        type="tel"
                                        name="contactPhone"
                                        value={formData.contactPhone}
                                        onChange={handleInputChange}
                                        className="form-input"
                                    />
                                </div>
                            </div>
                            <div className="form-group" style={{ marginTop: 'var(--space-4)', maxWidth: '300px' }}>
                                <label className="form-label">Email</label>
                                <input
                                    type="email"
                                    name="contactEmail"
                                    value={formData.contactEmail}
                                    onChange={handleInputChange}
                                    className="form-input"
                                />
                            </div>
                        </div>

                        {/* Details of Incubation Support */}
                        <div className="card" style={{ padding: 'var(--space-6)', marginBottom: 'var(--space-6)' }}>
                            <h3 style={{
                                borderLeft: '4px solid var(--color-primary)',
                                paddingLeft: 'var(--space-4)',
                                marginBottom: 'var(--space-6)'
                            }}>
                                DETAILS OF INCUBATION SUPPORT
                            </h3>

                            <div className="form-group" style={{ maxWidth: '300px' }}>
                                <label className="form-label">Total Area available in sq. ft. *</label>
                                <input
                                    type="number"
                                    name="totalArea"
                                    value={formData.totalArea}
                                    onChange={handleInputChange}
                                    className="form-input"
                                    required
                                />
                            </div>
                        </div>

                        {/* Submit Button */}
                        <div style={{ textAlign: 'center', marginTop: 'var(--space-8)' }}>
                            <button type="submit" className="btn btn-primary btn-lg">
                                Submit Application
                                <ArrowRight size={20} />
                            </button>
                        </div>
                    </form>
                </div>
            </section>
        </>
    )
}

export default ApplyPage
