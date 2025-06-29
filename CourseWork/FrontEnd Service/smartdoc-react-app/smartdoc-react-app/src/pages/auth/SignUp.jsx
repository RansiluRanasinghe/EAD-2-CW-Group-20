import { useState } from 'react';
import { Link } from 'react-router-dom';

import '@/styles/SignUp.css';

export default function SignUp() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSignUp = (e) => {
        e.preventDefault();
        console.log('Signing up:', name, email, password);
    };

    return (
        <div className="signup-wrapper">
            <h2>Create Account</h2>
            <form onSubmit={handleSignUp} className="signup-form">
                <label>Name</label>
                <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />

                <label>Email</label>
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />

                <label>Password</label>
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />

                <button type="submit">Sign Up</button>
                <p className="signup-link">
                    Already have an account? <Link to="/login">Login</Link>
                </p>
            </form>
        </div>
    );
}