import React, { useState } from 'react';

const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const [errors, setErrors] = useState({});

  const validateForm = () => {
    let formIsValid = true;
    const updateErrors = {};

    // name validation
    if (!formData.name != '') {
      formIsValid = false;
      updateErrors.name = 'Name should not be empty.';
    }

    // email validation
    const emailFormat = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailFormat.test(formData.email)) {
      formIsValid = false;
      updateErrors.email = 'Enter a valid email address.';
    }

    // password validation
    if (formData.password.length < 8) {
      formIsValid = false;
      updateErrors.password = 'Password should be at least 8 characters long.';
    }

    // confirm password validation
    if (formData.password !== formData.confirmPassword) {
      formIsValid = false;
      updateErrors.confirmPassword = 'Passwords do not match.';
    }

    setErrors(updateErrors);
    return formIsValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      console.log('Form submitted:', formData);
    } else {
      console.log('Form not submitted. Validation errors:', errors);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3>Task 2: Form Registration</h3>
      <div>
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" name="name" className='input-control' value={formData.name} onChange={handleChange} /><br/>
          {errors.name && <span className="error-message">{errors.name}</span>}
      </div>

      <div>
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" className='input-control' value={formData.email} onChange={handleChange} /><br/>
        {errors.email && <span className="error-message">{errors.email}</span>}
      </div>

      <div>
        <label htmlFor="password">Password:</label>
        <input
          type="password" id="password" name="password" className='input-control' value={formData.password} onChange={handleChange} /><br/>
        {errors.password && <span className="error-message">{errors.password}</span>}
      </div>

      <div>
        <label htmlFor="confirmPassword">Confirm Password:</label>
        <input type="password" id="confirmPassword" name="confirmPassword" className='input-control' value={formData.confirmPassword} onChange={handleChange} /><br/>
        {errors.confirmPassword && <span className="error-message">{errors.confirmPassword}</span>}
      </div>

      <button type="submit">Submit</button>
    </form>
  );
};

export default RegistrationForm;
