import { NavLink } from 'react-router-dom';

import '@/styles/AdminSidebar.css';

export default function AdminSidebar(){
    return(
        <>
            <div className='adm-sidebar'>
                <div className='adm-sidebar-top'>
                    <h2 className='logo'>SmartDoc</h2>
                    <p>Administrator Portal</p>
                </div>
                <nav className='adm-sidebar-nav'>
                    <NavLink to="/admdashboard">Dashboard</NavLink>
                    <NavLink to="/admappointments">My Appointments</NavLink>
                    <NavLink to="/admschedule">My Schedule</NavLink>
                    <NavLink to="/admmanagedoc">Manage Doctors</NavLink>
                    <NavLink to="/admprofile">Profile</NavLink>
                </nav>
                <div className="adm-sidebar-bottom">
                    <NavLink className='logout' to="/logout">Sign Out</NavLink>
                </div>
            </div>
        </>
    );
}
