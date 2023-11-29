import {React, useState, useEffect} from 'react'
import Header from '../components/Header.jsx'
import '../styles/Login.css'
import Pyramid from "../assets/svgs/pyramid.svg"
import { performLogin } from "../logic/loginAuth.js";
import { Link } from "react-router-dom";
import UpdateBalance from "../logic/UpdateBalance.js"




function Login() {

    const[username,setUsername]=useState('');
    const[password,setPassword]=useState('');

const verifyLogin = () => {
    
    if(performLogin(username, password)){
        console.log("Login Sucessfull")
        localStorage.setItem('isLogged', true);

        //Passes username so you can pull the balance from the DB
        //UpdateBalance(username);

        window.location.reload();
    }else{
        alert('Invalid credentials')
        console.log("Login Failed")
    }


};
useEffect(() => {
    // Trigger a re-render of the Navigation component when localStorage changes
    window.dispatchEvent(new Event('storage'));
  }, []);


  return (
    <>
    <Header/>
    <div className="LoginBody">
    <span></span><span></span><span></span><span></span><span></span>
    <img src={Pyramid} alt=""/>
    <div className="LoginPanel">
        <h1>Login</h1>
        <div className="LoginInput">
        <form action="">
            <div className="lgnFields">
             
                
                <input type="text" placeholder='Username' onChange={e=>setUsername(e.target.value)}/>
                <input type="password" placeholder='Password' onChange={e=>setPassword(e.target.value)} />
            </div>
           
            <div className="loginBtn"><button type="button" value="Submit" onClick={verifyLogin}>Submit</button></div>
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