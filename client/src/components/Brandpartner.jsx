import React from 'react'
import styles from '../style'
import { gift } from '../assets'
import { TbCircleDotFilled } from 'react-icons/tb';
import { HiOutlineMenu } from 'react-icons/hi';
const Brandpartner = () => {
  return (
    <>
        <div className='flex flex-col justify-center items-center text-gradient mb-6 mt-20  '>
                <h1 className='font-poppins font-semibold xs:text-[40px] text-[30px] xs:leading-[53px] leading-[43px]'>Become our Partner NGO</h1>

   

    
    </div>
    <div className='flex flex-col'>
          <h6 className='font-poppins text-gray-300 font-normal xs:text-[20px] text-[15px] xs:leading-[53px] leading-[43px]'>How is your brand giving back?</h6>
            <p className='font-poppins text-gray-500 font-normal flex flex-row mb-2 items-center'><TbCircleDotFilled className='mr-4'/>If someone knew how your product was made, would they still respect your brand?</p>
            <p className='font-poppins text-gray-500 font-normal flex flex-row mb-2 items-center'><TbCircleDotFilled className='mr-4'/>What does your brand stand for?</p>
            <p className='font-poppins text-gray-500 font-normal flex flex-row mb-2 items-center'><TbCircleDotFilled className='mr-4'/>What value does your brand bring to my customers’ lives?</p>
            <p className='font-poppins text-gray-500 font-normal flex flex-row mb-2 items-center'><TbCircleDotFilled className='mr-4'/>What problem does your brand solve?
            </p>
            <div className='mt-10 mb-6'>
              <h4 className='font-poppins text-gray-300'>If your brand is socially conscious, stands for a cause and believes in sustainable growth then we would love to join hands with you!!
              Let’s spread happiness together by recognizing our amazing changemakers (donors).</h4>

              <h2 className='font-poppins text-gray-500 xs:text-[20px] text-[15px] xs:leading-[53px] leading-[43px] flex flex-row items-center mt-6 mb-0'><HiOutlineMenu className='mr-4'/>Every charitable act is a stepping stone towards heaven – Henry Ward Beecher</h2>
              <h5 className='font-poppins text-gray-500 xs:text-[20px] text-[15px] xs:leading-[53px] leading-[43px] flex flex-row items-center mt-0'>But we at <span className='text-white font-poppins'>{" "} Donate King {" "}</span> believe that you deserve a lot more here on Earth as well.</h5>
              <p className='font-poppins text-gray-500 font-normal flex flex-row mb-2 items-center mt-10'><TbCircleDotFilled className='mr-4'/>Our motto is “Spread Happiness, Stay Happy”! Our donors help us in spreading happiness by making in-kind donations and we make them smile by thanking them with “the happiness box” as a gesture of thanks for making a difference.
            </p>
            </div>

          
    </div>
    <div className='mb-10'>
      <img className='w-[90%] h-[90%] flex items-center object-fill' src={gift} alt="gift" />
    </div>
    
    </>
  )
}

export default Brandpartner