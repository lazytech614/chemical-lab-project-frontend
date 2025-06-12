import React from 'react'

type Props = {
    children: React.ReactNode
}

const GlobalContainer = ({children}: Props) => {
  return (
    <div className='px-10 py-10'>
        {children}
    </div>
  )
}

export default GlobalContainer