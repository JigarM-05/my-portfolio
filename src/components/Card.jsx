import React from 'react'

const Card = (props) => {
    return (
        <div className='w-full shadow-xl flex flex-col p-4 my-8 rounded-lg hover:scale-105 duration-300'>
            <div className='mx-auto mt-[-3rem]'>
                {props.icon}
            </div>
            <h2 className='text-3xl font-bold text-center py-8'>{props.header}</h2>
            <p className='text-center text-4xl font-bold'>$123</p>
            <div className='text-center font-medium'>
                <p className='py-2 mx-8 border-b border-green-100 mt-5'>Lorem ipsum dolor sit</p>
                <p className='py-2 mx-8 border-b border-green-100 '>Lorem ipsum dolor sit</p>
                <p className='py-2 mx-8 border-b border-green-100 '>Lorem ipsum dolor sit</p>
            </div>
            <button className='mt-8 bg-green-700 py-3 w-[200px] mx-auto rounded-md text-white'>Start Trial</button>
        </div>
    )
}

export default Card