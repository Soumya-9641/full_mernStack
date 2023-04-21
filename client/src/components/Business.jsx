import React from 'react'
import work from "../constant/index";
import {delivery1,pickup,rewards} from "../assets"
const Business = () => {
  return (
    <div>
        <div className='flex justify-center items-center text-gradient  border-b-[1px] border-b-[#70b3ad]'>
                <h1 className='font-poppins font-semibold xs:text-[40px] text-[30px] xs:leading-[53px] leading-[43px]'>How we works</h1>
               
        </div>
        
            <div  className='flex flex-col justify-center items-center lg:flex-row lg:m-3 lg:justify-between usitems-center'>
            <div className='flex flex-col items-center mb-8'>
                <img className='w-[350px] h-[300px] mb-1' src={pickup} alt="" />
                <h2 className='font-poppins font-semibold xs:text-[20px] text-[26px] xs:leading-[53px] leading-[21px] text-gradient uppercase ml-3 mb-2 lg:mb-0'>Pickup from you</h2>
                <h4 className='text-white font-poppins w-[350px] h-[40%]'>Enter the pickup location, and schedule a pickup. *convenience fee applicable.
You can also choose to go for the drop off option in case you want to drop the donations yourself..</h4>
            </div>
            <div className='flex flex-col items-center mb-8'>
                <img className='w-[350px] h-[300px] -mb-4' src={delivery1} alt="" />
                <h2 className='font-poppins font-semibold xs:text-[20px] text-[26px] xs:leading-[53px] leading-[21px] text-gradient uppercase ml-3 mb-2 lg:mb-0'>Donate from your doorstep</h2>
                <h4 className='text-white font-poppins w-[350px] h-[40%]'>We will come to your doorstep to pick up the donations in the chosen slot and deliver them to the NGO where they can be given a new life.</h4>
            </div>
            
            <div className='flex flex-col items-center mb-8'>
                <img className='w-[350px] h-[300px]' src={rewards} alt="" />
                <h2 className='font-poppins font-semibold xs:text-[20px] text-[26px] xs:leading-[53px] leading-[21px] text-gradient uppercase ml-3 mb-2 lg:mb-0'>Get Rewards</h2>
                <h4 className='text-white font-poppins w-[350px] h-[40%]'>Our brand partners provide our donors gifts* as a “gesture of thanks” for making a difference.
Be ready to get surprised!.</h4>
            </div>
            
        </div>
      
        
    </div>
  )
}

export default Business