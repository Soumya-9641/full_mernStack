import { light } from '@mui/material/styles/createPalette'
import React,{useState} from 'react'
import {navLinks} from "../constant/index"
import Dropdown from './Dropdown'
const Menu = ({items,keyid}) => {
  const [dropdown, setDropdown] = useState(false)
  return (
    <li className={` font-poppins font-normal cursor-pointer text-[16px] ${keyid === navLinks.length -1 ? `mr-0` : `mr-10`} text-white`}>
            {items.submenu ? (
                <>
                <button type="button" aria-haspopup="menu"
                aria-expanded={dropdown ? "true" : "false"}
                  onClick={()=>setDropdown((prev)=>!prev)}
                >
                    {items.title}{' '}
                </button>
                   
                
                <Dropdown dropdown={dropdown} submenus={items.submenu} />
                </>
            ):(
                <>
                <a href={items.link}>{items.title}</a>  
                </>
            )

            }
    </li>
  )
}

export default Menu