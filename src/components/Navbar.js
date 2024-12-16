import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
<<<<<<< HEAD
import { useCart } from '../context/CartContext';

function Navbar() {
  const { isLoggedIn, logout } = useAuth();
  const { cartItems } = useCart();
=======

function Navbar() {
  const { isLoggedIn, logout } = useAuth();
>>>>>>> dedc6bf2bfc31cb5a0aaff2d59602e572141f0fd
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <nav style={{
<<<<<<< HEAD
      backgroundColor: 'var(--primary-bg)',
      padding: '15px 0',
      boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
    }}>
      <div className="container" style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
      }}>
        <Link to="/" style={{ textDecoration: 'none', color: 'var(--text-primary)' }}>
          <h1 style={{ margin: 0 }}>FeastFlow</h1>
        </Link>

        <div style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
          {isLoggedIn ? (
            <>
              <Link to="/menu" style={{ textDecoration: 'none', color: 'var(--text-primary)' }}>
                Menu
              </Link>
              <Link to="/cart" style={{ textDecoration: 'none', color: 'var(--text-primary)' }}>
                Cart ({cartItems.length})
              </Link>
              <Link to="/order-tracking" style={{ textDecoration: 'none', color: 'var(--text-primary)' }}>
                Orders
              </Link>
              <Link to="/profile" style={{ textDecoration: 'none', color: 'var(--text-primary)' }}>
                Profile
              </Link>
              <button 
                onClick={handleLogout}
                className="btn"
                style={{ padding: '5px 15px' }}
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <Link to="/login" style={{ textDecoration: 'none', color: 'var(--text-primary)' }}>
                Login
              </Link>
              <Link to="/register">
                <button className="btn" style={{ padding: '5px 15px' }}>
                  Register
                </button>
              </Link>
            </>
          )}
        </div>
=======
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
>>>>>>> dedc6bf2bfc31cb5a0aaff2d59602e572141f0fd
      </div>
    </nav>
  );
}

export default Navbar;
