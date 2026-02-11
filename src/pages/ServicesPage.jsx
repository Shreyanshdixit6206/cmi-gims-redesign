import { Link } from 'react-router-dom'
import {
    ArrowRight,
    FlaskConical,
    Users,
    FileCheck,
    Lightbulb,
    Building,
    GraduationCap,
    Shield,
    Award,
    Clock,
    Network,
    Microscope,
    ChevronRight,
    CheckCircle
} from 'lucide-react'

const services = [
    {
        id: 'clinical',
        icon: FlaskConical,
        title: 'Clinical Trials & Validation',
        description: 'Access to a 630-bed multi-specialty hospital for conducting clinical trials, pilot studies, and real-world validation of healthcare innovations.',
        features: [
            'IRB/Ethics committee support',
            'Patient cohort access',
            'Clinical study design assistance',
            'Data collection and analysis',
            'Regulatory documentation'
        ]
    },
    {
        id: 'mentorship',
        icon: Users,
        title: 'Expert Mentorship Program',
        description: 'Structured mentorship from industry veterans, successful entrepreneurs, clinicians, and domain experts across various healthcare specializations.',
        features: [
            'One-on-one mentoring sessions',
            'Domain-specific guidance',
            'Business strategy support',
            'Clinical advisory board access',
            'Peer networking opportunities'
        ]
    },
    {
        id: 'startup-clinic',
        icon: Lightbulb,
        title: 'Startup Clinic',
        description: 'Our signature one-stop solution for innovators, providing comprehensive support for development, testing, validation, and verification of healthcare innovations.',
        features: [
            'Regular expert consultation days',
            'Multi-disciplinary panel reviews',
            'Prototype feedback sessions',
            'Market validation support',
            'Investment readiness assessment'
        ]
    },
    {
        id: 'regulatory',
        icon: FileCheck,
        title: 'Regulatory Support',
        description: 'Navigate complex regulatory pathways with expert assistance for medical device certifications, CDSCO approvals, and international compliance.',
        features: [
            'CDSCO registration guidance',
            'CE/FDA pathway planning',
            'Quality management systems',
            'ISO certification support',
            'Documentation preparation'
        ]
    },
    {
        id: 'ip',
        icon: Shield,
        title: 'IP & Patent Filing',
        description: 'Comprehensive intellectual property support including patent search, application filing, prosecution, and IP strategy development.',
        features: [
            'Prior art search',
            'Patent drafting and filing',
            'Trademark registration',
            'IP portfolio management',
            'Licensing strategy'
        ]
    },
    {
        id: 'funding',
        icon: Award,
        title: 'Funding Access',
        description: 'Connect with grant funding agencies, angel investors, venture capitalists, and strategic partners for your fundraising journey.',
        features: [
            'BIRAC grant applications',
            'Government scheme navigation',
            'Investor pitch preparation',
            'Due diligence support',
            'Term sheet negotiations'
        ]
    },
]

const facilities = [
    { icon: Building, title: '15,000+ Sq Ft Workspace', description: 'Modern incubation facilities with dedicated workspaces' },
    { icon: Microscope, title: 'Prototyping Labs', description: 'Equipped labs for medical device development' },
    { icon: Users, title: 'Conference Rooms', description: 'Meeting spaces for team collaboration and pitches' },
    { icon: Network, title: 'High-Speed Connectivity', description: 'Enterprise-grade internet and networking' },
    { icon: Clock, title: '24/7 Access', description: 'Round-the-clock facility access for startups' },
    { icon: GraduationCap, title: 'Training Center', description: 'Workshops and skill development programs' },
]

const process = [
    { step: '01', title: 'Application', description: 'Submit your innovation through our online portal' },
    { step: '02', title: 'Screening', description: 'Initial evaluation by our selection committee' },
    { step: '03', title: 'Pitch Day', description: 'Present to our panel of experts and clinicians' },
    { step: '04', title: 'Selection', description: 'Successful startups onboarded to the incubator' },
    { step: '05', title: 'Incubation', description: '12-24 months of comprehensive support' },
    { step: '06', title: 'Graduation', description: 'Launch-ready product with market validation' },
]

