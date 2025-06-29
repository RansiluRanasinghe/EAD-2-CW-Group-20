import PatSidebar from '@/components/PatSidebar';
import '@/styles/PatAppointments.css';

export default function PatAppointments() {
    const appointments = [
        {
            doctor: 'Dr. Sarah Johnson',
            speacialty: 'Cardiologist',
            date: '06/28/2025',
            time: '10:00 AM - 10:30 AM',
            status: 'Completed'
        },
        {
            doctor: 'Dr. Michael Chen',
            speacialty: 'Dermatologist',
            date: '06/30/2025',
            time: '10:00 AM - 10:30 AM',
            status: 'Confirmed'
        },
        {
            doctor: 'Dr. Emily Rodriguez',
            speacialty: 'Neurologist',
            date: '06/29/2025',
            time: '10:00 AM - 10:30 AM',
            status: 'Cancelled'
        }
    ]

    return (
        <div className='pat-app-wrapper'>
            <PatSidebar />
            <div className='pat-app-main'>
                <div className='pat-app-header'>
                    <h3>My Appointments</h3>
                </div>

                <div className="pat-app-tabs">
                    <button className="active">All</button>
                    <button>Upcoming</button>
                    <button>Completed</button>
                    <button>Cancelled</button>
                </div>

                <div className="pat-appointments">
                    <div>
                        {appointments.map((appointment, index) => (
                            <div className='pat-app-card' key={index}>
                                <div className='pat-app-card-info'>
                                    <h4>{appointment.doctor}</h4>
                                    <h5>{appointment.speacialty}</h5>
                                    <p>{appointment.date}</p>
                                    <p>{appointment.time}</p>
                                </div>
                                <div className='pat-app-card-action'>
                                    <div className='pat-app-sts'>
                                        {appointment.status}
                                    </div>
                                    <button className="pat-app-cancel-btn">Cancel</button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}