import React, { useState } from 'react'
import { AiOutlineEyeInvisible,AiOutlineEye } from 'react-icons/ai';
import { Link, useNavigate } from 'react-router-dom';
import Template from './Template'
import { toast } from 'react-hot-toast';
function SignupForm({setIsLoggedIn}) {

    const [formData, setFormData] = useState({
        firstName:"",lastName:"",email:"",password:"",
        confirmPassword:""
    })
    function changeHandler(event){
        setFormData((prevData)=>(
            {
                ...prevData ,
                [event.target.name]:event.target.value,
            }
        ))
    }
    const [showPassword,setShowPassword] =useState(false)
    const navigate = useNavigate();
    function submitHandler(event){
            event.preventDefault();
            if(formData.password != formData.confirmPassword){
                toast.error("Password do not match.")
                return
            }
            else{
                setIsLoggedIn(true);
                toast.success("Account created.")
                const accountData = {
                    ...formData
                }
                //console.log("printing account data ",accountData);
                navigate('/dashboard')
                const finalAccountData = {
                    ...formData,
                    accountType
                }
                console.log("printing account data ",finalAccountData);

            }
    }
    const [accountType,setAccountType] = useState('student');
  return (
    <div>
        {/* student- Instructore tab */}
        <div className='flex bg-richblack-800 p-1 gap-x-1
        my-3 rounded-full max-w-max'>
            <button onClick={()=>{setAccountType('student')}}
            className={`${accountType === "student" ? 
            ("bg-richblack-900 text-richblack-5"):("bg-transparent text-richblack-200")}
            py-2 px-5 rounded-full transition-all duration-200`}>
                Student
            </button> 
            <button onClick={()=>{setAccountType('instructor')}}
            className={`${accountType !== "student" ? 
            ("bg-richblack-900 text-richblack-5"):("bg-transparent text-richblack-200")}
            py-2 px-5 rounded-full transition-all duration-200`}
            >
                Instructor
            </button>
        </div>
        <form onSubmit={submitHandler} className='flex flex-col gap-1'>
            {/* this div contain first name and last name */}
            <div className='flex gap-5  '>
            <label className='w-full'>
                <p className='text-richblack-5 mb-1 font-semibold
            leading-[1.375rem] text-[0.85rem]'
                >First Name <sup
                className='text-pink-200'>*</sup></p>
                <input className='bg-richblack-800 rounded-[0.5rem]
            text-richblack-5 w-full p-[12px]'
                required
                type='text'
                name='firstName'
                onChange={changeHandler}
                placeholder='Enter First Name'
                value={formData.firstName}
                />
            </label>
            <label className='w-full'>
                <p className='text-richblack-5 mb-1 font-semibold
            leading-[1.375rem] text-[0.85rem]'>Last Name <sup
            className='text-pink-200'>*</sup></p>
                <input className='bg-richblack-800 rounded-[0.5rem]
            text-richblack-5 w-full p-[12px]'
                required
                type='text'
                name='lastName'
                onChange={changeHandler}
                placeholder='Enter Last Name'
                value={formData.lasttName}
                />
            </label>
            </div>
            {/* email address */}
            <label className='w-full'>
                <p className='text-richblack-5 mb-1 font-semibold
            leading-[1.375rem] text-[0.85rem]'>Email Address 
            <sup className='text-pink-200'
            >*</sup></p>
                <input className='bg-richblack-800 rounded-[0.5rem]
            text-richblack-5 w-full p-[12px]'
                required
                type='email'
                name='email'
                onChange={changeHandler}
                placeholder='Enter Email Address'
                value={formData.email}
                />
            </label>
            {/* create password and confirmPassword */}
            <div className='flex gap-5 justify-between'>
            <label className='flex flex-col relative'>
                <p className='text-richblack-5 mb-1 font-semibold
            leading-[1.375rem] text-[0.85rem]'>Create Password <sup
            className='text-pink-200'>*</sup></p>
                <input className='bg-richblack-800 rounded-[0.5rem]
            text-richblack-5 w-full p-[12px] '
                required
                type={showPassword? ('text'):('password')}
                name='password'
                onChange={changeHandler}
                placeholder='Enter Password'
                value={formData.password}
                />
                <span className='absolute right-3 top-[55%] cursor-pointer'
                onClick={()=>{setShowPassword( (prev)=>!prev)}}>
                {showPassword ? (<AiOutlineEyeInvisible/>):(<AiOutlineEye/>)}
                </span>
            </label>
            <label className='flex flex-col relative'>
                <p className='text-richblack-5 mb-1 font-semibold
            leading-[1.375rem] text-[0.85rem]' 
                >Confirm Password <sup className='text-pink-200'
                >*</sup></p>
                <input className='bg-richblack-800 rounded-[0.5rem]
            text-richblack-5 w-full p-[12px] '  
                required
                type={showPassword? ('text'):('password')}
                name='confirmPassword'
                onChange={changeHandler}
                placeholder='Enter Password Again' 
                value={formData.confirmPassword}
                />
                <span className='absolute right-3 top-[55%] cursor-pointer'
                onClick={()=>{setShowPassword( (prev)=>!prev)}}>
                {showPassword ? (<AiOutlineEyeInvisible/>):(<AiOutlineEye/>)}
                </span>
            </label>
            </div>
            {/* create account button */}
            <button className='w-full bg-yellow-50 
         rounded-[8px] font-medium text-black px-[12px] mt-4 py-[8px]'>
                Create Account
            </button>
        </form>
    </div>
  )
}

export default SignupForm