function ServicesPage() {
    return (
        <>
            {/* Hero */}
            <section className="hero">
                <div className="container">
                    <div className="hero-content">
                        <span className="badge badge-primary section-badge">Our Services</span>
                        <h1 className="hero-title">
                            Comprehensive <span>Incubation Support</span>
                        </h1>
                        <p className="hero-description">
                            End-to-end support for healthcare innovators—from ideation and prototyping
                            to clinical validation, regulatory approval, and market entry.
                        </p>
                        <Link to="/apply" className="btn btn-primary btn-lg">
                            Get Started
                            <ArrowRight size={20} />
                        </Link>
                    </div>
                </div>
            </section>

            {/* Services Grid */}
            <section className="section">
                <div className="container">
                    <div className="section-header">
                        <span className="badge badge-primary section-badge">What We Offer</span>
                        <h2 className="section-title">Incubation Services</h2>
                        <p className="section-description">
                            Everything you need to transform your healthcare innovation into a market-ready product
                        </p>
                    </div>

                    <div className="service-list">
                        {services.map((service, index) => (
                            <div
                                key={service.id}
                                id={service.id}
                                className="card service-card-enhanced"
                            >
                                <div>
                                    <div style={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: 'var(--space-4)',
                                        marginBottom: 'var(--space-4)'
                                    }}>
                                        <div className="icon-box-lg icon-box-gradient">
                                            <service.icon size={28} color="white" />
                                        </div>
                                        <h3 style={{ margin: 0 }}>{service.title}</h3>
                                    </div>
                                    <p style={{ fontSize: 'var(--text-lg)', marginBottom: 0 }}>
                                        {service.description}
                                    </p>
                                </div>
                                <div>
                                    <h4 style={{
                                        fontSize: 'var(--text-sm)',
                                        textTransform: 'uppercase',
                                        letterSpacing: '0.1em',
                                        color: 'var(--color-text-muted)',
                                        marginBottom: 'var(--space-4)'
                                    }}>
                                        What's Included
                                    </h4>
                                    <ul style={{ listStyle: 'none' }}>
                                        {service.features.map((feature) => (
                                            <li
                                                key={feature}
                                                style={{
                                                    display: 'flex',
                                                    alignItems: 'center',
                                                    gap: 'var(--space-3)',
                                                    padding: 'var(--space-2) 0',
                                                    color: 'var(--color-text)'
                                                }}
                                            >
                                                <CheckCircle size={18} color="var(--color-cta)" />
                                                {feature}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Facilities */}
            <section className="section section-alt" id="facilities">
                <div className="container">
                    <div className="section-header">
                        <span className="badge badge-primary section-badge">Infrastructure</span>
                        <h2 className="section-title">World-Class Facilities</h2>
                        <p className="section-description">
                            State-of-the-art infrastructure to support your innovation journey
                        </p>
                    </div>

                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                        gap: 'var(--space-6)'
                    }}>
                        {facilities.map((facility) => (
                            <div
                                key={facility.title}
                                className="card facility-card"
                            >
                                <div className="icon-box">
                                    <facility.icon size={24} color="var(--color-primary)" />
                                </div>
                                <div>
                                    <h4 style={{ marginBottom: 'var(--space-1)' }}>{facility.title}</h4>
                                    <p style={{ marginBottom: 0, fontSize: 'var(--text-sm)' }}>{facility.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Process */}
            <section className="section">
                <div className="container">
                    <div className="section-header">
                        <span className="badge badge-primary section-badge">How It Works</span>
                        <h2 className="section-title">Incubation Process</h2>
                        <p className="section-description">
                            Your journey from application to market-ready product
                        </p>
                    </div>

                    <div className="process-grid">
                        {process.map((item, index) => (
                            <div key={item.step} style={{ textAlign: 'center' }}>
                                <div style={{
                                    width: '72px',
                                    height: '72px',
                                    background: index < 3
                                        ? 'linear-gradient(135deg, var(--color-primary) 0%, var(--color-secondary) 100%)'
                                        : 'linear-gradient(135deg, var(--color-cta) 0%, var(--color-cta-dark) 100%)',
                                    borderRadius: 'var(--radius-full)',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    margin: '0 auto var(--space-4)',
                                    fontSize: 'var(--text-xl)',
                                    fontWeight: 800,
                                    color: 'white'
                                }}>
                                    {item.step}
                                </div>
                                <h4 style={{ marginBottom: 'var(--space-2)' }}>{item.title}</h4>
                                <p style={{ fontSize: 'var(--text-sm)', marginBottom: 0 }}>{item.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Hospital Access */}
            <section className="stats-section">
                <div className="container">
                    <div style={{ textAlign: 'center', marginBottom: 'var(--space-10)' }}>
                        <h2 style={{ color: 'white', marginBottom: 'var(--space-4)' }}>Unique Hospital Access</h2>
                        <p style={{ color: 'rgba(255,255,255,0.9)', fontSize: 'var(--text-lg)', maxWidth: '600px', margin: '0 auto' }}>
                            The only incubator with direct access to a 630-bed public hospital
                            for clinical validation and real-world testing
                        </p>
                    </div>
                    <div className="stats-grid">
                        <div className="stat-item">
                            <div className="stat-number">630</div>
                            <div className="stat-label">Hospital Beds</div>
                        </div>
                        <div className="stat-item">
                            <div className="stat-number">25+</div>
                            <div className="stat-label">Specialties</div>
                        </div>
                        <div className="stat-item">
                            <div className="stat-number">1000+</div>
                            <div className="stat-label">Daily OPD Patients</div>
                        </div>
                        <div className="stat-item">
                            <div className="stat-number">24/7</div>
                            <div className="stat-label">Emergency Services</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="section">
                <div className="container">
                    <div style={{
                        background: 'var(--color-background-alt)',
                        borderRadius: 'var(--radius-2xl)',
                        padding: 'var(--space-12)',
                        textAlign: 'center'
                    }}>
                        <h2 style={{ marginBottom: 'var(--space-4)' }}>Ready to Get Started?</h2>
                        <p style={{
                            fontSize: 'var(--text-lg)',
                            maxWidth: '600px',
                            margin: '0 auto var(--space-8)'
                        }}>
                            Apply for our incubation program and get access to all these services
                            and more. We're accepting applications for the next cohort.
                        </p>
                        <Link to="/apply" className="btn btn-primary btn-lg">
                            Apply Now
                            <ArrowRight size={20} />
                        </Link>
                    </div>
                </div>
            </section>
        </>
    )
}

export default ServicesPage
