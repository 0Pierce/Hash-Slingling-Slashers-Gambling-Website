
import '../styles/Header.css'
import * as React from "react";
import { Link } from "react-router-dom";
function Header() {
  return (
    
    
    <div className="HeaderBody">
               <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/Contact">Contact</Link></li>
            <li><Link to="/About">About</Link></li>
        </ul>
       <div className="headerBackground">

       </div>
        
        
      
    
    </div>
    

    
    
  )
}

export default Header