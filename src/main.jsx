import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom"
import Root from './components/Root/Root.jsx'
import AllArt from './components/AllArt.jsx'
import AddCraft from './components/AddCraft.jsx'
import MyArt from './components/MyArt.jsx'
import Login from './components/Login.jsx'
import Register from './components/Register.jsx'
import Home from './components/Home.jsx'


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <div className='flex justify-center items-center h-screen'>
    <h1 className='font-bold text-4xl text-center'>404 Page Not Found</h1>
  </div>,
  children:[
    {
      path:'/',
      element: <Home></Home>
    },
    {
      path:'/allArt',
      element: <AllArt></AllArt>
    },
    {
      path:'/addCraft',
      element: <AddCraft></AddCraft>
    },
    {
      path:'/myArt',
      element: <MyArt></MyArt>
    },
    {
      path:'/login',
      element: <Login></Login>
    },
    {
      path:'/register',
      element: <Register></Register>
    },
  
  ]
  
  }, 
  
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
