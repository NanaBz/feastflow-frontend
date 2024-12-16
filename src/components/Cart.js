import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { useAuth } from '../context/AuthContext';
import { createOrder, updateUserProfile } from '../utils/api';
import { calculateEarnedPoints, calculateAvailableDiscount } from '../utils/loyaltyPoints';

function Cart() {
  const { cartItems, clearCart } = useCart();
  const { user } = useAuth();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [usePoints, setUsePoints] = useState(false);
  const [pointsToUse, setPointsToUse] = useState(0);

  const calculateSubtotal = () => {
    return cartItems.reduce((total, item) => {
      return total + (parseFloat(item.price) * item.quantity);
    }, 0);
  };

  const calculateDiscount = () => {
    if (!usePoints || pointsToUse === 0) return 0;
    const discountRate = calculateAvailableDiscount(pointsToUse);
    return calculateSubtotal() * discountRate;
  };

  const calculateTotal = () => {
    const subtotal = calculateSubtotal();
    const discount = calculateDiscount();
    return subtotal - discount;
  };

  const handlePointsChange = (e) => {
    const value = parseInt(e.target.value) || 0;
    // Limit points to user's available points or 50 (whichever is less)
    const maxPoints = Math.min(user.loyalty_points || 0, 50);
    setPointsToUse(Math.min(value, maxPoints));
  };

  const handleCheckout = async () => {
    if (cartItems.length === 0) {
      setError('Your cart is empty');
      return;
    }

    try {
      setLoading(true);
      setError('');

      const totalAmount = calculateTotal();
      const earnedPoints = calculateEarnedPoints(totalAmount);
      const pointsUsed = usePoints ? pointsToUse : 0;

      const orderData = {
        user_id: user.id,
        items: cartItems.map(item => ({
          name: item.name,
          price: item.price,
          quantity: item.quantity,
          customizations: item.customizations || []
        })),
        total_price: totalAmount,
        status: 'pending',
        loyalty_points: earnedPoints,
        points_used: pointsUsed,
        discount_applied: calculateDiscount(),
        created_at: new Date().toISOString()
      };

      console.log('Sending order data:', orderData);

      const response = await createOrder(orderData);
      
      // Only try to update user profile if the order was successful
      if (response.data) {
        try {
          // Update local user state first
          const updatedPoints = (user.loyalty_points || 0) + earnedPoints - pointsUsed;
          
          // Navigate to confirmation before attempting profile update
          clearCart();
          navigate('/order-confirmation', { 
            state: { 
              orderDetails: {
                ...response.data,
                earnedPoints,
                pointsUsed,
                discountApplied: calculateDiscount()
              }
            }
          });

          // Try to update profile in background
          await updateUserProfile({
            ...user,
            loyalty_points: updatedPoints
          });
        } catch (profileError) {
          console.error('Failed to update profile, but order was successful:', profileError);
        }
      }
      
    } catch (err) {
      console.error('Checkout error:', err);
      setError('Failed to place order. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container">
      <h2>Your Cart</h2>
      {error && (
        <div style={{ color: 'red', marginBottom: '10px', padding: '10px', backgroundColor: '#ffebee' }}>
          {error}
        </div>
      )}
      
      {cartItems.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <>
          <div style={{ marginBottom: '20px' }}>
            {cartItems.map((item) => (
              <div key={item.id} style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                padding: '15px',
                backgroundColor: 'var(--secondary-bg)',
                marginBottom: '10px',
                borderRadius: '8px'
              }}>
                <div style={{ display: 'flex', gap: '15px', alignItems: 'center' }}>
                  {item.image_url && (
                    <img 
                      src={item.image_url} 
                      alt={item.name} 
                      style={{ 
                        width: '80px', 
                        height: '80px', 
                        objectFit: 'cover',
                        borderRadius: '4px'
                      }}
                    />
                  )}
                  <div>
                    <h3 style={{ margin: '0 0 5px 0' }}>{item.name}</h3>
                    <p style={{ margin: '0' }}>GH₵{item.price} each</p>
                    <p style={{ margin: '5px 0 0 0' }}>Quantity: {item.quantity}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div style={{
            borderTop: '1px solid var(--border-color)',
            paddingTop: '20px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-end',
            gap: '10px'
          }}>
            <div style={{ width: '100%', maxWidth: '300px' }}>
              <h3>Order Summary</h3>
              <p>Subtotal: GH₵{calculateSubtotal().toFixed(2)}</p>
              
              {user.loyalty_points > 0 && (
                <div style={{ marginTop: '10px' }}>
                  <label style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <input
                      type="checkbox"
                      checked={usePoints}
                      onChange={(e) => {
                        setUsePoints(e.target.checked);
                        if (!e.target.checked) setPointsToUse(0);
                      }}
                    />
                    Use Loyalty Points
                  </label>
                  
                  {usePoints && (
                    <div style={{ marginTop: '10px' }}>
                      <input
                        type="number"
                        className="form-control"
                        value={pointsToUse}
                        onChange={handlePointsChange}
                        min="0"
                        max={Math.min(user.loyalty_points || 0, 50)}
                        style={{ width: '100px' }}
                      />
                      <small style={{ display: 'block', marginTop: '5px' }}>
                        Available points: {user.loyalty_points}
                      </small>
                    </div>
                  )}
                </div>
              )}
              
              {calculateDiscount() > 0 && (
                <p style={{ color: 'green' }}>
                  Discount: -GH₵{calculateDiscount().toFixed(2)}
                </p>
              )}
              
              <h3>Total: GH₵{calculateTotal().toFixed(2)}</h3>
            </div>

            <button 
              className="btn"
              onClick={handleCheckout}
              disabled={loading}
              style={{ 
                width: '200px',
                backgroundColor: loading ? 'var(--text-secondary)' : 'var(--accent-color)'
              }}
            >
              {loading ? 'Processing...' : 'Proceed to Checkout'}
            </button>
          </div>
        </>
      )}
    </div>
  );
}

export default Cart;
