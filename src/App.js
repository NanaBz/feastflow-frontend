import React from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import { CartProvider } from './context/CartContext';
import PrivateRoute from './components/PrivateRoute';
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
            <Navbar />
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/login" component={Login} />
              <Route path="/register" component={Register} />
              <Route path="/dashboard" component={Dashboard} />
              <Route path="/menu" component={Menu} />
              <Route path="/cart" component={Cart} />
              <Route path="/profile" component={Profile} />
              <Route path="/order-tracking" component={OrderTracking} />
            </Switch>
          </div>
        </Router>
      </CartProvider>
    </AuthProvider>
  );
}

export default App;
