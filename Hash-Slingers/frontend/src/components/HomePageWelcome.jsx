import React from 'react'
import '../styles/HomePageWelcome.css'
import Pyramid from "../assets/svgs/pyramid.svg"
function HomePageWelcome() {
  return (
    <>
    <div className="HPWelcomeBody">
      <div className="landPyramid"> <img src={Pyramid} alt="" /></div>
   
      <section>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </section>
      <div className="HPWelcomeBodyBackground">
      
      </div>
    </div>
    
    </>
  )
}

export default HomePageWelcome