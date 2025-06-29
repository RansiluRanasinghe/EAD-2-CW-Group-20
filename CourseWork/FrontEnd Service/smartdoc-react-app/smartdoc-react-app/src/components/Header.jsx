import { Link } from 'react-router-dom';

import '@/styles/Header.css';

function Header(){
   
    return(
        <header className="header">
            <h1 className="logo">SmartDoc</h1>
            <nav className="nav">
                <Link to="/home">Home</Link>
                <Link to="/services">Services</Link>
                <Link to="/doctors">Doctors</Link>
                <Link to="/about">About</Link>
                <Link to="/contacts">Contacts</Link>
                
                <Link to="/login" className="signin-btn">Sign In</Link>
            </nav>
        </header>
    )
}
export default Header