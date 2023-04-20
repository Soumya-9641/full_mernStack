import React from 'react'
import {spend} from "../assets"
import styles,{layout} from "../style"
const Help2 = () => {
  return (
    <section id='product' className={layout.sectionReverse}>
         
         <div className={layout.sectionImgReverse}>
                     <img src={spend} className='w-[80%] h-[80%] relative z-[5]' alt="" />
                     <div className='absolute z-[0] -left-1/2 bottom-0 w-[70%] h-[50%] rounded-full white__gradient'/>
                     <div className='absolute z-[1] -left-1/2 top-40 w-[70%] h-[50%] rounded-full pink__gradient'/>
                     <div className='absolute z-[0] -left-1/2 right-60 w-[80%] h-[80%] rounded-full blue__gradient'/>
         </div>
         <div className={`${layout.sectionInfo} md:flex md:flex-col md:justify-center items-center `}>
                 <h2 className={`${styles.heading2} sm:flex sm:flex-col justify-center items-center mb-10 text-gradient2`}>
                    Spend time  <br className='sm:block hidden' />
                    at an NGO
                 </h2>
                 <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
                 The way we spend our time defines who we are. Your time with the beneficiaries leaves an everlasting impression in their lives and brings a lot of happiness. Let us know and we will take care of the rest. Your time is limited, spend it wisely and make the most of it!
                 </p>
         </div>
        
     </section>
  )
}

export default Help2