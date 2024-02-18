import React from 'react';
import './../styles/Sidebar.css';
import logo from './../images/logo.jpg';

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="menu-item">
        <img src={logo} alt="icon" />
        <span>Home</span>
      </div>
      {/* Repeat for other menu items */}
    </div>
  );
}

export default Sidebar;