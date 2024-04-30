import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom';
import { AuthProvider } from './components/context/auth-context.jsx';
import { NavProvider } from './components/context/nav-context.jsx';

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <NavProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </NavProvider>
    </AuthProvider>
  </React.StrictMode>
);
