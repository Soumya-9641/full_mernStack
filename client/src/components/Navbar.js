import React,{useState} from 'react'
import { NavLink } from 'react-router-dom'
import {navLinks} from "../constant/index"
import Menu from './Menu'
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

        {navLinks.map((menu, index) => {
          return <Menu items={menu} keyid={index} key={menu.id}/>;
        })}
             
        </ul>

        <div className='sm:hidden flex flex-1 justify-end items-center'>
                <img src={toggle?close:menu} alt="menu" className="w-[28px] h-[28px] object-contain" onClick={()=>{
                  setToggle((prev)=>!prev)
                }} />
                <div className={`${toggle?`flex`:`hidden`} p-6 bg-black-gradient absolute
                 top-24 right-0 mx-4 my-2 min-w-[160px] rounded-xl sidebar`}>
                    <ul className='list-none flex flex-col justify-end items-center flex-1'>
                    {navLinks.map((menu, index) => {
                      return <Menu items={menu} keyid={index} key={menu.id} />;
                    })}
                 
        </ul>
                </div>
        </div>
    </nav>
       
    </>
  )
}

export default Navbar