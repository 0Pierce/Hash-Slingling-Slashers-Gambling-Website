import React from 'react'
import Header from '../components/Header.jsx'
import LandScreen from '../components/HomePageWelcome.jsx'
import '../styles/HomePage.css'
function Homepage() {
  return (
    <>
    <LandScreen></LandScreen>
    <Header></Header>
    <div className="HomepageBody">


    </div>
    </>
  )
}

export default Homepage