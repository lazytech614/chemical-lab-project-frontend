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
    <section className='h-[100vh] w-full flex flex-col justify-center px-20 bg-[#F7F7F7]'>
        <h1 className='text-4xl uppercase text-primary mb-4'><span className='text-5xl'>R</span>esearch <span className='text-5xl'>H</span>ighlights</h1>
        <Carousel className='w-full'>
            <CarouselContent className='w-1/3 space-x-4'>
                {researches.map((research) => (
                    <CarouselItem key={research.id} className='bg-[#DDDDDD] rounded-md'>
                        <div className='flex flex-col gap-y-4'>
                            <Image src={research.image} alt={research.title} width={400} height={400} />
                            <div className='px-6 pb-4'>
                                <p className='mb-2'>{research.date}</p>
                                <p className='text-xl text-primary mb-4'>{research.title}</p>
                                <Link href={research.url} className='underline text-blue-600'>Read More</Link>
                            </div>
                        </div>
                    </CarouselItem>
                ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
        </Carousel>
        <Link href='/research' className='underline text-blue-600 mt-4'>View All</Link>
    </section>
  )
}

export default ResearchCarousel