import React, { useState } from "react";
function Footer() {
    return (
      <footer className="footer">
        <p>&copy; 2023 My Company. All rights reserved.</p>
        <div className="social-media">
          <a href="#">Facebook</a>
          <a href="#">Twitter</a>
          <a href="#">Instagram</a>
        </div>
        <div className="contact-info">
          <p>Email: info@mycompany.com</p>
          <p>Phone: 123-456-7890</p>
        </div>
      </footer>
    );
}
export default Footer;