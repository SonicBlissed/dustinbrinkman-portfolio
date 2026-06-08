'use client'

import { useEffect, useState } from 'react'

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav id="nav" className={scrolled ? 'scrolled' : ''}>
      <div className="nav-in">
        <a href="#top" className="logo">dustin<b>.</b>brinkman</a>
        <div className="nav-links">
          <a href="#about">about</a>
          <a href="#skills">skills</a>
          <a href="#work">work</a>
          <a href="#experience">experience</a>
          <a href="#contact">contact</a>
          <a href="/Dustin_Brinkman_Resume.pdf" download className="nav-resume">résumé ↓</a>
        </div>
      </div>
    </nav>
  )
}
