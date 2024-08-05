import Image from 'next/image'
import React from 'react'
import FootballImg from "@/public/5-best-select-soccer-balls-in-2022-866582_1600x.webp"
import MobileImg from "@/public/peakpx.jpg"
import { GiSoccerBall } from 'react-icons/gi'
const Hero = () => {
  return (
    <div className='w-full h-[850px] bg-black max-sm:h-[650px]'>
        <Image
        className='w-full h-full z-10 opacity-40 top-0 fixed max-sm:h-[100%] max-md:hidden '
        src={FootballImg}  alt='Hero Image'/>
         <Image
        className='w-full h-full z-10 opacity-40 top-0 fixed max-sm:h-[100%] md:hidden '
        src={MobileImg}  alt='Hero Image'/>
        <div className=' flex items-center justify-center w-full h-full  px-10'>
            

        <div className=' flex flex-col items-center text-center justify-center  z-20 '>
            <p className='text-7xl font-extrabold font-Pacifico text-white max-sm:text-5xl'>
                We are Sukker Pro
            </p>
            <p className='py-5 text-white font-Pacifico text-xl max-sm:text-lg'>
                Sukker Pro is an absolute beast of a website to access every single one of the football data... or maybe some people can call it soccer... 
            </p>
            <button 
            className='bg-white px-10 py-2 flex items-center justify-center gap-3 rounded-3xl group'
            >
                <span>
                Explore More

                </span>
                <span>

                <GiSoccerBall className='w-10 h-10 group-hover:rotate-90 group-hover:translate-x-4 transition-all duration-500' />
                </span>


            </button>

        </div>
        </div>
    </div>
  )
}

export default Hero