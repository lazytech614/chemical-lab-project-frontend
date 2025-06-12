"use client"

import { Button } from '@/components/ui/button'
import { navLinks } from '@/constants/nav-link'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import clsx from 'clsx'

export default function GlobalHeader() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 0)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header
      className={clsx(
        'bg-black/50 fixed top-0 left-0 z-50 w-full flex items-center justify-between px-20 h-20 transition-colors duration-300',
        scrolled
          ? 'backdrop-blur-md'
          : 'backdrop-blur-0'
      )}
    >
      {/* Logo */}
      <div>
        <span className="text-white font-bold text-2xl">LOGO</span>
      </div>

      {/* Nav links */}
      <nav className="absolute left-1/2 -translate-x-1/2">
        {navLinks.map((link) => (
          <Link
            href={link.href}
            key={link.title}
            className="text-white mx-2 font-semibold"
          >
            {link.title}
          </Link>
        ))}
      </nav>

      {/* Join button */}
      <Button variant="outline" className="font-semibold px-6 py-2">
        Join
      </Button>
    </header>
  )
}
