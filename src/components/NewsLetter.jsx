import React from 'react'

const NewsLetter = () => {
  return (
    <div className='w-full py-16 text-white px-4'>
        <div className='max-w-[1240px] grid mx-auto lg:grid-cols-3'>
            <div className='lg:col-span-2 my-2'>
                <h1 className='md:text-4xl sm:text-2xl text-2xl font-bold py-2'>Lorem ipsum dolor sit amet consectetur adipisicin?</h1>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
            </div>
            <div className='my-4'>
                <div className='flex flex-col sm:flex-row justify-between items-center w-full'>
                    <input className='p-3 w-full flex rounded-md text-black' type="email" placeholder='Enter your email'/>
                    <button className='bg-gray-600 w-[200px] rounded-md ml-4 my-6 font-medium py-3'>Notify Me</button>
                </div>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit <span className='text-green-600'>Privacy Policy.</span></p>
            </div>
        </div>
    </div>
  )
}

export default NewsLetter 