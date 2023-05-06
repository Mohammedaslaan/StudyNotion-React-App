import React from 'react'

import frameImage from '../assets/frame.png'
import SignupForm from './SignupForm'
import LoginForm from './LoginForm'
import {FcGoogle} from "react-icons/fc"


function Template({title,desc1,desc2,image,formtyle,setIsLoggedIn}) {
  return (
    <div className="text-white flex gap-x-5 
    w-11/12 max-w-[1160px] py-12 mx-auto justify-between">
        <div className='flex flex-col w-full max-w-[450px]'>
            <h1 className='text-richblack-5 font-semibold text-[1.875rem]
            leading-[2.375rem]'
            >{title}</h1>
            <p className='flex flex-col text-[1.125rem] leading-[1.625rem] mt-4'>
                <span className='text-richblack-400'>{desc1}</span>
                <span className='text-blue-100 italic'>{desc2}</span>
            </p>
            {formtyle === "signup" ? (<SignupForm setIsLoggedIn={setIsLoggedIn}/>) : ( <LoginForm setIsLoggedIn={setIsLoggedIn}/>)}
            <div className='flex w-full items-center my-4 gap-x-2'>
                <div className='h-[1px] w-full bg-richblack-700'></div>
                <p className='text-richblack-700 font-medium leading-[1.375rem]'>OR</p>
                <div className='h-[1px] w-full bg-richblack-700'></div>
            </div>
            <button className='w-full flex justify-center
            rounded-[8px] font-medium text-richblack-100 border
            border-richblack-700 px-[12px] py-[8px] gap-x-2 mt-2'>
                <FcGoogle/>
                <p>Signin with Google</p>
            </button>
        </div>
        <div className='relative w-11/12 max-w-[450px]'>
            <img src={frameImage} alt='pattern' width={558}
            height={504} loading='lazy'
            className=''
            />
            <img src={image} alt='Student' width={558}
            height={490} loading='lazy'
            className='absolute -top-4 right-4'
            
            />
        </div>
    </div>
  )
}

export default Template