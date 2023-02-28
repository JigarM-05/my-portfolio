import React from 'react'

import Typed from 'react-typed';

const Hero = () => {
  return (
    <div className='text-white'>
        <div className='max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center'>
            <p className='text-green-600 font-bold p-2 md:text-3xl'>Lorem ipsum dolor sit</p>
            <h1 className='md:text-7xl sm:text-6xl text-4xl font-bold md:py-6'>Lorem ipsum dolor sit</h1>
            <div className='flex justify-center items-center'>
                <p className='md:text-4xl sm:text-4xl text-xl font-bold'>Lorem ipsum dolor sit</p>
                <Typed
                className='md:text-4xl sm:text-4xl text-xl font-bold pl-1 text-gray-400'
                strings={['Developer.','Designer.','Data Analyst.']}
                typeSpeed={100}
                backSpeed={40}
                loop
            />
            </div>
            <p className='md:text-2xl text-xl font-bold text-green-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            <button className='bg-gray-500 w-[200px] rounded-md mx-auto py-3 my-5 font-medium'>Get Started</button>
        </div>
    </div>
  )
}

export default Hero