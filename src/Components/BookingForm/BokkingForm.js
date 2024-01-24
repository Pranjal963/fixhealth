import React, { useState } from 'react';
import './bookingform.css'
const BookingForm = ({setIsSubmited}) => {
  const [formData, setFormData] = useState({
    name: '',
    phoneNumber: '',
    age: '',
    city: '', 
    company: '',
    chiefComplaints: '',
    previousExperience: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <div className="booking-form">
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" name="name" value={formData.name} onChange={handleChange} required />
        </label>
        <br />
        <label>
          Phone Number:
          <input
            type="tel"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleChange}
            required
          />
        </label>
        <br />
        <label>
          Age:
          <input type="number" name="age" value={formData.age} onChange={handleChange} required />
        </label>
        <br />
        <label>
          City:
          <input type="text" name="city" value={formData.city} onChange={handleChange} required />
        </label>
        <br />
        <label>
          Company:
          <input type="text" name="company" value={formData.company} onChange={handleChange} required />
        </label>
        <br />
        <label>
          Chief Complaints:
          <textarea
            name="chiefComplaints"
            value={formData.chiefComplaints}
            onChange={handleChange}
            required
          />
        </label>
        <br />
        <label>
          Any previous experience with physiotherapy:
          <textarea
            name="previousExperience"
            value={formData.previousExperience}
            onChange={handleChange}
            required
          />
        </label>
        <br />
        <button type="submit" onClick={() => setIsSubmited((prev) => !prev)}>Submit</button>
      </form>
    </div>
  );
};

export default BookingForm;
