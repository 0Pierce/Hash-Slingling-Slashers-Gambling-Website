import React from 'react'
import '../styles/HomePageWelcome.css'
import Pyramid from "../assets/svgs/pyramid.svg"

function HomePageWelcome() {

  function show(e){
    console.log("Ran")
      if(e.target.id === 'Pyramid'){
        console.log("Inside")
        document.querySelector('.hidden').classList.add('show');
      }
  }



  return (
    <>
    <div className="HPWelcomeBody">
    <section className='hidden'><h1 >Give us your money!</h1></section> 
      
      <div className="landPyramid">
          
        <img src={Pyramid} alt=""  onMouseEnter={show} id='Pyramid'/>
         </div>
    
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