import React from 'react'
import { globe } from '../assets'

const Navbar = () => {
  return (
    <nav className='w-full p-2'>
        <ul className='w-full flex flex-start gap-4'>
            <li className='list-none text-3xl font-thin rounded-full bg-darkGray text-white px-24'>Botanica</li>
            <li className='list-none cursor-pointer text-3xl rounded-full px-4 hover:bg-white'>Speakers</li>
            <li className='list-none cursor-pointer text-3xl rounded-full px-4 hover:bg-white'>Agenda</li>
            <li className='list-none cursor-pointer text-3xl rounded-full px-4 hover:bg-white'>Q&A</li>
            <li className='list-none cursor-pointer text-3xl rounded-full px-4 hover:bg-white'>Tickets</li>
            <ul className='list-none flex flex-start gap-4 ml-auto'>
            <li className='list-none cursor-pointer text-3xl rounded-full px-4 hover:bg-white'>Search</li>
            <img src={globe} alt="globe" className="w-[42px] h-[42px] object-contain"
 ></img></ul>

        </ul>
    </nav>
  )
}

export default Navbar