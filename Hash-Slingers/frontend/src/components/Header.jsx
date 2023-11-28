
import '../styles/Header.css'
import {React, useState, useEffect} from 'react'
import { Link } from "react-router-dom";



const Navigation  = () => {
  const [isLogged, setIsLogged] = useState(() => localStorage.getItem('isLogged') === 'true');

  useEffect(() => {
    // Update state when localStorage changes in any tab of the same browser
    const handleStorageChange = () => {
      setIsLogged(localStorage.getItem('isLogged') === 'true');
    };

    // Subscribe to the storage event
    window.addEventListener('storage', handleStorageChange);

    // Clean up the subscription when the component unmounts
    return () => {
      window.removeEventListener('storage', handleStorageChange);
    };
  }, []);

  const logout = () => {
    console.log('Logged Out');
    localStorage.setItem('isLogged', false);
    setIsLogged(false);
    window.location.reload();
  };

  return (
  <>
        <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/Games">Games</Link></li>
            <li><Link to="/Contact">Contact</Link></li>
            {isLogged ? (<li><Link to="/Login" onClick={logout}>SignOut</Link></li>)  : (<li><Link to="/Login">Login</Link></li> )}
            
        </ul>

  </>
  );
};



function Header() {
  return (
    
    
    <div className="HeaderBody">
        <Navigation/>
       <div className="headerBackground">

       </div>
        
        
      
    
    </div>
    

    
    
  )
}

export default Header