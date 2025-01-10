import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const diplomas = [
  'Diploma in Information Technology',
  'Diploma in Cybersecurity & Digital Forensics',
  'Diploma in Enterprise Cloud Computing & Management',
  'Diploma in Financial Technology',
  'Common ICT Programme',
];

export default function EnrolmentForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    diploma: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      navigate('/');
    }, 3000); // Redirect after 3 seconds
  };

  if (submitted) {
    return <div className="container">Thank you for your interest, {formData.name}! You will be redirected to the homepage shortly.</div>;
  }

  return (
    <div className="container">
      <h1>Register Your Interest</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input type="text" name="name" value={formData.name} onChange={handleChange} required />
        </div>
        <div>
          <label>Email:</label>
          <input type="email" name="email" value={formData.email} onChange={handleChange} required />
        </div>
        <div>
          <label>Diploma:</label>
          <select name="diploma" value={formData.diploma} onChange={handleChange} required>
            <option value="" disabled>Select a diploma</option>
            {diplomas.map((diploma, index) => (
              <option key={index} value={diploma}>{diploma}</option>
            ))}
          </select>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}