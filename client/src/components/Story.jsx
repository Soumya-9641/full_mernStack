import React from 'react'
import { story } from '../assets'
const Story = () => {
  return (
    <>
      <div className='flex flex-col justify-center items-center'>
            <h6 className='font poppins text-[30px] text-gray-400 mb-10'>About me</h6>
            <p className='font-poppins text-gray-500 font-normal flex flex-row mb-2 items-center'>Hi I'm soumyadip.currently I'm a student of computer science and business system at Heritage Institute of Technology.
I am a MERN stack developer</p>
<a href="https://dulcet-brigadeiros-b04f49.netlify.app" target='__blank'>
<button className={`py-4 px-6 bg-blue-gradient2 font-poppins font-medium text-[18px] text-primary outline-none 
     rounded-[10px] mt-10`}>
            Checkout my website
    </button>
    </a>
      </div>
      <div className='mb-20 mt-20 flex items-center justify-center'>
        <img className='w-[80%] h-[80%] flex items-center object-fill' src={story} alt="" />
      </div>
    </>
  )
}

export default Story