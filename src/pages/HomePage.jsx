import { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import {
    ArrowRight,
    ChevronLeft,
    ChevronRight,
    Stethoscope,
    Users,
    FlaskConical,
    FileCheck,
    Lightbulb,
    Award,
    Quote
} from 'lucide-react'

// Hero slideshow - GIMS CMI actual images
const heroSlides = [
    {
        id: 1,
        image: '/images/slideshow/image1-DAeQOlRP.png',
        alt: 'Call for Healthcare Innovators - GIMS CMI'
    },
    {
        id: 2,
        image: '/images/slideshow/image13-K4xipu1r.jpg',
        alt: 'GIMS CMI Facilities and Innovation Center'
    },
    {
        id: 3,
        image: '/images/slideshow/image15-DxLzq0Ea.jpg',
        alt: 'Clinical Trials and Medical Research'
    },
    {
        id: 4,
        image: '/images/slideshow/image24-DmeCbXoC.jpg',
        alt: 'Healthcare Innovation and Collaboration'
    },
    {
        id: 5,
        image: '/images/slideshow/image27-BRugBtbT.jpg',
        alt: 'CMI-GIMS Startup Ecosystem'
    }
]

// Services offered
const services = [
    {
        icon: Stethoscope,
        title: 'Startup Clinics',
        description: 'Regular sessions connecting innovators with doctors to identify real clinical needs and validate solutions.'
    },
    {
        icon: Users,
        title: 'Clinical Mentorship',
        description: 'One-on-one guidance from experienced clinicians, researchers, and successful healthcare entrepreneurs.'
    },
    {
        icon: FlaskConical,
        title: 'Validation & Trials',
        description: 'Direct access to a 630-bed NABH hospital for clinical testing, proof-of-concept, and product validation.'
    },
    {
        icon: FileCheck,
        title: 'Regulatory Support',
        description: 'Expert assistance navigating CDSCO, FDA, CE marking, and other regulatory pathways for medical devices.'
    },
    {
        icon: Lightbulb,
        title: 'IPR & Patent Filing',
        description: 'Comprehensive intellectual property support including patent search, filing, and prosecution assistance.'
    },
    {
        icon: Award,
        title: 'Funding Access',
        description: 'Connections to angel investors, VCs, government grants, and schemes like BIRAC and Startup India.'
    }
]

// Journey steps
const journeySteps = [
    { step: 1, title: 'Apply', description: 'Submit your healthcare innovation idea' },
    { step: 2, title: 'Evaluate', description: 'Expert review of clinical viability' },
    { step: 3, title: 'Incubate', description: 'Access mentorship and facilities' },
    { step: 4, title: 'Validate', description: 'Clinical testing and refinement' },
    { step: 5, title: 'Scale', description: 'Launch with investor backing' }
]

// Impact stats with targets for animation
const impactStats = [
    { target: 45, suffix: '+', label: 'Startups Incubated' },
    { target: 630, suffix: '', label: 'Bed Hospital Access' },
    { target: 15, suffix: 'K', label: 'Sq Ft Workspace' },
    { target: 50, suffix: 'Cr+', label: 'Grant Support', prefix: '₹' }
]

// Partners
const partners = [
    'Stanford Biodesign',
    'BIRAC',
    'IIT Kanpur',
    'IIT Mandi',
    'Startup India',
    'AIM – NITI Aayog'
]

// Success stories
const successStories = [
    {
        name: 'MATRI',
        founder: 'Dr. Aisha Sharma',
        description: 'Portable ultrasound device for rural maternal care. Featured on Shark Tank India with ₹1.5Cr investment.',
        image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400&q=80'
    },
    {
        name: 'MediScan AI',
        founder: 'Rohit Verma',
        description: 'AI-powered diagnostic tool for early detection of diabetic retinopathy. Now deployed in 50+ clinics.',
        image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=400&q=80'
    },
    {
        name: 'CardioPatch',
        founder: 'Dr. Priya Menon',
        description: 'Wearable ECG monitor for continuous cardiac health tracking. Received BIRAC funding of ₹80 Lakhs.',
        image: 'https://images.unsplash.com/photo-1551836022-deb4988cc6c0?w=400&q=80'
    }
]

// Animated Counter Hook
function useCountUp(target, duration = 2000, startOnView = true) {
    const [count, setCount] = useState(0)
    const [hasStarted, setHasStarted] = useState(false)
    const ref = useRef(null)

    useEffect(() => {
        if (!startOnView) {
            animateCount()
            return
        }

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting && !hasStarted) {
                    setHasStarted(true)
                    animateCount()
                }
            },
            { threshold: 0.5 }
        )

        if (ref.current) observer.observe(ref.current)
        return () => observer.disconnect()
    }, [hasStarted])

    const animateCount = () => {
        const startTime = Date.now()
        const animate = () => {
            const elapsed = Date.now() - startTime
            const progress = Math.min(elapsed / duration, 1)
            // Ease out cubic
            const eased = 1 - Math.pow(1 - progress, 3)
            setCount(Math.floor(eased * target))
            if (progress < 1) requestAnimationFrame(animate)
        }
        requestAnimationFrame(animate)
    }

    return { count, ref }
}

