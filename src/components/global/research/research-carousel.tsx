import React from 'react'

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { researches } from '@/constants/researches'
import Image from 'next/image'
import Link from 'next/link'

const ResearchCarousel = () => {
  return (
    <section className='h-[100vh] w-full flex flex-col justify-center px-4 md:px-10 lg:px-20 bg-[#F7F7F7]'>
        <h1 className='text-2xl text-center sm:text-left sm:text-4xl uppercase text-primary mb-10 sm:mb-4'><span className='sm:text-5xl'>R</span>esearch <span className='sm:text-5xl'>H</span>ighlights</h1>
        <Carousel className='w-full relative'>
            <CarouselContent className='md:w-1/2 lg:w-1/3 space-x-4'>
                {researches.map((research) => (
                    <CarouselItem key={research.id} className='bg-[#DDDDDD] rounded-md'>
                        <div className='flex flex-col gap-y-4'>
                            <Image src={research.image} alt={research.title} width={400} height={400} />
                            <div className='px-6 pb-4'>
                                <p className='mb-2'>{research.date}</p>
                                <p className='text-sm sm:text-xl text-primary mb-4'>{research.title}</p>
                                <Link href={research.url} className='text-sm sm:text-base underline text-blue-600'>Read More.</Link>
                            </div>
                        </div>
                    </CarouselItem>
                ))}
            </CarouselContent>
            <CarouselPrevious className='h-10 w-10 border border-gray-500 absolute bottom-0 left-2' />
            <CarouselNext className='h-10 w-10 border border-gray-500 absolute bottom-0 right-2' />
        </Carousel>
        <Link href='/research' className='text-sm sm:text-base underline text-blue-600 mt-4'>View All</Link>
    </section>
  )
}

export default ResearchCarousel