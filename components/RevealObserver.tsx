'use client'

import { useEffect } from 'react'

export default function RevealObserver() {
  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('in')
            io.unobserve(e.target)
          }
        })
      },
      { threshold: 0.12 }
    )

    document.querySelectorAll('.reveal').forEach((el, i) => {
      ;(el as HTMLElement).style.transitionDelay = `${Math.min(i % 6, 5) * 0.06}s`
      io.observe(el)
    })

    return () => io.disconnect()
  }, [])

  return null
}
