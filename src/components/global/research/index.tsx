import { CompassIcon, NotebookPen } from 'lucide-react'
import React from 'react'
import closeUpImage from "../../../../public/close-up/chemical-lab-close-up-1.jpg"
import Image from 'next/image'

const Research = () => {
  return (
    <section className='h-[100vh] w-full flex gap-x-8 items-center justify-start px-20 bg-[#DDDDDD]'>
        <div className='w-1/2 h-full flex flex-col justify-center gap-6'>
            <h2 className='text-4xl uppercase text-primary'>
                <span className='text-5xl'>E</span>xploring <span className='text-5xl'>i</span>nnovative <span className='text-5xl'>a</span>pproaches to <span className='text-5xl'>e</span>nhance <span className='text-5xl'>l</span>earning and <span className='text-5xl'>r</span>esearch <span className='text-5xl'>o</span>utcomes
            </h2>
            <p className='text-xl leading-normal'>Our lab focuses on cutting edge researche that transforms educational practices. Discover how our findings can impact the future of learning.</p>
            <div className='w-full flex gap-x-4'>
                <div className='flex gap-2'>
                    <NotebookPen size={32} />
                    <div>
                        <h3 className='text-2xl'><span>R</span>esearch <span>I</span>nsights</h3>
                        <p>Learn more about our groundbreaking studies and their implications for education.</p>
                    </div>
                </div>
                <div className='flex gap-2'>
                    <CompassIcon size={32} />
                    <div>
                        <h3 className='text-2xl'><span>K</span>ey <span>F</span>indings</h3>
                        <p>Explore our latest research highlights that drive innovation in the academic field.</p>
                    </div>
                </div>
            </div>
        </div>
        <div className='w-1/2'>
            <Image src={closeUpImage} alt="close-up" className='w-full h-full object-cover rounded-4xl' />
        </div>
    </section>
  )
}

export default Research