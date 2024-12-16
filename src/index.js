import React from 'react';
import ReactDOM from 'react-dom/client';
<<<<<<< HEAD
import './index.css';
import App from './App';
import { AuthProvider } from './context/AuthContext';
import { BrowserRouter } from 'react-router-dom';
=======
import { GoogleOAuthProvider } from '@react-oauth/google';
import './index.css';
import App from './App';
>>>>>>> dedc6bf2bfc31cb5a0aaff2d59602e572141f0fd

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
<<<<<<< HEAD
    <BrowserRouter>
      <AuthProvider>
        <App />
      </AuthProvider>
    </BrowserRouter>
=======
    <GoogleOAuthProvider clientId="YOUR_GOOGLE_CLIENT_ID">
      <App />
    </GoogleOAuthProvider>
>>>>>>> dedc6bf2bfc31cb5a0aaff2d59602e572141f0fd
  </React.StrictMode>
);
