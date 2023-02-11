
import React,{useEffect,useState} from 'react'
import {useNavigate} from "react-router-dom"
const About = () =>{
  const [userdata, setUserdata] = useState({})
  const navigate = useNavigate();
const callAboutePage= async()=>{
              try{
                      const res = await fetch("/about",{
                        method:"GET", 
                        headers:{
                          Accept:"application/json",
                          "Content-Type" : "application/json"
                        },
                        credentials:"include"
                      })
                      const data = await res.json();
                      setUserdata(data);
                      console.log(data);
                      if(!res.status===200){
                        const error = new Error(res.error)
                        throw error;
                      }
              }catch(err){
                console.log(err)
                navigate("/login"); 
              }
}
useEffect(() => {
      callAboutePage();
},[]);


  return (
    <>
      <section className="text-gray-600 body-font">
  <div className="container px-5 py-24 mx-auto">
    <div className="flex flex-col text-center w-full mb-20">
      <h2 className="text-xs text-indigo-500 tracking-widest font-medium title-font mb-1">{userdata.work}</h2>
      <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">{userdata.name}</h1>
      <p className="lg:w-2/3 mx-auto leading-relaxed text-base"><u>{userdata.work}.</u></p>
      <p className="lg:w-2/3 mx-auto leading-relaxed text-base"><u>c++ programmer.</u></p>
      <p className="lg:w-2/3 mx-auto leading-relaxed text-base"><u>devops and ai enthusiast.</u></p>
    </div>
    <div className="flex flex-wrap">
      <div className="xl:w-1/4 lg:w-1/2 md:w-full px-8 py-6 border-l-2 border-gray-200 border-opacity-60">
        <h2 className="text-lg sm:text-xl text-gray-900 font-medium title-font mb-2">User Id</h2>
        <p className="leading-relaxed text-base mb-4">{userdata._id}</p>
        
      </div>
      <div className="xl:w-1/4 lg:w-1/2 md:w-full px-8 py-6 border-l-2 border-gray-200 border-opacity-60">
        <h2 className="text-lg sm:text-xl text-gray-900 font-medium title-font mb-2">Name</h2>
        <p className="leading-relaxed text-base mb-4">{userdata.name}</p>
        
      </div>
      <div className="xl:w-1/4 lg:w-1/2 md:w-full px-8 py-6 border-l-2 border-gray-200 border-opacity-60">
        <h2 className="text-lg sm:text-xl text-gray-900 font-medium title-font mb-2">Email</h2>
        <p className="leading-relaxed text-base mb-4">{userdata.email}</p>
        
      </div>
      <div className="xl:w-1/4 lg:w-1/2 md:w-full px-8 py-6 border-l-2 border-gray-200 border-opacity-60">
        <h2 className="text-lg sm:text-xl text-gray-900 font-medium title-font mb-2">Profession</h2>
        <p className="leading-relaxed text-base mb-4">{userdata.work}</p>
        
      </div>
      <div className="xl:w-1/4 lg:w-1/2 md:w-full px-8 py-6 border-l-2 border-gray-200 border-opacity-60">
        <h2 className="text-lg sm:text-xl text-gray-900 font-medium title-font mb-2">Phone</h2>
        <p className="leading-relaxed text-base mb-4">{userdata.phone}</p>
        
      </div>
    </div>
    <button className="flex mx-auto mt-16 text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">Edit profile</button>
  </div>
</section>
    </>
  )
}

export default About