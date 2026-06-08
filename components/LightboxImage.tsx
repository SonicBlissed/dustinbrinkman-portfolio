'use client'

import { useEffect, useState } from 'react'
import { createPortal } from 'react-dom'

interface Props {
  src: string
  alt: string
  imgStyle?: React.CSSProperties
}

export default function LightboxImage({ src, alt, imgStyle }: Props) {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') setOpen(false) }
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [open])

  return (
    <>
      <div className="shot" onClick={() => setOpen(true)} style={{ cursor: 'zoom-in' }}>
        <img src={src} alt={alt} style={imgStyle} />
      </div>

      {open && createPortal(
        <div className="lightbox" onClick={() => setOpen(false)}>
          <button className="lightbox-close" onClick={() => setOpen(false)} aria-label="Close">✕</button>
          <img
            className="lightbox-img"
            src={src}
            alt={alt}
            onClick={(e) => e.stopPropagation()}
          />
        </div>,
        document.body
      )}
    </>
  )
}
