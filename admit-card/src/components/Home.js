import React from 'react';
import { Link } from 'react-router-dom';
function Home() {
  return (
    <div className="container-fluid">
      <div className="row justify-content-center my-5">
        <div className="col-md-6 text-center">
          <h1>Welcome to My Admit Card App</h1>
          <p className="lead">Generate Admit Cards in just a few clicks!</p>
          <Link to="/form" className="btn btn-primary btn-lg">Generate Admit Card</Link>
          <br/>
          <br/>
          
          <Link to="/admit-card" className="btn btn-primary btn-lg">View and Print Admit Card</Link>
        </div>
      </div>
      <div className="row justify-content-center">
        <div className="col-md-4">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Easy to Use</h5>
              <p className="card-text">Our app is user-friendly and easy to navigate, making it simple for anyone to generate an admit card.</p>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Secure and Private</h5>
              <p className="card-text">We take the security and privacy of your data seriously. Your information is safe with us.</p>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Fast and Efficient</h5>
              <p className="card-text">Generate an admit card in just a few clicks! Our app is designed to be fast and efficient.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
