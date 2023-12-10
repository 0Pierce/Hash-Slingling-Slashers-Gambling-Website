import { React, useState, useEffect } from 'react';
import Header from '../components/Header.jsx';
import '../styles/Login.css';
import Pyramid from '../assets/svgs/pyramid.svg';
import { performLogin } from '../logic/loginAuth.js';
import { Link, useNavigate } from 'react-router-dom';
import UpdateBalance from '../logic/UpdateBalance.js';
import Footer from '../components/Footer.jsx'

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const verifyLogin = async () => {
    try {
      const response = await fetch('/auth/signin', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username,
          password,
        }),
      });
  
      if (response.ok) {
        const data = await response.json();
        console.log('Login Successful', data);
  
        localStorage.setItem('isLogged', true);
        localStorage.setItem('token', data.token);

        navigate('/');
  
        window.location.reload();
      } else {
        console.log('Login Failed');
        alert('Invalid credentials');
      }
    } catch (error) {
      console.error('Error during login', error);
      alert('Error during login');
    }
  };

  useEffect(() => {
    window.dispatchEvent(new Event('storage'));
  }, []);

  return (
    <>
      <Header />
      <div className="LoginBody">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <img src={Pyramid} alt="" />
        <div className="LoginPanel">
          <h1>Login</h1>
          <div className="LoginInput">
            <form action="">
              <div className="lgnFields">
                <input type="text" placeholder="Username" onChange={(e) => setUsername(e.target.value)} />
                <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
              </div>
              <div className="loginBtn">
                <button type="button" value="Submit" onClick={verifyLogin}>
                  Submit
                </button>
              </div>
              <div className="lgnReg">
                <Link to="/Register">Don't have an account?</Link>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div className="LoginSand"></div>
      <Footer /> 
    </>
  );
}

export default Login;
