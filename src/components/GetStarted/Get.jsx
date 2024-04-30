import React, { useState } from 'react';
import './get.css';

const GetStarted = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    age: '',
    goal: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can handle form submission here, such as sending data to backend or displaying a success message
    console.log(formData);
    // Clear form fields after submission
    setFormData({ name: '', email: '', age: '', goal: '' });
  };

  return (
    <div className="get-started-container">
      <h2>Get Started with Our Fitness Program</h2>
      <form onSubmit={handleSubmit} className="get-started-form">
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="age">Age:</label>
          <input
            type="number"
            id="age"
            name="age"
            value={formData.age}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="goal">Fitness Goal:</label>
          <textarea
            id="goal"
            name="goal"
            value={formData.goal}
            onChange={handleChange}
            required
          ></textarea>
        </div>
        <button type="submit">Get Started</button>
      </form>
    </div>
  );
};

export default GetStarted;
