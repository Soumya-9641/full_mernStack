import React from 'react'
import styles from "../style" 
import { delivery,clothdonation} from "../assets"
import GetStarted from './GetStarted'
const Hero = () => {
  return (
    <section id='home' className={`flex md:flex-row flex-col first-letter ${styles.paddingY}`}>
        <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-4`}>
              <div className='flex flex-row items-center py-[6px] px-4 bg-discount-gradient rounded-[10px] mb-2'>
                  <img src={delivery} alt="" className='w-[40px] h-[40px]' />
                  <p className={`${styles.paragraph} ml-12`}>
                      <span className='text-white'>
                          Donate {' '}
                      </span>
                      <span>
                        your {" "}
                      </span>
                      <span className='text-white'>
                          clothes,{" "}bags,{" "}stationary,{" "}furniture
                      </span>
                      <br />
                      <span>
                        to the {" "}
                      </span>
                      <span className='text-white'>
                          Needy One {" "}
                      </span>
                      <span>
                      while sitting at home
                      </span>
                  </p>
              
              </div>
              <div className='flex flex-row justify-between items-center w-full'>
                  <h1 className='flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] text-white ss:leading-[100px] leading-[75px]'>THE NEXT <br className='sm:block hidden' /> {" "} <span className='text-gradient'>
                        GENERATION  
                  </span>{" "}</h1>
                  <div className='ss:flex hidden  md:mr-4 mr-0 '>

                      <GetStarted/>
                  </div>
              </div>
              <h1 className=' font-poppins font-semibold ss:text-[68px] text-[52px] text-white ss:leading-[100px] leading-[75px] w-full'>
              DONATION APP
              </h1>
              <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
                we collect donated things from you and gave it to <span className='text-gradient'>NGO,POOR NEEDY PEOPLE</span> and gave you a reward points.
        </p>
        </div>
        <div className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}>
        <img src={clothdonation} alt="pic" className=' relative z-[5]' />
          
          <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient" />
        <div className="absolute z-[1] w-[80%] h-[80%] rounded-full white__gradient bottom-40" />
        <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient" />

        </div>
        <div className={`ss:hidden ${styles.flexCenter}`}>
          <GetStarted/>
        </div>
    </section>
  )
}

export default Hero