// Animated Stat Component
function AnimatedStat({ target, suffix = '', prefix = '', label }) {
    const { count, ref } = useCountUp(target, 2000)
    return (
        <div className="stat-item" ref={ref}>
            <span className="stat-number">{prefix}{count}{suffix}</span>
            <span className="stat-label">{label}</span>
        </div>
    )
}

function HomePage() {
    const [currentSlide, setCurrentSlide] = useState(0)

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % heroSlides.length)
        }, 5000)
        return () => clearInterval(timer)
    }, [])

    const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % heroSlides.length)
    const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length)

    return (
        <>
            {/* ===== HERO SECTION ===== */}
            <section className="hero-split">
                <div className="hero-split-grid">
                    {/* Full-Width Slideshow Background */}
                    <div className="hero-split-visual">
                        <div className="hero-slideshow">
                            {heroSlides.map((slide, index) => (
                                <div
                                    key={slide.id}
                                    className={`hero-slide ${index === currentSlide ? 'active' : ''}`}
                                >
                                    <img src={slide.image} alt={slide.alt} />
                                </div>
                            ))}
                        </div>

                        {/* Slideshow Arrows */}
                        <button
                            onClick={prevSlide}
                            className="slideshow-arrow prev"
                            aria-label="Previous slide"
                        >
                            <ChevronLeft size={32} />
                        </button>
                        <button
                            onClick={nextSlide}
                            className="slideshow-arrow next"
                            aria-label="Next slide"
                        >
                            <ChevronRight size={32} />
                        </button>
                    </div>

                    {/* Content Overlay */}
                    <div className="hero-split-content">
                        <p className="hero-meta">
                            Government of Uttar Pradesh Initiative
                        </p>
                        <h1 className="hero-headline">
                            India's First Public Hospital-Based Medical Incubator
                        </h1>
                        <p className="hero-subtext">
                            GIMS Centre for Medical Innovation bridges clinical excellence with entrepreneurial
                            vision. We support healthcare startups with direct hospital access, expert mentorship,
                            and the infrastructure to transform ideas into life-saving solutions.
                        </p>
                        <div className="hero-cta-group">
                            <Link to="/apply" className="btn btn-primary btn-lg">
                                Apply for Incubation
                                <ArrowRight size={18} />
                            </Link>
                            <Link to="/about" className="btn btn-white btn-lg">
                                Learn More
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* ===== ABOUT SECTION ===== */}
            <section className="section" id="about">
                <div className="container">
                    <div className="section-header">
                        <h2 className="section-title">About the Incubator</h2>
                        <p className="section-subtitle">
                            Where clinical needs meet innovative solutions
                        </p>
                    </div>

                    <div className="about-grid">
                        <div className="about-content">
                            <p className="text-lg">
                                The <strong>GIMS Centre for Medical Innovation (CMI)</strong> is a pioneering initiative
                                by the Government of Uttar Pradesh, established to bridge the gap between clinical
                                needs and innovative healthcare solutions.
                            </p>
                            <p>
                                Located within the 630-bed Government Institute of Medical Sciences, Greater Noida,
                                we provide startups with unprecedented access to clinical expertise, patient populations,
                                and world-class infrastructure for rapid validation and scale.
                            </p>
                            <p>
                                As a Section 8 company under the Department of Medical Education, CMI operates with
                                the mission of fostering indigenous healthcare innovation for India and the world.
                            </p>
                        </div>
                        <div className="about-highlights">
                            <div className="about-card">
                                <h4>Our Mission</h4>
                                <p>To empower healthcare innovators to translate ideas into validated solutions that revolutionize patient care.</p>
                            </div>
                            <div className="about-card">
                                <h4>Vision 2030</h4>
                                <p>To establish India's most trusted medical innovation ecosystem, propelling homegrown solutions to global impact.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ===== WHAT WE OFFER ===== */}
            <section className="section section-alt" id="services">
                <div className="container">
                    <div className="section-header">
                        <h2 className="section-title">What We Offer</h2>
                        <p className="section-subtitle">
                            Comprehensive support from idea to market
                        </p>
                    </div>

                    <div className="services-grid">
                        {services.map((service) => (
                            <article key={service.title} className="service-card">
                                <div className="service-icon">
                                    <service.icon size={28} />
                                </div>
                                <h3>{service.title}</h3>
                                <p>{service.description}</p>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            {/* ===== STARTUP JOURNEY ===== */}
            <section className="section" id="journey">
                <div className="container">
                    <div className="section-header">
                        <h2 className="section-title">Your Startup Journey</h2>
                        <p className="section-subtitle">
                            From idea to impact, we guide you at every step
                        </p>
                    </div>

                    <div className="journey-timeline">
                        {journeySteps.map((item) => (
                            <div key={item.step} className="journey-step">
                                <div className="journey-number">{item.step}</div>
                                <div className="journey-content">
                                    <h4>{item.title}</h4>
                                    <p>{item.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ===== IMPACT STATS ===== */}
            <section className="section-stats" id="impact">
                <div className="container">
                    <div className="section-header section-header-light">
                        <h2 className="section-title" style={{ color: 'white' }}>Our Impact</h2>
                    </div>

                    <div className="stats-grid">
                        {impactStats.map((stat) => (
                            <AnimatedStat
                                key={stat.label}
                                target={stat.target}
                                suffix={stat.suffix}
                                prefix={stat.prefix}
                                label={stat.label}
                            />
                        ))}
                    </div>
                </div>
            </section>

            {/* ===== SUCCESS STORIES ===== */}
            <section className="section" id="stories">
                <div className="container">
                    <div className="section-header">
                        <h2 className="section-title">Success Stories</h2>
                        <p className="section-subtitle">
                            Meet the innovators transforming healthcare
                        </p>
                    </div>

                    <div className="stories-grid">
                        {successStories.map((story) => (
                            <article key={story.name} className="story-card">
                                <div className="story-image">
                                    <img src={story.image} alt={story.founder} />
                                </div>
                                <div className="story-content">
                                    <Quote size={24} className="story-quote-icon" />
                                    <h3>{story.name}</h3>
                                    <p className="story-founder">{story.founder}</p>
                                    <p className="story-description">{story.description}</p>
                                </div>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            {/* ===== PARTNERS ===== */}
            <section className="section section-alt" id="partners">
                <div className="container">
                    <div className="section-header">
                        <h2 className="section-title">Partners & Ecosystem</h2>
                        <p className="section-subtitle">
                            Collaborating with leading institutions
                        </p>
                    </div>

                    <div className="partners-list">
                        {partners.map((partner) => (
                            <div key={partner} className="partner-item">
                                {partner}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ===== CTA ===== */}
            <section className="section-cta" id="apply-cta">
                <div className="container">
                    <div className="cta-content">
                        <h2>Ready to Transform Healthcare?</h2>
                        <p>
                            Join India's first hospital-based incubator and turn your medical innovation
                            into a life-saving reality.
                        </p>
                        <div className="cta-actions">
                            <Link to="/apply" className="btn btn-white btn-lg">
                                Apply for Incubation
                                <ArrowRight size={18} />
                            </Link>
                            <Link to="/contact" className="btn btn-outline-light btn-lg">
                                Contact Us
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default HomePage
