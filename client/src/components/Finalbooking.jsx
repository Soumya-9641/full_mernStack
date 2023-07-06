import { Details } from '@material-ui/icons';
import React,{useState,useEffect} from 'react'
import {  TbTruckDelivery } from 'react-icons/tb';
import  { useNavigate } from "react-router-dom";
const shortid = require('shortid')

function loadScript(src) {
	return new Promise((resolve) => {
		const script = document.createElement('script')
		script.src = src
		script.onload = () => {
			resolve(true)
		}
		script.onerror = () => {
			resolve(false)
		}
		document.body.appendChild(script)
	})
}


const Finalbooking = ({valueParentfunc}) => {
  const navigate = useNavigate()
  const [disable, setDisable] = useState(true);
  const [prop, setProp] = useState(()=>{
    const storedProp = JSON.parse(localStorage.getItem('valueParentfunc'));
    return storedProp || 0;
  })

    const [dummyname, setDummyname] = useState("soumya")
    useEffect(() => {
      // Store the value from the parent component in localStorage
      localStorage.setItem('valueParentfunc', JSON.stringify(valueParentfunc));
  
      
      setProp(valueParentfunc);
    }, [valueParentfunc]);
    const paymentval = prop.propval==="Light Pickup (via 2-Wheeler)"? 199:prop.propval==="Collection Drive Pickup"?399:700
    
  async function displayRazorpay() {
		const res = await loadScript('https://checkout.razorpay.com/v1/checkout.js')

		if (!res) {
			alert('Razorpay SDK failed to load. Are you online?')
			return
		}
    const oid=shortid.generate()
    const data ={paymentval,oid}
		let a = await fetch('/razorpay', {
      method: 'POST', // or 'PUT'
      headers: {
       'Content-Type': 'application/json',
     },
     body: JSON.stringify(data),
   })
    let txnRes = await a.json()
    console.log(txnRes)
   const amount= paymentval*100
		console.log(data)

		const options = {
			key:  'rzp_test_NqBEWmLJAJOnjU' ,
			currency: "INR",
			amount: amount,
			order_id: txnRes.id,
			name: 'Donation',
			description: 'Thank you for nothing. Please give us some money',
			image: 'http://localhost:8000/cloth.png',
			handler: function (response) {
				alert(response.razorpay_payment_id)
				alert(response.razorpay_order_id)
				alert(response.razorpay_signature)
        navigate("/")

			},
			prefill: {
				name:dummyname,
				// email: 'sdfdsjfh2@ndsfdf.com',
				// phone_number: '9899999999'
			}
		}
		const paymentObject = new window.Razorpay(options)
		paymentObject.open()
	}


          const [details, setDetails] = useState({
              date: "",
              timeslot: "",
              name: "",
              email: "",
              flatno: "",
              city: "",
              pincode:"",
              address: "",
              note: ""

          })
          const handleChange=(e)=>{
                const {name,value}=e.target;
                setDetails((prev)=>{
                  return {...prev,[name]:value};
                })
          }
          
          const handleSubmit=async (e)=>{
            console.log(details)
            setDisable(false);
             e.preventDefault();
             
             //const payments = {details};
    const res = await fetch("/payment",{
      method:"POST",
      headers:{
        "Content-Type" : "application/json"
      },

      body:JSON.stringify(details)
    });
    const data=await res.json();
    
    console.log(data);
              //console.log(details)
              setDetails({ date: "",
              timeslot: "",
              name: "",
              email: "",
              flatno: "",
              city: "",
              pincode:"",
              address: "",
              note: ""
})
          }
  return (
    <>
     
    <section className="text-gray-100 rounded-3xl shadow-2xl shadow-slate-300 mb-20 bg-gray-500 body-font">
    <div className='flex flex-col justify-center items-center text-gradient mb-0 mt-10 pt-20  '>
                <h1 className='font-poppins font-semibold xs:text-[40px] text-[30px] xs:leading-[53px] leading-[43px]'>SCHEDULE A PICKUP</h1>
                <p className='font-poppins text-gray-300'>Please select a convenient slot as per your availability</p>
             
    </div>
    <div className="container px-0 py-24 mx-auto flex justify-center flex-wrap">
      <div className="lg:w-1/2  pl-10 pr-10 md:w-full  mb-10 lg:mb-0 rounded-lg overflow-hidden">
      <div className="  bg-slate-700 rounded-lg p-8 flex flex-col  lg:ml-auto md:ml-60 lg:w-[100%]  w-[400px] mt-10 md:mt-0">
                <h2 className="text-gray-900 text-lg font-medium title-font mb-5"> CHOOSE A PICKUP SLOT</h2>
                <h2 className="text-gray-900 text-lg font-medium title-font mb-5">You choose  {prop.nofproduct} products</h2>
                <div className="relative mb-4">
                   
                    <input onChange={handleChange} value={details.date} type="text" id="date" name="date" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" placeholder='Enter exact date' autoComplete='off'/>
                    <p className='font-poppins text-gray-200 text-[12px] mb-0'>*please give a valid format like: 2023-06-24</p>
                </div>
                <div className="relative mb-4">
                   
                    <input onChange={handleChange} value={details.timeslot} type="text" id="time" name="timeslot" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" placeholder='Enter time slot' autoComplete='off'/>
                    <p className='font-poppins text-gray-200 text-[12px] mb-0'>*please give a valid format like:08:30:00Z</p>
                </div>
                
                </div> 
                
                <hr className="w-64 h-1 lg:ml-40 md:ml-60 ml-20 my-8 bg-blue-gradient border-0 rounded dark:bg-gray-700"/>
                <div className="  bg-slate-700 rounded-lg p-8 flex flex-col lg:ml-auto md:ml-60 lg:w-[100%] w-[400px] mt-10 md:mt-0">
                <h2 className="text-gray-900 text-lg font-medium title-font mb-2"> NOTES FOR PICKUP PERSON (Optional)</h2>
                <p className='font-poppins text-gray-200 text-[10px] mb-4'>* We'll do our best to pass along your instructions to our Pickup Partner. Compliance isn't guaranteed.</p>
                <div className="relative mb-4">
                 <textarea onChange={handleChange} value={details.note} className='p-4 rounded-lg text-gray-700' name="note" placeholder='enter a note for pickup person' id="" cols="40" rows="3"></textarea>
                </div>
                
                
                </div>
      </div>
      <div className="flex flex-col  lg:py-0 px-10  -mb-10 lg:w-1/2 lg:pl-12 lg:text-left text-center">
                <div className="  bg-slate-700 rounded-lg p-8 flex flex-col md:ml-auto lg:w-[100%] w-[400px] mt-10 md:mt-0">
                <h2 className="text-gray-900 text-lg font-medium title-font mb-5">Donor details</h2>
                <div className="relative mb-4">
                   
                    <input onChange={handleChange} value={details.name} type="text" id="name" name="name" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" placeholder='Name' autoComplete='off'/>
                </div>
                <div className="relative mb-4">
                    
                    <input onChange={handleChange} value={details.email} type="email" id="email" name="email" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" placeholder='Email' autoComplete='off'/>
                </div>
                <div className="relative mb-4 flex flex-row">
                    
                    <input onChange={handleChange} value={details.flatno}  type="text" id="flatno" name="flatno" className="mr-4 w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" placeholder='Flat door' autoComplete='off'/>
                    <input onChange={handleChange} value={details.city} type="text" id="city" name="city" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" placeholder='city' autoComplete='off'/>
                </div>
                <div className="relative mb-4">
                    
                    <input onChange={handleChange} value={details.pincode} type="number" id="pincode" name="pincode" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" placeholder='Pincode' autoComplete='off'/>
                </div>
                <div className="relative mb-4">
                    
                    <textarea onChange={handleChange} value={details.address} className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" name="address" id="address" cols="35" rows="3" placeholder='full address'></textarea>
                </div>
                <div className='flex flex-row w-[50%] lg:ml-40 ml-24 items-center bg-blue-gradient2 p-1 rounded-xl cursor-auto'>
                 
                      <button onClick={handleSubmit}  className='mr-1 flex items-center justify-center lg:ml-4 text-slate-900 px-6'>Save The data </button>
                   
              </div>
                </div>



                <div className=" bg-slate-700 rounded-lg p-8 flex flex-col md:ml-auto lg:w-[100%] w-[400px] mt-10 md:mt-10">
              
                <div className="relative mb-4">
                <div className='flex flex-row justify-between mb-6 p-0 mx-4 rounded-xl bg-slate-700'>
            
              
            </div>
                </div>
               
                <div className='flex flex-row w-[30%] lg:ml-40 ml-24 items-center bg-blue-gradient2 p-1 rounded-xl '>
                  {disable?
                  <button  className='mr-1 flex items-center justify-center lg:ml-4 text-slate-900 px-6 cursor-none'>Please fill the details</button>:
                  <button onClick={displayRazorpay}  className='mr-1 flex items-center justify-center lg:ml-4 text-slate-900 px-6 cursor-pointer'>Pay Now  {paymentval}</button>
                  }
                      
                  
              </div>
                </div>
        </div>
        
      </div>
    
  </section>
  </>
  )
}

export default Finalbooking