import React from 'react'
import ReactDOM from 'react-dom/client'
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
import AuthProvider from './Provider/AuthProvider.jsx'
import PrivateRoute from './components/PrivateRoute/PrivateRoute.jsx'
import ViewDetails from './components/ViewDetails.jsx'
import About from './components/FooterPage/About.jsx'
import Contact from './components/FooterPage/Contact.jsx'
import UpdateMaterial from './components/UpdateMaterial.jsx'
import {  HelmetProvider } from 'react-helmet-async';


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
      element: <Home></Home>,
      loader: () => fetch('http://localhost:5000/material')
    },
    {
      path:'/allArt',
      element: <AllArt></AllArt>,
      loader: () =>fetch('http://localhost:5000/material')
    },
    {
      path:'/addCraft',
      element: <PrivateRoute><AddCraft></AddCraft></PrivateRoute>
    },
    {
      path:'/myArt',
      element: <PrivateRoute><MyArt></MyArt></PrivateRoute>,//loading data for the myArt component
      loader : () => fetch('http://localhost:5000/material')
    },
   
    {
      path:'/login',
      element: <Login></Login>
    },
    {
      path:'/register',
      element: <Register></Register>
    },
    {
      path:'/viewDetails/:id',
      element: <PrivateRoute><ViewDetails></ViewDetails></PrivateRoute>,
      loader: ({params}) => fetch(`http://localhost:5000/material/${params.id}`)
    },
    {
      path: '/aboutus',
      element:<About></About>,
    },
    {
      path: '/contact',
      element:<Contact></Contact>
    },
    {
      path: '/update/:id',
      element:<UpdateMaterial></UpdateMaterial>,
      loader: ({params})=> {
        console.log(params)
        return fetch(`http://localhost:5000/material/${params.id}`)
      }
    }, 

 
  ]
  
  }, 
  
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
        <HelmetProvider>
            <RouterProvider router={router} />
        </HelmetProvider>
    </AuthProvider>
  </React.StrictMode>,
)
