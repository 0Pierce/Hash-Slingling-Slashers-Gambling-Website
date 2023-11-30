import {React, useState} from 'react'
import Header from '../components/Header.jsx'
import '../styles/Register.css'
import Pyramid from "../assets/svgs/pyramid.svg"
import { Link } from "react-router-dom";

function Register() {

    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [fullname, setFullname] = useState('');
    const [dateOfBirth, setDateOfBirth] = useState('');

  

    const createAccount = async () => {
        if (fullname.length !== 0 && username.length !== 0 && password.length !== 0 && email.length !== 0 && dateOfBirth.length !==0) {
          try {
            const response = await fetch('/api/user', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({
                username,
                password,
                email,
                fullname,
                dateOfBirth,
              }),
            });
      
            if (response.ok) {
              console.log('Account created successfully');
              // Optionally, redirect to login page or handle success
            } else {
              console.log('Account creation failed');
              alert('Failed to create account');
            }
          } catch (error) {
            console.error('Error during account creation:', error);
          }
        } else {
          console.log('Account creation failed');
          alert('Missing input');
        }
      };

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
                    <input type="text" placeholder='Full Name' id='fullname' onChange={e=>setFullname(e.target.value)}/>
                </div>
                
                <input type="text" placeholder='Username' id='username' onChange={e=>setUsername(e.target.value)} />
                <input type="email" placeholder='Email' id='email'  onChange={e=>setEmail(e.target.value)}/>
                <input type="text" placeholder='Password' id='pass' onChange={e=>setPassword(e.target.value)}/>
                <input type="text" placeholder='Date of Birth' id='dob' onChange={e=>setDateOfBirth(e.target.value)}/>
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