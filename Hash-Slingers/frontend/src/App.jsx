import {React, useState, useEffect} from 'react'
import ReactDOM from 'react-dom/client'
import {
  BrowserRouter,
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Home from './pages/Homepage';
import Homepage from "./pages/Homepage";
import AddFunds from './pages/Funds';
import Games from './pages/Games';
import Login from './pages/Login'
import Register from './pages/Register'
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
      path: "/AddFunds",
      element: <AddFunds/>
    },
    {
      path: "/Games",
      element: <Games/>
    },
    {
      path: "/Login",
      element: <Login/>
    },
    {
      path: "/Register",
      element: <Register/>
    }
  
  
  
  
  ])

  const[backendData, setBackendData] = useState([{}])

  useEffect(()=>{
    fetch("/api/user").then(response => response.json()).then(
      data=>{setBackendData(data)}
    )
  },[])
 
  return (
    <>
      
        <RouterProvider router={mainRouter}/>
      




    

    </>
  )
}

export default App