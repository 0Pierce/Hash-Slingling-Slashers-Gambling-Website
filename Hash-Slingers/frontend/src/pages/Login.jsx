import { React, useState, useEffect } from 'react';
import Header from '../components/Header.jsx';
import '../styles/Login.css';
import Pyramid from '../assets/svgs/pyramid.svg';
import { performLogin } from '../logic/loginAuth.js';
import { Link, useNavigate } from 'react-router-dom';
import UpdateBalance from '../logic/UpdateBalance.js';

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

        // You may want to redirect or handle success differently here
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
    // Trigger a re-render of the Navigation component when localStorage changes
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

      <div className="footer">
        <div className="footer-content">
          <div className="footer-section about">
            <h2>Hash Slingers</h2>
            <p>Discover the thrill of gaming with us. Join now and start your winning streak!</p>
            <div className="contact">
              <span><i className="fas fa-phone"></i>&nbsp; 123-456-7890</span>
              <span><i className="fas fa-envelope"></i>&nbsp; info@hashslingers.com</span>
            </div>
            <div className="socials">
              <a href="#"><i className="fab fa-TikTok"></i></a>
              <a href="#"><i className="fab fa-instagram"></i></a>
              <a href="#"><i className="fab fa-twitter"></i></a>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>© 2023 Hash Slingers. All rights reserved.</p>
        </div>
      </div>

    </>
  );
}

export default Login;
