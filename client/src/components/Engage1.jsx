import React from 'react'
import styles,{layout} from "../style"
import { gc100 } from '../assets'
const Engage1 = () => {
  return (
    <section id='product' className={layout.sectionReverse}>
         
         <div className={layout.sectionImgReverse}>
                     <img src={gc100} className='w-[80%] h-[80%] relative z-[5]' alt="" />
                     <div className='absolute z-[0] -left-1/2 bottom-0 w-[70%] h-[50%] rounded-full white__gradient'/>
                     <div className='absolute z-[1] -left-1/2 top-40 w-[70%] h-[50%] rounded-full pink__gradient'/>
                     <div className='absolute z-[0] -left-1/2 right-60 w-[80%] h-[80%] rounded-full blue__gradient'/>
         </div>
         <div className={`${layout.sectionInfo} md:flex md:flex-col md:justify-center items-center `}>
                 <h2 className={`${styles.heading2} sm:flex sm:flex-col justify-center items-center mb-10 text-gradient2`}>
                 Donation pickup for employees
                 </h2>
                 <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
                 This is a perfect initiative for the environmentally conscious companies that are looking to engage remote employees in a fun and innovative manner and create a tangible social and environmental impact.
                 </p>
         </div>
        
     </section>
  )
}

export default Engage1