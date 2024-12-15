import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { GoogleLogin } from '@react-oauth/google';
import { jwtDecode } from 'jwt-decode';
import { useAuth } from '../context/AuthContext';

function Login() {
  const { login } = useAuth();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    rememberMe: false
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Add your login logic here
    login(); // Set logged in state
    navigate('/dashboard');
  };

  const handleGoogleSuccess = (credentialResponse) => {
    const decoded = jwtDecode(credentialResponse.credential);
    console.log(decoded);
    login(); // Set logged in state
    navigate('/dashboard');
  };

  return (
    <div className="container">
      <div style={{ maxWidth: '400px', margin: '40px auto', padding: '20px' }}>
        <h2>Login to FeastFlow</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            className="form-control"
            placeholder="Email"
            value={formData.email}
            onChange={(e) => setFormData({...formData, email: e.target.value})}
          />
          <input
            type="password"
            className="form-control"
            placeholder="Password"
            value={formData.password}
            onChange={(e) => setFormData({...formData, password: e.target.value})}
          />
          <div style={{ margin: '10px 0' }}>
            <input
              type="checkbox"
              id="rememberMe"
              checked={formData.rememberMe}
              onChange={(e) => setFormData({...formData, rememberMe: e.target.checked})}
            />
            <label htmlFor="rememberMe"> Remember me</label>
          </div>
          <button type="submit" className="btn">Login</button>
        </form>
        <div style={{ margin: '20px 0' }}>
          <GoogleLogin
            onSuccess={handleGoogleSuccess}
            onError={() => console.log('Login Failed')}
          />
        </div>
        <div style={{ 
          marginTop: '20px', 
          textAlign: 'center',
          color: 'var(--text-secondary)'
        }}>
          New to FeastFlow?{' '}
          <Link to="/register" style={{ color: 'var(--accent-color)', textDecoration: 'none' }}>
            Register here
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Login;
