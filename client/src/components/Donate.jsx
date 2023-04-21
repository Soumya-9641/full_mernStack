import React from 'react'
import {bag,shoes,cloth,stationary,furniture} from "../assets"
const Donate = () => {
  return (
   <section className=' bg-discount-gradient pt-10'>
         <div className='flex justify-center items-center text-gradient mb-20  border-b-[1px] border-b-[#70b3ad]'>
                <h1 className='font-poppins font-semibold xs:text-[40px] text-[30px] xs:leading-[53px] leading-[43px]'>DONATE ALMOST ANYTHING</h1>
               
        </div>
        <div className='flex flex-col'>
            <div className='flex flex-row'>
                <div className='flex flex-col justify-center items-center '>
                    <img src={bag} alt="" className='w-[75%] md:w-[45%]' />
                    <h4 className='font-poppins font-semibold xs:text-[20px] text-[26px] xs:leading-[53px] leading-[21px] text-gradient  ml-3 mb-2 lg:mb-0'>Bag</h4>
                </div>
                <div className='flex flex-col justify-center items-center '>
                    <img src={shoes} alt="" className='w-[75%] md:w-[45%]' />
                    <h4 className='font-poppins font-semibold xs:text-[20px] text-[26px] xs:leading-[53px] leading-[21px] text-gradient  ml-3 mb-2 lg:mb-0'>Shoes</h4>
                </div>
                <div className='flex flex-col justify-center items-center '>
                    <img src={cloth} alt="" className='w-[75%] md:w-[45%]' />
                    <h4 className='font-poppins font-semibold xs:text-[20px] text-[26px] xs:leading-[53px] leading-[21px] text-gradient  ml-3 mb-2 lg:mb-0'>Clothes</h4>
                </div>
            </div>
            <div className='flex flex-row mt-20'>
                <div className='flex flex-col justify-center items-center '>
                    <img src={stationary} alt="" className='w-[65%] md:w-[45%]' />
                    <h4 className='font-poppins font-semibold xs:text-[20px] text-[26px] xs:leading-[53px] leading-[21px] text-gradient  ml-3 mb-2 lg:mb-0'>Bag</h4>
                </div>
                <div className='flex flex-col justify-center items-center '>
                    <img src={furniture} alt="" className='w-[65%] md:w-[45%]' />
                    <h4 className='font-poppins font-semibold xs:text-[20px] text-[26px] xs:leading-[53px] leading-[21px] text-gradient  ml-3 mb-2 lg:mb-0'>Shoes</h4>
                </div>
                
            </div>
        </div>
       
        <div>

        </div>
   </section>
  )
}

export default Donate