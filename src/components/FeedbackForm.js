import React, { useState } from 'react';
import './FeedbackForm.css';

const FeedbackForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    registrationNumber: '',
    teaching: '',
    courseContent: '',
    examination: '',
    labWork: '',
    libraryFacilities: '',
    extracurricular: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Feedback submitted successfully!');
    console.log('Submitted Feedback:', formData);
    // Add code to send the formData to the server or database
  };

  return (
    <div className="feedback-form">
      <h2>Provide Your Feedback</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Enter your name"
          required
        />
        <label htmlFor="institutionname">Institution Name:</label>
        <input
          type="text"
          id="institutionname"
          name="institutionname"
          value={formData.institutionname}
          onChange={handleChange}
          placeholder="Enter your the name of your institution"
          required
        />
        <label htmlFor="course">Course:</label>
        <input
          type="text"
          id="course"
          name="course"
          value={formData.course}
          onChange={handleChange}
          placeholder="Enter your course"
          required
        />

        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Enter your email"
          required
        />

        <label htmlFor="registrationNumber">Registration Number:</label>
        <input
          type="text"
          id="registrationNumber"
          name="registrationNumber"
          value={formData.registrationNumber}
          onChange={handleChange}
          placeholder="Enter your registration number"
          required
        />

        <label htmlFor="teaching">Teaching:</label>
        <textarea
          id="teaching"
          name="teaching"
          value={formData.teaching}
          onChange={handleChange}
          placeholder="Provide feedback on teaching"
          rows="4"
          required
        ></textarea>

        <label htmlFor="courseContent">Course Content:</label>
        <textarea
          id="courseContent"
          name="courseContent"
          value={formData.courseContent}
          onChange={handleChange}
          placeholder="Provide feedback on course content"
          rows="4"
          required
        ></textarea>

        <label htmlFor="examination">Examination:</label>
        <textarea
          id="examination"
          name="examination"
          value={formData.examination}
          onChange={handleChange}
          placeholder="Provide feedback on examination"
          rows="4"
          required
        ></textarea>

        <label htmlFor="labWork">Lab Work:</label>
        <textarea
          id="labWork"
          name="labWork"
          value={formData.labWork}
          onChange={handleChange}
          placeholder="Provide feedback on lab work"
          rows="4"
          required
        ></textarea>

        <label htmlFor="libraryFacilities">Library Facilities:</label>
        <textarea
          id="libraryFacilities"
          name="libraryFacilities"
          value={formData.libraryFacilities}
          onChange={handleChange}
          placeholder="Provide feedback on library facilities"
          rows="4"
          required
        ></textarea>

        <label htmlFor="extracurricular">Extracurricular Activities:</label>
        <textarea
          id="extracurricular"
          name="extracurricular"
          value={formData.extracurricular}
          onChange={handleChange}
          placeholder="Provide feedback on extracurricular activities"
          rows="4"
          required
        ></textarea>

        <button type="submit">Submit Feedback</button>
      </form>
    </div>
  );
};

export default FeedbackForm;
