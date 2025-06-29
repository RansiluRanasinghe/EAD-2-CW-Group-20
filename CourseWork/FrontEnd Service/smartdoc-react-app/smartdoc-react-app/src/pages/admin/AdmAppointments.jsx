import React, { useState } from 'react';
import AdmSidebar from "../../components/AdminSidebar";
import '@/styles/DocAppoinments.css';
import AdminSidebar from '../../components/AdminSidebar';

export default function DocMyAppointments() {
    const appointments = [
        { name: 'Sarah Johnson', date: 'May 15, 2025', time: '10:00 AM – 10:30 AM', status: 'Confirmed' },
        { name: 'Michael Chen', date: 'May 15, 2025', time: '11:15 AM – 11:45 AM', status: 'Confirmed' },
        { name: 'Emily Rodriguez', date: 'May 14, 2025', time: '2:30 PM – 3:00 PM', status: 'Completed' },
        { name: 'David Wilson', date: 'May 13, 2025', time: '9:00 AM – 9:30 AM', status: 'Cancelled' },
        { name: 'Lisa Thompson', date: 'May 16, 2025', time: '3:45 PM – 4:15 PM', status: 'Confirmed' }
    ];

    const [search, setSearch] = useState('');

    const filtered = appointments.filter(a =>
        a.name.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <div className="doc-app-wrapper">
            <AdminSidebar />
            <div className="doc-app-main">
                <div className='doc-app-header'>
                    <h3>My Appointments</h3>
                    <p>View and manage all your appointments</p>
                </div>

                <div className="doc-tabs-and-search">
                    <div className="doc-app-tabs">
                        <button className="active">All</button>
                        <button>Upcoming</button>
                        <button>Completed</button>
                        <button>Cancelled</button>
                    </div>

                    <div className="doc-app-search-box">
                        <input
                            type="text"
                            placeholder="🔍 Search patients..."
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                        />
                    </div>
                </div>

                <div className="doc-app-table">
                    <div className="doc-app-table-header">
                        <div>Patient</div>
                        <div>Date</div>
                        <div>Time</div>
                        <div>Status</div>
                        <div>Actions</div>
                    </div>
                </div>

                <div>
                    {filtered.map((a, index) => (
                        <div className="doc-app-table-row" key={index}>
                            <div>{a.name}</div>
                            <div>{a.date}</div>
                            <div>{a.time}</div>
                            <div>
                                <span className={`status ${a.status.toLowerCase()}`}>{a.status}</span>
                            </div>
                            <div className="doc-app-action-buttons">
                                <button className="doc-app-complete-btn">Complete</button>
                                <button className="doc-app-cancel-btn">Cancel</button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}