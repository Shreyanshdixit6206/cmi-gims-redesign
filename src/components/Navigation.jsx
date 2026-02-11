import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X, Building2 } from 'lucide-react'

const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About Us' },
    { path: '/services', label: 'Services' },
    { path: '/startups', label: 'Our Startups' },
    { path: '/apply', label: 'Apply' },
    { path: '/contact', label: 'Contact' },
]

function Navigation() {
    const [isOpen, setIsOpen] = useState(false)
    const location = useLocation()

    const toggleMenu = () => setIsOpen(!isOpen)
    const closeMenu = () => setIsOpen(false)

    return (
        <nav className="nav" role="navigation" aria-label="Main navigation">
            <div className="nav-container">
                {/* Logo */}
                <Link to="/" className="nav-logo" onClick={closeMenu}>
                    <img src="/images/logo-cmi.svg" alt="GIMS CMI Logo" className="logo-image" />
                </Link>

                {/* Desktop Navigation */}
                <ul className={`nav-links ${isOpen ? 'open' : ''}`}>
                    {navLinks.map((link) => (
                        <li key={link.path}>
                            <Link
                                to={link.path}
                                className={`nav-link ${location.pathname === link.path ? 'active' : ''}`}
                                onClick={closeMenu}
                            >
                                {link.label}
                            </Link>
                        </li>
                    ))}
                    <li className="nav-cta" style={{ display: 'flex', gap: '0.5rem' }}>
                        <Link to="/book-appointment" className="btn btn-secondary btn-sm" onClick={closeMenu}>
                            Book Appointment
                        </Link>
                        <Link to="/apply" className="btn btn-primary btn-sm" onClick={closeMenu}>
                            Apply Now
                        </Link>
                    </li>
                </ul>

                {/* Mobile Menu Toggle */}
                <button
                    className="nav-mobile-toggle"
                    onClick={toggleMenu}
                    aria-expanded={isOpen}
                    aria-controls="nav-links"
                    aria-label={isOpen ? 'Close menu' : 'Open menu'}
                >
                    {isOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>
        </nav>
    )
}

export default Navigation
