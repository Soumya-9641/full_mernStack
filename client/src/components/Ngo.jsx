import React from 'react'
import styles from "../style"
import { Link } from 'react-router-dom'
import {ngo1,ngo2,ngo3,ngo4,ngo5} from "../assets"
const Ngo = () => {
  return (
    <>

<div className='flex justify-center items-center text-gradient mb-10 mt-20  border-b-[1px] border-b-[#70b3ad]'>
                <h1 className='font-poppins font-semibold xs:text-[40px] text-[30px] xs:leading-[53px] leading-[43px]'>OUR NGO PARTNERS</h1>
               
        </div>

    <div className='flex flex-col'>
    <div className='flex flex-col justify-center items-center lg:flex-row lg:m-3 lg:justify-between usitems-center p-10'>
    <Link to="https://give.do/discover/ACQ/bachpan-foundation/" target='__blank'>
    <div className='m-10 flex items-center flex-col'>
      <div className={`${styles.flexCenter} w-[140px] h-[140px] rounded-3xl bg-blue-gradient p-[2px] cursor-pointer mt-10`}>
          <div className={`${styles.flexCenter} bg-blue-gradient2 flex-col w-[100%] h-[100%] rounded-3xl`}>
                  <img className='w-[100%] h-[100%] object-contain ' src={ngo1} alt="" />
                  
                            
                  {/* <div className='absolute z-[0] right-1/2 bottom-40 w-[50%] h-[40%] rounded-full white__gradient'/>
                    <div className='absolute z-[1] -right-1/2 top-40 w-[50%] h-[40%] rounded-full pink__gradient'/>
                    <div className='absolute z-[0] -left-1/2 right-80 w-[60%] h-[60%] rounded-full blue__gradient'/> */}

                    {/* <div className='absolute z-[0] right-1/2 bottom-40 w-[50%] h-[40%] rounded-full white__gradient'/>
                    <div className='absolute z-[1] -right-1/2 top-40 w-[50%] h-[40%] rounded-full pink__gradient'/>
                    <div className='absolute z-[0] -right-1/2 left-80 w-[60%] h-[60%] rounded-full blue__gradient'/> */}
          </div>
      
      </div>
      <p className='font-poppins font-medium text-[18px] leading-[23px] mt-4'>
                            <span className='text-gradient'>
                            Bachpan Foundation
                            </span>
                          
                      </p>
    </div>
    </Link>
    <Link to="https://sadsindia.org/">
    <div className='m-10 flex items-center flex-col'>
      <div className={`${styles.flexCenter} w-[140px] h-[140px] rounded-3xl bg-blue-gradient p-[2px] cursor-pointer mt-10`}>
          <div className={`${styles.flexCenter} bg-blue-gradient2 flex-col w-[100%] h-[100%] rounded-3xl`}>
                  <img className='w-[100%] h-[100%] object-contain' src={ngo2} alt="" />
          </div>
      
      </div>
      <p className='font-poppins font-medium text-[18px] leading-[23px] mt-4'>
                            <span className='text-gradient'>
                            SADS Foundation
                            </span>
                          
                      </p>
    </div>
    </Link>
    <Link to="https://carlsbaded.org/kids-care/">
    <div className='m-10 flex items-center flex-col'>
      <div className={`${styles.flexCenter} w-[140px] h-[140px] rounded-3xl bg-blue-gradient p-[2px] cursor-pointer mt-10`}>
          <div className={`${styles.flexCenter} bg-blue-gradient2 flex-col w-[100%] h-[100%] rounded-3xl`}>
                  <img className='w-[100%] h-[100%] object-contain' src={ngo3} alt="" />
          </div>
      
      </div>
      <p className='font-poppins font-medium text-[18px] leading-[23px] mt-4'>
                            <span className='text-gradient'>
                            KIDS Care Foundation
                            </span>
                          
                      </p>
    </div>
    </Link>
    </div>




    <div className='flex flex-col justify-center items-center lg:flex-row lg:m-3 lg:justify-between usitems-center p-10'>
    <Link to="https://www.guidestar.org/profile/27-0086527">
    <div className='m-10 flex items-center flex-col'>
      <div className={`${styles.flexCenter} w-[140px] h-[140px] rounded-3xl bg-blue-gradient p-[2px] cursor-pointer mt-10`}>
          <div className={`${styles.flexCenter} bg-blue-gradient2   flex-col w-[100%] h-[100%] rounded-3xl`}>
          
         
                  <img className='w-[100%] h-[100%] object-contain' src={ngo4} alt="" />
                  {/* <div className='absolute z-[0] right-1/2 bottom-40 w-[50%] h-[40%] rounded-full white__gradient'/>
                    <div className='absolute z-[1] -right-1/2 top-40 w-[50%] h-[40%] rounded-full pink__gradient'/>
                    <div className='absolute z-[0] -left-1/2 right-80 w-[60%] h-[60%] rounded-full blue__gradient'/>


                    <div className='absolute z-[0] right-1/2 bottom-40 w-[50%] h-[40%] rounded-full white__gradient'/>
                    <div className='absolute z-[1] -right-1/2 top-40 w-[50%] h-[40%] rounded-full pink__gradient'/>
                    <div className='absolute z-[0] -right-1/2 left-80 w-[60%] h-[60%] rounded-full blue__gradient'/> */}
          </div>
      
      </div>
      <p className='font-poppins font-medium text-[18px] leading-[23px] mt-4'>
                            <span className='text-gradient'>
                              DOCS2KIDS Foundation
                            </span>
                          
                      </p>
    </div>
    </Link>
    <Link to="https://albasar.org.uk/">
    <div className='m-10 flex items-center flex-col'>
      <div className={`${styles.flexCenter} w-[140px] h-[140px] rounded-3xl bg-blue-gradient p-[2px] cursor-pointer mt-10`}>
          <div className={`${styles.flexCenter} bg-blue-gradient2  flex-col w-[100%] h-[100%] rounded-3xl`}>
                  <img className='w-[100%] h-[100%] object-contain' src={ngo5} alt="" />
          </div>
      
      </div>
      <p className='font-poppins font-medium text-[18px] leading-[23px] mt-4'>
                            <span className='text-gradient'>
                          Basaffar Foundation
                            </span>
                          
                      </p>
    </div>
    </Link>
   
    </div>
    </div>
   
       
    </>
   
  )
}

export default Ngo