import React, { useState, useEffect } from 'react';
import Header from '../components/Header.jsx';
import '../styles/Funds.css';
import moneyTruck from "../assets/svgs/mnyTruck.svg";
import { getCurrentBalance, updateBalance } from "../logic/UpdateBalance.js";

function Funds() {
  const [inputAmount, setInputAmount] = useState('');
  const [balance, setBalance]=useState(0);
  
  useEffect(() => {
    const fetchBalance = async () => {
      try {
          const initialBalance = await getCurrentBalance();
          setBalance(initialBalance);
      } catch (error) {
          console.error('Error fetching balance:', error);
      }
  };
  fetchBalance();
}, []);

const handleUpdateBalance = async () => {
  const newBalance = balance + parseFloat(inputAmount);
  try {
      const updatedBalance = await updateBalance(newBalance);
      setBalance(updatedBalance);
      balance(localStorage.setItem(balance))
      setInputAmount('');
  } catch (error) {
      console.error('Error updating balance:', error);
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
  </>
);
}

export default Funds;