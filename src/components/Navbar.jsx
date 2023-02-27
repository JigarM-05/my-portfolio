import React, { useState } from 'react'
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai'

const Navbar = () => {

    const [tmenu,setMenu] = useState(false)

    const handleMenu = () =>
    {
      setMenu(!tmenu)
    }

  return (
    <div className='flex justify-between items-center max-w-[1240px] mx-auto px-4 h-24 text-white'>
      <h1 className='font-bold text-green-600 text-3xl'>J!GAR</h1>
      <ul className='hidden md:flex'>
        <li className='p-4'>Home</li>
        <li className='p-4'>Company</li>
        <li className='p-4'>Resources</li>
        <li className='p-4'>About</li>
        <li className='p-4'>Contact</li>
      </ul>

      <div onClick={handleMenu} className='block md:hidden'>
        {tmenu ? <AiOutlineClose size={24}/> : <AiOutlineMenu size={24}/> }
      </div>

      <div className={tmenu? 'fixed top-0 left-0 w-[60%] h-full border-r border-r-green-600  bg-[#000300] ease-in-out duration-500 md:hidden' : 'fixed top-0 left-[-100%] w-[60%] h-full border-r border-r-green-600  bg-[#000300] ease-in-out duration-500'}>
        <h1 className='font-bold text-green-600 text-3xl mt-7 pl-4'>J!GAR</h1>
        <ul className='uppercase '>
          <li className='p-4'>Home</li>
          <li className='p-4'>Company</li>
          <li className='p-4'>Resources</li>
          <li className='p-4'>About</li>
          <li className='p-4'>Contact</li>
        </ul>
      </div>

    </div>
  )
}

export default Navbar