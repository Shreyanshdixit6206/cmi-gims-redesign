import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import Footer from './components/Footer';

// Lazy load pages for performance optimization
const HomePage = lazy(() => import('./pages/HomePage'));
const AboutPage = lazy(() => import('./pages/AboutPage'));
const ServicesPage = lazy(() => import('./pages/ServicesPage'));
const StartupsPage = lazy(() => import('./pages/StartupsPage'));
const ApplyPage = lazy(() => import('./pages/ApplyPage'));
const ContactPage = lazy(() => import('./pages/ContactPage'));
const AppointmentPage = lazy(() => import('./pages/AppointmentPage'));

// Loading component
const LoadingSpinner = () => (
    <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
    </div>
);

function App() {
    return (
        <Router>
            <a href="#main-content" className="skip-link">
                Skip to main content
            </a>
            <Navigation />
            <main id="main-content">
                <Suspense fallback={<LoadingSpinner />}>
                    <Routes>
                        <Route path="/" element={<HomePage />} />
                        <Route path="/about" element={<AboutPage />} />
                        <Route path="/services" element={<ServicesPage />} />
                        <Route path="/startups" element={<StartupsPage />} />
                        <Route path="/apply" element={<ApplyPage />} />
                        <Route path="/contact" element={<ContactPage />} />
                        <Route path="/book-appointment" element={<AppointmentPage />} />
                    </Routes>
                </Suspense>
            </main>
            <Footer />
        </Router>
    )
}

export default App
