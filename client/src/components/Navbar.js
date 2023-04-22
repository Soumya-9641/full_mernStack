import React,{useState} from 'react'
import { NavLink } from 'react-router-dom'
import {navLinks} from "../constant/index"
import {close , mainlogo,menu} from "../assets"
import { light } from '@mui/material/styles/createPalette'
//import 'bootstrap/dist/css/bootstrao.css';
const Navbar = () => {
  const [toggle, setToggle] = useState(false)
  return (
    <>
  
    <nav className='w-full flex py-2 justify-between items-center navbar '>
        <img src={mainlogo} alt='donateking'  className='w-[150px] h-[150px]'/>
        <ul className='list-none sm:flex hidden justify-end items-center flex-1'>
             {navLinks.map((nav,index)=>(
              <li key={nav.id} className={`font-poppins font-normal cursor-pointer text-[16px] ${index === navLinks.length -1 ? `mr-0` : `mr-10`} text-white`} >
                    <a href={`${nav.link}`}>
                      {nav.title}
                    </a>
              </li>
             ))}
        </ul>

        <div className='sm:hidden flex flex-1 justify-end items-center'>
                <img src={toggle?close:menu} alt="menu" className="w-[28px] h-[28px] object-contain" onClick={()=>{
                  setToggle((prev)=>!prev)
                }} />
                <div className={`${toggle?`flex`:`hidden`} p-6 bg-black-gradient absolute
                 top-24 right-0 mx-4 my-2 min-w-[160px] rounded-xl sidebar`}>
                    <ul className='list-none flex flex-col justify-end items-center flex-1'>
                  {navLinks.map((nav,index)=>(
                    <li key={nav.id} className={`font-poppins font-normal cursor-pointer text-[16px] ${index === navLinks.length -1 ? `mr-0` : `mb-4`} text-white`} >
                          <a href={`${nav.link}`}>
                            {nav.title}
                          </a>
                    </li>
                  ))}
        </ul>
                </div>
        </div>
    </nav>
        {/* <header className="text-gray-600 body-font">
  <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
    <NavLink className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0" to='/'>
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full" viewBox="0 0 24 24">
        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
      </svg>
      <span className="ml-3 text-xl">MERN STACK</span>
    </NavLink>
    <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
      <NavLink className="mr-5 hover:text-gray-900" to='/ '>Home</NavLink>
      <NavLink className="mr-5 hover:text-gray-900" to='/contact'>Contact </NavLink>
      <NavLink className="mr-5 hover:text-gray-900" to='/about'>About Me</NavLink>
      <NavLink className="mr-5 hover:text-gray-900" to='/login'>Login</NavLink>
      <NavLink className="mr-5 hover:text-gray-900" to='/signup'>SignUp</NavLink>
    </nav>
    <NavLink to="/logout">
    <button className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">Logout
      <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-1" viewBox="0 0 24 24">
        <path d="M5 12h14M12 5l7 7-7 7"></path>
      </svg>
    </button>
    </NavLink>
  </div>
</header> */}
    </>
  )
}

export default Navbar