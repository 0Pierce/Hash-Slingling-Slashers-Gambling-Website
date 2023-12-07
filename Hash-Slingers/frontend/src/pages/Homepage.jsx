import React from 'react';
import Header from '../components/Header.jsx';
import LandScreen from '../components/HomePageWelcome.jsx';
import '../styles/HomePage.css';
import blob1 from "../assets/svgs/blob1.svg";
import blob2 from "../assets/svgs/blob2.svg";
import rouletteImg from "../assets/images/roulette.jpg";

function Homepage() {
  return (
    <>
      <LandScreen></LandScreen>
      <Header></Header>
      <div className="HomepageBody">
        <img src={blob1} alt="" className='blob1' />

        <div className="welcomeMessage">
          <h2>Welcome to Our Gaming Site!</h2>
          <p>Enjoy the best games and win big!</p>
        </div>

        <div className="homepageContent">
          <div className="gamesList">
            <h1>Our games</h1>
            <div className="gameContainer">
              <div className="game">
                <div className="gameBack"></div>
                <h1>Coin Toss</h1>
                <img src={rouletteImg} alt="Image" />
                <p>Try your luck with our exciting Coin Toss game. A simple yet thrilling way to test your fortune!</p>
              </div>
              <div className="game">
                <div className="gameBack"></div>
                <h1>Roulette</h1>
                <img src={rouletteImg} alt="Image" />
                <p>Experience the classic Roulette. Spin the wheel and let fate decide your winnings!</p>
              </div>
              <div className="game">
                <div className="gameBack"></div>
                <h1>Horse Race</h1>
                <img src={rouletteImg} alt="Image" />
                <p>Join the excitement of our Horse Race game. Bet on your favorite and watch the race unfold!</p>
              </div>
            </div>
          </div>

          <div className="siteInfo">
            <h1>Jackpot</h1>
          </div>
        </div>
        <img src={blob2} alt="" className='blob2' />

        <div className="footer">
          <p>© 2023 HASH-SLINGERS. All rights reserved.</p>
        </div>
      </div>

      <div className="footer">
        <div className="footer-content">
          <div className="footer-section about">
            <h2>Hash Slingers</h2>
            <p>Discover the thrill of gaming with us. Join now and start your winning streak!</p>
            <div className="contact">
              <span><i className="fas fa-phone"></i>&nbsp; 123-456-7890</span>
              <span><i className="fas fa-envelope"></i>&nbsp; info@hashslingers.com</span>
            </div>
            <div className="socials">
              <a href="#"><i className="fab fa-TikTok"></i></a>
              <a href="#"><i className="fab fa-instagram"></i></a>
              <a href="#"><i className="fab fa-twitter"></i></a>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>© 2023 Hash Slingers. All rights reserved.</p>
        </div>
      </div>
    </>
  )
}

export default Homepage;
