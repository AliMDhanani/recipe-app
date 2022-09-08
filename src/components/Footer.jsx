import React from "react";

const Footer = () => {
  return (
    <footer className="footer container">
      <div className="footer__section">
        <p className="title">FoodHeaven.com</p>
        <p>
          FoodHeaven is a place where you can please your appetite and soul with
          delicious recipes in all your favourite cousins. Plus we're FREE!
        </p>
        <p>&copy; 2021 | All Rights Reserved</p>
      </div>
      <div className="footer__section">
        <p className="title">Contact Us</p>
        <p>+44 1632 960855</p>
        <p>03 Wardour St, London</p>
      </div>
      <div className="footer__section">
        <p className="title">Socials</p>
        <p>Facebook</p>
        <p>Instagram</p>
        <p>Twitter</p>
      </div>
    </footer>
  );
};

export default Footer;
