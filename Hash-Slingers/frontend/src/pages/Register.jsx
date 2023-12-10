import {React, useState} from 'react'
import Header from '../components/Header.jsx'
import '../styles/Register.css'
import Pyramid from "../assets/svgs/pyramid.svg"
import { Link, useNavigate } from "react-router-dom";
import Footer from '../components/Footer.jsx'


function Register() {

    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [fullname, setFullname] = useState('');
    const [dateOfBirth, setDateOfBirth] = useState('');
    const navigate = useNavigate();

    const createAccount = async () => {
      if (fullname && username && password && email && dateOfBirth) {
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
                balance: 100
              }),
            });
      
          if (response.ok) {
            console.log('Account created successfully');
            alert('Account created successfully! You will be redirected to login.');
            navigate('/Login');
          } else {
            console.log('Account creation failed');
            alert('Failed to create account.');
          }
        } catch (error) {
            console.error('Error during account creation:', error);
            alert('An error occured. Please try again.');
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
              <form onSubmit={(e) => e.preventDefault()}>
                <div className="regFields">
                  <div className="names">
                    <input type="text" placeholder='Full Name' required onChange={e => setFullname(e.target.value)}/>
                  </div>
                  <input type="text" placeholder='Username' required onChange={e => setUsername(e.target.value)}/>
                  <input type="email" placeholder='Email' required onChange={e => setEmail(e.target.value)}/>
                  <input type="password" placeholder='Password' required onChange={e => setPassword(e.target.value)}/>
                  <input type="date" placeholder='Date of Birth' required onChange={e => setDateOfBirth(e.target.value)}/>
                </div>
                <div className="regBtn">
                  <button type="submit" onClick={createAccount}>Submit</button>
                </div>
                <div className="regLogin">
                  <Link to="/Login">Login</Link>
                </div>
              </form>
            </div>
          </div>
        </div>
        <Footer /> 
      </>
    );
    }

export default Register
