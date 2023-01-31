import React from 'react'
import { MdMailOutline } from 'react-icons/md'
import {TbCopy} from 'react-icons/tb'

type Props = {}

function Footer({}: Props) {
  return (
    <>
    <footer className='flex justify-center items-center text-white p-8 bg-black transitional-all duration-300 ease-linear'>
        <div className='flex gap-2 items-center p-2'>
        <h1 className='font-semibold text-xl flex items-center gap-2'><MdMailOutline size={40}/> storyliam@gmail.com</h1>
        </div>
    </footer>
    </>
  )
}

export default Footer