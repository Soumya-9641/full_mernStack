import React from 'react'

const Button = ({styles}) => {
  return (
    <button className={`py-4 px-6 bg-blue-gradient2 font-poppins font-medium text-[18px] text-primary outline-none ${styles}
     rounded-[10px]`}>
            Checkout
    </button>
  )
}

export default Button