import {React, useState} from 'react'
import Header from '../components/Header.jsx'
import '../styles/Login.css'
import Pyramid from "../assets/svgs/pyramid.svg"
import { Link } from "react-router-dom";

function Login() {

    const[username,setUsername]=useState('');
    const[password,setPassword]=useState('');

  return (
    <>
    <Header/>
    <div className="LoginBody">
    
    <img src={Pyramid} alt=""/>
    <div className="LoginPanel">
        <h1>Login</h1>
        <div className="LoginInput">
        <form action="">
            <div className="lgnFields">
             
                
                <input type="text" placeholder='Username' onChange={e=>setUsername(e.target.value)}/>
                <input type="password" placeholder='Password' onChange={e=>setPassword(e.target.value)} />
            </div>
           
            <div className="loginBtn"><input className='btnSend' type="submit" value="Submit" /></div>
            <div className="lgnReg"><Link to="/Register">Dont have an account?</Link></div>

        </form>
        
        </div>
      
    </div>

    
    </div>
    <div className="LoginSand"></div>
    </>
  )
}

export default Login