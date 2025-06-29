import AdminSidebar from "../../components/AdminSidebar";
import AdmSidebar from "../../components/AdminSidebar";
import '@/styles/DocDashboard.css';

export default function DocDashboard() {
    const tdyAppointments = [
        {
            name: 'Sarah Johnson',
            date: 'Today',
            time: '10:00 AM - 10:30 AM'
        },
        {
            name: 'Michael Chen',
            date: 'Today',
            time: '11:15 AM - 11:45 AM'
        },
        {
            name: 'Emily Rodriguez',
            date: 'Today',
            time: '2:30 PM - 3:00 PM'
        }
    ]

    return (
        <div className="doc-dash-wrapper">
            <AdminSidebar />
            <div className="doc-dash-main">
                <div className="doc-dash-header">
                    <h3>Welcome, Dr. Smith</h3>
                    <p>Here's your appointments summary for today</p>
                </div>

                <div className="doc-dash-summary-cards">
                    <div className="doc-dash-sum-card">
                        <p>Today's Appointments</p>
                        <h2>5</h2>
                    </div>
                    <div className="doc-dash-sum-card">
                        <p>Pending Appointments</p>
                        <h2>12</h2>
                    </div>
                    <div className="doc-dash-sum-card">
                        <p>Completed This Week</p>
                        <h2>23</h2>
                    </div>
                </div>

                <div className="doc-today-appointments">
                    <h3>Today's Appointments</h3>
                    <div>
                        {tdyAppointments.map((appointment, index) => (
                            <div className='doc-appointment-card' key={index}>
                                <h5>{appointment.name}</h5>
                                <p>{appointment.date}</p>
                                <p>{appointment.time}</p>
                                <div className="app-buttons">
                                    <button className="app-complete-btn">Mark Complete</button>
                                    <button className="app-cancel-btn">Cancel</button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}