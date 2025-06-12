import React from 'react'
import Hero from '@/components/global/hero'
import Research from '@/components/global/research'
import ResearchCarousel from '@/components/global/research/research-carousel'

const LandingPage = () => {
  return (
      <div className='w-full'>
        <Hero />
        <Research />
        <ResearchCarousel />
      </div>
  )
}

export default LandingPage