
import '../styles/Header.css'
import {React, useState} from 'react'
import { Link } from "react-router-dom";



const Navigation = () => {
  const [isLogged, setIsLogged] = useState(false);
  return (
  <>
        <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/Contact">Contact</Link></li>
            <li><Link to="/About">About</Link></li>
            {isLogged ? (<li><Link to="/">SignOut</Link></li>) : (<li><Link to="/Login">Login</Link></li> )}
            
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