import { useState } from 'react'
//import Login from './Loginpage/login'
import Landing from './Landingpage/land'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import LoginForm from './Loginpage/login'
import Register from './Registerpage/register'
import Home from './Homepage/home'
//import Register from './Registerpage/register' 
//import Homepage from './Homepage/home'
//import HPanels from './Spages/Theme/theme'
//import H1Panels from './Spages/Food/food'
//import H2Panels from './Spages/Photo/photo'
//import H3Panels from './Spages/Mehendi/Mehen'
//import H4Panels from './Spages/Cake/cake'
//import CartPage from './Cart/cart'
//import Wishpage from './Wish/wish'
//import ProfilePage from './Profile/profile'

function App() {
  const router=createBrowserRouter([
    {
      path:"/",
      element:<Landing/>
    },
    {
      path:"/login",
      element:<LoginForm/>
    },
    {
      path:"/register",
      element:<Register/>
    },
    {
      path:"/home",
      element:<Home/>
    },

  ])

  return (
    <div>
      <RouterProvider router={router}>

      </RouterProvider>
    </div>
  )
}

export default App
