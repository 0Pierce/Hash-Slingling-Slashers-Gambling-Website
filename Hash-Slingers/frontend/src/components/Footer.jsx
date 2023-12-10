import React from 'react';
import '../styles/footer.css';

function Footer() {
  return (
    <footer className="Footer">
      <div className="footer-content">
        <h3>Hash Slingers</h3>
        <p>Bringing you the most exciting and engaging gaming experiences. Explore our wide range of games and join our gaming community!</p>
      </div>
      <div className="footer-bottom">
        <p>Connect with us:</p>
        <div className="social-icons">
          <a href="https://www.tiktok.com">TikTok</a> |
          <a href="https://www.instagram.com">Instagram</a>| 
          <a href="https://www.twitter.com">Twitter</a>
        </div>
        <p>© 2023 Hash Slingers. All rights reserved.</p>
        <p><a href="#privacy">Privacy Policy</a> | <a href="#terms">Terms of Service</a></p>
      </div>
    </footer>
  );
}

export default Footer;