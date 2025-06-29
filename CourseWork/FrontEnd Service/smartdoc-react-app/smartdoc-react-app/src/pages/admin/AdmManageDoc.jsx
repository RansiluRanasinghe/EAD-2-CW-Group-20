import React, { useState } from 'react';

import AdminSidebar from "../../components/AdminSidebar";
import '@/styles/AdmManageDoc.css';

const initialFormState = {
    id: null,
    name: '',
    email: '',
    specialization: '',
};

export default function AdmManageDoc() {
    const [doctors, setDoctors] = useState([]);
    const [form, setForm] = useState(initialFormState);
    const [isEditing, setIsEditing] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm({ ...form, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!form.name || !form.email || !form.specialization) {
            alert('Please fill all fields.');
            return;
        }

        if (isEditing) {
            setDoctors(
                doctors.map((doc) => (doc.id === form.id ? form : doc))
            );
            setIsEditing(false);
        } else {
            setDoctors([...doctors, { ...form, id: Date.now() }]);
        }

        setForm(initialFormState);
    };

    const handleEdit = (doctor) => {
        setForm(doctor);
        setIsEditing(true);
    };

    const handleDelete = (id) => {
        if (window.confirm('Are you sure you want to delete this doctor?')) {
            setDoctors(doctors.filter((doc) => doc.id !== id));
        }
    };

    return (
        <div className="adm-man-wrapper">
            <AdminSidebar />
            <div className="adm-man-main">
                <div className="adm-man-header">
                    <h3>Manage Doctors</h3>
                </div>

                <div className="adm-man-auth">
                    <h2>{isEditing ? 'Edit Doctor' : 'Add Doctor'}</h2>
                    <form className="man-auth-form" onSubmit={handleSubmit}>
                        <label>Name</label>
                        <input
                            type="text"
                            name="name"
                            value={form.name}
                            onChange={handleChange}
                            required
                        />

                        <label>Email</label>
                        <input
                            type="email"
                            name="email"
                            value={form.email}
                            onChange={handleChange}
                            required
                        />

                        <label>Specialization</label>
                        <input
                            type="text"
                            name="specialization"
                            value={form.specialization}
                            onChange={handleChange}
                            required
                        />

                        <button type="submit">{isEditing ? 'Update' : 'Add'}</button>
                        {isEditing && (
                            <button
                                type="button"
                                onClick={() => {
                                    setIsEditing(false);
                                    setForm(initialFormState);
                                }}
                            >
                                Cancel
                            </button>
                        )}
                    </form>

                    <hr/>

                    <h2>Doctors List</h2>
                    {doctors.length === 0 ? (
                        <p>No doctors added yet.</p>
                    ) : (
                        <table>
                            <thead>
                                <tr>
                                    <th>Name</th>
                                    <th>Email</th>
                                    <th>Specialization</th>
                                    <th>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {doctors.map((doc) => (
                                    <tr key={doc.id}>
                                        <td>{doc.name}</td>
                                        <td>{doc.email}</td>
                                        <td>{doc.specialization}</td>
                                        <td>
                                            <button
                                                onClick={() => handleEdit(doc)}
                                                
                                            >
                                                Edit
                                            </button>
                                            <button
                                                onClick={() => handleDelete(doc.id)}
                                                
                                            >
                                                Delete
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    )}
                </div>
            </div>
        </div>
    );
}
