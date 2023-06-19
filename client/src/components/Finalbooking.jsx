import React from 'react'
import {  TbTruckDelivery } from 'react-icons/tb';
const Finalbooking = () => {
  return (
    <>
     
    <section className="text-gray-100 rounded-3xl shadow-2xl shadow-slate-300 mb-20 bg-gray-500 body-font">
    <div className='flex flex-col justify-center items-center text-gradient mb-0 mt-10 pt-20  '>
                <h1 className='font-poppins font-semibold xs:text-[40px] text-[30px] xs:leading-[53px] leading-[43px]'>SCHEDULE A PICKUP</h1>
                <p className='font-poppins text-gray-300'>Please select a convenient slot as per your availability</p>
             
    </div>
    <div className="container px-0 py-24 mx-auto flex justify-center flex-wrap">
      <div className="lg:w-1/2  pl-10 pr-10 w-full mb-10 lg:mb-0 rounded-lg overflow-hidden">
      <div className="  bg-slate-700 rounded-lg p-8 flex flex-col md:ml-auto lg:w-[100%] w-[400px] mt-10 md:mt-0">
                <h2 className="text-gray-900 text-lg font-medium title-font mb-5"> CHOOSE A PICKUP SLOT</h2>
                <div className="relative mb-4">
                   
                    <input type="text" id="full-name" name="full-name" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" placeholder='Enter exact date' autoComplete='off'/>
                </div>
                <div className="relative mb-4">
                   
                    <input type="text" id="full-name" name="full-name" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" placeholder='Enter time slot' autoComplete='off'/>
                </div>
                
                </div>
                
                <hr class="w-64 h-1 lg:ml-40 ml-60 my-8 bg-blue-gradient border-0 rounded dark:bg-gray-700"/>
                <div className="  bg-slate-700 rounded-lg p-8 flex flex-col md:ml-auto lg:w-[100%] w-[400px] mt-10 md:mt-0">
                <h2 className="text-gray-900 text-lg font-medium title-font mb-2"> NOTES FOR PICKUP PERSON (Optional)</h2>
                <p className='font-poppins text-gray-200 text-[10px] mb-4'>* We'll do our best to pass along your instructions to our Pickup Partner. Compliance isn't guaranteed.</p>
                <div className="relative mb-4">
                 <textarea className='p-4 rounded-lg text-gray-700' name="note" placeholder='enter a note for pickup person' id="" cols="60" rows="3"></textarea>
                </div>
                
                
                </div>
      </div>
      <div className="flex flex-col  lg:py-0 px-10  -mb-10 lg:w-1/2 lg:pl-12 lg:text-left text-center">
                <div className="  bg-slate-700 rounded-lg p-8 flex flex-col md:ml-auto lg:w-[100%] w-[400px] mt-10 md:mt-0">
                <h2 className="text-gray-900 text-lg font-medium title-font mb-5">Donor details</h2>
                <div className="relative mb-4">
                   
                    <input type="text" id="full-name" name="full-name" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" placeholder='Name' autoComplete='off'/>
                </div>
                <div className="relative mb-4">
                    
                    <input type="email" id="email" name="email" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" placeholder='Email' autoComplete='off'/>
                </div>
                <div className="relative mb-4 flex flex-row">
                    
                    <input  type="email" id="email" name="email" className="mr-4 w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" placeholder='Flat door' autoComplete='off'/>
                    <input type="email" id="email" name="email" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" placeholder='city' autoComplete='off'/>
                </div>
                <div className="relative mb-4">
                    
                    <input type="email" id="email" name="email" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" placeholder='Pincode' autoComplete='off'/>
                </div>
                <div className="relative mb-4">
                    
                    <textarea className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" name="address" id="address" cols="42" rows="3" placeholder='full address'></textarea>
                </div>
               
                </div>



                <div className=" bg-slate-700 rounded-lg p-8 flex flex-col md:ml-auto lg:w-[100%] w-[400px] mt-10 md:mt-10">
                <h2 className="text-gray-900 text-lg font-medium title-font mb-5">DONATION ITEMS</h2>
                <div className="relative mb-4">
                <div className='flex flex-row justify-between mb-6 p-0 mx-4 rounded-xl bg-slate-700'>
            <div className='flex flex-row items-center '>
                <TbTruckDelivery className='w-[60px] h-[60px] ml-6 mt-0 mr-4'/>
                <div className='flex flex-col'>
                  <h6 className='font-poppins font-semibold text-gray-200'>Light pickup</h6>
                  <p className='font-poppins text-gray-200 text-[15px]'>2 items -₹199</p>
                </div>
              </div>
              
            </div>
                </div>
               
                <div className='flex flex-row w-[30%] lg:ml-40 ml-24 items-center bg-blue-gradient2 p-1 rounded-xl cursor-auto'>
                  <a href="/finalbooking">
                      <button className='mr-1 flex items-center justify-center lg:ml-4 text-slate-900 px-6'>Pay Now </button>
                    </a>
              </div>
                </div>
        </div>
        
      </div>
    
  </section>
  </>
  )
}

export default Finalbooking