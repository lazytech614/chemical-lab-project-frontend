import React from 'react'
import heroBgImage from "../../../../public/background/iitr-bg-1.jpeg"
import { Button } from '@/components/ui/button'

const Hero = () => {
  return (
    <section 
        className="relative h-[100vh] w-full bg-cover bg-center flex items-center justify-start px-4 md:px-10 lg:px-20"
        style={{ backgroundImage: `url(${heroBgImage.src})` }}
    >
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-transparent" />
        <div className='relative z-10 text-white flex flex-col gap-6'>
            <h1 className='text-center md:text-left heading uppercase text-3xl sm:text-5xl max-w-[500px] tracking-wide leading-normal'>
                <span className='sm:text-6xl'>I</span>nnovating <span className='sm:text-6xl'>s</span>cience <span className='sm:text-6xl'>t</span>hrough <span className='sm:text-6xl'>c</span>olleborative <span className='sm:text-6xl'>r</span>esearch
            </h1>
            <p className='text-center sm:text-left sm:text-xl max-w-[600px]'>Welcome to our lab, where we push the boundaries of scientific discovery. Join us in exploring groundbreaking research that shapes the future.</p>
            <div className='flex gap-x-2 justify-center md:justify-start'>
                <Button variant={'secondary'} className='text-xs sm:text-md'>Join</Button>
                <Button variant={'ghost'} className='text-xs sm:text-md border-2 border-white'>Explore more</Button>
            </div>
        </div>
    </section>
  )
}

export default Hero