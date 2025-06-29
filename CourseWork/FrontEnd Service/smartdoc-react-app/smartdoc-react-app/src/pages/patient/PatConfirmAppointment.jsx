import { useState } from 'react';
import '@/styles/PatConfirmAppointment.css';

export default function PatConfirmAppointment() {
  const selectedDoctor = {
    name: 'Dr. Sarah Johnson',
    specialty: 'Cardiologist',
    time: '10:00 AM',
    img: 'https://randomuser.me/api/portraits/women/44.jpg'
  };

  const [form, setForm] = useState({
    patientName: '',
    age: '',
    reason: '',
  });

  const [showPayment, setShowPayment] = useState(false);
  const [cardDetails, setCardDetails] = useState({
    name: '',
    number: '',
    expiry: '',
    cvv: '',
  });

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleCardChange = (e) => {
    const { name, value } = e.target;
    setCardDetails({ ...cardDetails, [name]: value });
  };

  const handleConfirmPayment = (e) => {
    e.preventDefault();
    alert(`Appointment booked and LKR 2000 paid successfully.`);
    // Reset forms
    setForm({ patientName: '', age: '', reason: '' });
    setCardDetails({ name: '', number: '', expiry: '', cvv: '' });
    setShowPayment(false);
  };

  return (
    <div className="pat-confirm-wrapper">
      <div className="pat-confirm-main">
        <div className="pat-confirm-header">
          <h3>Confirm Appointment</h3>
        </div>

        <div className="confirm-doc-card">
          <img src={selectedDoctor.img} alt={selectedDoctor.name} className="doc-img" />
          <div>
            <h3>{selectedDoctor.name}</h3>
            <p>{selectedDoctor.specialty}</p>
            <p><strong>Time Slot:</strong> {selectedDoctor.time}</p>
          </div>
        </div>

        <form className="confirm-form">
          <h4>Patient Information</h4>
          <label>Name</label>
          <input type="text" name="patientName" value={form.patientName} onChange={handleFormChange} required />

          <label>Age</label>
          <input type="number" name="age" value={form.age} onChange={handleFormChange} required />

          <label>Reason for Visit</label>
          <textarea name="reason" rows="3" value={form.reason} onChange={handleFormChange} required></textarea>

          <div className="price-section">
            <span>Appointment Fee: LKR 2000</span>
          </div>

          <div className="action-buttons">
            <button type="button" className="cancel-btn" onClick={() => window.history.back()}>Cancel</button>
            <button type="button" className="pay-btn" onClick={() => setShowPayment(true)}>Pay</button>
          </div>
        </form>

        {showPayment && (
          <form className="payment-form" onSubmit={handleConfirmPayment}>
            <h4>Enter Card Details</h4>
            <label>Cardholder Name</label>
            <input type="text" name="name" value={cardDetails.name} onChange={handleCardChange} required />

            <label>Card Number</label>
            <input type="text" name="number" value={cardDetails.number} onChange={handleCardChange} required maxLength={16} />

            <label>Expiry Date</label>
            <input type="text" name="expiry" value={cardDetails.expiry} onChange={handleCardChange} placeholder="MM/YY" required />

            <label>CVV</label>
            <input type="password" name="cvv" value={cardDetails.cvv} onChange={handleCardChange} required maxLength={4} />

            <button type="submit" className="confirm-pay">Confirm Payment</button>
          </form>
        )}
      </div>
    </div>
  );
}