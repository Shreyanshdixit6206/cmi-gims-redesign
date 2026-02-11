import { Link } from 'react-router-dom'
import {
    ArrowRight,
    Building2,
    Users,
    Target,
    Eye,
    Heart,
    CheckCircle,
    Award,
    GraduationCap,
    ExternalLink,
    MapPin,
    Calendar
} from 'lucide-react'

// Leadership Team Data
const leadershipTeam = [
    {
        name: 'Dr. (Brig) Rakesh Gupta',
        role: 'Director',
        organization: 'GIMS Greater Noida',
        image: null
    },
    {
        name: 'Dr. Mohit Kumar',
        role: 'Faculty Incharge',
        organization: 'GIMS Incubator',
        image: null
    },
    {
        name: 'Dr. Rahul Singh',
        role: 'Head, Centre for Medical Innovation',
        organization: 'GIMS',
        image: null
    },
]

// Facilities list
const facilities = [
    'Clinical access to a 630-bed NABH-accredited hospital',
    '15,000 sq. ft. incubator with prototyping labs and clinical trial units',
    'Startup Clinics for direct doctor-entrepreneur collaboration',
    'Strategic partnerships with Stanford Biodesign, BIRAC, IITs, and hospitals',
    'Zero-cost incubation support for early-stage healthcare ventures',
]

// Timeline data
const timeline = [
    { year: 'June 2024', event: 'Official Inauguration of CMI GIMS' },
    { year: '2024', event: 'First cohort of startups incubated' },
    { year: 'Present', event: '45+ startups in portfolio' },
]

