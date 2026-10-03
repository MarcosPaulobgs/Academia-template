'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import shared from '../../styles/shared.module.css'
import styles from './Galeria.module.css'
import { useScrollZoom } from '../../hooks/useScrollZoom'

export default function Galeria({ photos = [] }) {
  const [activeIndex, setActiveIndex] = useState(null)
  const [touchStart, setTouchStart] = useState(null)
  const [touchEnd, setTouchEnd] = useState(null)
  const { scale, origin, imgRef, onWheel, resetZoom } = useScrollZoom()

  const minSwipeDistance = 50

  const openLightbox = (index) => {
    setActiveIndex(index)
  }

  const closeLightbox = () => {
    setActiveIndex(null)
  }

  const showNext = () => {
    setActiveIndex((prev) => (prev + 1) % photos.length)
  }

  const showPrev = () => {
    setActiveIndex((prev) => (prev - 1 + photos.length) % photos.length)
  }

  const onTouchStart = (e) => {
    setTouchEnd(null)
    setTouchStart(e.targetTouches[0].clientX)
  }

  const onTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX)
  }

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return
    const distance = touchStart - touchEnd
    const isLeftSwipe = distance > minSwipeDistance
    const isRightSwipe = distance < -minSwipeDistance

    if (isLeftSwipe) {
      showNext()
    } else if (isRightSwipe) {
      showPrev()
    }
  }

  useEffect(() => {
    resetZoom()
  }, [activeIndex, resetZoom])

  useEffect(() => {
    if (activeIndex !== null) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }

    return () => {
      document.body.style.overflow = ''
    }
  }, [activeIndex])

  useEffect(() => {
    if (activeIndex === null) return
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowRight') showNext()
      if (e.key === 'ArrowLeft') showPrev()
      if (e.key === 'Escape') closeLightbox()
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [activeIndex, photos.length])

  const activePhoto = activeIndex !== null ? photos[activeIndex] : null

  return (
    <>
      <div className={styles.galleryGrid}>
        {photos.map((photo, index) => (
          <div 
            className={`${shared.photoSlot} ${styles.galleryItem}`} 
            key={photo.src || index}
            onClick={() => openLightbox(index)}
          >
            <Image 
              src={photo.src} 
              alt={photo.alt || 'Instalação da academia'} 
              fill 
              priority={index < 2}
              sizes="(max-width: 900px) 50vw, 33vw" 
              style={{ objectFit: 'cover' }} 
            />
          </div>
        ))}
      </div>

      {activePhoto && (
        <div 
          className={styles.lightbox} 
          onClick={closeLightbox}
          onTouchStart={onTouchStart}
          onTouchMove={onTouchMove}
          onTouchEnd={onTouchEnd}
        >
          <button className={styles.closeBtn} onClick={closeLightbox} aria-label="Fechar imagem">
            &times;
          </button>

          <button 
            className={`${styles.navBtn} ${styles.prevBtn}`} 
            onClick={(e) => { e.stopPropagation(); showPrev(); }}
            aria-label="Foto anterior"
          >
            &#10094;
          </button>

          <button 
            className={`${styles.navBtn} ${styles.nextBtn}`} 
            onClick={(e) => { e.stopPropagation(); showNext(); }}
            aria-label="Próxima foto"
          >
            &#10095;
          </button>

          <div className={styles.lightboxContent} onClick={(e) => e.stopPropagation()}>
            <img
              ref={imgRef}
              src={activePhoto.src}
              alt={activePhoto.alt}
              className={styles.lightboxImg}
              onWheel={onWheel}
              style={{
                transform: `scale(${scale})`,
                transformOrigin: origin,
                cursor: scale > 1 ? 'zoom-out' : 'zoom-in',
              }}
            />
            <p className={styles.lightboxCaption}>{activePhoto.alt}</p>
          </div>
        </div>
      )}
    </>
  )
}