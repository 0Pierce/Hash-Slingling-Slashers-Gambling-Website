import {React, useState, useEffect} from 'react'
import ReactDOM from 'react-dom/client'
import {
  BrowserRouter,
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Home from './pages/Homepage';
import Homepage from "./pages/Homepage";
import Contact from './pages/Contact';
import About from './pages/About';
import "./styles/App.css"




function App() {
  const mainRouter = createBrowserRouter([

    //Create routes
    {
      path: "/",
      element: <Homepage/>
    },
    //Route num2
    {
      path: "Contact",
      element: <Contact/>
    },
    {
      path: "About",
      element: <About/>
    },
  
  
  
  
  ])

  const[backendData, setBackendData] = useState([{}])

  useEffect(()=>{
    fetch("/api").then(response => response.json()).then(
      data=>{setBackendData(data)}
    )
  },[])

  return (
    <>
      <RouterProvider router={mainRouter}/>


      <h4>Data example</h4>
      {(typeof backendData.users === 'undefined') ?(
        <p>Loading...</p>
      ):(
        backendData.users.map((user,i)=>(
          <p key={i}>{user}</p>
        ))
      ) }

    

    </>
  )
}

export default App