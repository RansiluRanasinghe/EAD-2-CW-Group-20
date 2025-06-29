import PatSidebar from '@/components/PatSidebar';
import '@/styles/PatBookAppointment.css';

export default function PatBookAppointment() {
    const doctors = [
        {
            name: 'Dr. Sarah Johnson',
            specialty: 'Cardiologist',
            img: 'https://randomuser.me/api/portraits/women/44.jpg',
            times: ['9:00 AM', '10:00 AM', '11:00 AM', '2:00 PM', '3:00 PM'],
            disabled: ['11:00 AM'],
        },
        {
            name: 'Dr. Michael Chen',
            specialty: 'Dermatologist',
            img: 'https://randomuser.me/api/portraits/men/46.jpg',
            times: ['9:00 AM', '10:00 AM', '11:00 AM', '2:00 PM', '3:00 PM'],
            disabled: ['9:00 AM', '2:00 PM'],
        },
        {
            name: 'Dr. Emily Rodriguez',
            specialty: 'Neurologist',
            img: 'https://randomuser.me/api/portraits/women/68.jpg',
            times: ['9:00 AM', '10:00 AM', '11:00 AM', '2:00 PM', '3:00 PM'],
            disabled: ['10:00 AM', '3:00 PM'],
        },
    ];

    return (
        <div className='pat-book-wrapper'>
            <PatSidebar />
            <div className='pat-book-main'>
                <div className='pat-book-header'>
                    <h3>Book an Appointment</h3>
                </div>

                <div className="pat-book-search">
                    <input type="text" placeholder="Search doctors by name or specialization..." />
                    <input type="date" />
                </div>

                <div className="pat-book-doc-grid">
                    {doctors.map((doc, index) => (
                        <div className="book-doc-card" key={index}>
                            <img src={doc.img} alt={doc.name} className="doc-img" />
                            <h3>{doc.name}</h3>
                            <p className="specialty">{doc.specialty}</p>
                            <p>Available Time Slots:</p>
                            <div className="time-slots">
                                {doc.times.map((time, i) => (
                                    <button
                                        key={i}
                                        className={`time-slot ${doc.disabled.includes(time) ? 'disabled' : ''}`}
                                        disabled={doc.disabled.includes(time)}
                                    >
                                        {time}
                                    </button>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>

        </div>
    );
}