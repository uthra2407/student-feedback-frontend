import React, { useState } from 'react';
import './Registration.css';

const InstitutionRegistration = () => {
  const [institutionData, setInstitutionData] = useState({
    name: '',
    email: '',
    password: '',
    location: '',
  });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setInstitutionData({ ...institutionData, [e.target.name]: e.target.value });
  };

  const validateForm = () => {
    if (!institutionData.email.includes('@') || !institutionData.email.includes('.')) {
      setError('Invalid email format');
      return false;
    }
    if (institutionData.password.length < 6) {
      setError('Password must be at least 6 characters long');
      return false;
    }
    setError('');
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setLoading(true);
    setError('');

    try {
      const response = await fetch('http://localhost:8000/api/institution/register/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(institutionData),
      });

      const data = await response.json();
      console.log('📥 API Response:', data);

      if (response.ok) {
        alert('Institution Registration Successful!');
      } else {
        setError(data.error || 'Registration failed. Please try again.');
      }
    } catch (err) {
      console.error('❌ Server error:', err);
      setError('Server error, try again later.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="registration-form">
      <h2>Institution Registration</h2>
      <form onSubmit={handleSubmit}>
        {error && <div className="error-message">{error}</div>}
        <input
          type="text"
          name="name"
          value={institutionData.name}
          onChange={handleChange}
          placeholder="Institution Name"
          required
        />
        <input
          type="text"
          name="location"
          value={institutionData.location}
          onChange={handleChange}
          placeholder="Location"
          required
        />
        <input
          type="email"
          name="email"
          value={institutionData.email}
          onChange={handleChange}
          placeholder="Email Address"
          required
        />
        <input
          type="password"
          name="password"
          value={institutionData.password}
          onChange={handleChange}
          placeholder="Password"
          required
        />
        <button type="submit" disabled={loading}>
          {loading ? 'Registering...' : 'Register'}
        </button>
      </form>
    </div>
  );
};

export default InstitutionRegistration;
