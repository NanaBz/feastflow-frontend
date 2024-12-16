const express = require('express');
const cors = require('cors');
const { Pool } = require('pg');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Database configuration
const pool = new Pool({
    user: 'canteen_user',
    host: 'dpg-ctb53d23esus739enoi0-a.oregon-postgres.render.com',
    database: 'canteen_ordering_system_v2wm',
    password: 'IcFZzRE06ZOIKscHu0twuleg9i3VAkX1',
    port: 5432,
    ssl: true
});

// USER ENDPOINTS
// Register new user
app.post('/create_new_user_info', async (req, res) => {
    try {
        const { username, email, password, dietary_restrictions, allergies } = req.body;
        const hashedPassword = await bcrypt.hash(password, 10);
        
        const result = await pool.query(
            'INSERT INTO "users" (username, email, password, dietary_restrictions, allergies, loyalty_points) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *',
            [username, email, hashedPassword, dietary_restrictions, allergies, 0]
        );
        res.json(result.rows[0]);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// Get all users
app.get('/get_all_user_info', async (req, res) => {
    try {
        const result = await pool.query('SELECT * FROM "users"');
        res.json(result.rows);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// Login
app.post('/login', async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await pool.query('SELECT * FROM "users" WHERE email = $1', [email]);
        
        if (user.rows.length === 0) {
            return res.status(401).json({ error: 'User not found' });
        }

        const validPassword = await bcrypt.compare(password, user.rows[0].password);
        if (!validPassword) {
            return res.status(401).json({ error: 'Invalid password' });
        }

        const token = jwt.sign({ userId: user.rows[0].id }, 'your_jwt_secret');
        res.json({ token, user: user.rows[0] });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// Get specific user profile
app.get('/user_info/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const result = await pool.query('SELECT * FROM "users" WHERE id = $1', [id]);
        if (result.rows.length === 0) {
            return res.status(404).json({ error: 'User not found' });
        }
        res.json(result.rows[0]);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// Update user profile
app.put('/update_user_info', async (req, res) => {
    try {
        const { id, username, email, dietary_restrictions, allergies } = req.body;
        const result = await pool.query(
            'UPDATE "users" SET username = $1, email = $2, dietary_restrictions = $3, allergies = $4 WHERE id = $5 RETURNING *',
            [username, email, dietary_restrictions, allergies, id]
        );
        res.json(result.rows[0]);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// MENU ENDPOINTS
app.get('/menu_items', async (req, res) => {
    try {
        const result = await pool.query('SELECT * FROM "MenuItems"');
        res.json(result.rows);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

app.get('/menu_items/:category', async (req, res) => {
    try {
        const { category } = req.params;
        const result = await pool.query('SELECT * FROM "MenuItems" WHERE category = $1', [category]);
        res.json(result.rows);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// ORDER ENDPOINTS
app.post('/orders', async (req, res) => {
    try {
        const { user_id, items, total_price } = req.body;
        const order = await pool.query(
            'INSERT INTO "Orders" (user_id, status, loyalty_points, created_at, total_price, order_number) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *',
            [user_id, 'pending', 0, new Date(), total_price, `ORD-${Date.now()}`]
        );

        for (let item of items) {
            await pool.query(
                'INSERT INTO "OrderItems" (order_id, name, price, quantity, customizations) VALUES ($1, $2, $3, $4, $5)',
                [order.rows[0].id, item.name, item.price, item.quantity, item.customizations]
            );
        }

        res.json(order.rows[0]);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

app.get('/orders/:userId', async (req, res) => {
    try {
        const { userId } = req.params;
        const result = await pool.query('SELECT * FROM "Orders" WHERE user_id = $1', [userId]);
        res.json(result.rows);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

app.put('/orders/:id/status', async (req, res) => {
    try {
        const { id } = req.params;
        const { status } = req.body;
        const result = await pool.query(
            'UPDATE "Orders" SET status = $1 WHERE id = $2 RETURNING *',
            [status, id]
        );
        res.json(result.rows[0]);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

app.get('/orders/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const order = await pool.query('SELECT * FROM "Orders" WHERE id = $1', [id]);
        const items = await pool.query('SELECT * FROM "OrderItems" WHERE order_id = $1', [id]);
        res.json({ ...order.rows[0], items: items.rows });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// CART ENDPOINTS
// Note: You might want to create a Cart table in your database
app.post('/cart/add', async (req, res) => {
    try {
        const { user_id, item_id, quantity, customizations } = req.body;
        // Implement cart logic here
        res.json({ message: "Item added to cart" });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

app.get('/cart/:userId', async (req, res) => {
    try {
        const { userId } = req.params;
        // Implement get cart logic here
        res.json({ items: [] });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

app.put('/cart/update', async (req, res) => {
    try {
        const { item_id, quantity } = req.body;
        // Implement update cart logic here
        res.json({ message: "Cart updated" });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

app.delete('/cart/:itemId', async (req, res) => {
    try {
        const { itemId } = req.params;
        // Implement delete cart item logic here
        res.json({ message: "Item removed from cart" });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// Delete user endpoint
app.delete('/delete_user/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const result = await pool.query('DELETE FROM "users" WHERE id = $1 RETURNING *', [id]);
        
        if (result.rows.length === 0) {
            return res.status(404).json({ error: 'User not found' });
        }
        
        res.json({ message: `User ${id} deleted successfully` });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// Add menu item endpoint
app.post('/add_menu_item', async (req, res) => {
    try {
        const { name, price, category, nutritional_info, custumization_options, image_url, description } = req.body;
        const result = await pool.query(
            'INSERT INTO "MenuItems" (name, price, category, nutritional_info, custumization_options, image_url, description) VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING *',
            [name, price, category, nutritional_info, custumization_options, image_url, description]
        );
        res.json(result.rows[0]);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});