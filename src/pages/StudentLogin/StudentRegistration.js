import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const StudentRegistration = () => {
  const [studentData, setStudentData] = useState({
    name: '',
    regno: '',
    institution: '',
    email: '',
    password: '',
  });

  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setStudentData({ ...studentData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await fetch('http://localhost:8000/api/register/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(studentData),
      });

      const data = await response.json();
      if (response.ok) {
        alert('Student Registered Successfully!');
        navigate('/student-login');
      } else {
        setError(data.error || 'Registration Failed');
      }
    } catch (err) {
      setError('Server error, try again later.');
    }
    setLoading(false);
  };

  return (
    <div>
      <h2>Student Registration</h2>
      <form onSubmit={handleSubmit}>
        {error && <p>{error}</p>}
        <input type="text" name="name" value={studentData.name} onChange={handleChange} placeholder="Full Name" required />
        <input type="text" name="regno" value={studentData.regno} onChange={handleChange} placeholder="Register Number" required />
        <input type="text" name="institution" value={studentData.institution} onChange={handleChange} placeholder="Institution Name" required />
        <input type="email" name="email" value={studentData.email} onChange={handleChange} placeholder="Email" required />
        <input type="password" name="password" value={studentData.password} onChange={handleChange} placeholder="Password" required />
        <button type="submit">{loading ? 'Registering...' : 'Register'}</button>
      </form>
    </div>
  );
};

export default StudentRegistration;
