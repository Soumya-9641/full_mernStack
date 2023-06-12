import React from 'react'
import styles,{layout} from "../style"
import { collectiondrive } from '../assets'
import Button from './Button';
const Engage2 = () => {
  return (
    <section className={layout.section}>
        <div className={`${layout.sectionInfo} md:flex md:flex-col md:justify-center items-center `}>
            <h2 className={`${styles.heading2} sm:flex sm:flex-col justify-center items-center mb-10 text-gradient2`}>
            Thematic Collection Drives
            </h2>
            <p className={`${styles.paragraph} max-w-[470px] mt-5 mb-10`}>
            This is a perfect initiative for corporates, tech parks and societies that are planning to engage their employees through a collaborative workplace impact-driven program.


            </p>
            <Button  className='mt-10'/>
        </div>
        <div className={layout.sectionImg}>
                <img src={collectiondrive} className='w-[60%] h-[60%]' alt="" />
                <div className='absolute z-[0] -left-1/2 bottom-0 w-[70%] h-[50%] rounded-full white__gradient'/>
                     <div className='absolute z-[1] -left-1/2 top-40 w-[70%] h-[50%] rounded-full pink__gradient'/>
                     <div className='absolute z-[0] -left-1/2 right-60 w-[80%] h-[80%] rounded-full blue__gradient'/>
        </div>
    </section>
  )
}

export default Engage2