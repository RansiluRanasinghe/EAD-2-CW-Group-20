import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

import Header from '@/components/Header';
import Home from '@/pages/landing/sections/Home';
import Stats from '@/pages/landing/sections/Stats';
import Services from '@/pages/landing/sections/Services';
import About from '@/pages/landing/sections/About';
import Contact from '@/pages/landing/sections/Contact';
import Footer from '@/components/Footer';
import Doctors from '@/pages/landing/sections/Doctors';

import '@/styles/LandingPage.css';

function LandingPage() {
    const location = useLocation();

    useEffect(() => {
        const sectionId = location.pathname.slice(1) || 'home';
        const section = document.getElementById(sectionId);
        if (section) {
            setTimeout(() => {
                section.scrollIntoView({ behavior: 'smooth' });
            }, 100);
        }
    }, [location.pathname]);

    return (
        <>
            <Header />
            <Home />
            <Stats />
            <Services />
            <Doctors />
            <About />
            <Contact />
            <Footer />
        </>
    );
}
export default LandingPage;