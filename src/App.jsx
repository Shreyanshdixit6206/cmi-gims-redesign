import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navigation from './components/Navigation'
import Footer from './components/Footer'
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import ServicesPage from './pages/ServicesPage'
import StartupsPage from './pages/StartupsPage'
import ApplyPage from './pages/ApplyPage'
import ContactPage from './pages/ContactPage'
import AppointmentPage from './pages/AppointmentPage'

function App() {
    return (
        <Router>
            <a href="#main-content" className="skip-link">
                Skip to main content
            </a>
            <Navigation />
            <main id="main-content">
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/about" element={<AboutPage />} />
                    <Route path="/services" element={<ServicesPage />} />
                    <Route path="/startups" element={<StartupsPage />} />
                    <Route path="/apply" element={<ApplyPage />} />
                    <Route path="/contact" element={<ContactPage />} />
                    <Route path="/book-appointment" element={<AppointmentPage />} />
                </Routes>
            </main>
            <Footer />
        </Router>
    )
}

export default App
