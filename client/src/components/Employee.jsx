import React,{useState,useEffect} from 'react'
import {employee} from "../assets"
//import Carousel from './Carousel'
import styles,{layout} from "../style"
import Engage1 from './Engage1'
import Engage2 from './Engage2'
import Engage3 from './Engage3'
import Engage4 from './Engage4'

const Employee = () => {
      //const [fetchdata, setFetchdata] = useState()
      const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone:'',
    work:'',
    message:'',
  });

    // const [renderdata, setRenderdata] = useState({
    //     name:  "",
    //     email:  "",
    //     phone: "",
    //     work:  "",
    //     message: ""
    // })
    const handleChange=(e)=>{
            const {name,value} = e.target;
            setFormData((prev)=>({
            ...prev,
            [name]:value,
           }));
    }
    const handleSubmit=async (e)=>{
        e.preventDefault();
       // console.log(formData);
        const res = await fetch("/employee",{
            method:"POST",
            headers:{
              Accept:"application/json",
              "Content-Type" : "application/json"
            },
            body:JSON.stringify({
              name:formData.name,
              email:formData.email,
              contact:formData.phone,
              type: formData.work,
              message:formData.message
            })
          });
          const data = await res.json();
          console.log(data);
          setFormData({
            message:''
          })

    }
    const renderfunction =async()=>{
            try{

                const res =await fetch('/about');
                const data = await res.json();
                console.log(data);
                setFormData((prevdata)=>({
                    ...prevdata,
                    name:data.name,
                    email:data.email,
                    phone:data.phone,
                    work:data.work,

                }));
                if(!res.status===200){
                    const error = new Error(res.error)
                    throw error;
                }

            }catch(err){
                console.log(err);
            }
    }
    useEffect(() => {
    // Update the document title using the browser API
        renderfunction();
  },[]);
  return (
    <>
    <div className={`flex md:flex-row flex-col  first-letter ${styles.paddingY}`}>
            <div className={`flex-1 ${styles.flexStart} flex-col mb-0 xl:px-0 sm:px-16 px-4`}>
                <h1 className='font-poppins font-semibold xs:text-[72px] text-[52px] xs:leading-[100px] leading-[75px] text-gradient uppercase md:ml-6 ml-3 mb-4 lg:mb-0'>ENGAGE YOUR EMPLOYEE</h1>
                <h4 className='text-white font-poppins xs:text-[20px] text-[20px] w-[350px] h-[40%] lg:h-[25%]  mt-4 ml-4'>Learn the most impactful, fun and effective way to supercharge your employee engagement</h4>
                <button className="mb-2 lg:mt-0 mt-6  bg-indigo-600 px-8 py-2 rounded-lg hover:bg-indigo-300 border-0 focus:outline-none text-lg  ">Let's Talk!</button>
            </div>
            <div className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}>
              <img src={employee} alt="" className='w-[80%] h-[80%]' />
            </div>
           
    </div>
    <div>
          <Engage1/>
          <Engage2/>
          <Engage3/>
          <Engage4/>
    </div>
    
            <form onSubmit={handleSubmit} className="w-full flex items-center justify-center my-12">
               <div className=" bg-white shadow rounded py-12 lg:px-28 px-8">
                   <p className="md:text-3xl text-xl font-bold leading-7 text-center text-gray-700">Let’s talk!</p>
                   <div className="md:flex items-center mt-12">
                       <div className="md:w-72 flex flex-col">
                           <label className="text-base font-semibold leading-none text-gray-800">name</label>
                          
                           <input onChange={handleChange} name='name' value={formData.name} tabIndex={0} arial-label="Please input name" type="name" className="text-base leading-none text-gray-900 p-3 focus:oultine-none focus:border-indigo-700 mt-4 bg-gray-100 border rounded border-gray-200 placeholder-gray-100"  />
                       </div>
                       <div className="md:w-72 flex flex-col md:ml-6 md:mt-0 mt-4">
                           <label className="text-base font-semibold leading-none text-gray-800">email</label>
                           <input onChange={handleChange} name='email' value={formData.email} tabIndex={0} arial-label="Please input email address" type="name" className="text-base leading-none text-gray-900 p-3 focus:oultine-none focus:border-indigo-700 mt-4 bg-gray-100 border rounded border-gray-200 placeholder-gray-100" placeholder="Please input email address" />
                       </div>
                   </div>
                   <div className="md:flex items-center mt-8">
                       <div className="md:w-72 flex flex-col">
                           <label className="text-base font-semibold leading-none text-gray-800">phone</label>
                           <input onChange={handleChange} name='phone' value={formData.phone} tabIndex={0} arial-label="Please input company name" type="name" className="text-base leading-none text-gray-900 p-3 focus:oultine-none focus:border-indigo-700 mt-4 bg-gray-100 border rounded border-gray-200 placeholder-gray-100 " placeholder="Please input company name" />
                       </div>
                       <div className="md:w-72 flex flex-col md:ml-6 md:mt-0 mt-4">
                           <label className="text-base font-semibold leading-none text-gray-800">work</label>
                           <input onChange={handleChange} name='work' value={formData.work} tabIndex={0} arial-label="Please input country name" type="name" className="text-base leading-none text-gray-900 p-3 focus:oultine-none focus:border-indigo-700 mt-4 bg-gray-100 border rounded border-gray-200 placeholder-gray-100" placeholder="Please input country name" />
                       </div>
                   </div>
                   <div>
                       <div className="w-full flex flex-col mt-8">
                           <label className="text-base font-semibold leading-none text-gray-800">message</label>
                           <textarea onChange={handleChange} value={formData.message} name='message' tabIndex={0} aria-label="leave a message" type="name" className="h-36 text-base leading-none text-gray-900 p-3 focus:oultine-none focus:border-indigo-700 mt-4 bg-gray-100 border rounded border-gray-200 placeholder-gray-100 resize-none" defaultValue={""} />
                       </div>
                   </div>
                   <p className="text-xs leading-3 text-gray-600 mt-4">By clicking submit you agree to our terms of service, privacy policy and how we use data as stated</p>
                   <div className="flex items-center justify-center w-full">
                       <button  className="mt-9 text-base font-semibold leading-none text-white py-4 px-10 bg-indigo-700 rounded hover:bg-indigo-600 focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 focus:outline-none">SUBMIT</button>
                   </div>
               </div>
           </form>
     </>
  )
}

export default Employee