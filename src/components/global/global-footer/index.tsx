import Image from 'next/image'
import React from 'react'
import IITRLogo from "../../../../public/iitr-logo.png"

const GlobalFooter = () => {
  return (
    <footer className='px-4 md:px-10 lg:px-20 py-10 flex justify-between items-center min-h-20 bg-gradient-to-r from-[#0F2E5B] to-[#155E63] w-full text-white'>
      <div className='flex flex-col sm:gap-y-2'>
        <h4 className='mb-4 sm:mb-0'>LOGO</h4>
        <p className='text-sm sm:text-base'>Department of Chemical Engineering, IIT Roorkee</p>
        <p className='text-sm sm:text-base'>example@example.com</p>
        <p className='text-sm sm:text-base'>Faculty @IIT Roorkee</p>
      </div>
      <div>
        <Image height={100} width={100} src={IITRLogo} alt="IIT Roorkee Logo" />
      </div>
    </footer>
  )
}

export default GlobalFooter