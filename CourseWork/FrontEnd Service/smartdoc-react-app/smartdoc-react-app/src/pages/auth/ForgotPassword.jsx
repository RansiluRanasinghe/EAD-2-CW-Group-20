import { useState } from 'react';
import { Link } from 'react-router-dom';

import '@/styles/ForgotPassword.css';

export default function ForgotPassword() {
    const [email, setEmail] = useState('');

    const handleReset = (e) => {
        e.preventDefault();
        console.log('Reset link sent to:', email);
    };

    return (
        <div className="pass-wrapper">
            <h2>Forgot Password</h2>
            <form onSubmit={handleReset} className="pass-form">
                <label>Email</label>
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />

                <button type="submit">Send Reset Link</button>
                <p className="pass-link">
                    <Link to="/login">Back to Login</Link>
                </p>
            </form>
        </div>
    );
}
