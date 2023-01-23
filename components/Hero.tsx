import React from 'react'
import {BsFillCaretDownFill} from 'react-icons/bs'


type Props = {}

function Hero({}: Props) {
  return (

 <section className='bg-black'>
 <div className='h-[600px] flex justify-center items-center'>
    <div className='relative group flex flex-col justify-center items-center h-[300px] w-full bg-black  shadow-lg'>
        
        <h1 className='flex max-w-0 group-hover:text-black group-hover:max-w-full transition-all duration-500 bg-gradient-to-r from-lime-500 to-cyan-500 group-hover:rotate-0 group-hover:skew-x-0 group-hover:pl-2 justify-center items-center text-white -rotate-3 -skew-x-6 font-extrabold uppercase tracking-[10px] text-8xl pb-2'>Liam</h1>
        <p className='text-white transition-all duration-500  font-bold group-hover:rotate-0 group-hover:skew-x-0 -rotate-3 -skew-x-6 text-md uppercase tracking-wider'>
            <span className='text-lime-400'>Developer
            </span> &
            <span className='text-cyan-400'> Motion Designer</span>
        </p> 
       
    </div>
</div>
<div className='flex justify-center items-center pb-10 animate-bounce text-white'><BsFillCaretDownFill size={40}/></div>
</section>
  )
}

export default Hero