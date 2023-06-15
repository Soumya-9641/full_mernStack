import React from 'react'
import {delivery1,pickup,rewards} from "../assets"
const Work = () => {
  return (
    <>

    
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

        <hr class="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700"/>
        <p className='font-poppins text-gray-500 font-normal flex flex-row mb-2 items-center'>Share At Door Step makes it super easy for you to make non-cash donations. Don’t we all have a lot of clothes,
         books, and other household goods just lying at some corner and getting dusted. It’s time to give them a new life by donating them to those who in need and bring smiles on their faces!! Just schedule 
         a pickup and get the donations picked up from your doorstep. Now Spreading Happiness is just a click away!!

        </p>

        <h4 className='font-poppins text-gray-300 font-normal flex flex-row mb-6 items-center xs:text-[20px] text-[15px] xs:leading-[53px] leading-[43px] mt-6'>How to Schedule a pickup?
        </h4>

        <ul className='font-poppins text-gray-500 font-normal flex flex-col mb-40 items-start'>
          <li className='mb-4'>1. Go to our Home page and enter your location.</li>
          <li className='mb-4'>2. Choose the option that you want to avail- Doorstep pickup to avail a pickup or Drop off (in case you want to drop off the items yourself).</li>
          <li>3. Select a convenient slot, fill in your details, and schedule a pickup.</li>
        </ul>

        </>
  )
}

export default Work