import React from 'react'

const Points = () => {
  return (
    <>
          <div className='flex flex-col justify-center items-center text-gradient mb-10 mt-10  '>
                <h4 className='font-poppins font-semibold xs:text-[30px] text-[30px] xs:leading-[53px] leading-[43px]'>NO GOOD DEED GOES UNREWARDED</h4>
          </div>
          <hr className='h-px my-8 bg-gray-200 border-0 dark:bg-gray-700' />
          <p className='font-poppins text-gray-500 font-normal flex flex-row mb-4 items-center'>Get rewarded for every step you take in your giving journey with Share At Door Step! “Share Points” is our way of thanking you for all the happiness you spread by giving away your unwanted goods to someone in need.</p>
          <p className='font-poppins text-gray-500 font-normal flex flex-row mb-4 items-center'>Dive into a world of unparalleled rewards with Share Points. Earn rewards each time you give a new life to those unwanted goods by giving them to someone in need.</p>
          <h4 className='font-poppins text-gray-300 flex flex-row mb-6 items-center'>How it works?</h4>
          <p className='font-poppins text-gray-500 font-normal flex flex-row mb-4 items-center'>1.Give away unwanted goods <br />
            Raise a donation pickup/drop request with us and give away your unwanted goods to someone in need.</p>
            <p className='font-poppins text-gray-500 font-normal flex flex-row mb-4 items-center'>2. Earn and accumulate “Share points” <br />
Earn “Share Points” for each fulfilled request and explore the wide range of exciting rewards (Coming soon).</p>
              <p className='font-poppins text-gray-500 font-normal flex flex-row items-center mb-20'>3. Redeem for exclusive rewards <br />
Your share points, your call! Choose from a hand picked selection of rewards -from enchanting stays, autographed sports memorabilia, discounted vouchers and gift cards from the brands you love, meetings with your favourite celebrities & visionaries, and much more!</p>

            <div class="flex flex-row items-center justify-center w-full mb-10">
                <hr class="w-64 h-1  mr-40 bg-gray-200 border-0 rounded dark:bg-gray-700"/>
                <div class=" px-4 -translate-x-1/2 left-1/2 ">
                <button className={`py-4 px-6 bg-blue-gradient2 font-poppins font-medium text-[18px] text-primary outline-none 
     rounded-[10px]`}>
            Book A Pickup
    </button>
                </div>
                <hr class="w-64 h-1 my-8 bg-gray-200 border-0 rounded dark:bg-gray-700"/>
            </div>
            
    </>
    
  )
}

export default Points