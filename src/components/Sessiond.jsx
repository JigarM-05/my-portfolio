import React from 'react'
import laptop from '../assets/development-4536630_1920.png'

const Sessiond = () => {
  return (
    <div className='w-full bg-white py-16 px-4'>
        <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
            <img className='w-[250px] mx-auto my-4' src={laptop} alt="/"/>
            <div className='flex flex-col justify-center'>
              <p className='font-bold text-green-700 uppercase'>Lorem ipsum dolor sit</p>
              <h1 className='md:text-4xl sm:text-2xl text-2xl font-bold py-2 uppercase'>Lorem ipsum dolor sit amet</h1>
              <p className='text-gray-600'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deleniti distinctio obcaecati laboriosam beatae. Error tenetur, illo qui ipsa earum magnam sunt corporis ipsam et explicabo amet doloribus sed, aliquid animi.</p>

              <button className='bg-green-700 rounded-md py-3 w-[200px] mx-auto my-5 text-white font-medium'>Get Started</button>
            </div>
        </div>
    </div>
  )
}

export default Sessiond