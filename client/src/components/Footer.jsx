import React from 'react'
import styles from '../style'
import {mainlogo} from "../assets"
import { footerLinks,socialMedia } from '../constant'
const Footer = () => (
  <section className={`${styles.flexCenter} ${styles.paddingY} flex-col`}>
        <div className={`${styles.flexStart} md:flex-row flex-col mb-8 w-full`}>
              <div className='flex-1 flex flex-col justify-start mr-10'>
                <img src={mainlogo} alt="" className='w-[266px] h-[100px] object-contain'/>
                <p className={`${styles.paragraph} text-[15px] mt-4 max-w-[350px]`}>
                  Spread the happienss through donating needy people❤️
                </p>
              </div>
              <div className='flex-[1.5] w-full flex flex-row justify-between flex-wrap md:mt-0 mt-10'>
                    {footerLinks.map((footerlink)=>(
                        <div key={footerlink.id} className='flex flex-col ss:my-0 my-4 min-w-[150px]'>
                              <h4 className='font-poppins font-medium text-[18px] leading-[27px] text-white'>
                                {footerlink.title}
                              </h4>
                              <ul className='list-none mt-4'>
                                {footerlink.links.map((link,index)=>(
                                  <li key={link.id} className={`font-poppins font-normal text-dimWhite leading-[24px] text-[15px] hover:text-secondary cursor-pointer ${index!== footerlink.links.length -1 ? 'mb-4':'mb-0'}`}>
                                    {link.name}
                                  </li>
                                ))}
                              </ul>
                        </div>
                    ))}
              </div>
        </div>  
        <div className='w-full flex justify-between items-center md:flex-row flex-col pt-6 border-t-[1px] border-t-[#70b3ad]'>
          <p className='font-poppins font-normal text-center text-[12px] leading-[27px] text-white'>
            ©2023 DonateKing. All Rights Reserved.
          </p>
          <div className='flex flex-row md:mt-0 mt-6'>
                {socialMedia.map((social,index)=>(
                  <a href={social.link} target="__blank" className='cursor-pointer'>
                  <img  key={social.id} src={social.icon} alt={social.id} className={`w-[21px] h-[21px] object-contain cursor-pointer ${index!== socialMedia.length -1 ? 'mr-6':'mr-0'}`}/>
                  </a>
                   
                ))}
          </div>
        </div>
  </section>
)

export default Footer