import React, { useState } from 'react';
import Sidebar from "../../components/DocSidebar";
import '@/styles/DocSchedule.css';

export default function DocSchedule() {
    const [date, setDate] = useState('');
    const [startTime, setStartTime] = useState('');
    const [endTime, setEndTime] = useState('');
    const [availabilities, setAvailabilities] = useState([
        { date: 'Monday, May 15, 2023', start: '09:00', end: '17:00' },
        { date: 'Tuesday, May 16, 2023', start: '10:00', end: '18:00' },
        { date: 'Wednesday, May 17, 2023', start: '09:00', end: '13:00' }
    ]);

    const addAvailability = () => {
        if (date && startTime && endTime) {
            const formattedDate = new Date(date).toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric', year: 'numeric' });
            const newEntry = { date: formattedDate, start: startTime, end: endTime };
            setAvailabilities([...availabilities, newEntry]);
            setDate('');
            setStartTime('');
            setEndTime('');
        }
    };

    const removeAvailability = (index) => {
        const updated = [...availabilities];
        updated.splice(index, 1);
        setAvailabilities(updated);
    };

    return (
        <div className="doc-shedule-wrapper">
            <Sidebar />
            <div className="doc-sch-main">
                <div className="doc-sch-header">
                    <h3>Manage Availability</h3>
                    <p>Set your available time slots for appointments</p>
                </div>

                <div className="doc-sch-availability-form">
                    <div className="doc-sch-form-group">
                        <label>Date</label>
                        <input type="date" value={date} onChange={(e) => setDate(e.target.value)} />
                    </div>
                    <div className="doc-sch-form-group">
                        <label>Start Time</label>
                        <input type="time" value={startTime} onChange={(e) => setStartTime(e.target.value)} />
                    </div>
                    <div className="doc-sch-form-group">
                        <label>End Time</label>
                        <input type="time" value={endTime} onChange={(e) => setEndTime(e.target.value)} />
                    </div>
                    <button className="doc-sch-add-btn" onClick={addAvailability}>+ Add Availability</button>
                </div>

                <div className="doc-sch-availability-list">
                    <h3>Current Availabilities</h3>
                    <div className="doc-sch-table-header">
                        <div>Date</div>
                        <div>Start Time</div>
                        <div>End Time</div>
                        <div>Actions</div>
                    </div>
                    {availabilities.map((item, index) => (
                        <div className="doc-sch-table-row" key={index}>
                            <div>{item.date}</div>
                            <div>{item.start}</div>
                            <div>{item.end}</div>
                            <div>
                                <button className="doc-sch-remove-btn" onClick={() => removeAvailability(index)}>🗑 Remove</button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}