function AboutPage() {
    return (
        <>
            {/* Hero Section */}
            <section className="hero">
                <div className="container">
                    <div className="hero-content">
                        <span className="badge badge-govt" style={{ marginBottom: 'var(--space-4)' }}>
                            About Us
                        </span>
                        <h1 className="hero-title">
                            About GIMS <span>Centre for Medical Innovation</span>
                        </h1>
                        <p className="hero-description">
                            Transforming Healthcare Through Research, Innovation, and Purpose-Driven Entrepreneurship
                        </p>
                    </div>
                </div>
            </section>

            {/* Who We Are Section */}
            <section className="section">
                <div className="container">
                    <div className="section-header">
                        <span className="badge badge-primary section-badge">Who We Are</span>
                        <h2 className="section-title">India's First Public Hospital-Based Medical Incubator</h2>
                    </div>

                    <div style={{ maxWidth: '900px', margin: '0 auto' }}>
                        <p style={{ fontSize: 'var(--text-lg)', textAlign: 'center', marginBottom: 'var(--space-6)' }}>
                            The <strong>GIMS Centre for Medical Innovation (CMI)</strong> is where clinical excellence
                            meets visionary entrepreneurship. Located within the <strong>Government Institute of Medical Sciences,
                                Greater Noida</strong>, CMI is India's first public hospital-based medical incubator.
                        </p>
                        <p style={{ textAlign: 'center', marginBottom: 'var(--space-6)', color: 'var(--color-text-muted)' }}>
                            We exist to bridge the critical gap between real-world clinical needs and transformative
                            healthcare solutions. By embedding startups directly within a functioning 630-bed hospital
                            ecosystem, we enable innovators to validate ideas, access mentorship, conduct clinical trials,
                            and create technologies that can truly change lives.
                        </p>
                    </div>
                </div>
            </section>

            {/* Why CMI Matters */}
            <section className="section section-alt">
                <div className="container">
                    <div className="section-header">
                        <span className="badge badge-primary section-badge">Why CMI Matters</span>
                        <h2 className="section-title">The Collaborative Spirit of Innovation</h2>
                    </div>

                    <div style={{ maxWidth: '900px', margin: '0 auto' }}>
                        <p style={{ fontSize: 'var(--text-lg)', textAlign: 'center', marginBottom: 'var(--space-6)' }}>
                            Great healthcare innovation cannot happen in isolation. It demands collaboration between
                            doctors, researchers, engineers, and entrepreneurs — all grounded in real clinical challenges.
                        </p>
                        <p style={{ textAlign: 'center', marginBottom: 'var(--space-8)', color: 'var(--color-text-muted)' }}>
                            CMI represents this collaborative spirit. We nurture indigenous healthcare innovation for India
                            and the world by providing the rarest opportunity: <strong>immediate clinical access combined
                                with strategic incubation support</strong>.
                        </p>

                        <div style={{
                            background: 'var(--color-surface)',
                            padding: 'var(--space-8)',
                            borderRadius: 'var(--radius-xl)',
                            textAlign: 'center',
                            border: '1px solid var(--color-border)'
                        }}>
                            <p style={{ fontSize: 'var(--text-lg)', fontStyle: 'italic', margin: 0 }}>
                                "Our mission is bigger than launching startups; we aim to reshape healthcare itself —
                                making it smarter, faster, more affordable, and universally accessible."
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Mission & Vision Cards */}
            <section className="section">
                <div className="container">
                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
                        gap: 'var(--space-6)'
                    }}>
                        <div className="card" style={{ padding: 'var(--space-8)', borderLeft: '4px solid var(--color-primary)' }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-3)', marginBottom: 'var(--space-4)' }}>
                                <Target size={24} color="var(--color-primary)" />
                                <h3 style={{ margin: 0 }}>Our Mission</h3>
                            </div>
                            <p style={{ margin: 0, color: 'var(--color-text-muted)', lineHeight: 1.7 }}>
                                To empower healthcare innovators to translate ideas into validated solutions
                                that revolutionize patient care.
                            </p>
                        </div>

                        <div className="card" style={{ padding: 'var(--space-8)', borderLeft: '4px solid var(--color-cta)' }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-3)', marginBottom: 'var(--space-4)' }}>
                                <Eye size={24} color="var(--color-cta)" />
                                <h3 style={{ margin: 0 }}>Our Vision 2030</h3>
                            </div>
                            <p style={{ margin: 0, color: 'var(--color-text-muted)', lineHeight: 1.7 }}>
                                To establish India's most trusted medical innovation ecosystem, propelling
                                homegrown solutions to global impact.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Leadership Team */}
            <section className="section section-alt">
                <div className="container">
                    <div className="section-header">
                        <span className="badge badge-primary section-badge">Leadership</span>
                        <h2 className="section-title">Our Leadership Team</h2>
                        <p className="section-description">
                            Guided by experienced professionals committed to healthcare innovation
                        </p>
                    </div>

                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                        gap: 'var(--space-6)',
                        maxWidth: '1000px',
                        margin: '0 auto'
                    }}>
                        {leadershipTeam.map((member) => (
                            <div key={member.name} className="card" style={{ padding: 'var(--space-6)', textAlign: 'center' }}>
                                <div style={{
                                    width: '80px',
                                    height: '80px',
                                    borderRadius: '50%',
                                    background: 'var(--color-background-alt)',
                                    margin: '0 auto var(--space-4)',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center'
                                }}>
                                    <Users size={36} color="var(--color-primary)" />
                                </div>
                                <h4 style={{ marginBottom: 'var(--space-1)' }}>{member.name}</h4>
                                <p style={{
                                    color: 'var(--color-primary)',
                                    fontWeight: 500,
                                    fontSize: 'var(--text-sm)',
                                    marginBottom: 'var(--space-1)'
                                }}>
                                    {member.role}
                                </p>
                                <p style={{
                                    color: 'var(--color-text-muted)',
                                    fontSize: 'var(--text-sm)',
                                    margin: 0
                                }}>
                                    {member.organization}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Facilities and Support */}
            <section className="section">
                <div className="container">
                    <div className="section-header">
                        <span className="badge badge-primary section-badge">Infrastructure</span>
                        <h2 className="section-title">Facilities and Support</h2>
                        <p className="section-description">
                            World-class infrastructure for healthcare innovation
                        </p>
                    </div>

                    <div style={{ maxWidth: '800px', margin: '0 auto' }}>
                        <div className="card" style={{ padding: 'var(--space-8)' }}>
                            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                                {facilities.map((facility, index) => (
                                    <li key={index} style={{
                                        display: 'flex',
                                        alignItems: 'flex-start',
                                        gap: 'var(--space-4)',
                                        padding: 'var(--space-4) 0',
                                        borderBottom: index < facilities.length - 1 ? '1px solid var(--color-border-light)' : 'none'
                                    }}>
                                        <CheckCircle size={22} color="var(--color-cta)" style={{ flexShrink: 0, marginTop: '2px' }} />
                                        <span style={{ fontSize: 'var(--text-base)' }}>{facility}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* Startup Success Stories */}
            <section className="section section-alt">
                <div className="container">
                    <div className="section-header">
                        <span className="badge badge-success section-badge">Success Stories</span>
                        <h2 className="section-title">Startup Success Stories</h2>
                        <p className="section-description">
                            At CMI, success is measured not just in funding rounds but in lives touched and challenges overcome.
                        </p>
                    </div>

                    <div style={{ maxWidth: '800px', margin: '0 auto' }}>
                        <div className="card" style={{
                            padding: 'var(--space-8)',
                            background: 'linear-gradient(135deg, var(--color-primary) 0%, var(--color-primary-dark) 100%)',
                            color: 'white'
                        }}>
                            <h3 style={{ color: 'white', marginBottom: 'var(--space-4)' }}>MATRI - Featured on Shark Tank India</h3>
                            <p style={{ opacity: 0.95, marginBottom: 'var(--space-4)' }}>
                                Startups like <strong>MATRI</strong>, who pioneered wearable menstrual pain relief technology,
                                embody our spirit — transforming an unmet clinical need into an impactful innovation
                                recognized nationally.
                            </p>
                            <p style={{ opacity: 0.85, fontSize: 'var(--text-sm)', margin: 0 }}>
                                Our growing portfolio of ventures is a testament to the fact that with the right ecosystem,
                                Indian innovators can lead the global future of healthcare.
                            </p>
                        </div>
                    </div>

                    <div style={{ textAlign: 'center', marginTop: 'var(--space-8)' }}>
                        <Link to="/startups" className="btn btn-primary">
                            View All Startups
                            <ArrowRight size={18} />
                        </Link>
                    </div>
                </div>
            </section>

            {/* Location & Contact Info */}
            <section className="section">
                <div className="container">
                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                        gap: 'var(--space-6)'
                    }}>
                        <div className="card" style={{ padding: 'var(--space-6)' }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-3)', marginBottom: 'var(--space-4)' }}>
                                <MapPin size={24} color="var(--color-primary)" />
                                <h3 style={{ margin: 0 }}>Location</h3>
                            </div>
                            <p style={{ color: 'var(--color-text-muted)', margin: 0 }}>
                                Government Institute of Medical Sciences (GIMS)<br />
                                Greater Noida, Uttar Pradesh<br />
                                India
                            </p>
                        </div>

                        <div className="card" style={{ padding: 'var(--space-6)' }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-3)', marginBottom: 'var(--space-4)' }}>
                                <Building2 size={24} color="var(--color-primary)" />
                                <h3 style={{ margin: 0 }}>Organization Type</h3>
                            </div>
                            <p style={{ color: 'var(--color-text-muted)', margin: 0 }}>
                                State Government Section 8 Company<br />
                                Under Dept. of Medical Education, UP<br />
                                Inaugurated: June 1, 2024
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="cta-section">
                <div className="container">
                    <h2 className="cta-title">Join Our Innovation Ecosystem</h2>
                    <p className="cta-description">
                        Be part of India's premier healthcare incubator and transform your innovative
                        ideas into life-saving solutions.
                    </p>
                    <Link to="/apply" className="btn btn-white btn-lg">
                        Apply for Incubation
                        <ArrowRight size={20} />
                    </Link>
                </div>
            </section>
        </>
    )
}

export default AboutPage
