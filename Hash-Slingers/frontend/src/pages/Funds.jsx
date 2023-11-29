import React from 'react'
import Header from '../components/Header.jsx'
import '../styles/Funds.css'
import moneyTruck from "../assets/svgs/mnyTruck.svg"

function Funds() {
  return (
    <>
    <Header/>
    <div className="fundsBody">
        <span></span><span></span><span></span><span></span><span></span>
    <img src={moneyTruck} alt="" />
        <div className="addFundsPanel">
            <h1>Add funds</h1>
            <div className="fundInputs">
                <input type="number" placeholder='$ amount' />
                <button>Submit</button>
            </div>
           
        </div>
    </div>
    
    
    </>
  )
}

export default Funds