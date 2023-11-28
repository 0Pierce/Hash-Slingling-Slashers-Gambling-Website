import {React, useState} from 'react'
import Header from '../components/Header.jsx'
import '../styles/Register.css'
import Pyramid from "../assets/svgs/pyramid.svg"
import { Link } from "react-router-dom";

function Register() {

    const[fName,setFName]=useState('');
    const[lName,setLName]=useState('');
    const[username,setUsername]=useState('');
    const[password,setPassword]=useState('');
    const[email,setEmail]=useState('');
  

    const createAccount = () =>{
        if(fName.length != 0 && lName.length != 0 && username.length != 0 && password.length != 0 && email.length != 0){
            console.log('Account created')
            //Save into DB here
        }
        else{
            console.log('Account creation failed')
            alert('Missing input')
            
        }
    }

  return (
    <>
    <Header/>
    <div className="regBody">
    
    <img src={Pyramid} alt=""/>
    <div className="regPanel">
        <h1>Register</h1>
        <div className="regInput">
        <form action="">
            <div className="regFields">
                <div className="names">
                    <input type="text" placeholder='First Name' id='fName' onChange={e=>setFName(e.target.value)}/>
                    <input type="text" placeholder='Last Name' id='lName' onChange={e=>setLName(e.target.value)}/>
                </div>
                
                <input type="text" placeholder='Username' id='username' onChange={e=>setUsername(e.target.value)} />
                <input type="email" placeholder='Email' id='email'  onChange={e=>setEmail(e.target.value)}/>
                <input type="text" placeholder='Password' id='pass' onChange={e=>setPassword(e.target.value)}/>
            </div>
           
            <div className="regBtn"><button type="button" value="Submit" onClick={createAccount}>Submit</button></div>
            <div className="regLogin"><Link to="/Login">Login</Link></div>

        </form>
        
        </div>
      
    </div>

    
    </div>
   
    
    </>
  )
}

export default Register