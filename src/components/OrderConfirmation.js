import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

function OrderConfirmation() {
  const navigate = useNavigate();
  const location = useLocation();
  const orderDetails = location.state?.orderDetails;

  if (!orderDetails) {
    return navigate('/cart');
  }

  return (
    <div className="container">
      <div style={{
        maxWidth: '600px',
        margin: '40px auto',
        padding: '20px',
        backgroundColor: 'var(--secondary-bg)',
        borderRadius: '8px',
        textAlign: 'center'
      }}>
        <h2>Order Confirmed!</h2>
        <div style={{ margin: '20px 0' }}>
          <p>Order Number: #{orderDetails.order?.id || orderDetails.id || 'N/A'}</p>
          
          <div style={{ 
            margin: '20px 0',
            padding: '15px',
            backgroundColor: 'var(--primary-bg)',
            borderRadius: '8px'
          }}>
            <h3>Order Summary</h3>
            {orderDetails.items && (
              <div style={{ marginTop: '15px' }}>
                {orderDetails.items.map((item, index) => (
                  <div key={index} style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    padding: '5px 0'
                  }}>
                    <span>{item.name} x {item.quantity}</span>
                    <span>GH₵{(item.price * item.quantity).toFixed(2)}</span>
                  </div>
                ))}
              </div>
            )}
            
            {orderDetails.discountApplied > 0 && (
              <p style={{ color: 'green' }}>Discount Applied: -GH₵{orderDetails.discountApplied.toFixed(2)}</p>
            )}
            
            <p style={{ 
              fontSize: '1.2em', 
              fontWeight: 'bold',
              marginTop: '15px',
              borderTop: '1px solid var(--border-color)',
              paddingTop: '15px'
            }}>
              Final Total: GH₵{parseFloat(orderDetails.total_price).toFixed(2)}
            </p>
          </div>

          <div style={{ 
            backgroundColor: 'var(--accent-color)',
            color: 'white',
            padding: '15px',
            borderRadius: '8px',
            margin: '20px 0'
          }}>
            <h4 style={{ margin: '0 0 10px 0' }}>Loyalty Points Update</h4>
            {orderDetails.pointsUsed > 0 && (
              <p style={{ margin: '5px 0' }}>Points Used: -{orderDetails.pointsUsed}</p>
            )}
            <p style={{ margin: '5px 0' }}>Points Earned: +{orderDetails.earnedPoints}</p>
          </div>

          <p>Estimated Delivery Time: 15-20 minutes</p>
        </div>

        <div style={{ marginTop: '30px' }}>
          <button 
            className="btn"
            onClick={() => navigate('/order-tracking')}
            style={{ marginRight: '10px' }}
          >
            Track Order
          </button>
          <button 
            className="btn"
            onClick={() => navigate('/menu')}
          >
            Order More
          </button>
        </div>
      </div>
    </div>
  );
}

export default OrderConfirmation;
