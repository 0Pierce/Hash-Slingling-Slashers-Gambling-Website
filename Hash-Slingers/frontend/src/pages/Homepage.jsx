import React from 'react'
import Header from '../components/Header.jsx'
import LandScreen from '../components/HomePageWelcome.jsx'
import '../styles/HomePage.css'
import blob1 from "../assets/svgs/blob1.svg"
import blob2 from "../assets/svgs/blob2.svg"
import rouletteImg from "../assets/images/roulette.jpg"
import Footer from '../components/Footer.jsx'

function Homepage() {
  return (
    <>
      <LandScreen />
      <Header />
      <div className="HomepageBody">
        <img src={blob1} alt="" className='blob1' />
        <div className="homepageContent">
          <div className="gamesList">
            <h1>Our games</h1>
            <div className="gameContainer">
              <div className="game">
                <div className="gameBack"></div>
                <h1>Coin Toss</h1>
                <img src={rouletteImg} alt="Image" />
                <p>Experience the thrill of the Coin Toss! A simple yet exciting game where your luck is tested with a flip of a coin.</p>
              </div>
              <div className="game">
                <div className="gameBack"></div>
                <h1>Roulette</h1>
                <img src={rouletteImg} alt="Image" />
                <p>Join the Roulette frenzy! Spin the wheel and let fortune decide your fate in this classic game of chance.</p>
              </div>
              <div className="game">
                <div className="gameBack"></div>
                <h1>Horse Race</h1>
                <img src={rouletteImg} alt="Image" />
                <p>Get in on the action with our Horse Race game. Bet on your favorite and watch as they gallop towards victory.</p>
              </div>
            </div>
          </div>
        </div>
        <img src={blob2} alt="" className='blob2' />
      </div>
      <Footer /> 
    </>
  )
}

export default Homepage
