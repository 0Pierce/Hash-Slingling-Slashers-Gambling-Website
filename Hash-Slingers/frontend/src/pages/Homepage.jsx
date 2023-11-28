import React from 'react'
import Header from '../components/Header.jsx'
import LandScreen from '../components/HomePageWelcome.jsx'
import '../styles/HomePage.css'
import blob1 from "../assets/svgs/blob1.svg"
import blob2 from "../assets/svgs/blob2.svg"
import rouletteImg from "../assets/images/roulette.jpg"
function Homepage() {



  return (
    <>
    <LandScreen></LandScreen>
    <Header></Header>
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
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatum ipsum rem consequatur consectetur provident molestias a eos libero porro distinctio, voluptates dolore saepe consequuntur atque. Excepturi culpa omnis beatae ratione.</p>
            </div>
            <div className="game">
            <div className="gameBack"></div>
              <h1>Roulette</h1>
              <img src={rouletteImg} alt="Image" />
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Enim sed ea deleniti perferendis dicta iste reiciendis eos esse. Perspiciatis labore laboriosam molestias sint delectus corrupti fuga tempore necessitatibus error consectetur?</p>
            </div>
            <div className="game">
            <div className="gameBack"></div>
              <h1>Horse Race</h1>
              <img src={rouletteImg} alt="Image" />
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas perferendis a totam? Similique quos, ut nisi, quaerat nemo quo ad voluptatibus quam sapiente quibusdam asperiores veritatis a officiis eum dicta!</p>
            </div>
          </div>
        </div>
     
      <div className="siteInfo">
        <h1>Jackpot</h1>
      </div>
      </div>
    <img src={blob2} alt="" className='blob2' />
     
    </div>
    </>
  )
}

export default Homepage