import React from 'react'
import styles from '../style'
import { useNavigate } from 'react-router-dom'
//import card1 from '../blogsdata/card1'
import {card} from "../constant/index"
const Campaign = () => {
  // const navigate= useNavigate()
   
  return (<>
     <div className='flex flex-col justify-center items-center text-gradient mb-0 mt-20  '>
                <h1 className='font-poppins font-semibold xs:text-[40px] text-[30px] xs:leading-[53px] leading-[43px]'>HAPPINESS CAMPAIGN</h1>
              
                     
              
        </div>
        <div className='flex items-center justify-center mb-10'>
        <p className={`${styles.paragraph} max-w-[900px] mt-5`}>Amplify your commitment towards the causes you care about by engaging your employees and customers through the most innovative CSR/employee engagement and cause marketing campaigns.</p>
        </div>  
       
                
        <section className='border-t-[1px] border-t-[#70b3ad] '>
        {card.map((Card)=>(
               <div key={Card.id} className='mt-10 mb-10'>
                  
                  <h1 className='font-poppins font-semibold xs:text-[40px] text-[30px] xs:leading-[53px] leading-[43px] text-gradient2 mb-4 '>{Card.heading}</h1>
                  
            
            
               <img className='w-[100%]' src={Card.img} alt="" />
               <h4 className='font-poppins text-gradient font-normal xs:text-[30px] text-[20px] xs:leading-[53px] leading-[43px]'>{Card.title}</h4>
               <p className={`${styles.paragraph2} max-w-[900px] mt-5`}>{Card.content}</p>
               
               <a href={`../blogsdata/${Card.id}`}>

               <button  className={`py-2 px-4 bg-blue-gradient2 fongt-poppins font-normal text-[14px] text-primary outline-none ${styles}
      rounded-[10px]`}>Read more...</button>
               </a>
               
               
               
            </div>
        ))}
              

              {/* second camp
              <div className='mt-10 mb-10'>
            
            <h1 className='font-poppins font-semibold xs:text-[40px] text-[30px] xs:leading-[53px] leading-[43px] text-gradient2 mb-4 '>#VirtualClassroom</h1>
            
       
       
         <img className='w-[100%]' src="https://media.istockphoto.com/id/1466767367/vector/back-to-school-template-with-pencils-and-clouds-online-education-banner-ad-landing-page-or.jpg?s=612x612&w=0&k=20&c=NUc2JygkrYIkTHh52vush710egDuy8Qc9J_hd48_ug0=" alt="" />
         <h4 className='font-poppins text-gradient font-normal xs:text-[30px] text-[20px] xs:leading-[53px] leading-[43px]'>Put your old mobiles, laptops, tablets to good use and help underprivileged kids continue their education online.</h4>
         <p className={`${styles.paragraph2} max-w-[900px] mt-5`}>Why stash your old phone, laptops and tablets in a drawer when they could be help underprivileged kids continue their education online? Give your phones new life and help kids attend their classes online.</p>
         <button className={`py-2 px-4 bg-blue-gradient2 fongt-poppins font-normal text-[14px] text-primary outline-none ${styles}
rounded-[10px]`}>Read more...</button>
       </div>

       {/* third campaign */}
       {/* <div className='mt-10 mb-10'>
            
            <h1 className='font-poppins font-semibold xs:text-[40px] text-[30px] xs:leading-[53px] leading-[43px] text-gradient2 mb-4 '>#VirtualClassroom</h1>
            
       
       
         <img className='w-[100%]' src="https://media.istockphoto.com/id/1466767367/vector/back-to-school-template-with-pencils-and-clouds-online-education-banner-ad-landing-page-or.jpg?s=612x612&w=0&k=20&c=NUc2JygkrYIkTHh52vush710egDuy8Qc9J_hd48_ug0=" alt="" />
         <h4 className='font-poppins text-gradient font-normal xs:text-[30px] text-[20px] xs:leading-[53px] leading-[43px]'>Put your old mobiles, laptops, tablets to good use and help underprivileged kids continue their education online.</h4>
         <p className={`${styles.paragraph2} max-w-[900px] mt-5`}>Why stash your old phone, laptops and tablets in a drawer when they could be help underprivileged kids continue their education online? Give your phones new life and help kids attend their classes online.</p>
         <button className={`py-2 px-4 bg-blue-gradient2 fongt-poppins font-normal text-[14px] text-primary outline-none ${styles}
rounded-[10px]`}>Read more...</button>
       </div>  */}
        </section>
  </>
  
  )
}

export default Campaign