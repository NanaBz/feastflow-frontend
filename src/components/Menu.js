import React, { useState, useEffect } from 'react';

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
    </div>
  );
}

export default Menu;
