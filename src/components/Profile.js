import React, { useState, useEffect } from 'react';

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
      </div>
    </div>
  );
}

export default Profile;
