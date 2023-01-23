import React from 'react'
import {TbCopy} from 'react-icons/tb'

type Props = {}

function Footer({}: Props) {
  return (
    <>
    <footer className='flex justify-center items-center text-white p-8 bg-black transitional-all duration-300 ease-linear'>
        <div className='cursor-pointer flex gap-2 items-center rounded-xl p-2 hover:outline hover:outline-4 hover:outline-gray-100'>
        <h1 className='font-semibold'>storyliam@gmail.com</h1>
        <TbCopy size={20} />
        </div>
    </footer>
    </>
  )
}

export default Footer