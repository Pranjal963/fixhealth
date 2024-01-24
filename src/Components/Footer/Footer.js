import React from 'react';
import "./footer.css"
const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h2>About Us</h2>
          <p>Your description about your company goes here.</p>
        </div>
        <div className="footer-section">
          <h2>Home</h2>
          <p>Visit our homepage for more information.</p>
        </div>
        <div className="footer-section">
          <h2>Contact</h2>
          <p>Email: contact@example.com</p>
          <p>Phone: +1 (123) 456-7890</p>
        </div>
        <div className="footer-section">
          <h2>Follow Us</h2>
          <p>Instagram: @your_instagram_id</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
