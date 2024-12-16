import React, { useState, useEffect } from 'react';
<<<<<<< HEAD
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
=======

function Menu() {
  const [menuItems, setMenuItems] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('all');

  useEffect(() => {
    // Fetch menu items from your backend
    // Add API call here
  }, []);

  return (
    <div className="container">
      <h2>Menu</h2>
      <div style={{ margin: '20px 0' }}>
        <select 
          className="form-control"
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
          style={{ maxWidth: '200px' }}
        >
          <option value="all">All Categories</option>
          <option value="main">Main Dishes</option>
          <option value="sides">Sides</option>
          <option value="drinks">Drinks</option>
        </select>
      </div>
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
        gap: '20px'
      }}>
        {menuItems.map((item) => (
          <div key={item.id} style={{
            backgroundColor: 'var(--secondary-bg)',
            padding: '15px',
            borderRadius: '8px'
          }}>
            <h3>{item.name}</h3>
            <p>Price: ${item.price}</p>
            <p>{item.nutritional_info}</p>
            <button className="btn">Add to Cart</button>
          </div>
        ))}
      </div>
>>>>>>> dedc6bf2bfc31cb5a0aaff2d59602e572141f0fd
    </div>
  );
}

export default Menu;
