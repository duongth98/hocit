import React, { useState } from "react";
function Header() {
    return (
      <header className="header">
        <div className="logo">Logo</div>
        <div className="search-bar">
          <input type="text" placeholder="Search" />
        </div>
        <nav>
          <ul>
            <li>Home</li>
            <li>Features</li>
            <li>Testimonials</li>
            <li>Contact</li>
          </ul>
        </nav>
      </header>
    );
  }
  export default Header;