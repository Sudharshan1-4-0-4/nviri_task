import React from 'react';
import { useNavigate } from 'react-router-dom';
import './nav.css';

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <nav className="navbar">
      <div className="logo">Appliance Repair</div>
      <div className="nav-buttons">
        <button onClick={() => navigate('/login?type=user')}>User Login</button>
        <button onClick={() => navigate('/login?type=admin')}>Admin Login</button>
      </div>
    </nav>
  );
};

export default Navbar;
