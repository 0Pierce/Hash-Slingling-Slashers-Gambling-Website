import {React, useState} from 'react'
import Header from '../components/Header.jsx'
import '../styles/Funds.css'
import moneyTruck from "../assets/svgs/mnyTruck.svg"
import GetBalance from "../logic/UpdateBalance.js"



function Funds() {

  const[balance,setBalance]=useState('');

  const updateBalance = () => {
  

    //Send new balance to DB, or simply add it here if its easier
    //PS: Same file would be used to display the bal in header
    GetBalance(balance)

  }
  

  return (
    <>
    <Header/>
    <div className="fundsBody">
        <span></span><span></span><span></span><span></span><span></span>
    <img src={moneyTruck} alt="" />
        <div className="addFundsPanel">
            <h1>Add funds</h1>
            <div className="fundInputs">
                <input type="number" placeholder='$ amount' onChange={e=>setBalance(e.target.value)} />
                <button>Submit</button>
            </div>
           
        </div>
    </div>
    
    
    </>
  )
}

export default Funds