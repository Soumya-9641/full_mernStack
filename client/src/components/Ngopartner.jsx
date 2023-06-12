import React from 'react'
import styles from '../style'
import { childsupport } from '../assets'
import { TbCircleDotFilled } from 'react-icons/tb';


const Ngopartner = () => {
  return (
    <>

  
     <div className='flex flex-col justify-center items-center text-gradient mb-10 mt-10  '>
                <h1 className='font-poppins font-semibold xs:text-[40px] text-[30px] xs:leading-[53px] leading-[43px]'>Become our Partner NGO</h1>
             
    </div>
    <div className=''>
    <h6 className='font-poppins text-gray-300 font-normal flex flex-row mb-6 items-center'>
                We want your organization to get more non-monetary donations – clothes, stationery, household goods and other items that you can use to make a difference. Just tell us your requirements and we will fulfill them in the best possible way.
                </h6>
   
    </div>
    <div className='flex flex-col'>
          <h6 className='font-poppins text-gray-300 font-normal xs:text-[20px] text-[15px] xs:leading-[53px] leading-[43px]'>How we support NGOs?</h6>
            <p className='font-poppins text-gray-500 font-normal flex flex-row mb-2 items-center'><TbCircleDotFilled className='mr-4'/>We fulfill your needs by collecting donations from different donors and deliver them to you</p>
            <p className='font-poppins text-gray-500 font-normal flex flex-row mb-2 items-center'><TbCircleDotFilled className='mr-4'/>We spread awareness about the different causes you support</p>
            <p className='font-poppins text-gray-500 font-normal flex flex-row mb-2 items-center'><TbCircleDotFilled className='mr-4'/>We let people know about your great work and your requirements</p>
            <p className='font-poppins text-gray-500 font-normal flex flex-row mb-2 items-center'><TbCircleDotFilled className='mr-4'/>We connect you corporates & volunteers.
            </p>
            <div className='mt-10 mb-6'>
              <p className='font-poppins text-gray-500 font-normal flex flex-row mb-2 items-center mt-10'><TbCircleDotFilled className='mr-4'/>To become our partner, send us a mail at soumyadipgantait2003@gmail.com. Let’s Spread Happiness together!!.
            </p>
            </div>

          
    </div>
    <div className='mb-10'>
      <img className='w-[90%] h-[90%] flex items-center object-fill' src={childsupport} alt="gift" />
    </div>
    </>
  )
}

export default Ngopartner