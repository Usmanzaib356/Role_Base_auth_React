import React, { useEffect } from 'react'
import { delete_cookie } from 'sfcookies'
import { Link } from 'react-router-dom'
import useAuth from '../hooks/useAuth'
function Logout() {


    const {setIsLogin} = useAuth()

   useEffect(()=>{
    delete_cookie("isLogin")
    setIsLogin(false)
    
   })
   


  return (
    <>
    <br />
    <br />
    <div className='text-center'>
       <h1> You are logout </h1>
       <br />
       <br />
       <Link to="/"> go back </Link>       
   </div>
    </>
  )
}

export default Logout