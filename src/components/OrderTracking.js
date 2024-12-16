import React, { useState, useEffect } from 'react';
import { useAuth } from '../context/AuthContext';
import { getUserOrders } from '../utils/api';
import '../styles/OrderTracking.css';

function OrderTracking() {
  const { user } = useAuth();
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        setLoading(true);
        const response = await getUserOrders(user.id);
        console.log('Orders:', response.data);
        setOrders(response.data);
      } catch (err) {
        console.error('Error fetching orders:', err);
        setError('Failed to load orders');
      } finally {
        setLoading(false);
      }
    };

    if (user?.id) {
      fetchOrders();
    }
  }, [user?.id]);

  if (loading) return <div className="loading">Loading orders...</div>;
  if (error) return <div className="error">{error}</div>;
  if (orders.length === 0) return <div className="no-orders">No orders found</div>;

  return (
    <div className="order-tracking-container">
      <h2>Your Orders</h2>
      <div className="orders-list">
        {orders.map((order) => (
          <div key={order.id} className="order-card">
            <div className="order-header">
              <h3>Order #{order.id}</h3>
              <span className={`status ${order.status}`}>{order.status}</span>
            </div>
            <div className="order-details">
              <p>Date: {new Date(order.created_at).toLocaleDateString()}</p>
              <p>Total: GH₵{order.total_price}</p>
              <p>Loyalty Points Earned: {order.loyalty_points}</p>
            </div>
            <div className="order-items">
              <h4>Items:</h4>
              {order.items && order.items.map((item, index) => (
                <div key={index} className="order-item">
                  <span>{item.name}</span>
                  <span>x{item.quantity}</span>
                  <span>GH₵{item.price}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default OrderTracking;
