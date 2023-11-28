import React from 'react'
import Header from '../components/Header.jsx'
import LandScreen from '../components/HomePageWelcome.jsx'
import '../styles/HomePage.css'
import blob1 from "../assets/svgs/blob1.svg"
import blob2 from "../assets/svgs/blob2.svg"

function Homepage() {
  return (
    <>
    <LandScreen></LandScreen>
    <Header></Header>
    <div className="HomepageBody">
      <div className="homepageBack">
      <img src={blob1} alt="" className='blob1' />
      <div className="homepageContent">
      <h1>Our games</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus reprehenderit porro ipsum velit inventore neque aperiam enim voluptas, commodi fugiat tempore eius, earum voluptatum explicabo consectetur ducimus alias. Debitis, ea.</p>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis odio autem id doloribus, ducimus illo, culpa illum officia ullam earum dolorem? Debitis, sunt? Culpa eligendi voluptate in repellat possimus incidunt?</p>

      </div>
      




    
    <img src={blob2} alt="" className='blob2' />
      </div>
    </div>
    </>
  )
}

export default Homepage