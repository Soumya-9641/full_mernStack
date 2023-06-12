import React from 'react'
import styles from '../style'
import { volunteer } from '../assets'
import { TbCircleDotFilled } from 'react-icons/tb';
import { HiOutlineMenu } from 'react-icons/hi';
const Volunteer = () => {
  return (
    <>
       <div className='flex flex-col justify-center items-center text-gradient mb-6 mt-20  '>
                <h1 className='font-poppins font-semibold xs:text-[40px] text-[30px] xs:leading-[53px] leading-[43px]'>Become a Volunteer</h1>

   

    
    </div>
    <div className='mb-10'>
    <h6 className='font-poppins text-gray-300 font-normal flex flex-row mb-6 items-center xs:text-[20px] text-[15px] xs:leading-[53px] leading-[43px]'>
    We provide our volunteers the opportunity to grow through selfless action. You can contribute in any of the below ways –
                </h6>
                
            <p className='font-poppins text-gray-500 font-normal flex flex-row mb-2 items-center'><TbCircleDotFilled className='mr-4'/>Give classes at DONATEKING collaborated NGOs – such as dance classes, motivational talks for kids, musical instrument classes etc.</p>
            <p className='font-poppins text-gray-500 font-normal flex flex-row mb-2 items-center'><TbCircleDotFilled className='mr-4'/>Help us motivate people to give away the items that are gathering dust in some corner of their house- Be part of our amazing campaigns or help us design one!!</p>
            <p className='font-poppins text-gray-500 font-normal flex flex-row mb-2 items-center'><TbCircleDotFilled className='mr-4'/>Organize drives at schools, colleges, societies and help us spread happiness together.</p>
            
    </div>
    <div className='flex flex-col'>
          <h6 className='font-poppins text-gray-300 font-normal xs:text-[20px] text-[15px] xs:leading-[53px] leading-[43px]'>Use your talents to spread happiness –</h6>
            <p className='font-poppins text-gray-500 font-normal flex flex-row mb-2 items-center'><TbCircleDotFilled className='mr-4'/>If you are a Homemaker, be our Society representative and help us organize drives at your society.</p>
            <p className='font-poppins text-gray-500 font-normal flex flex-row mb-2 items-center'><TbCircleDotFilled className='mr-4'/>If you are a photographer, you can make our special kids happy. They sooooooo love posing and getting clicked.</p>
            <p className='font-poppins text-gray-500 font-normal flex flex-row mb-2 items-center'><TbCircleDotFilled className='mr-4'/>If you are creative and good at animations, you can make small animated videos that motivate people to donate for the cause.</p>
            <p className='font-poppins text-gray-500 font-normal flex flex-row mb-2 items-center'><TbCircleDotFilled className='mr-4'/>If you are a techie, you can help us grow in making our platform better or take up a project at one of our NGO partners.
            </p>
            <div className='mt-10 mb-6'>
              <h4 className='font-poppins text-gray-300'>Whatever talent you have, we are sure you can somehow make use of it to spread happiness with us!!</h4>

             
            
              <p className='font-poppins text-gray-500 font-normal flex flex-row mb-2 items-center mt-10'><TbCircleDotFilled className='mr-4'/>Write to us at contact@sadsindia.org with your resume mentioning what type of volunteering opportunities you are looking for. Keep the subject line as “Volunteer:”.
            </p>
            <h6 className='font-poppins text-gray-300 font-normal flex flex-row mb-6 items-center xs:text-[20px] text-[15px] xs:leading-[53px] leading-[43px]'>
                    Happy Volunteering!!!
                </h6>
            </div>

          
    </div>
    <div className='mb-10'>
      <img className='w-[90%] h-[90%] flex items-center object-fill' src={volunteer} alt="gift" />
    </div>
    
    </>
  )
}

export default Volunteer