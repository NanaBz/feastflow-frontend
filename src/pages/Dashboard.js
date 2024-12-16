import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { getPointsInfo, getDiscountInfo } from '../utils/loyaltyPoints';

function Dashboard() {
  const { user } = useAuth();
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        setLoading(true);
        setUserData(user);
      } catch (error) {
        console.error('Error setting user data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchUserData();
  }, [user]);

  if (loading) {
    return <div className="container">Loading...</div>;
  }

  return (
    <div className="container">
      <div style={{ padding: '20px' }}>
        <h2>Welcome, {user?.username || 'User'}!</h2>
        
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: '20px',
          marginTop: '30px'
        }}>
          <Link to="/menu" style={{ textDecoration: 'none' }}>
            <div style={{
              backgroundColor: 'var(--secondary-bg)',
              padding: '20px',
              borderRadius: '8px',
              textAlign: 'center'
            }}>
              <h3>Order Food</h3>
              <p>Browse our menu and place your order</p>
            </div>
          </Link>

          <Link to="/order-tracking" style={{ textDecoration: 'none' }}>
            <div style={{
              backgroundColor: 'var(--secondary-bg)',
              padding: '20px',
              borderRadius: '8px',
              textAlign: 'center'
            }}>
              <h3>Track Orders</h3>
              <p>View your order history and track current orders</p>
            </div>
          </Link>

          <Link to="/profile" style={{ textDecoration: 'none' }}>
            <div style={{
              backgroundColor: 'var(--secondary-bg)',
              padding: '20px',
              borderRadius: '8px',
              textAlign: 'center'
            }}>
              <h3>Profile Settings</h3>
              <p>Update your profile and preferences</p>
            </div>
          </Link>

          <Link to="/cart" style={{ textDecoration: 'none' }}>
            <div style={{
              backgroundColor: 'var(--secondary-bg)',
              padding: '20px',
              borderRadius: '8px',
              textAlign: 'center'
            }}>
              <h3>Shopping Cart</h3>
              <p>View and manage your cart items</p>
            </div>
          </Link>
        </div>

        <div style={{ 
          marginTop: '30px',
          backgroundColor: 'var(--accent-color)',
          padding: '20px',
          borderRadius: '8px',
          color: 'white'
        }}>
          <h3>Your Loyalty Points: {userData?.loyalty_points || 0}</h3>
          
          <div style={{ marginTop: '20px' }}>
            <h4>Earn Points:</h4>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '10px' }}>
              {getPointsInfo().map((tier, index) => (
                <div key={index} style={{ padding: '10px', backgroundColor: 'rgba(255,255,255,0.1)', borderRadius: '4px' }}>
                  <p>Spend {tier.range}</p>
                  <p>Earn {tier.points} points</p>
                </div>
              ))}
            </div>
          </div>

          <div style={{ marginTop: '20px' }}>
            <h4>Available Discounts:</h4>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '10px' }}>
              {getDiscountInfo().map((tier, index) => (
                <div key={index} style={{ padding: '10px', backgroundColor: 'rgba(255,255,255,0.1)', borderRadius: '4px' }}>
                  <p>{tier.points} points</p>
                  <p>{tier.discount} discount</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
