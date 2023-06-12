import React from 'react'
import {icon1,icon2,icon3,icon4,icon5,icon6} from "../assets"
//import styles from "../style"
const Why = () => {
  return (
    <div>
    <div className='flex justify-center items-center text-gradient  border-b-[1px] border-b-[#70b3ad] mb-10 mt-0'>
            <h1 className='font-poppins font-semibold xs:text-[40px] text-[30px] xs:leading-[53px] leading-[43px] '>WHY DONATE THROUGH DONATEKING</h1>
           
    </div>
    
        <div  className='flex flex-col justify-center items-center lg:flex-row lg:m-3 lg:justify-between bg-discount-gradient p-10'>
        <div className='flex flex-col items-center mb-8'>
            <img className='w-[100px] h-[100px] mb-4' src={icon1} alt="" />
            <h2 className='font-poppins font-semibold xs:text-[20px] text-[26px] xs:leading-[53px] leading-[21px] text-gradient uppercase ml-3 mb-2 lg:mb-0'>Super Convenient</h2>
            <h4 className='text-white font-poppins w-[350px] h-[40%]'>Giving gives you pleasure and makes you
happier bringing a positive and uplifting effect on you....</h4>
        </div>
        <div className='flex flex-col items-center mb-8'>
            <img className='w-[100px] h-[100px] mb-4' src={icon2} alt="" />
            <h2 className='font-poppins font-semibold xs:text-[20px] text-[26px] xs:leading-[53px] leading-[21px] text-gradient uppercase ml-3 mb-2 lg:mb-0'>Feel Good Factor</h2>
            <h4 className='text-white font-poppins w-[350px] h-[40%]'>We will come to your doorstep to pick up the donations in the chosen slot and deliver them to the NGO where they can be given a new life.</h4>
        </div>
        
        <div className='flex flex-col items-center mb-8'>
            <img className='w-[100px] h-[100px] mb-4' src={icon3} alt="" />
            <h2 className='font-poppins font-semibold xs:text-[20px] text-[26px] xs:leading-[53px] leading-[21px] text-gradient uppercase ml-3 mb-2 lg:mb-0'>Your Donations are Valued</h2>
            <h4 className='text-white font-poppins w-[350px] h-[40%]'>We make sure your donations reach someone who
really requires them by delivering them to the beneficiaries directly..</h4>
        </div>
        
    </div>
    {/* next line */}
    <div  className='flex flex-col justify-center items-center lg:flex-row lg:m-3 lg:justify-between usitems-center bg-discount-gradient p-10'>
        <div className='flex flex-col items-center mb-8'>
            <img className='w-[100px] h-[100px] mb-4' src={icon4} alt="" />
            <h2 className='font-poppins font-semibold xs:text-[20px] text-[26px] xs:leading-[53px] leading-[21px] text-gradient uppercase ml-3 mb-2 lg:mb-0'>Super Convenient</h2>
            <h4 className='text-white font-poppins w-[350px] h-[40%]'>Giving gives you pleasure and makes you
happier bringing a positive and uplifting effect on you....</h4>
        </div>
        <div className='flex flex-col items-center mb-8'>
            <img className='w-[100px] h-[100px] mb-4' src={icon5} alt="" />
            <h2 className='font-poppins font-semibold xs:text-[20px] text-[26px] xs:leading-[53px] leading-[21px] text-gradient uppercase ml-3 mb-2 lg:mb-0'>Feel Good Factor</h2>
            <h4 className='text-white font-poppins w-[350px] h-[40%]'>We will come to your doorstep to pick up the donations in the chosen slot and deliver them to the NGO where they can be given a new life.</h4>
        </div>
        
        <div className='flex flex-col items-center mb-8'>
            <img className='w-[100px] h-[100px] mb-4' src={icon6} alt="" />
            <h2 className='font-poppins font-semibold xs:text-[20px] text-[26px] xs:leading-[53px] leading-[21px] text-gradient uppercase ml-3 mb-2 lg:mb-0'>Your Donations are Valued</h2>
            <h4 className='text-white font-poppins w-[350px] h-[40%]'>We make sure your donations reach someone who
really requires them by delivering them to the beneficiaries directly..</h4>
        </div>
        
    </div>
</div>
  )
}

export default Why