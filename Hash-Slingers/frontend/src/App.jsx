import React,{useEffect,useState} from 'react'
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './pages/Homepage';
import Contact from './pages/Contact';
import About from './pages/About';

function App() {

  const[backendData, setBackendData] = useState([{}])

  useEffect(()=>{
    fetch("/api").then(response => response.json()).then(
      data=>{setBackendData(data)}
    )
  },[])

  return (
    <>

      <h4>Data example</h4>
      {(typeof backendData.users === 'undefined') ?(
        <p>Loading...</p>
      ):(
        backendData.users.map((user,i)=>(
          <p key={i}>{user}</p>
        ))
      ) }

<Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/" element={<Home backendData={backendData} />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </Router>

    </>
  )
}

export default App