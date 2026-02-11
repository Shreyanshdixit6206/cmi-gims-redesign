import { useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, Filter } from 'lucide-react'

const startups = [
    { id: 1, name: 'Sophrosyne Technologies', tagline: 'Medical-Grade Chipsets', domain: 'Medical Devices', funding: '$2M Seed', featured: true },
    { id: 2, name: 'HealthAI Diagnostics', tagline: 'AI Medical Imaging', domain: 'AI/ML', funding: 'Pre-Seed' },
    { id: 3, name: 'VitalWear', tagline: 'Smart Health Wearables', domain: 'Wearables', funding: 'Seed' },
    { id: 4, name: 'TeleHealth Connect', tagline: 'Rural Healthcare Platform', domain: 'Telemedicine', funding: 'Grant' },
    { id: 5, name: 'DiagnoPoint', tagline: 'Point-of-Care Testing', domain: 'Diagnostics', funding: 'Pre-Seed' },
    { id: 6, name: 'MedAssist Robotics', tagline: 'Surgical Assistance', domain: 'Medical Devices', funding: 'Seed' },
]

const domains = ['All', 'Medical Devices', 'AI/ML', 'Wearables', 'Telemedicine', 'Diagnostics']

function StartupsPage() {
    const [selectedDomain, setSelectedDomain] = useState('All')
    const filteredStartups = selectedDomain === 'All' ? startups : startups.filter(s => s.domain === selectedDomain)

    return (
        <>
            <section className="hero">
                <div className="container">
                    <div className="hero-content">
                        <span className="badge badge-success section-badge">Portfolio</span>
                        <h1 className="hero-title">Our <span>Startup Portfolio</span></h1>
                        <p className="hero-description">Meet the innovative healthcare startups transforming medical technology.</p>
                        <div className="hero-stats" style={{ marginTop: 'var(--space-8)' }}>
                            <div className="hero-stat"><div className="hero-stat-number">45+</div><div className="hero-stat-label">Startups</div></div>
                            <div className="hero-stat"><div className="hero-stat-number">$2M+</div><div className="hero-stat-label">Funding Raised</div></div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="section section-alt">
                <div className="container">
                    <div style={{ background: 'linear-gradient(135deg, var(--color-primary) 0%, var(--color-primary-dark) 100%)', borderRadius: 'var(--radius-2xl)', padding: 'var(--space-10)' }}>
                        <span className="badge" style={{ background: 'rgba(255,255,255,0.2)', color: 'white', marginBottom: 'var(--space-4)', display: 'inline-block' }}>⭐ Featured</span>
                        <h2 style={{ color: 'white', marginBottom: 'var(--space-2)' }}>Sophrosyne Technologies</h2>
                        <p style={{ color: 'rgba(255,255,255,0.9)', marginBottom: 'var(--space-4)' }}>Raised $2M for developing indigenous medical-grade chipsets.</p>
                        <span className="badge" style={{ background: 'var(--color-cta)', color: 'white' }}>$2M Seed Funding</span>
                    </div>
                </div>
            </section>

            <section className="section">
                <div className="container">
                    <div className="section-header">
                        <h2 className="section-title">Portfolio Companies</h2>
                    </div>
                    <div style={{ display: 'flex', gap: 'var(--space-2)', marginBottom: 'var(--space-8)', flexWrap: 'wrap' }}>
                        {domains.map(d => (
                            <button key={d} onClick={() => setSelectedDomain(d)} className={`btn btn-sm ${selectedDomain === d ? 'btn-primary' : 'btn-secondary'}`}>{d}</button>
                        ))}
                    </div>
                    <div className="startup-grid">
                        {filteredStartups.map(s => (
                            <div key={s.id} className="card startup-card">
                                <div className="icon-box-lg icon-box-gradient" style={{ marginBottom: 'var(--space-4)', fontSize: 'var(--text-2xl)', fontWeight: 800, color: 'white' }}>{s.name.charAt(0)}</div>
                                <h4 className="startup-name">{s.name}</h4>
                                <div className="startup-tagline">{s.tagline}</div>
                                <div className="startup-tags"><span className="badge badge-primary">{s.domain}</span><span className="badge badge-success">{s.funding}</span></div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="cta-section">
                <div className="container">
                    <h2 className="cta-title">Be Our Next Success Story</h2>
                    <Link to="/apply" className="btn btn-white btn-lg">Apply Now <ArrowRight size={20} /></Link>
                </div>
            </section>
        </>
    )
}

export default StartupsPage
