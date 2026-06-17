import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

import {
  FaFacebook,
  FaInstagram,
  FaXTwitter
} from "react-icons/fa6";

function Footer() {
  return (
    <footer className="footer">

      <div className="container footer-container">

        {/* Logo and Description */}

        <div className="footer-column">

          <img
            src={logo}
            alt="Little Lemon Logo"
            className="footer-logo"
          />

          <p>
            Fresh Mediterranean flavors served with passion.
          </p>

        </div>


        {/* Navigation */}

        <div className="footer-column">

          <h3>Navigation</h3>

          <ul>

            <li><Link to="/">Home</Link></li>

            <li><Link to="/about">About</Link></li>

            <li><Link to="/menu">Menu</Link></li>

            <li><Link to="/reservations">Reservations</Link></li>

            <li><Link to="/order-online">Order Online</Link></li>

          </ul>

        </div>


        {/* Contact */}

        <div className="footer-column">

          <h3>Contact</h3>

          <ul>

            <li>123 Main Street</li>

            <li>Chicago, Illinois</li>

            <li>+1 (312) 555-1234</li>

            <li>info@littlelemon.com</li>

          </ul>

        </div>


        {/* Social Media */}

        <div className="footer-column">

          <h3>Social Media</h3>

          <div className="social-icons">

            <a href="/">
              <FaFacebook />
            </a>

            <a href="/">
              <FaInstagram />
            </a>

            <a href="/">
              <FaXTwitter />
            </a>

          </div>

        </div>

      </div>

      <div className="footer-bottom">
        <p>© 2026 Little Lemon. All rights reserved.</p>
      </div>

    </footer>
  );
}

export default Footer;