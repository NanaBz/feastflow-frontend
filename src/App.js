import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
<<<<<<< HEAD
import { CartProvider } from './context/CartContext';
import PrivateRoute from './components/PrivateRoute';
=======
>>>>>>> dedc6bf2bfc31cb5a0aaff2d59602e572141f0fd
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Dashboard from './pages/Dashboard';
<<<<<<< HEAD
import Menu from './components/Menu';
import Cart from './components/Cart';
import OrderTracking from './components/OrderTracking';
import Profile from './components/Profile';
import Error404 from './components/Error404';
import Footer from './components/Footer';
import OrderConfirmation from './components/OrderConfirmation';
=======
import Profile from './components/Profile';
import Menu from './components/Menu';
import Cart from './components/Cart';
import OrderTracking from './components/OrderTracking';
>>>>>>> dedc6bf2bfc31cb5a0aaff2d59602e572141f0fd

function App() {
  return (
    <AuthProvider>
<<<<<<< HEAD
      <CartProvider>
        <Router>
          <div className="App">
            <Navbar />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route 
                path="/dashboard" 
                element={
                  <PrivateRoute>
                    <Dashboard />
                  </PrivateRoute>
                } 
              />
              <Route 
                path="/menu" 
                element={
                  <PrivateRoute>
                    <Menu />
                  </PrivateRoute>
                } 
              />
              <Route 
                path="/cart" 
                element={
                  <PrivateRoute>
                    <Cart />
                  </PrivateRoute>
                } 
              />
              <Route 
                path="/order-tracking" 
                element={
                  <PrivateRoute>
                    <OrderTracking />
                  </PrivateRoute>
                } 
              />
              <Route 
                path="/profile" 
                element={
                  <PrivateRoute>
                    <Profile />
                  </PrivateRoute>
                } 
              />
              <Route 
                path="/order-confirmation" 
                element={
                  <PrivateRoute>
                    <OrderConfirmation />
                  </PrivateRoute>
                } 
              />
            </Routes>
          </div>
        </Router>
      </CartProvider>
=======
      <Router>
        <div className="App">
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/menu" element={<Menu />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/order-tracking" element={<OrderTracking />} />
          </Routes>
        </div>
      </Router>
>>>>>>> dedc6bf2bfc31cb5a0aaff2d59602e572141f0fd
    </AuthProvider>
  );
}

export default App;
