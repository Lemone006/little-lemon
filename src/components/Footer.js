function Footer() {
  return (
    <footer className="footer">

      <div className="container footer-container">

        <div className="footer-column">
          <h3>Little Lemon</h3>

          <p>
            A family-owned Mediterranean restaurant
            located in Chicago.
          </p>
        </div>

        <div className="footer-column">

          <h4>Navigation</h4>

          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Menu</li>
            <li>Reservations</li>
          </ul>

        </div>

        <div className="footer-column">

          <h4>Contact</h4>

          <p>info@littlelemon.com</p>

          <p>+1 (555) 123-4567</p>

          <p>Chicago, Illinois</p>

        </div>

        <div className="footer-column">

          <h4>Social Media</h4>

          <p>Facebook</p>

          <p>Instagram</p>

          <p>Twitter</p>

        </div>

      </div>

      <div className="footer-bottom">

        <p>
          © 2026 Little Lemon. All Rights Reserved.
        </p>

      </div>

    </footer>
  );
}

export default Footer;