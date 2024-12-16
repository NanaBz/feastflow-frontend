import React, { useState, useEffect } from 'react';
<<<<<<< HEAD
import { useAuth } from '../context/AuthContext';
import { getUserProfile } from '../utils/api';

function Profile() {
  const { user } = useAuth();
  const [profileData, setProfileData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchProfile = async () => {
      if (!user?.id) {
        setError('User not found');
        setLoading(false);
        return;
      }

      try {
        const response = await getUserProfile(user.id);
        console.log('Profile response:', response);
        if (response.data) {
          setProfileData(response.data);
        } else {
          setError('Failed to load profile data');
        }
      } catch (err) {
        console.error('Profile error:', err);
        setError('Error loading profile');
      } finally {
        setLoading(false);
      }
    };

    fetchProfile();
  }, [user?.id]);

  if (loading) return <div>Loading profile...</div>;
  if (error) return <div style={{ color: 'red' }}>{error}</div>;
  if (!profileData) return <div>No profile data available</div>;

  return (
    <div className="profile-container">
      <h2>Profile</h2>
      <div>
        <p><strong>Username:</strong> {profileData.username}</p>
        <p><strong>Email:</strong> {profileData.email}</p>
        <p><strong>Loyalty Points:</strong> {profileData.loyalty_points || 0}</p>
        <p><strong>Dietary Restrictions:</strong> {profileData.dietary_restrictions || 'None specified'}</p>
=======

function Profile() {
  const [profile, setProfile] = useState({
    username: '',
    email: '',
    dietary_restrictions: '',
    allergies: '',
    loyalty_points: 0
  });
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    // Fetch user profile
    // Add API call here
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Update profile
    // Add API call here
    setIsEditing(false);
  };

  return (
    <div className="container">
      <h2>Profile</h2>
      <div style={{
        backgroundColor: 'var(--secondary-bg)',
        padding: '20px',
        borderRadius: '8px',
        maxWidth: '600px',
        margin: '0 auto'
      }}>
        {isEditing ? (
          <form onSubmit={handleSubmit}>
            <div style={{ marginBottom: '15px' }}>
              <label>Username</label>
              <input
                type="text"
                className="form-control"
                value={profile.username}
                onChange={(e) => setProfile({...profile, username: e.target.value})}
              />
            </div>
            <div style={{ marginBottom: '15px' }}>
              <label>Dietary Restrictions</label>
              <textarea
                className="form-control"
                value={profile.dietary_restrictions}
                onChange={(e) => setProfile({...profile, dietary_restrictions: e.target.value})}
              />
            </div>
            <div style={{ marginBottom: '15px' }}>
              <label>Allergies</label>
              <textarea
                className="form-control"
                value={profile.allergies}
                onChange={(e) => setProfile({...profile, allergies: e.target.value})}
              />
            </div>
            <button type="submit" className="btn">Save Changes</button>
          </form>
        ) : (
          <div>
            <p><strong>Username:</strong> {profile.username}</p>
            <p><strong>Email:</strong> {profile.email}</p>
            <p><strong>Dietary Restrictions:</strong> {profile.dietary_restrictions}</p>
            <p><strong>Allergies:</strong> {profile.allergies}</p>
            <p><strong>Loyalty Points:</strong> {profile.loyalty_points}</p>
            <button onClick={() => setIsEditing(true)} className="btn">Edit Profile</button>
          </div>
        )}
>>>>>>> dedc6bf2bfc31cb5a0aaff2d59602e572141f0fd
      </div>
    </div>
  );
}

export default Profile;
