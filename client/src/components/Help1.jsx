import React from 'react'
import {ngo1,ngo} from "../assets";
import styles,{layout} from "../style"
import Button from './Button';
const Help1 = () => {
  return (
    <section className={layout.section}>
        <div className={`${layout.sectionInfo} md:flex md:flex-col md:justify-center items-center `}>
            <h2 className={`${styles.heading2} sm:flex sm:flex-col justify-center items-center mb-10 text-gradient2`}>
            NGO Bazaar
            </h2>
            <p className={`${styles.paragraph} max-w-[470px] mt-5 mb-10`}>
            When you shop here, you spread happiness in the loves of others that supports grassroots NGOs, underprivileged artisans, and sustainability ventures, and provides them with sustainable income
            </p>
            <Button  className='mt-10'/>
        </div>
        <div className={layout.sectionImg}>
                <img src={ngo} className='w-[60%] h-[60%]' alt="" />
                <div className='absolute z-[0] -left-1/2 bottom-0 w-[70%] h-[50%] rounded-full white__gradient'/>
                     <div className='absolute z-[1] -left-1/2 top-40 w-[70%] h-[50%] rounded-full pink__gradient'/>
                     <div className='absolute z-[0] -left-1/2 right-60 w-[80%] h-[80%] rounded-full blue__gradient'/>
        </div>
    </section>
  )
}

export default Help1