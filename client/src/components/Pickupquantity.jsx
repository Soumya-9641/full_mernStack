import React,{useState,useEffect} from 'react'
import {bag,donate,shoes,cloth,bag1,stationary,furniture} from "../assets"
import {  BiPlus } from 'react-icons/bi';
import {  TbTruckDelivery } from 'react-icons/tb';
import {  IoIosArrowDown } from 'react-icons/io';
import {  BsArrowReturnRight } from 'react-icons/bs';
import {  GrFormSubtract } from 'react-icons/gr';
import { useNavigate } from 'react-router-dom';
const Pickupquantity = ({valuefromParent,functionparent}) => {
  const [plus, setPlus] = useState(0)
  const navigate = useNavigate();
  const [product, setproduct] = useState(0)
  const [prop, setProp] = useState(()=>{
    const storedProp = JSON.parse(localStorage.getItem('valuefromParent'));
    return storedProp || 0;
  })
 
const childClick=(e)=>{
  const rendervalue={
    nofproduct:product,
    propval:prop
  }
  functionparent(rendervalue);
  navigate("/finalbooking")
}


  useEffect(() => {
    // Store the value from the parent component in localStorage
    localStorage.setItem('valueFromParent', JSON.stringify(valuefromParent));

    
    setProp(valuefromParent);
  }, [valuefromParent]);

  const handleIncrement=()=>{
    if(plus<100){
      setPlus(plus+5);
      setproduct(product+1)
    }
        
  }
  const [dropdown, setDropdown] = useState(false)
  const handleclick=()=>{
        setDropdown(!dropdown);
  }
  const handleDecrement=()=>{
          if(plus>0){
            setPlus(plus-5);
          }
  }
  return (
    <>
     
    <section className="text-gray-100 rounded-3xl shadow-2xl shadow-slate-300 mb-20 bg-gray-500 body-font">
    <div className='flex flex-col justify-center items-center text-gradient mb-0 mt-10 pt-20  '>
                <h1 className='font-poppins font-semibold xs:text-[40px] text-[30px] xs:leading-[53px] leading-[43px]'>Become our Partner NGO</h1>
             
    </div>
    <div className="container px-0 py-24 mx-auto flex justify-center flex-wrap">
      <div className="lg:w-1/2  pl-10 pr-10 w-full mb-10 lg:mb-0 rounded-lg overflow-hidden">
      

          <div className='w-[100%] mb-6 p-4 rounded-xl bg-slate-700'>
              <div className='flex justify-between items-center'>
                  <div className='flex flex-row items-center'>
                        <img src={donate} className='w-[15%] h-[40%] mr-1' alt="" />
                      <h4>Fight Against Covid-19</h4>
                     
                  </div>
                  <div className='flex flex-row items-center bg-blue-gradient2 p-1 rounded-xl '>
                    
                    <IoIosArrowDown  onClick={handleclick} className='text-gray-900 cursor-pointer w-[20px] h-[20px]'/>
                  </div>
              </div>  
          </div>
         {dropdown ? <>
          <div className='w-[100%] mb-6 p-4 rounded-xl bg-slate-400'>
              <div className='flex justify-between items-center'>
                  <div className='flex flex-row items-center'>
                        <BsArrowReturnRight className='mr-4'/>
                      <h4>Cleaning & Hygiene (Soap, Detergent, Pads, Etc)</h4>
                     
                  </div>
                  <div className='flex flex-row items-center bg-blue-gradient p-1 rounded-xl '>
                  <GrFormSubtract onClick={handleDecrement} className='text-gray-900 cursor-pointer w-[20px] h-[20px]'/>
                  <button className='mr-1 text-slate-900 px-2 rounded-2xl '>Add </button>
                    < BiPlus onClick={handleIncrement} className='text-gray-900 cursor-pointer w-[20px] h-[20px]'/>
                  </div>
              </div>  
          </div>

         

          <div className='w-[100%] mb-6 p-4 rounded-xl bg-slate-400'>
              <div className='flex justify-between items-center'>
                  <div className='flex flex-row items-center'>
                        <BsArrowReturnRight className='mr-4'/>
                      <h4>Fight Against Covid-19</h4>
                     
                  </div>
                  <div className='flex flex-row items-center bg-blue-gradient p-1 rounded-xl '>
                  <GrFormSubtract onClick={handleDecrement} className='text-gray-900 cursor-pointer w-[20px] h-[20px]'/>
                  <button className='mr-1 text-slate-900 px-2 rounded-2xl '>Add </button>
                    < BiPlus onClick={handleIncrement} className='text-gray-900 cursor-pointer w-[20px] h-[20px]'/>
                  </div>
              </div>  
          </div>

         

          <div className='w-[100%] mb-6 p-4 rounded-xl bg-slate-400'>
              <div className='flex justify-between items-center'>
                  <div className='flex flex-row items-center'>
                        <BsArrowReturnRight className='mr-4'/>
                      <h4>Fight Against Covid-19</h4>
                     
                  </div>
                  <div className='flex flex-row items-center bg-blue-gradient p-1 rounded-xl '>
                  <GrFormSubtract onClick={handleDecrement} className='text-gray-900 cursor-pointer w-[20px] h-[20px]'/>
                  <button className='mr-1 text-slate-900 px-2 rounded-2xl '>Add </button>
                    < BiPlus onClick={handleIncrement} className='text-gray-900 cursor-pointer w-[20px] h-[20px]'/>
                  </div>
              </div>  
          </div>

        

          <div className='w-[100%] mb-6 p-4 rounded-xl bg-slate-400'>
              <div className='flex justify-between items-center'>
                  <div className='flex flex-row items-center'>
                        <BsArrowReturnRight className='mr-4'/>
                      <h4>Fight Against Covid-19</h4>
                     
                  </div>
                  <div className='flex flex-row items-center bg-blue-gradient p-1 rounded-xl '>
                  <GrFormSubtract onClick={handleDecrement} className='text-gray-900 cursor-pointer w-[20px] h-[20px]'/>
                  <button className='mr-1 text-slate-900 px-2 rounded-2xl '>Add </button>
                    < BiPlus onClick={handleIncrement} className='text-gray-900 cursor-pointer w-[20px] h-[20px]'/>
                  </div>
              </div>  
          </div>

          

          <div className='w-[100%] mb-6 p-4 rounded-xl bg-slate-400'>
              <div className='flex justify-between items-center'>
                  <div className='flex flex-row items-center'>
                        <BsArrowReturnRight className='mr-4'/>
                      <h4>Fight Against Covid-19</h4>
                     
                  </div>
                  <div className='flex flex-row items-center bg-blue-gradient p-1 rounded-xl '>
                  <GrFormSubtract onClick={handleDecrement} className='text-gray-900 cursor-pointer w-[20px] h-[20px]'/>
                  <button className='mr-1 text-slate-900 px-2 rounded-2xl '>Add </button>
                    < BiPlus onClick={handleIncrement} className='text-gray-900 cursor-pointer w-[20px] h-[20px]'/>
                  </div>
              </div>  
          </div></> : ""}
          
          <div className='w-[100%] mb-6 p-4 rounded-xl bg-slate-700'>
              <div className='flex justify-between items-center'>
                  <div className='flex flex-row items-center'>
                        <img src={bag} className='w-[10%] h-[30%] mr-1' alt="" />
                      <h4>Bags</h4>
                     
                  </div>
                  <div className='flex flex-row items-center bg-blue-gradient2 p-1 rounded-xl '>
                  <GrFormSubtract onClick={handleDecrement} className='text-gray-900 cursor-pointer w-[20px] h-[20px]'/>
                    <button className='mr-1 text-slate-900 px-2 rounded-2xl '>Add </button>
                    < BiPlus onClick={handleIncrement} type='bag' className='text-gray-900 cursor-pointer w-[20px] h-[20px]'/>
                  </div>
              </div>  
          </div>
          <div className='w-[100%] mb-6 p-4 rounded-xl bg-slate-700'>
              <div className='flex justify-between items-center'>
                  <div className='flex flex-row items-center'>
                        <img src={cloth} className='w-[10%] h-[30%] mr-1' alt="" />
                      <h4>Clothes</h4>
                     
                  </div>
                  <div className='flex flex-row items-center bg-blue-gradient2 p-1 rounded-xl'>
                  <GrFormSubtract onClick={handleDecrement} className='text-gray-900 cursor-pointer w-[20px] h-[20px]'/>
                    <button className='mr-1 text-slate-900 px-2'>Add </button>
                    < BiPlus onClick={handleIncrement} className='text-gray-900 w-[20px] h-[20px]'/>
                  </div>
              </div>  
          </div>
          <div className='w-[100%] mb-6 p-4 rounded-xl bg-slate-700'>
              <div className='flex justify-between items-center'>
                  <div className='flex flex-row items-center'>
                        <img src={shoes} className='w-[10%] h-[30%] mr-1' alt="" />
                      <h4>Shoes</h4>
                     
                  </div>
                  <div className='flex flex-row items-center bg-blue-gradient2 p-1 rounded-xl '>
                  <GrFormSubtract onClick={handleDecrement} className='text-gray-900 cursor-pointer w-[20px] h-[20px]'/>
                    <button className='mr-1 text-slate-900 px-2'>Add </button>
                    < BiPlus onClick={handleIncrement} className='text-gray-900 w-[20px] h-[20px]'/>
                  </div>
              </div>  
          </div>
      </div>
      <div className="flex flex-col   lg:py-6 -mb-10 lg:w-1/2 lg:pl-12 lg:text-left text-center">
       
        
        <div className="flex flex-row justify-center ml-60  mb-10 items-center lg:w-[20%] lg:h-[20%] w-[40%] h-[40%]">
          <img className=' justify-center items-center' src={bag1} alt="" />
          <h6 className='font-poppins text-[40px] text-slate-100'>{plus}%</h6>
          </div>
          <hr className="w-64 h-1 lg:ml-40 ml-60 my-8 bg-blue-gradient border-0 rounded dark:bg-gray-700"/>
          <div>
            <h2 className='text-gradient'>NOTE:</h2>
            <p className='font-poppins text-gray-100 font-normal flex flex-row items-center pl-4 pr-6 mt-6 mb-6'>You can choose to leave the donation bag at the door or gate for contactless pickup. Please inform the rider for the same when he calls.</p>
            <p className='font-poppins text-gray-100 font-normal flex flex-row items-center pl-4 pr-6 mt-6 mb-6'>Pickup will be done by a 2-Wheeler Rider assigned by one of our partners - DUNZO or Wefast..</p>
            <p className='font-poppins text-gray-100 font-normal flex flex-row items-center pl-4 pr-6 mt-6 mb-6'>Please ensure that the total weight doesn't exceed 10 kgs and the volume can be accommodated in a 2-wheeler.</p>
            <p className='font-poppins text-gray-100 font-normal flex flex-row items-center pl-4 pr-6 mt-6 mb-6'>Please pack the items in a single bag. Only one bag is accepted per request in a two-wheeler but you can raise multiple requests for same slot..</p>
            <p className='font-poppins text-gray-100 font-normal flex flex-row items-center pl-8 pr-6 mt-6 mb-6'>Please keep the items packed and ready for pickup.</p>
          </div>
          <hr className="w-64 h-1 lg:ml-40 ml-60 my-8 bg-blue-gradient border-0 rounded dark:bg-gray-700"/>
            <div className='flex flex-row justify-between mb-6 p-4 mx-4 rounded-xl bg-slate-700'>
            <div className='flex flex-row items-center '>
                <TbTruckDelivery className='w-[60px] h-[60px] ml-6 mt-0 mr-4'/>
                <div className='flex flex-col'>
                  <h6 className='font-poppins font-semibold text-gray-200'>{prop}</h6>
                  <div className='flex flex-row'>
                  <p className='font-poppins text-gray-200 text-[15px] mr-2'>{product} items</p>
                       <p className='font-poppins text-gray-200 text-[15px]'>{prop==="Light Pickup (via 2-Wheeler)"? "₹199":prop==="Collection Drive Pickup"?"₹399":"700"}</p>
                  </div>
                
                </div>
              </div>
              <div className='flex flex-row items-center bg-blue-gradient2 p-1 rounded-xl cursor-auto'>
        
                      <button onClick={childClick} className='mr-1 text-slate-900 px-6'>Next </button>
                  
              </div>
            </div>
        </div>
        
      </div>
    
  </section>
  </>
  )
}

export default Pickupquantity