
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { AiOutlineEyeInvisible,AiOutlineEye } from 'react-icons/ai';
import { toast } from 'react-hot-toast';

function LoginForm({setIsLoggedIn}) {
    const navigate = useNavigate();
    const [formData,setFormData] = useState({
        email:"",password:""
    })
    const [showPassword,setShowPassword] = useState(false);
    function changeHandler(event){
        setFormData((prevData)=>(
            {
                ...prevData ,
                [event.target.name]:event.target.value,
            }
        ))
    }
    function submitHandler(event){
        event.preventDefault();
        setIsLoggedIn(true);
        toast.success("Logged In")
        navigate("/dashboard")
        const finalAccountData = {
            ...formData,
        }
        console.log("printing account data ",finalAccountData);
        

    }
  return (
    <form onSubmit={submitHandler} className='flex flex-col
    w-full gap-y-4 mt-6'> 
         <label className='w-full'>
            <p className='text-richblack-5 mb-1 font-semibold
            leading-[1.375rem] text-[0.85rem]'>Email Address
            <sup className='text-pink-200'>*</sup></p>
            <input className='bg-richblack-800 rounded-[0.5rem]
            text-richblack-5 w-full p-[12px]'
            required type='email'
             value={formData.email}
            onChange={changeHandler}
            placeholder='Enter Email Address'
            name='email'
            />
         </label>
         <label>
            <div className='flex flex-col relative'>
            <p className='text-richblack-5 mb-1 font-semibold
            leading-[1.375rem] text-[0.85rem]'>Password <sup
            className='text-pink-200'>*</sup></p>
            <input className='bg-richblack-800 rounded-[0.5rem]
            text-richblack-5 w-full p-[12px] ' 
             required type={showPassword ? ("text") : ("password")}
             value={formData.password}
            onChange={changeHandler}
            placeholder='Enter Password'
            name='password'
            />
            
            <span className='absolute right-3 top-[55%] cursor-pointer'
             onClick={()=>{setShowPassword( (prev)=>!prev)}}>
                {showPassword ? (<AiOutlineEyeInvisible/>):(<AiOutlineEye/>)}
            </span>
            </div>
            <Link to="#"  >
                <p className='text-xs text-medium justify-end flex text-blue-400'>Forgot Password</p>
            </Link>
         </label>

        
         <button className='w-full bg-yellow-50
         rounded-[8px] font-medium text-black px-[12px] py-[8px]'>
            <p>Sign In</p>
         </button>
    </form>
  )
}

export default LoginForm