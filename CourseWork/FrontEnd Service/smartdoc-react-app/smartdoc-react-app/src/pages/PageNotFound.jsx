import { Link } from 'react-router-dom';

import '@/styles/PageNotFound.css';

export default function PageNotFound() {
    return (
        <div className="notfound-wrapper">
            <h1>404</h1>
            <h2>Page Not Found</h2>
            <p>Sorry, the page you're looking for doesn't exist.</p>
            <Link to="/" className="back-home-link">Go Back Home</Link>
        </div>
    );
}