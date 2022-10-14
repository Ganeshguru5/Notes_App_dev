import React from 'react'
import "../styles/Login.css"
import loginCover from '../assets/loginCover.jpg'
import { Link } from 'react-router-dom'
export default function LoginPage() {
  return (
    <div className='LoginContainer'>
      <div className='onehalf'>
        <p className='LoginHeader'>Login</p>
        <p className='LoginHeader'>Welcome Back !</p>
        <p className='desc'>See your growth and get consulting support ...</p>
        <p className='inputHead'>Email*</p>
        <input placeholder='mail@website.com' className='input'/>
        <p className='inputHead'>Password*</p>
        <input placeholder='Min 8 character' type='password' className='input'/>
        <p className='Forgot'>Forgot password</p>
        <Link to='/Homepage'><button className='Loginbtn' >Login</button></Link>
      </div>
     
    </div>
  )
}
