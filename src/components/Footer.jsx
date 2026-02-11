import { Link } from 'react-router-dom'
import { MapPin, Phone, Mail, Building2, ExternalLink, Facebook, Twitter, Linkedin, Youtube } from 'lucide-react'

const quickLinks = [
    { path: '/about', label: 'About CMI' },
    { path: '/services', label: 'Our Services' },
    { path: '/startups', label: 'Portfolio Startups' },
    { path: '/apply', label: 'Apply for Incubation' },
]

const resourceLinks = [
    { path: '/about#partners', label: 'Our Partners' },
    { path: '/services#facilities', label: 'Facilities' },
    { path: '/about#team', label: 'Leadership Team' },
    { href: 'https://gims.ac.in', label: 'GIMS Hospital', external: true },
]

function Footer() {
    const currentYear = new Date().getFullYear()

    return (
        <footer className="footer" role="contentinfo">
            <div className="container">
                <div className="footer-grid">
                    {/* Brand Column */}
                    <div className="footer-brand">
                        <div className="footer-logo">
                            <Building2 size={36} color="white" />
                            <div>
                                <span style={{ fontWeight: 700, fontSize: '1.25rem', color: 'white', fontFamily: "'Source Serif 4', Georgia, serif" }}>GIMS CMI</span>
                                <span style={{ display: 'block', fontSize: '0.7rem', color: 'rgba(255,255,255,0.7)' }}>
                                    Centre for Medical Innovation
                                </span>
                            </div>
                        </div>
                        <p className="footer-description">
                            Where Innovation Meets Healthcare. India's first public hospital-based medical
                            incubator fostering healthcare innovation at GIMS, Greater Noida.
                        </p>
                        <div className="footer-govt-badges">
                            <div style={{
                                padding: '8px 16px',
                                background: 'rgba(255,255,255,0.1)',
                                borderRadius: '8px',
                                fontSize: '0.75rem',
                                color: 'rgba(255,255,255,0.8)'
                            }}>
                                <div style={{ fontWeight: 600, marginBottom: '2px' }}>A Government Initiative</div>
                                <div>Dept. of Medical Education, UP</div>
                            </div>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div className="footer-column">
                        <h4 className="footer-column-title">Quick Links</h4>
                        <ul className="footer-links">
                            {quickLinks.map((link) => (
                                <li key={link.path}>
                                    <Link to={link.path} className="footer-link">
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Resources */}
                    <div className="footer-column">
                        <h4 className="footer-column-title">Resources</h4>
                        <ul className="footer-links">
                            {resourceLinks.map((link) => (
                                <li key={link.path || link.href}>
                                    {link.external ? (
                                        <a
                                            href={link.href}
                                            className="footer-link"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            style={{ display: 'flex', alignItems: 'center', gap: '4px' }}
                                        >
                                            {link.label}
                                            <ExternalLink size={12} />
                                        </a>
                                    ) : (
                                        <Link to={link.path} className="footer-link">
                                            {link.label}
                                        </Link>
                                    )}
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact */}
                    <div className="footer-column">
                        <h4 className="footer-column-title">Contact Us</h4>
                        <div className="footer-contact-item">
                            <MapPin size={16} />
                            <span>
                                GIMS Hospital Campus,<br />
                                Greater Noida, Uttar Pradesh 201310
                            </span>
                        </div>
                        <div className="footer-contact-item">
                            <Mail size={16} />
                            <a href="mailto:gimsincubator@gmail.com" style={{ color: 'inherit' }}>
                                gimsincubator@gmail.com
                            </a>
                        </div>
                        <div className="footer-contact-item">
                            <Phone size={16} />
                            <span>+91-XXX-XXX-XXXX</span>
                        </div>
                    </div>
                </div>

                {/* Footer Bottom */}
                <div className="footer-bottom">
                    <p>© {currentYear} CMI GIMS Bio Incubation. All rights reserved.</p>
                    <div className="footer-social">
                        <a
                            href="#"
                            className="footer-social-link"
                            aria-label="Facebook"
                        >
                            <Facebook size={18} />
                        </a>
                        <a
                            href="#"
                            className="footer-social-link"
                            aria-label="Twitter"
                        >
                            <Twitter size={18} />
                        </a>
                        <a
                            href="#"
                            className="footer-social-link"
                            aria-label="LinkedIn"
                        >
                            <Linkedin size={18} />
                        </a>
                        <a
                            href="#"
                            className="footer-social-link"
                            aria-label="YouTube"
                        >
                            <Youtube size={18} />
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
