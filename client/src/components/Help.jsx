import React from 'react'
import {ngo,ngo1,poster} from "../assets"
import styles,{layout} from "../style"
const Help = () => {
  return (
    <>
         <div className='flex justify-center items-center text-gradient mb-10 mt-20  border-b-[1px] border-b-[#70b3ad]'>
                <h1 className='font-poppins font-semibold xs:text-[40px] text-[30px] xs:leading-[53px] leading-[43px]'>HOW YOU CAN HELP</h1>
               
        </div>
    <section id='product' className={layout.sectionReverse}>
         
        <div className={layout.sectionImgReverse}>
                    <img src={poster} className='w-[80%] h-[80%] relative z-[5]' alt="" />
                    <div className='absolute z-[0] -left-1/2 bottom-0 w-[70%] h-[50%] rounded-full white__gradient'/>
                    <div className='absolute z-[1] -left-1/2 top-40 w-[70%] h-[50%] rounded-full pink__gradient'/>
                    <div className='absolute z-[0] -left-1/2 right-60 w-[80%] h-[80%] rounded-full blue__gradient'/>
        </div>
        <div className={`${layout.sectionInfo} md:flex md:flex-col md:justify-center items-center `}>
                <h2 className={`${styles.heading2} sm:flex sm:flex-col justify-center items-center mb-10 text-gradient2`}>
                    Donate your old  <br className='sm:block hidden' />
                    Goods from Doorstep
                </h2>
                <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
                Donate old goods in usable condition; clothes, toys, utensils, furniture, bicycle, appliances, sports items etc from the safety of your homes and we directly deliver it to our grassroots NGO partners in need. We also keep you updated on the impact you create.
                </p>
        </div>
       
    </section>
    </>
   
  )
}

export default Help