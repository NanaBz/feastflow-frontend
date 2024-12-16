import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer style={{
      backgroundColor: 'var(--primary-bg)',
      padding: '40px 0',
      marginTop: 'auto'
    }}>
      <div className="container">
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: '40px'
        }}>
          <div>
            <h3>FeastFlow</h3>
            <p>Your campus dining solution</p>
          </div>
          
          <div>
            <h4>Quick Links</h4>
            <ul style={{ listStyle: 'none', padding: 0 }}>
              <li><Link to="/menu" style={{ textDecoration: 'none', color: 'var(--text-secondary)' }}>Menu</Link></li>
              <li><Link to="/order-tracking" style={{ textDecoration: 'none', color: 'var(--text-secondary)' }}>Track Order</Link></li>
              <li><Link to="/profile" style={{ textDecoration: 'none', color: 'var(--text-secondary)' }}>Profile</Link></li>
            </ul>
          </div>
          
          <div>
            <h4>Contact</h4>
            <p>Email: support@feastflow.com</p>
            <p>Phone: (233) 123-456-789</p>
          </div>
        </div>
        
        <div style={{
          borderTop: '1px solid var(--border-color)',
          marginTop: '20px',
          paddingTop: '20px',
          textAlign: 'center'
        }}>
          <p>&copy; {new Date().getFullYear()} FeastFlow. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
