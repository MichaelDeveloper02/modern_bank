import React from 'react'

function Button({styles}) {
  return (
    <button type='button' className={`py-4 px-6 bg-blue-gradient font-poppins font-mediumtext-[18px] text-primary outline-none ${styles} rounded-[10px]`}>  
    Get Started
    </button>
    )
}

export default Button