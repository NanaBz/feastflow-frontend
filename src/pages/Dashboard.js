import React from 'react';
import { Link } from 'react-router-dom';

function Dashboard() {
  return (
    <div className="container">
      <h2>Welcome to FeastFlow</h2>
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
        gap: '20px',
        marginTop: '20px'
      }}>
        <Link to="/menu" style={{ textDecoration: 'none' }}>
          <div style={{
            backgroundColor: 'var(--secondary-bg)',
            padding: '20px',
            borderRadius: '8px',
            textAlign: 'center'
          }}>
            <h3>Browse Menu</h3>
            <p>Explore our delicious offerings</p>
          </div>
        </Link>
        
        <Link to="/cart" style={{ textDecoration: 'none' }}>
          <div style={{
            backgroundColor: 'var(--secondary-bg)',
            padding: '20px',
            borderRadius: '8px',
            textAlign: 'center'
          }}>
            <h3>Your Cart</h3>
            <p>View and manage your orders</p>
          </div>
        </Link>

        <Link to="/order-tracking" style={{ textDecoration: 'none' }}>
          <div style={{
            backgroundColor: 'var(--secondary-bg)',
            padding: '20px',
            borderRadius: '8px',
            textAlign: 'center'
          }}>
            <h3>Track Orders</h3>
            <p>Check your order status</p>
          </div>
        </Link>

        <Link to="/profile" style={{ textDecoration: 'none' }}>
          <div style={{
            backgroundColor: 'var(--secondary-bg)',
            padding: '20px',
            borderRadius: '8px',
            textAlign: 'center'
          }}>
            <h3>Profile</h3>
            <p>Manage your account</p>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Dashboard;
