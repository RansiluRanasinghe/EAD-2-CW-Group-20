import PatSidebar from "../../components/PatSidebar";
import '@/styles/PatDashboard.css';

export default function PatDashboard() {
    const nextAppointments = [
        {
            doctor: 'Dr. Sarah Johnson',
            speacialty: 'Cardiologist',
            date: '06/28/2025',
            time: '10:00 AM - 10:30 AM'
        },
        {
            doctor: 'Dr. Michael Chen',
            speacialty: 'Dermatologist',
            date: '06/30/2025',
            time: '10:00 AM - 10:30 AM'
        },
        {
            doctor: 'Dr. Emily Rodriguez',
            speacialty: 'Neurologist',
            date: '06/29/2025',
            time: '10:00 AM - 10:30 AM'
        }
    ]

    return (
        <div className="pat-dash-wrapper">
            <PatSidebar />
            <div className="pat-dash-main">
                <div className="pat-dash-header">
                    <h3>Welcome, John Doe!</h3>
                    <p>Manage your appointments and health information in one place.</p>
                </div>

                <div className="pat-dash-summary-cards">
                    <div className="pat-dash-sum-card">
                        <p>Today's Appointments</p>
                        <h2>5</h2>
                    </div>
                    <div className="pat-dash-sum-card">
                        <p>Upcoming Appointments</p>
                        <h2>12</h2>
                    </div>
                    <div className="pat-dash-sum-card">
                        <p>Total Appointments</p>
                        <h2>23</h2>
                    </div>
                </div>

                <div className="pat-next-appointments">
                    <h3>Next Appointments</h3>
                    <div>
                        {nextAppointments.map((appointment, index) => (
                            <div className='pat-appointment-card' key={index}>
                                <h4>{appointment.doctor}</h4>
                                <h5>{appointment.speacialty}</h5>
                                <p>{appointment.date}</p>
                                <p>{appointment.time}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}