import { useState, useEffect } from 'react';
import axios from 'axios';
import "../CSS/AdmitCard.css"

function AdmitCard() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    school: '',
    class: '',
    rollNo: '',
    address: ''
  });

  useEffect(() => {
    axios.get('http://localhost:5000/api/users')
      .then((response) => {
        const latestUser = response.data[response.data.length - 1];
        setFormData(latestUser);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className="admit-card-container">
      <div className="admit-card">
        <h1 className="admit-card-heading">Admit Card</h1>
        <div className="admit-card-info">
          <p>Name: {formData.name}</p>
          <p>Phone: {formData.phone}</p>
          <p>School: {formData.school}</p>
          <p>Class: {formData.class}</p>
          <p>Roll No: {formData.rollNo}</p>
          <p>Address: {formData.address}</p>
        </div>
        <button className="btn btn-primary d-print-none" onClick={() => window.print()} style={{ marginTop: "20px" }}>Print Admit Card</button>
      </div>
    </div>
  );
}

export default AdmitCard;
