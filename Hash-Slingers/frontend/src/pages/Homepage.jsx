import React from 'react'
import Header from '../components/Header.jsx'
import LandScreen from '../components/HomePageWelcome.jsx'
import '../styles/HomePage.css'
import Pyramid from "../assets/svgs/pyramid.svg"

function Homepage() {
  return (
    <>
    <LandScreen></LandScreen>
    <Header></Header>
    <div className="HomepageBody">
      <h1>HomePage</h1>
      <img src={Pyramid} alt="" />

    </div>
    </>
  )
}

export default Homepage