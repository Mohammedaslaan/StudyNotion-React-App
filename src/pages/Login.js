import React from 'react'
import Template from '../components/Template'
import loginImg from '../assets/login.png'

function login({setIsLoggedIn}) {
  return (
    <div className='scale-95'>
    <Template
      title="Welcome Back"
      desc1="build skills for today, tomorrow, and beyond."
      desc2="Education to future-proof your career."
      image={loginImg}
      formtyle="login"
      setIsLoggedIn={setIsLoggedIn}
    />
    </div>
  )
}

export default login