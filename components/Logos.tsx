import React from 'react'
import Image from 'next/image'
import {MdOutlineAlternateEmail} from 'react-icons/md'

type Props = {}

function Logos({}: Props) {
  return (
<section>
    <div className='flex justify-center items-center pt-6 pb-4'>
    <p className='flex items-center uppercase text-gray-400'>Previously <MdOutlineAlternateEmail size={15}/></p>
</div>
<div className=''>
    <div className='grid gap-10 grid-rows-2 grid-cols-3 md:grid-rows-1 md:grid-cols-6 pl-8 pr-8 pt-4 pb-4'>
    
    <div className='hidden md:flex justify-center items-center'>
        <Image 
                src={'/../public/logos/monologo.png'}
                alt='default image'
                width={100}
                height={100}
                className='grayscale hover:scale-105 transition-all ease-linear duration-300'
        />
    </div>

    <div className='flex justify-center items-center'>
        <Image 
                src={'/../public/logos/ambrlogo.webp'}
                alt='default image'
                width={100}
                height={100}
                className='p-2 hover:scale-105 hover:rounded-lg transition-all ease-linear duration-300'
        />
        </div>
    
        <div className='flex justify-center items-center cursor-default	'><p className='text-black text-4xl font-extrabold hover:scale-105 transition-all ease-linear duration-300'>skio</p></div>

    <div className='md:hidden flex justify-center items-center'>
        <Image 
                src={'/../public/logos/monologo.png'}
                alt='default image'
                width={100}
                height={100}
                className='grayscale hover:scale-105 transition-all ease-linear duration-300'
        />
    </div>
    <div className='md:hidden flex justify-center items-center'>
        <Image 
                src={'/../public/logos/pimlogo.png'}
                alt='default image'
                width={100}
                height={100}
                className='p-2 hover:rounded-2xl hover:scale-105 transition-all ease-linear duration-300'
        />
    </div>
    <div className='flex justify-center items-center'>
        <Image 
                src={'/../public/logos/tatalogo.png'}
                alt='default image'
                width={100}
                height={100}
                className='p-2 hover:scale-105 hover:rounded-lg transition-all ease-linear duration-300'
        />
        </div>
        <div className='hidden md:flex justify-center items-center'>
        <Image 
                src={'/../public/logos/pimlogo.png'}
                alt='default image'
                width={100}
                height={100}
                className='p-2 hover:rounded-2xl hover:scale-105 transition-all ease-linear duration-300'
        />
    </div>
        <div className='flex justify-center items-center'>
        <Image 
                src={'/../public/logos/confluxlogo.png'}
                alt='default image'
                width={120}
                height={120}
                className='p-2 hover:scale-105 hover:rounded-xl transition-all ease-linear duration-300'
        />
    </div>
    </div>
</div>
</section>
  )
}

export default Logos