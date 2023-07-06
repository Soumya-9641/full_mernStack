import React,{useState} from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';
import Map from './Map';
//import Pickupquantity from "./Pickupquantity"
const Booking = ({functionfromParent}) => {
  const navigate = useNavigate();
 // console.log(selectoption)
  const [pin, setPin] = useState()
  const [input, setInput] = useState('')
  const [service, setService] = useState()
 const handleInputChange=(e)=>{
  setInput(e.target.value)
 }
 const childfunction=(e)=>{
      
      functionfromParent(input);
      navigate("/pickupouantity")
 }
  const checkpin= async()=>{
    const pins = await fetch("/pincode",{
      method:"GET", 
      headers:{
        Accept:"application/json",
        "Content-Type" : "application/json"
      },
    
    })
    const pinJson = await pins.json();
    
   
 // console.log(pinJson,pin);
    if(Object.keys(pinJson).includes(pin)){
        setService(true);
        toast.success('Your pincode is servicable', {
          position: "bottom-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
          });
    }else{
      setService(false);
      toast.error('Sorry! Your pincode is not servisable', {
        position: "bottom-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        });
    }
    setPin("")
    //console.log(service);
}
  
  const onChangepin=(e)=>{
    setPin(e.target.value)

  }
  return (
    <section className="text-gray-600 body-font relative mb-80">
      <ToastContainer
      position="bottom-center" 
      autoClose={5000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme="dark"
     />
  <div className="container px-5 py-24 mx-auto flex sm:flex-nowrap flex-wrap">
    <div className="lg:w-2/3 md:w-1/2 bg-gray-300 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative opacity-70">
      <iframe width="100%" height="100%" className="absolute inset-0" frameBorder="0" title="map" marginHeight="0" marginWidth="0" scrolling="no" src="https://maps.google.com/maps?width=100%&amp;height=600&amp;hl=en&amp;q=%C4%B0zmir+(My%20Business%20Name)&amp;ie=UTF8&amp;t=&amp;z=14&amp;iwloc=B&amp;output=embed"></iframe>

      <div className="bg-white relative flex flex-wrap py-6 rounded shadow-md">
        <div className="lg:w-1/2 px-6">
          <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">ADDRESS</h2>
          <p className="mt-1">Photo booth tattooed prism, portland taiyaki hoodie neutra typewriter</p>
        </div>
        <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
          <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">EMAIL</h2>
          <a href='/' className="text-indigo-500 leading-relaxed">example@email.com</a>
          <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs mt-4">PHONE</h2>
          <p className="leading-relaxed">123-456-7890</p>
        </div>
      </div>
      {/* <Map/> */}
    </div>
    <div className="lg:w-1/3 md:w-1/2 bg-gray-800 outline-blue-500 outline outline-offset-2 flex flex-col md:ml-auto w-full md:py-8 px-6 rounded-xl opacity-80 mt-8 md:mt-0">
      <h2 className="text-gray-400 text-lg mb-1 font-medium title-font">Book A Pickup</h2>
      <p className="leading-relaxed mb-5 text-gray-600">Enter the necessary things</p>
      <div className="relative mb-4">
        <label htmlFor="name" className="leading-7 text-sm text-gray-400">Enter your location</label>
        <input value={pin} onChange={onChangepin} type="text" id="name" name="location" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
         <button onClick={checkpin} className="py-4 ml-32 mt-2 px-6 bg-blue-gradient2 fongt-poppins font-medium text-[18px] text-primary outline-none 
     rounded-[10px]">Check</button>
      </div>
      { (!service && service!=null) && <div className='text-red-600 text-sm mt-3'>
             Sorry! We don't deliver to this pincode
        </div>}
       {(service && service!=null) && <div className='text-green-600 text-sm mt-3'>
             yay! We  deliver to this pincode
        </div>}
      <div className="relative mb-4">
        <label htmlFor="email" className="leading-7 text-sm text-gray-400">Choose pickup types</label>
              <fieldset>
        
        <label htmlFor="pickuptype" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Select an option</label>
      <select type="text" value={input} onChange={handleInputChange} id="pickuptype" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
        <option value="" selected>Choose a types</option>
        <option value="Light Pickup (via 2-Wheeler)">Light Pickup (via 2-Wheeler)</option>
        <option value="Collection Drive Pickup">Collection Drive Pickup</option>
        <option value="Medium to Heavy Pickup">Medium to Heavy Pickup</option>
        
      </select>
      {/* <input className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" type="text" value={input} onChange={handleInputChange}  /> */}
      </fieldset>
        
      </div>
      
      <button onClick={childfunction} className="py-4 px-6 bg-blue-gradient2 fongt-poppins font-medium text-[18px] text-primary outline-none 
     rounded-[10px]">Button</button>
   
    
    </div>
  </div>
</section>
  )
}

export default Booking