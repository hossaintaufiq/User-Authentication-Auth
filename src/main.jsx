import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import MainLayout from './Layouts/MainLayout/MainLayout.jsx'
import Home from './Pages/Home.jsx'
import Login from './Components/Login/Login'
import Register from './Components/Register/Register'


const myReactRouter = createBrowserRouter([
{
  path: "/",
  element: <MainLayout></MainLayout>,
  children: [
    {
      path: "/",
      element: <Home></Home>
    },
    {
     path: "/login",
     element: <Login></Login>  
    },
    {
      path: "/register",
      element: <Register></Register>
    }
  ]
}
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>

    <RouterProvider router={myReactRouter}>

    </RouterProvider>
    
  </React.StrictMode>,
)
