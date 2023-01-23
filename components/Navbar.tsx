import React from 'react'
import {MdMailOutline} from 'react-icons/md'

type Props = {}

function Navbar({}: Props) {
  return (
    <nav className='flex flex-row justify-between items-center h-[90px] bg-gray-100'>
        <div className='group text-black hover:text-white transition duration-300 p-8 flex justify-between items-center'>
            <h1 className='flex max-w-0 group-hover:max-w-full transition-all duration-500 bg-gradient-to-r from-lime-500 to-cyan-500 group-hover:rotate-0 group-hover:skew-x-0 group-hover:pl-1 -rotate-3 -skew-x-6 font-extrabold tracking-[10px] text-4xl uppercase'>Liam</h1>
        </div>
        <div className='p-8 text-black hover:text-cyan-500 transitional-all duration-300 ease-linear'>
        <a href='mailto:storyliam@gmail.com?subject=Me&body=Hey!'><MdMailOutline size={40}/></a>
        </div>
        
    </nav>
  )
}

export default Navbar