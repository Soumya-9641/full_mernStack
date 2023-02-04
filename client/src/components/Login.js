import React from 'react'
import { NavLink } from 'react-router-dom'
const Login = () => {
  return (
    <>
    <section className="text-black-300 body-font">
      <div className="container mx-auto flex flex-wrap flex-col md:flex-row items-center px-10 py-24 my-24">
          <div className="lg:w-2/6 md:w-1/2 lg:pr-16 md:pr-0 pr-0">
             <img src="https://i.pinimg.com/564x/9e/ec/e2/9eece2da8a0cfb34185fad3fc830026d.jpg" alt="img" srcset="" />
          </div>
          <div className="lg:w-2/5 md:w-1/2rounded-lg p-10 bg-gray-300 ">
              <h2 className="text-2xl mb-4">Log In</h2>
             <div className="mb-2">
               <label for="full-name" className="">Full Name</label>
                  <input type="text" id="full-name" name="full-name" className=" rounded-sm w-full bg-white  border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
              </div>
              <div className="mb-2">
                  <label for="email" className="">Email</label>
                   <input type="email" id="email" name="email" className="w-full rounded-sm  bg-white  border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" autoComplete='off'/>
               </div>
               <button className="mb-2 mt-4 bg-indigo-600 px-8 py-2 rounded-lg hover:bg-indigo-300 border-0 focus:outline-none text-lg lg:ml-48 md:ml-16">Button</button>
              
              <NavLink to="/signup"> <p className="text-md">Sign up</p></NavLink>
          </div>
          
      </div>
      </section>
    </>
  )
}

export default Login