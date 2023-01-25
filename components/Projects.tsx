import {useState} from 'react'
import Image from 'next/image'
import {TbBrandNextjs} from 'react-icons/tb'
import {SiTailwindcss, SiReact, SiGithub, SiShopify, SiTypescript, SiGraphql, SiAdobeaftereffects, SiAdobephotoshop, SiAdobeillustrator, SiRedux} from 'react-icons/si'
import {MdOutlineWork} from 'react-icons/md'
import {IoDiamondOutline} from 'react-icons/io5'
import Link from 'next/link'

function Projects() {

  const [isShown, setIsShown] = useState(false);
  const [isShownTwo, setIsShownTwo] = useState(false);
  const [isShownThree, setIsShownThree] = useState(false);
    
  return (
    
    <div className='grid xl:grid-cols-3 md:grid-cols-2 gap-20 p-8 pt-20 pb-40'>

    <Link href="https://github.com/storyl/liam-story-portfolio">   
    <div onMouseEnter={() => setIsShown(true)} onMouseLeave={() => setIsShown(false)} className='cursor-pointer hover:scale-105 transition-all ease-linear duration-300 col-span-1 flex flex-row shadow-2xl w-full h-[260px] bg-gradient-to-r from-blue-500 to-cyan-500 m-auto rounded-2xl'>
        {!isShown 
        ? (
            //default state
        <>
            <div className='w-[50%] p-6'>
                <h1 className='text-white font-bold text-2xl pt-2'>Portfolio Site</h1>
                <p className='text-white text-md pt-4 flex items-center underline underline-offset-[6px]'>See Code <SiGithub size={20} className='ml-2'/></p>
                <div className='flex gap-2 pt-8'>
                <SiReact size={25} className='text-blue-50'/>
                <TbBrandNextjs size={25} className='text-blue-50'/>
                <SiTailwindcss size={25} className='text-blue-50'/>
                </div>

                <div className='flex gap-2 pt-4'>
                <SiAdobeaftereffects size={25} className='text-blue-50'/>
                <SiAdobephotoshop size={25} className='text-blue-50'/>
                <SiAdobeillustrator size={25} className='text-blue-50'/>
                </div>
            </div>
            
            <div className='w-[50%] relative'>
            <Image 
            src={'/cardimage/laptop.png'}
            alt='default image'
            fill
            className='object-contain rounded-r-2xl'
            />
            </div>
        </> 
        )
        : (
            //on-hover state
            <div className='flex group justify-center items-center'>
                <video className='rounded-2xl object-fill h-[260px] w-[700px]' src={require('../public/videos/github.mp4')} autoPlay muted loop />
                <span className='group-hover:scale-100 absolute w-auto p-2 m-2 min-w-max -top-6 rounded-md shadow-md text-white bg-cyan-500 text-xs font-bold tranisition-all ease-linear duration-300 scale-0'>
                ✨ Click to view GitHub repo ✨
                </span>
            </div>
        )
        }
    </div>
    </Link>

    <Link href="https://begolia.com"> 
    <div onMouseEnter={() => setIsShownTwo(true)} onMouseLeave={() => setIsShownTwo(false)} className='hover:scale-105 transition-all ease-linear duration-300 col-span-1 flex flex-row shadow-2xl w-full h-[260px] bg-gradient-to-r from-green-500 to-emerald-500 m-auto rounded-2xl'>
        {!isShownTwo 
        ? (
            //default state
        <>
            <div className='w-[50%] p-6'>
                    <Image 
                    src={'/logos/begolialogo.png'}
                    alt='default image'
                    height={125}
                    width={125}
                    className='pt-1'
                    />
                <p className='text-white text-md pt-4 flex items-center underline underline-offset-[6px]'>View Store <IoDiamondOutline size={20} className='ml-2'/></p>
                <div className='flex gap-2 pt-8'>
                <SiReact size={25} className='text-blue-50'/>
                <SiShopify size={25} className='text-blue-50'/>
                <SiGraphql size={25} className='text-blue-50'/>
                <SiTailwindcss size={25} className='text-blue-50'/>
  
                </div>

                
            </div>
            
            <div className='w-[50%] relative'>
            <Image 
            src={'/cardimage/diamondring.png'}
            alt='default image'
            fill
            className='object-contain rounded-r-2xl'
            />
            </div>
        </> 
        )
        : (
            //on-hover state
            <div className='flex justify-center items-center'>
                <h1 className='text-white font-bold text-3xl absolute animate-spin'>Party Time</h1>
                <video className='rounded-2xl object-fill h-[260px] w-[700px]' src={require('../public/twerkingcat.mp4')} autoPlay muted loop />
            </div>
        )
        }
    </div>
    </Link>

    <Link href="https://nookspace.com"> 
    <div onMouseEnter={() => setIsShownThree(true)} onMouseLeave={() => setIsShownThree(false)} className='hover:scale-105 transition-all ease-linear duration-300 col-span-1 flex flex-row shadow-2xl w-full h-[260px] bg-gradient-to-r from-gray-500 to-slate-500 m-auto rounded-2xl'>
        {!isShownThree 
        ? (
            //default state
        <>
            <div className='w-[50%] p-6'>
                    <Image 
                    src={'/logos/nookspacelogo.png'}
                    alt='default image'
                    height={150}
                    width={150}
                    className=''
                    />
                <p className='text-white text-md pt-4 flex items-center underline underline-offset-[6px]'>View Site <MdOutlineWork className='ml-2'/></p>
                <div className='flex gap-2 pt-8'>
                <SiReact size={25} className='text-blue-50'/>
                <SiTypescript size={25} className='text-blue-50'/>
                <TbBrandNextjs size={25} className='text-blue-50'/>
                <SiTailwindcss size={25} className='text-blue-50'/>
             
                </div>

               
            </div>
            
            <div className='w-[50%] relative'>
            <Image 
            src={'/cardimage/catlol.png'}
            alt='default image'
            fill
            className='object-contain rounded-r-2xl'
            />
            </div>
        </> 
        )
        : (
            //on-hover state
            <div className='flex justify-center items-center'>
                <video className='rounded-2xl object-fill h-[260px] w-[700px]' src={require('../public/nooky.mp4')} autoPlay muted loop />
            </div>
        )
        }
    </div>
    </Link>
    
    </div>
  )
}

export default Projects