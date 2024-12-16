import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { createUser } from '../utils/api';

function Register() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
<<<<<<< HEAD
    dietary_restrictions: ''
  });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      await createUser(formData);
      alert('Registration successful! Please login.');
      navigate('/login');
    } catch (err) {
      setError(err.response?.data?.error || 'Registration failed');
      console.error('Registration error:', err);
    } finally {
      setLoading(false);
=======
    dietary_restrictions: '',
    allergies: ''
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await createUser(formData);
      navigate('/login');
    } catch (error) {
      console.error('Registration failed:', error);
>>>>>>> dedc6bf2bfc31cb5a0aaff2d59602e572141f0fd
    }
  };

  return (
    <div className="container">
      <div style={{ maxWidth: '400px', margin: '40px auto', padding: '20px' }}>
        <h2>Create FeastFlow Account</h2>
<<<<<<< HEAD
        {error && (
          <div style={{ color: 'red', marginBottom: '10px' }}>
            {error}
          </div>
        )}
=======
>>>>>>> dedc6bf2bfc31cb5a0aaff2d59602e572141f0fd
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            className="form-control"
            placeholder="Username"
            value={formData.username}
            onChange={(e) => setFormData({...formData, username: e.target.value})}
<<<<<<< HEAD
            required
=======
>>>>>>> dedc6bf2bfc31cb5a0aaff2d59602e572141f0fd
          />
          <input
            type="email"
            className="form-control"
            placeholder="Email"
            value={formData.email}
            onChange={(e) => setFormData({...formData, email: e.target.value})}
<<<<<<< HEAD
            required
=======
>>>>>>> dedc6bf2bfc31cb5a0aaff2d59602e572141f0fd
          />
          <input
            type="password"
            className="form-control"
            placeholder="Password"
            value={formData.password}
            onChange={(e) => setFormData({...formData, password: e.target.value})}
<<<<<<< HEAD
            required
          />
          <textarea
            className="form-control"
            placeholder="Dietary Restrictions (optional)"
            value={formData.dietary_restrictions}
            onChange={(e) => setFormData({...formData, dietary_restrictions: e.target.value})}
          />
          <button 
            type="submit" 
            className="btn"
            disabled={loading}
            style={{ width: '100%' }}
          >
            {loading ? 'Creating Account...' : 'Register'}
          </button>
=======
          />
          <textarea
            className="form-control"
            placeholder="Dietary Restrictions"
            value={formData.dietary_restrictions}
            onChange={(e) => setFormData({...formData, dietary_restrictions: e.target.value})}
          />
          <textarea
            className="form-control"
            placeholder="Allergies"
            value={formData.allergies}
            onChange={(e) => setFormData({...formData, allergies: e.target.value})}
          />
          <button type="submit" className="btn">Register</button>
>>>>>>> dedc6bf2bfc31cb5a0aaff2d59602e572141f0fd
        </form>
        <div style={{ 
          marginTop: '20px', 
          textAlign: 'center',
          color: 'var(--text-secondary)'
        }}>
          Already have an account?{' '}
          <Link to="/login" style={{ color: 'var(--accent-color)', textDecoration: 'none' }}>
            Login here
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Register;
