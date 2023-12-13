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

  const resetBalance = () => {
    if (window.confirm("Are you sure you want to reset the balance?")) {
      updateBalance(0);
      alert("Balance has been reset to $0");
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
          {/* Positioned Reset Balance link below the Submit button */}
          <div className="reset-wrapper">
            <div className="reset-link" onClick={resetBalance}>
              <small>Reset Balance</small>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Funds;