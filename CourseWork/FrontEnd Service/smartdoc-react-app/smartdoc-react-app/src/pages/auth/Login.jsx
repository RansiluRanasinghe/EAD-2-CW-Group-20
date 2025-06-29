import { useState } from 'react';
import { Link } from 'react-router-dom';

import '@/styles/Login.css';

export default function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = (e) => {
        e.preventDefault();
        console.log('Logging in with:', email, password);
    };

    return (
        <div className="login-wrapper">
            <h2>Sign In</h2>
            <form onSubmit={handleLogin} className="login-form">
                <label>Email</label>
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />

                <label>Password</label>
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />

                <button type="submit">Login</button>
                <p className="login-link">
                    <Link to="/forgot-password">Forgot Password?</Link>
                </p>
                <p className="login-link">
                    Don't have an account? <Link to="/signup">Sign Up</Link>
                </p>
            </form>
        </div>
    );
}