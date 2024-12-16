import React, { useState, useEffect } from 'react';
<<<<<<< HEAD
import { useAuth } from '../context/AuthContext';
import { getUserOrders } from '../utils/api';

function OrderTracking() {
  const { user } = useAuth();
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchOrders = async () => {
      if (!user?.id) {
        setError('User not found');
        setLoading(false);
        return;
      }

      try {
        setLoading(true);
        setError('');
        console.log('Fetching orders for user ID:', user.id);
        
        const response = await getUserOrders(user.id);
        console.log('Orders API response:', response);
        
        if (response.data) {
          setOrders(response.data);
        } else {
          setError('No orders data received');
        }
      } catch (err) {
        console.error('Error fetching orders:', err);
        setError(err.response?.data?.error || 'Failed to load orders');
      } finally {
        setLoading(false);
      }
    };

    fetchOrders();
  }, [user?.id]);

  if (loading) {
    return (
      <div className="container" style={{ padding: '20px' }}>
        <h2>Order History</h2>
        <p>Loading orders...</p>
      </div>
    );
  }

  return (
    <div className="container" style={{ padding: '20px' }}>
      <h2>Order History</h2>
      
      {error && (
        <div style={{ 
          color: 'red', 
          backgroundColor: '#ffebee',
          padding: '10px',
          borderRadius: '4px',
          marginBottom: '15px'
        }}>
          {error}
        </div>
      )}
      
      {orders && orders.length > 0 ? (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          {orders.map(order => (
            <div 
              key={order.id} 
              style={{
                backgroundColor: 'var(--secondary-bg)',
                padding: '20px',
                borderRadius: '8px',
                boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
              }}
            >
              <div style={{ 
                display: 'flex', 
                justifyContent: 'space-between',
                alignItems: 'flex-start',
                marginBottom: '15px'
              }}>
                <div>
                  <h3 style={{ margin: '0 0 10px 0' }}>Order #{order.id}</h3>
                  <p style={{ margin: '5px 0' }}>
                    Date: {new Date(order.created_at).toLocaleString()}
                  </p>
                  <p style={{ margin: '5px 0' }}>
                    Status: <span style={{
                      color: order.status === 'completed' ? 'green' : 
                             order.status === 'pending' ? 'orange' : 'inherit'
                    }}>
                      {order.status}
                    </span>
                  </p>
                </div>
                <div>
                  <h4 style={{ margin: '0 0 5px 0' }}>
                    Total: GH₵{parseFloat(order.total_price).toFixed(2)}
                  </h4>
                  {order.discount_applied > 0 && (
                    <p style={{ margin: '0', color: 'green', fontSize: '0.9em' }}>
                      Discount: -GH₵{parseFloat(order.discount_applied).toFixed(2)}
                    </p>
                  )}
                </div>
              </div>

              {order.items && order.items.length > 0 && (
                <div style={{
                  backgroundColor: 'var(--primary-bg)',
                  padding: '15px',
                  borderRadius: '4px',
                  marginTop: '10px'
                }}>
                  <h4 style={{ margin: '0 0 10px 0' }}>Order Items:</h4>
                  {order.items.map((item, index) => (
                    <div 
                      key={index}
                      style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        padding: '5px 0',
                        borderBottom: index < order.items.length - 1 ? '1px solid var(--border-color)' : 'none'
                      }}
                    >
                      <span>{item.name} × {item.quantity}</span>
                      <span>GH₵{(parseFloat(item.price) * item.quantity).toFixed(2)}</span>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      ) : (
        <p>No orders found.</p>
      )}
=======

function OrderTracking() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    // Fetch user's orders
    // Add API call here
  }, []);

  const getStatusColor = (status) => {
    switch (status.toLowerCase()) {
      case 'preparing': return '#ffd700';
      case 'ready': return '#4CAF50';
      case 'completed': return '#808080';
      default: return '#ff4444';
    }
  };

  return (
    <div className="container">
      <h2>Order Tracking</h2>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
        {orders.map(order => (
          <div key={order.id} style={{
            backgroundColor: 'var(--secondary-bg)',
            padding: '20px',
            borderRadius: '8px'
          }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <h3>Order #{order.id}</h3>
              <span style={{
                backgroundColor: getStatusColor(order.status),
                padding: '5px 10px',
                borderRadius: '4px'
              }}>
                {order.status}
              </span>
            </div>
            <div style={{ margin: '10px 0' }}>
              {order.items.map(item => (
                <div key={item.id} style={{ margin: '5px 0' }}>
                  {item.name} x{item.quantity} - ${item.price}
                </div>
              ))}
            </div>
            <div style={{ marginTop: '10px' }}>
              <p>Points Earned: {order.loyalty_points}</p>
              <p>Order Date: {new Date(order.created_at).toLocaleString()}</p>
            </div>
          </div>
        ))}
      </div>
>>>>>>> dedc6bf2bfc31cb5a0aaff2d59602e572141f0fd
    </div>
  );
}

export default OrderTracking;
