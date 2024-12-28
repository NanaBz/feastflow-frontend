import React from 'react';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import { CartProvider } from './context/CartContext';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Dashboard from './pages/Dashboard';
import Menu from './components/Menu';
import Cart from './components/Cart';
import Profile from './components/Profile';
import OrderTracking from './components/OrderTracking';
import './index.css';

function App() {
  return (
    <AuthProvider>
      <CartProvider>
        <Router>
          <div className="app">
            <header className="app-header">
              <h1>FeastFlow</h1>
              <nav>
                <ul>
                  <li><a href="#/">Home</a></li>
                  <li><a href="#/login">Login</a></li>
                  <li><a href="#/register">Register</a></li>
                  <li><a href="#/dashboard">Dashboard</a></li>
                </ul>
              </nav>
            </header>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="/dashboard" element={<Dashboard />} />
            </Routes>
          </div>
        </Router>
      </CartProvider>
    </AuthProvider>
  );
}

export default App;