import React, { useState, useEffect } from 'react';
import { getMenuItems } from '../utils/api';

function Menu() {
  const [menuItems, setMenuItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchMenu = async () => {
      try {
        setLoading(true);
        const response = await getMenuItems();
        console.log('Menu response:', response);
        if (response.data) {
          setMenuItems(response.data);
        } else {
          setError('No menu items found');
        }
      } catch (err) {
        console.error('Error fetching menu:', err);
        setError('Failed to load menu items');
      } finally {
        setLoading(false);
      }
    };

    fetchMenu();
  }, []);

  if (loading) return <div>Loading menu items...</div>;
  if (error) return <div style={{ color: 'red' }}>{error}</div>;
  if (menuItems.length === 0) return <div>No menu items available</div>;

  return (
    <div className="menu-container">
      {menuItems.map(item => (
        <div key={item.id} className="menu-item">
          <h3>{item.name}</h3>
          <p>{item.description}</p>
          <p>Price: GH₵{item.price}</p>
          {/* Add to cart button and other UI elements */}
        </div>
      ))}
    </div>
  );
}

export default Menu;
