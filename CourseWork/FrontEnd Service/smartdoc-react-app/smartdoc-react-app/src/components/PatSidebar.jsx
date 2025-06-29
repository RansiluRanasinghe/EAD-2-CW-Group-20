import { NavLink } from 'react-router-dom';
import '@/styles/PatSidebar.css';

export default function Sidebar(){
    return(
        <>
            <div className='sidebar'>
                <div className='sidebar-top'>
                    <h2 className='logo'>SmartDoc</h2>
                    <p>Patient Portal</p>
                </div>
                <nav className='sidebar-nav'>
                    <NavLink to="/patdashboard">Dashboard</NavLink>
                    <NavLink to="/patbookappointment">Book Appointment</NavLink>
                    <NavLink to="/patappointments">My Appointments</NavLink>
                    <NavLink to="/patprofile">Profile</NavLink>
                </nav>
                <div className="sidebar-bottom">
                    <NavLink className='logout' to="/logout">Sign Out</NavLink>
                </div>
            </div>
        </>
    );
}
