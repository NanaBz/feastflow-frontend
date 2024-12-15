import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

function Navbar() {
  const { isLoggedIn, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <nav style={{
      backgroundColor: 'var(--secondary-bg)',
      padding: '1rem',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center'
    }}>
      <Link to="/" style={{ color: 'var(--text-primary)', textDecoration: 'none', fontSize: '1.5rem' }}>
        FeastFlow
      </Link>
      <div style={{ display: 'flex', gap: '1rem' }}>
        {isLoggedIn ? (
          <>
            <Link to="/menu" style={{ color: 'var(--text-primary)', textDecoration: 'none' }}>Menu</Link>
            <Link to="/cart" style={{ color: 'var(--text-primary)', textDecoration: 'none' }}>Cart</Link>
            <Link to="/order-tracking" style={{ color: 'var(--text-primary)', textDecoration: 'none' }}>Orders</Link>
            <Link to="/profile" style={{ color: 'var(--text-primary)', textDecoration: 'none' }}>Profile</Link>
            <button 
              onClick={handleLogout}
              style={{ 
                background: 'none', 
                border: 'none', 
                color: 'var(--text-primary)', 
                cursor: 'pointer' 
              }}
            >
              Logout
            </button>
          </>
        ) : (
          <>
            <Link to="/login" style={{ color: 'var(--text-primary)', textDecoration: 'none' }}>Login</Link>
            <Link to="/register" style={{ color: 'var(--text-primary)', textDecoration: 'none' }}>Register</Link>
          </>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
