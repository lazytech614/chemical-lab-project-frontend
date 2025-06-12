"use client"

import { Button } from '@/components/ui/button'
import { navLinks } from '@/constants/nav-link'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import clsx from 'clsx'
import { Menu, X } from 'lucide-react'

export default function GlobalHeader() {
  const [scrolled, setScrolled] = useState(false)
  const [drawerOpen, setDrawerOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 0)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      <header
        className={clsx(
          'fixed top-0 left-0 z-50 w-full flex items-center justify-between px-4 md:px-10 lg:px-20 h-20 transition-colors duration-300',
          'bg-black/50',
          scrolled ? 'backdrop-blur-md' : 'backdrop-blur-0'
        )}
      >
        {/* Logo */}
        <div>
          <span className="text-white font-bold text-2xl">LOGO</span>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:block lg:absolute lg:left-1/2 lg:-translate-x-1/2">
          {navLinks.map((link) => (
            <Link
              href={link.href}
              key={link.title}
              className="text-white mx-4 font-semibold hover:text-gray-200"
            >
              {link.title}
            </Link>
          ))}
        </nav>

        {/* Actions */}
        <div className="flex gap-x-4 items-center">
          <Button variant="outline" className="font-semibold px-6 py-2">
            Join
          </Button>

          {/* Mobile menu icon */}
          <button
            className="md:hidden text-white"
            onClick={() => setDrawerOpen((o) => !o)}
          >
            {drawerOpen ? <X size={28}/> : <Menu size={28} />}
          </button>
        </div>
      </header>

      {/* Mobile Drawer */}
      <div
        className={clsx(
          'fixed top-0 left-0 h-full w-64 bg-black/90 text-white transform transition-transform duration-300 z-40',
          drawerOpen ? 'translate-x-0' : '-translate-x-full'
        )}
      >
        <div className="px-4 pt-20 flex flex-col gap-6">
          {navLinks.map((link) => (
            <Link
              href={link.href}
              key={link.title}
              className="text-lg font-medium"
              onClick={() => setDrawerOpen(false)}
            >
              {link.title}
            </Link>
          ))}

          {/* <Button
            variant="outline"
            className="font-semibold px-6 py-2 mt-4"
            onClick={() => setDrawerOpen(false)}
          >
            Join
          </Button> */}
        </div>
      </div>

      {/* Overlay behind drawer */}
      {drawerOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-30"
          onClick={() => setDrawerOpen(false)}
        />
      )}
    </>
  )
}
