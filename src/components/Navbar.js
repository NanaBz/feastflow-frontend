import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { useCart } from '../context/CartContext';

function Navbar() {
  const { isLoggedIn, logout } = useAuth();
  const { cartItems } = useCart();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <nav style={{
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
      </div>
    </nav>
  );
}

export default Navbar;
