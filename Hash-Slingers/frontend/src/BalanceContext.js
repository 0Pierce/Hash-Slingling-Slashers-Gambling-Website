import React, { createContext, useState, useContext } from 'react';

const BalanceContext = createContext();

export const useBalance = () => useContext(BalanceContext);

export const BalanceProvider = ({ children }) => {
  const [balance, setBalance] = useState(() => parseFloat(localStorage.getItem('balance')) || 0);

  const updateBalance = (newBalance) => {
    setBalance(newBalance);
    localStorage.setItem('balance', newBalance);
  };

  return (
    <BalanceContext.Provider value={{ balance, updateBalance }}>
      {children}
    </BalanceContext.Provider>
  );
};
