import React from 'react'

const Dropdown = ({submenus,dropdown}) => {
  return (
    <ul className={`absolute dropdown ${dropdown ? "block bg-black-gradient shadow-slate-50 p-4 rounded-lg " : "hidden"}`}>
      {submenus.map((submenu, index) => (
        <li  key={index} className="p-0.5">
          <a href={submenu.url}>{submenu.title}</a>
        </li>
      ))}
    </ul>
  )
}

export default Dropdown