import React from 'react'

const Button = ({ styles }) => {
  return (
    <button type='button' className={`${styles} font-poppins font-medium text-[18px] text-primary outline-none py-4 px-6 bg-blue-gradient rounded-xl`}>
      Get Started
    </button>
  )
}

export default Button