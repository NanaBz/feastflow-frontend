import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

function Home() {
  const { isLoggedIn } = useAuth();

  return (
    <div className="container">
      <div style={{ 
        padding: '40px 20px',
        textAlign: 'center',
        maxWidth: '800px',
        margin: '0 auto'
      }}>
        <h1>Welcome to FeastFlow</h1>
        <p style={{ fontSize: '1.2rem', margin: '20px 0' }}>
          Your one-stop solution for delicious meals at the canteen
        </p>

        {!isLoggedIn ? (
          <div style={{ 
            display: 'flex', 
            gap: '20px',
            justifyContent: 'center',
            marginTop: '30px'
          }}>
            <Link to="/login">
              <button className="btn">Login</button>
            </Link>
            <Link to="/register">
              <button className="btn">Register</button>
            </Link>
          </div>
        ) : (
          <Link to="/dashboard">
            <button className="btn">Go to Dashboard</button>
          </Link>
        )}

        <div style={{ 
          marginTop: '50px',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: '20px'
        }}>
          <div style={{ padding: '20px' }}>
            <h3>Easy Ordering</h3>
            <p>Order your favorite meals with just a few clicks</p>
          </div>
          <div style={{ padding: '20px' }}>
            <h3>Track Orders</h3>
            <p>Real-time updates on your order status</p>
          </div>
          <div style={{ padding: '20px' }}>
            <h3>Earn Points</h3>
            <p>Collect loyalty points with every purchase</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
