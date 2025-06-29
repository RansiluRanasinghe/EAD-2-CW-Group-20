import { NavLink } from 'react-router-dom';
import '@/styles/DocSidebar.css';

export default function Sidebar(){
    return(
        <>
            <div className='sidebar'>
                <div className='sidebar-top'>
                    <h2 className='logo'>SmartDoc</h2>
                    <p>Doctor Portal</p>
                </div>
                <nav className='sidebar-nav'>
                    <NavLink to="/docdashboard">Dashboard</NavLink>
                    <NavLink to="/docappointments">My Appointments</NavLink>
                    <NavLink to="/docschedule">My Schedule</NavLink>
                    <NavLink to="/docprofile">Profile</NavLink>
                </nav>
                <div className="sidebar-bottom">
                    <NavLink className='logout' to="/logout">Sign Out</NavLink>
                </div>
            </div>
        </>
    );
}
