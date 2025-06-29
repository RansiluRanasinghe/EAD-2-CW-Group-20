import Sidebar from "../../components/DocSidebar";
import '@/styles/DocProfile.css';

export default function DocProfile() {
    return (
        <div className="doc-pro-wrapper">
            <Sidebar />
            <div className="doc-pro-main">
                <div className="doc-pro-header">
                    <h3>My Profile</h3>
                    <p>Manage your personal information and credentials</p>
                </div>

                <div className="doc-pro-card">
                    <div className="doc-pro-card-header">
                        <h2>Profile Information</h2>
                        <button className="doc-pro-edit-btn">Edit Profile</button>
                    </div>

                    <form className="doc-pro-form">
                        <div className="doc-pro-form-group">
                            <label>Full Name</label>
                            <input type="text" value="Dr. John Smith" readOnly />
                        </div>
                        <div className="doc-pro-form-group">
                            <label>Email Address</label>
                            <input type="email" value="john.smith@example.com" readOnly />
                        </div>
                        <div className="doc-pro-form-group">
                            <label>Phone Number</label>
                            <input type="tel" value="+1 (555) 123-4567" readOnly />
                        </div>
                        <div className="doc-pro-form-group">
                            <label>Specialization</label>
                            <input type="text" value="Cardiology" readOnly />
                        </div>
                        <div className="doc-pro-form-group-full-width">
                            <label>Professional Bio</label>
                            <textarea readOnly value="Board-certified cardiologist with over 10 years of experience in treating cardiovascular diseases and performing interventional procedures." />
                        </div>
                        <div className="doc-pro-form-group">
                            <label>Address</label>
                            <input type="text" value="123 Medical Center Blvd, Suite 456" readOnly />
                        </div>
                        <div className="doc-pro-form-group">
                            <label>City</label>
                            <input type="text" value="New York" readOnly />
                        </div>
                        <div className="doc-pro-form-group">
                            <label>State</label>
                            <input type="text" value="NY" readOnly />
                        </div>
                        <div className="doc-pro-form-group">
                            <label>ZIP Code</label>
                            <input type="text" value="10001" readOnly />
                        </div>
                    </form>
                </div>

                <div className="doc-pro-pass-header">
                    <h2>Change Password</h2>
                </div>

                <div className="doc-pro-pass-card">
                    <form className="doc-pro-pass-form">
                        <div className="doc-pro-pass-form-group">
                            <label>Current Password</label>
                            <input type="password" placeholder="Enter current password" />
                        </div>
                        <div className="doc-pro-pass-form-group">
                            <label>New Password</label>
                            <input type="password" placeholder="Enter new password" />
                        </div>
                        <div className="doc-pro-pass-form-group">
                            <label>Confirm New Password</label>
                            <input type="password" placeholder="Re-enter new password" />
                        </div>
                        <div className="doc-pro-pass-form-group-full-width">
                            <button type="submit" className="doc-pro-pass-update-btn">Update Password</button>
                        </div>
                    </form>
                </div>

            </div>
        </div>
    );
}