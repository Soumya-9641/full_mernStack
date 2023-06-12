import React from 'react'

import styles,{layout} from "../style"
import { surplusstock } from '../assets'
import Button from './Button';
const Engage3 = () => {
  return (
    <section id='product' className={layout.sectionReverse}>
         
         <div className={layout.sectionImgReverse}>
                     <img src={surplusstock} className='w-[80%] h-[80%] relative z-[5]' alt="" />
                     <div className='absolute z-[0] -left-1/2 bottom-0 w-[70%] h-[50%] rounded-full white__gradient'/>
                     <div className='absolute z-[1] -left-1/2 top-40 w-[70%] h-[50%] rounded-full pink__gradient'/>
                     <div className='absolute z-[0] -left-1/2 right-60 w-[80%] h-[80%] rounded-full blue__gradient'/>
                     
         </div>
         <div className={`${layout.sectionInfo} md:flex md:flex-col md:justify-center items-center `}>
                 <h2 className={`${styles.heading2} sm:flex sm:flex-col justify-center items-center mb-10 text-gradient2`}>
                 Donate Surplus Stock
                 </h2>
                 <p className={`${styles.paragraph} max-w-[470px] mt-5 mb-6`}>
                 This is a perfect initiative for e-commerce platforms, sellers listed there, retailers, consumer brands, distributors, wholesalers, dealers that are looking to create impact while meeting their business objectives.
                 </p>
                 <Button  className='mt-10'/>
         </div>
        
     </section>
  )
}

export default Engage3