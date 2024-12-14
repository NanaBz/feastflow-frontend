import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div style={{
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      textAlign: 'center',
      padding: '20px'
    }}>
      <h1 style={{ fontSize: '3rem', marginBottom: '20px' }}>Welcome to FeastFlow</h1>
      <p style={{ fontSize: '1.2rem', maxWidth: '600px', marginBottom: '30px' }}>
        Your one-stop solution for convenient campus dining. Order food, track deliveries, and earn rewards!
      </p>
      <div style={{ display: 'flex', gap: '20px' }}>
        <Link to="/login">
          <button className="btn">Login</button>
        </Link>
        <Link to="/register">
          <button className="btn">Register</button>
        </Link>
      </div>
    </div>
  );
}

export default Home;
