import React, { useState } from 'react';
import axios from 'axios';

function Form() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    school: '',
    class: '',
    rollNo: '',
    address: ''
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    axios.post('http://localhost:5000/api/users', formData)
      .then((response) => {
        // console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };


  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3">
          <h2>Fill out the form to generate your Admit Card</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Name:</label>
              <input type="text" className="form-control" id="name" name="name"  value={formData.name} onChange={handleChange} />
            </div>
            <div className="form-group">
              <label htmlFor="phone">Phone:</label>
              <input type="tel" className="form-control" id="phone" name="phone"  pattern="[0-9]{10}" value={formData.phone} onChange={handleChange} />
            </div>
            <div className="form-group">
              <label htmlFor="school">School:</label>
              <input type="text" className="form-control" id="school" name="school" value={formData.school} onChange={handleChange} />
            </div>
            <div className="form-group">
              <label htmlFor="class">Class:</label>
              <input type="text" className="form-control" id="class" name="class" value={formData.class} onChange={handleChange} />
            </div>
            <div className="form-group">
              <label htmlFor="rollno">Roll No:</label>
              <input type="text" className="form-control" id="rollNo" name="rollNo" value={formData.rollNo} onChange={handleChange} />
            </div>
            <div className="form-group">
              <label htmlFor="address">Address:</label>
              <textarea className="form-control" id="address" rows="3" name="address" value={formData.address} onChange={handleChange}></textarea>
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Form;
