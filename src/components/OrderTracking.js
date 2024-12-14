import React, { useState, useEffect } from 'react';

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
    </div>
  );
}

export default OrderTracking;
