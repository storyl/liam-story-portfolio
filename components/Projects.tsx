import {useState} from 'react'
import Image from 'next/image'
import {TbBrandNextjs} from 'react-icons/tb'
import {SiTailwindcss, SiReact, SiGithub, SiFirebase, SiShopify, SiTypescript, SiGraphql, SiAdobeaftereffects, SiAdobephotoshop, SiAdobeillustrator} from 'react-icons/si'
import {MdOutlineWork} from 'react-icons/md'
import {BiLinkExternal} from 'react-icons/bi'
import {IoDiamondOutline} from 'react-icons/io5'
import {BsFillPlayBtnFill} from 'react-icons/bs'
import Link from 'next/link'


function Projects() {

  const [isPortfolioShown, setPortfolio] = useState(false);
  const [isShownTwo, setIsShownTwo] = useState(false);
  const [isShownThree, setIsShownThree] = useState(false);
  const [isShownFour, setIsShownFour] = useState(false);
  const [isShownFive, setIsShownFive] = useState(false); 
  const [isShownSix, setIsShownSix] = useState(false);

  return (
    
    <div className='grid xl:grid-cols-3 md:grid-cols-2 gap-20 p-8 pt-20 pb-40'>

    <Link href="https://github.com/storyl/liam-story-portfolio" rel="noopener noreferrer" target="_blank">   
    <div onMouseEnter={() => setPortfolio(true)} onMouseLeave={() => setPortfolio(false)} className='cursor-pointer hover:scale-105 transition-all ease-linear duration-300 col-span-1 flex flex-row shadow-2xl w-full h-[260px] bg-gradient-to-r from-cyan-500 to-cyan-400 m-auto rounded-2xl'>
        {!isPortfolioShown 
        ? (
            //default state
        <>
            <div className='w-[50%] p-6'>
                <h1 className='text-white font-bold md:text-xl pt-2'>Portfolio Site</h1>
                <p className='text-white text-md pt-3 flex items-center underline underline-offset-[6px]'>View Code <SiGithub size={20} className='ml-2'/></p>
                <div className='flex gap-2 pt-12'>
                <SiReact size={25} className='text-white'/>
                <TbBrandNextjs size={25} className='text-white'/>
                <SiTailwindcss size={25} className='text-white'/>
                </div>

                <div className='flex gap-2 pt-4'>
                <SiAdobeaftereffects size={25} className='text-white'/>
                <SiAdobephotoshop size={25} className='text-white'/>
                <SiAdobeillustrator size={25} className='text-white'/>
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
                <video className='rounded-2xl object-cover h-[260px] w-[700px]' 
                src={require('../public/videos/github.mp4')} autoPlay muted loop playsInline />
                <span className='group-hover:scale-100 absolute w-auto p-2 m-2 min-w-max -top-6 rounded-md shadow-md text-white bg-cyan-500 text-xs font-bold tranisition-all ease-linear duration-300 scale-0'>
                ✨ Click to view GitHub repo ✨
                </span>
            </div>
        )
        }
    </div>
    </Link>

    <Link href="https://chatgpt-clone-lake.vercel.app/" rel="noopener noreferrer" target="_blank">   
    <div onMouseEnter={() => setIsShownFive(true)} onMouseLeave={() => setIsShownFive(false)} className='cursor-pointer hover:scale-105 transition-all ease-linear duration-300 col-span-1 flex flex-row shadow-2xl w-full h-[260px] bg-gradient-to-r from-lime-500 to-lime-400 m-auto rounded-2xl'>
        {!isShownFive
        ? (
            //default state
        <>
            <div className='w-[50%] p-6'>
            <h1 className='text-black font-bold md:text-xl pt-2 whitespace-nowrap'>ChatGPT Clone</h1>
                <p className='text-black text-md pt-3 flex items-center underline underline-offset-[6px]'>View Demo <BiLinkExternal size={20} className='ml-2'/></p>
                <div className='flex gap-2 pt-12'>
                <SiReact size={25} className='text-black'/>
                <SiTypescript size={25} className='text-black'/>
                <TbBrandNextjs size={25} className='text-black'/>
                <SiFirebase size={25} className='text-black'/>
                <SiTailwindcss size={25} className='text-black'/>
                
                </div>

                <div className='flex gap-2 pt-4'>
                    <Image 
                    src={'/logos/openailogo.png'}
                    alt='default image'
                    height={100}
                    width={110}
                    />
                </div>
            </div>
            
            <div className='w-[50%] relative'>
            <Image 
            src={'/cardimage/robot.png'}
            alt='default image'
            fill
            className='object-contain rounded-r-2xl p-10 -ml-5'
            />
            </div>
        </> 
        )
        : (
            //on-hover state
            <div className='flex group justify-center items-center'>
                <video className='rounded-2xl object-cover h-[260px] w-[700px]' 
                src={require('../public/videos/openai.mp4')} autoPlay muted loop playsInline />
                <span className='group-hover:scale-100 absolute w-auto p-2 m-2 min-w-max -top-6 rounded-md shadow-md text-white bg-[#11A37F] text-xs font-bold tranisition-all ease-linear duration-300 scale-0'>
                🤖 Click to visit demo 🤖
                </span>
            </div>
        )
        }
    </div>
    </Link>

    <Link href="https://non-fungible-haven.vercel.app/" rel="noopener noreferrer" target="_blank">   
    <div onMouseEnter={() => setIsShownFour(true)} onMouseLeave={() => setIsShownFour(false)} className='cursor-pointer hover:scale-105 transition-all ease-linear duration-300 col-span-1 flex flex-row shadow-2xl w-full h-[260px] bg-gradient-to-r from-violet-500 to-violet-400 m-auto rounded-2xl'>
        {!isShownFour 
        ? (
            //default state
        <>
            <div className='w-[50%] p-6'>
            <h1 className='text-white font-bold md:text-xl pt-2 whitespace-nowrap'>NFT Marketplace</h1>
                <p className='text-white text-md pt-3 flex items-center underline underline-offset-[6px]'>View Demo <BiLinkExternal size={20} className='ml-2'/></p>
                    <div className='flex gap-2 pt-12'>
                    <SiReact size={25} className='text-white'/>
                    <SiTypescript size={25} className='text-white'/>
                    <TbBrandNextjs size={25} className='text-white'/>
                    <SiTailwindcss size={25} className='text-white'/>
                    </div>

                    <div className='flex gap-2 pt-4'>
                        <Image 
                        src={'/logos/thirdweb.png'}
                        alt='default image'
                        height={100}
                        width={110}
                        />
                </div>
            </div>
            
            <div className='w-[50%] relative'>
            <Image 
            src={'/cardimage/nfhlogo.png'}
            alt='default image'
            fill
            className='object-contain rounded-r-2xl p-6'
            />
            </div>
        </> 
        )
        : (
            //on-hover state
            <div className='flex group justify-center items-center'>
                <video className='rounded-2xl object-cover h-[260px] w-[700px]' 
                src={require('../public/videos/nfh.mp4')} autoPlay muted loop playsInline />
                <span className='group-hover:scale-100 absolute w-auto p-2 m-2 min-w-max -top-6 rounded-md shadow-md text-white bg-violet-800 text-xs font-bold tranisition-all ease-linear duration-300 scale-0'>
                💸 Click to visit demo 💸
                </span>
            </div>
        )
        }
    </div>
    </Link>

     
    <div onMouseEnter={() => setIsShownTwo(true)} onMouseLeave={() => setIsShownTwo(false)} className='hover:scale-105 transition-all ease-linear duration-300 col-span-1 flex flex-row shadow-2xl w-full h-[260px] bg-gradient-to-r from-amber-500 to-amber-400 m-auto rounded-2xl'>
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
                    className='pt-1 invert'
                    />
                <p className='text-black text-md pt-3 flex items-center underline underline-offset-[6px]'>View Store <IoDiamondOutline size={20} className='ml-2'/></p>
                <div className='flex gap-2 pt-[105px]'>
                <SiReact size={25} className='text-black'/>
                <SiShopify size={25} className='text-black '/>
                <SiGraphql size={25} className='text-black '/>
                <SiTailwindcss size={25} className='text-black'/>
  
                </div>

                
            </div>
            
            <div className='w-[50%] relative'>
            <Image 
            src={'/cardimage/diamondring.png'}
            alt='default image'
            fill
            className='object-contain rounded-r-2xl -ml-5'
            />
            </div>
        </> 
        )
        : (
            //on-hover state
            <div className='group flex justify-center items-center cursor-not-allowed'>
                
                <video className='rounded-2xl object-cover h-[260px] w-[700px]'
                 src={require('../public/videos/begolia.mp4')} 
                 autoPlay 
                 muted 
                 loop
                 playsInline />
                 <span className='group-hover:scale-100 absolute w-auto p-2 m-2 min-w-max -top-6 rounded-md shadow-md text-white bg-violet-300 text-xs font-bold tranisition-all ease-linear duration-300 scale-0'>
                 Coming soon...
                </span>
            </div>
        )
        }
    </div>
    

    <Link href='https://nookspace.vercel.app/' rel="noopener noreferrer" target="_blank">
    <div onMouseEnter={() => setIsShownThree(true)} onMouseLeave={() => setIsShownThree(false)} className='hover:scale-105 transition-all ease-linear duration-300 col-span-1 flex flex-row shadow-2xl w-full h-[260px] bg-gradient-to-r from-rose-500 to-rose-400 m-auto rounded-2xl'>
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
                <p className='text-white text-md pt-3 flex items-center underline underline-offset-[6px]'>View Site <MdOutlineWork className='ml-2'/></p>
                <div className='flex gap-2 pt-[105px]'>
                <SiReact size={25} className='text-blue-50'/>
                <SiTypescript size={25} className='text-blue-50'/>
                <TbBrandNextjs size={25} className='text-blue-50'/>
                <SiTailwindcss size={25} className='text-blue-50'/>
             
                </div>

               
            </div>
            
            <div className='w-[50%] relative'>
            <Image 
            src={'/cardimage/chair.png'}
            alt='default image'
            fill
            className='object-contain rounded-r-2xl -ml-4 p-14'
            />
            </div>
        </> 
        )
        : (
            //on-hover state
            <div className='group flex justify-center items-center'>
                <video className='rounded-2xl object-cover h-[260px] w-[700px]' 
                src={require('../public/videos/nookspace.mp4')} 
                autoPlay 
                muted 
                loop
                playsInline
                />
                 <span className='group-hover:scale-100 absolute w-auto p-2 m-2 min-w-max -top-6 rounded-md shadow-md text-white bg-slate-500 text-xs font-bold tranisition-all ease-linear duration-300 scale-0'>
                 ✨ Click to visit demo ✨
                </span>
            </div>
        )
        }
    </div>
    </Link>

    <Link href="/">   
    <div onMouseEnter={() => setIsShownSix(true)} onMouseLeave={() => setIsShownSix(false)} className='cursor-pointer hover:scale-105 transition-all ease-linear duration-300 flex justify-center items-center w-full h-[260px]  m-auto rounded-2xl'>
        {!isShownSix
        ? (
            //default state
        <>
            <div className='flex flex-col '>
            <h1 className='text-black font-bebasfont -rotate-[5deg] font-bold text-6xl -skew-x-[7deg] uppercase tracking-wider'>Motion</h1>
            <h1 className='text-black font-bebasfont -rotate-[5deg] font-bold text-6xl -skew-x-[7deg] uppercase tracking-wider'>Design</h1>
            <div className='flex justify-center items-center'>
            <BsFillPlayBtnFill size={30} className='flex -rotate-[5deg] text-black animate-pulse pt-1' />
            </div>
            </div>
        </> 
        )
        : (
            //on-hover state
            <div className='flex group justify-center items-center'>
                <video className='rounded-2xl object-cover h-[260px] w-[700px]' 
                src={require('../public/videos/motion.mp4')} autoPlay muted loop playsInline />
                <span className='overflow-visible group-hover:scale-100 absolute w-auto p-2 m-2 min-w-max -top-6 rounded-md shadow-md text-white bg-emerald-500 text-xs font-bold tranisition-all ease-linear duration-300 scale-0'>
                Motion Design Portfolio
                </span>
            </div>
        )
        }
    </div>
    </Link>


    
    </div>
  )
}

export default Projects