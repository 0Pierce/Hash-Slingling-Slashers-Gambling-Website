import React, { useState, useEffect } from 'react';
import Header from '../components/Header.jsx';
import Footer from '../components/Footer.jsx';
import '../styles/Funds.css';
import moneyTruck from "../assets/svgs/mnyTruck.svg";
import { getCurrentBalance, updateBalance } from "../logic/UpdateBalance.js";

function Funds() {
  const [inputAmount, setInputAmount] = useState('');
  const [balance, setBalance]=useState(0);
  
  useEffect(() => {
    const fetchAndSetBalance = async () => {
      try {
          const initialBalance = await getCurrentBalance();
          setBalance(initialBalance); 
      } catch (error) {
          console.error('Error fetching balance:', error);
      }
    };
    fetchAndSetBalance();
  }, []);

const handleUpdateBalance = async () => {
  const newBalance = balance + parseFloat(inputAmount);
  try {
      const updatedBalance = await updateBalance(newBalance);
      setBalance(updatedBalance);
      localStorage.setItem('balance', updatedBalance);
      window.dispatchEvent(new Event('balanceUpdated'));
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
      <Footer />
  </>
);
}

export default Funds;