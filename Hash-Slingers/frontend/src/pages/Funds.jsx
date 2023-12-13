import React, { useState } from 'react';
import Header from '../components/Header.jsx';
import Footer from '../components/Footer.jsx';
import '../styles/Funds.css';
import moneyTruck from "../assets/svgs/mnyTruck.svg";
import { useBalance } from "../BalanceContext"; 

function Funds() {
  const [inputAmount, setInputAmount] = useState('');
  const { balance, updateBalance } = useBalance(); 

  const handleUpdateBalance = () => {
    const inputNumber = parseFloat(inputAmount);
    if (!isNaN(inputNumber) && inputNumber > 0) {
      const newBalance = balance + inputNumber;
      updateBalance(newBalance); 
      setInputAmount(''); 
      window.alert("Funds added!");
    } else {
      console.error('Invalid input amount');
      window.alert("Invalid amount entered. Please enter a positive number.");
    }
  };

  return (
    <>
      <Header />
      <div className="fundsBody">
        <img src={moneyTruck} alt="Money Truck" />
        <div className="addFundsPanel">
          <h1>Add funds</h1>
          <div className="fundInputs">
            <input
              type="number"
              placeholder="$ amount"
              value={inputAmount}
              onChange={e => setInputAmount(e.target.value)}
            />
            <button onClick={handleUpdateBalance}>Submit</button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Funds;