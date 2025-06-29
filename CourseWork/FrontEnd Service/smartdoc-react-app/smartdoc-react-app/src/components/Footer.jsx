import { Link } from 'react-router-dom';

import '@/styles/Footer.css';

function Footer(){
    return(
        <footer className='footer'>
            <div className='footer-content'>
                <h3 className="footer-logo">SmartDoc</h3>
                <nav className="footer-links">
                    <Link to="/home">Home</Link>
                    <Link to="/services">Services</Link>
                    <Link to="/doctors">Doctors</Link>
                    <Link to="/about">About</Link>
                    <Link to="/contacts">Contacts</Link>
                </nav>
                <p className="footer-copy">© {new Date().getFullYear()} SmartDoc. All rights reserved.</p>
            </div>
        </footer>
    );
}
export default Footer