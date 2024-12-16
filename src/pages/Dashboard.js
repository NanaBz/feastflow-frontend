import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { getUserProfile } from '../utils/api';
import '../styles/Dashboard.css';

function Dashboard() {
  const { user } = useAuth();
  const [userProfile, setUserProfile] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchUserProfile = async () => {
      try {
        const response = await getUserProfile(user.id);
        setUserProfile(response.data);
      } catch (err) {
        console.error('Error fetching profile:', err);
        setError('Failed to load profile');
      } finally {
        setLoading(false);
      }
    };

    if (user?.id) {
      fetchUserProfile();
    }
  }, [user?.id]);

  if (loading) return <div className="loading">Loading...</div>;
  if (error) return <div className="error">{error}</div>;

  return (
    <div className="dashboard-container">
      <h1>Welcome to FeastFlow</h1>
      <div className="dashboard-content">
        <div className="dashboard-section">
          <h2>Quick Actions</h2>
          <div className="quick-actions">
            <Link to="/menu" className="dashboard-card">
              <h3>View Menu</h3>
              <p>Browse our delicious offerings</p>
            </Link>
            <Link to="/cart" className="dashboard-card">
              <h3>Your Cart</h3>
              <p>Review and checkout your order</p>
            </Link>
            <Link to="/order-tracking" className="dashboard-card">
              <h3>Track Orders</h3>
              <p>View your order history</p>
            </Link>
            <Link to="/profile" className="dashboard-card">
              <h3>Profile</h3>
              <p>Manage your account settings</p>
            </Link>
          </div>
        </div>
        
        {userProfile && (
          <div className="dashboard-section">
            <h2>Your Stats</h2>
            <div className="stats-container">
              <div className="stat-card">
                <h3>Loyalty Points</h3>
                <p>{userProfile.loyalty_points || 0} points</p>
              </div>
              {/* Add more stats as needed */}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Dashboard;
