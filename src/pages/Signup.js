import React from 'react'
import signupImg from '../assets/signup.png'
import Template from '../components/Template'
function Signup({setIsLoggedIn}) {
  return (
    <div className='scale-95'>
    <Template
    title="Join the millions learning to code with StudyNotion for free"
    desc1="build skills for today, tomorrow, and beyond."
    desc2="Education to future-proof your career."
    image={signupImg}
    formtyle="signup"
    setIsLoggedIn={setIsLoggedIn}
  />
  </div>
  )
}

export default Signup