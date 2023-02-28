import React from 'react'
import Card from './Card'
import { AiOutlineUser } from 'react-icons/ai'
import {HiOutlineUserGroup} from 'react-icons/hi'
import {BiGroup} from "react-icons/bi";
const Cards = () => {
  return (
    <div className='w-full py-[10rem] px-4 bg-white'>
        <div className='max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8'>
        <Card icon={<AiOutlineUser size={60}/>} header='Single'/>
        <Card icon={<BiGroup size={60}/>} header='Double'/>
        <Card icon={<HiOutlineUserGroup size={60}/>} header='Group'/>
        </div>
    </div>
  )
}

export default Cards