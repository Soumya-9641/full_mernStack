import React from 'react'
import styles from '../style'
const Card5 = () => {
  return (
    <div  className='mt-10 mb-10'>
                  
                  <h1 className='font-poppins font-semibold xs:text-[40px] text-[30px] xs:leading-[53px] leading-[43px] text-gradient2 mb-4 '>#GoCircular100</h1>
                  
            
            
               <img className='w-[100%]' src="https://sadsindia.org/wp-content/uploads/2020/04/Go-Circular-100-SADS-1070x446.jpg" alt="" />
               
               
               <p className='font-bold text-white mt-4 font-serif'>Take part in our campaign #GoCircular100 and put your old clothes, shirts, pants to good use.</p>
               
              
                <div>
                        <div className='border-t-[1px] border-t-[#70b3ad] text-gradient mb-0 mt-6'>
                            <h2 className='font-poppins font-semibold xs:text-[40px] text-[30px] xs:leading-[53px] leading-[43px] mt-10'>Terms & Conditions:</h2>
                            
                        </div>
                        <div className='text-white mt-4'>
                            <ul className='mt-4 p-4'>
                                <li>1. First 10,000 pick ups will be free of charge, courtesy Snapdeal and Share at Door Step (SADS). Post 10,000, SADS will charge a nominal convenience fee per pick up.</li>
                                <li>2. Doorstep pick-ups are available in select cities only: Delhi, Bangalore, Chennai, Hyderabad & Mumbai.</li>
                                <li>3. Pick-up of donation requests are subject to:
                                        <ul className='ml-6'>
                                            <li>I. Your address falling in the defined pick up area of the nearest NGO partner.</li>
                                            <li>II. Availability of the slot in your city as per your requested time.</li>
                                            <li>III. Your donation (clothes only) request must have at least 1 clothing item to a maximum of 2 medium sized bags of clothes.</li>
                                            <li>IV. Your donations should be washed and in good, usable condition.</li>
                                        </ul>
                                </li>
                                <li>4. The status of your pick up request would be informed to you via e-mail.</li>
                                <li>5. In case there is no pick up service available in your city, you can still participate in #PileForGood and donate your clothes. We will inform you of any drop point/s or NGO nearby where you can donate your clothes.</li>
                            </ul>
                        </div>
                        
                        <div className='text-white mt-4'>
                                
                                <p className={`${styles.paragraph2}`}>
                                Reach out to us at <a className='text-gradient' href="/">soumyadipgantait2003@gmail.com</a>  and we will walk you through the various options available as per your requirements and company objectives.
                                </p>
                        </div>
                </div>
              
               
               
            </div>
  )
}

export default Card5