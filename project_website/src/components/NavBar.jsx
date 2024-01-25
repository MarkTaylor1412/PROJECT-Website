import { useState } from 'react'

import { close, logo, menu } from '../assets';
import { navLinks } from '../constants';

const NavBar = () => {
  const [toggle, setToggle] = useState(false)
  return (
    <nav className='w-full flex py-7 justify-between items-center navbar'>
      <img src={logo}
        alt='hoobank' className='w-[150px] h-[50px]' />
      <ul className='list-none sm:flex hidden justify-end items-center flex-1'>
        {navLinks.map((nav, index) => (
          <li key={nav.id}
            className={`font-poppins font-medium cursor-pointer text-[20px]
            ${index === navLinks.length - 1 || index === navLinks.length - 3 ? 'text-cyan-700' : 'text-cyan-500'}
            ${index === navLinks.length - 1 ? '-mr-5' : 'mr-10'}`}>
            <a href={`#${nav.id}`}>
              {nav.title}
            </a>
          </li>
        ))}
      </ul>

      <div className='sm:hidden flex flex-1 justify-end items-center'>
        <img src={toggle ? close : menu}
          alt='menu' className='w-[30px] h-[30px] object-contain'
          onClick={() => setToggle((prev) => !prev)} />
      </div>
      <div className={`${toggle ? 'flex' : 'hidden'} p-5 bg-black-gradient absolute
      top-16 right-0 mx-5 my-3 min-w-[150px] rounded-xl sidebar`}>
        <ul className='list-none flex flex-col flex-1 justify-end items-start'>
          {navLinks.map((nav, index) => (
            <li key={nav.id}
              className={`font-poppins font-medium cursor-pointer text-[20px]
              ${index === navLinks.length - 1 || index === navLinks.length - 3 ? 'text-cyan-700' : 'text-cyan-500'}
              ${index === navLinks.length - 1 ? 'mb-0' : 'mb-2'}`}>
              <a href={`#${nav.id}`}>
                {nav.title}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}

export default NavBar