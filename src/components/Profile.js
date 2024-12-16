import React, { useState, useEffect } from 'react';
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
      </div>
    </div>
  );
}

export default Profile;
