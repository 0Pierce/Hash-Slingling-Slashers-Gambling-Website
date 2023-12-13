
import '../styles/Header.css'
import {React, useState, useEffect} from 'react'
import { Link, useNavigate } from "react-router-dom";
import fundLogo from "../assets/svgs/fundIcon.svg"
import { useBalance } from '../BalanceContext';

const Navigation  = () => {
  const [isLogged, setIsLogged] = useState(() => localStorage.getItem('isLogged') === 'true');
  const navigate = useNavigate();

  useEffect(() => {
    // Update state
    const handleStorageChange = () => {
      setIsLogged(localStorage.getItem('isLogged') === 'true');
    };

    
    window.addEventListener('storage', handleStorageChange);

    //Cleanup
    return () => {
      window.removeEventListener('storage', handleStorageChange);
    };
  }, []);

  const handleSignOut = () => {
    console.log('Logged Out');
    localStorage.setItem('isLogged', false);
    setIsLogged(false);
    navigate('/Login');
  };

  return (
    <div className="navs">
        <ul>
            <li><Link to="/">Home</Link></li>
            {isLogged && (<li><Link to="/Games">Games</Link></li>)}
            {isLogged && (<li><Link to="/AddFunds">Add Funds</Link></li>)}
            {isLogged ? (<li><Link to="/Login" onClick={handleSignOut}>SignOut</Link></li>)  : (<li><Link to="/Login">Login</Link></li> )}   
        </ul>
      </div>
  );
};

const Balance = () => {
  const { balance } = useBalance(); 
  const [isLogged, setIsLogged] = useState(() => localStorage.getItem('isLogged') === 'true');

  return (
    <div className="balance">
      {isLogged ? (
        <>
          <ul>
            <li><img src={fundLogo} alt="Fund Icon" /></li>
            <li>${balance.toFixed(0)}</li>
          </ul>
        </>
      ) : (
        <ul><li></li><li></li></ul>
      )}
    </div>
  );
};

function Header() {
  return (
    <div className="HeaderBody">
      <Navigation />
      <Balance />
      <div className="headerBackground"></div>
    </div>
  );
}

export default Header;