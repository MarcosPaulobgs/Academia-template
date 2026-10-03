'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import shared from '../../styles/shared.module.css'
import styles from './GaleriaWide.module.css'
import { useScrollZoom } from '../../hooks/useScrollZoom'
import { placeholder } from '../../lib/placeholder'

export default function GaleriaWide() {
  const [isOpen, setIsOpen] = useState(false)
  const { scale, origin, imgRef, onWheel, resetZoom } = useScrollZoom()

  const photo = {
    src: placeholder('Salão de treino', 1600, 700),
    alt: 'Salão de treino da academia'
  }

  // Abre e fecha o modal só com estado do React (sem mexer no histórico do navegador,
  // que era a causa do bug de redirecionar pra outra página ao clicar no X)
  const openLightbox = () => {
    setIsOpen(true)
  }

  const closeLightbox = () => {
    setIsOpen(false)
    resetZoom()
  }

  // --- 🔥 SOLUÇÃO DO BUG: BLOQUEAR O SCROLL DO BODY ATRÁS DO LIGHTBOX ---
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }

    // Função de limpeza para restaurar o scroll caso o componente seja desmontado
    return () => {
      document.body.style.overflow = ''
    }
  }, [isOpen])

  return (
    <section className={styles.section}>
      <div className={shared.wrap}>
        {/* Dispara a abertura controlada pelo histórico */}
        <div 
          className={`${shared.photoSlot} ${styles.galleryWide} ${styles.galleryItem} ${shared.reveal} reveal`}
          onClick={openLightbox}
        >
          <Image
            src={photo.src}
            alt={photo.alt}
            fill
            sizes="100vw"
            style={{ objectFit: 'cover' }}
          />
        </div>
      </div>

      {/* MODAL DE ZOOM */}
      {isOpen && (
        <div className={styles.lightbox} onClick={closeLightbox}>
          <button className={styles.closeBtn} onClick={closeLightbox} aria-label="Fechar imagem">
            &times;
          </button>
          <div className={styles.lightboxContent} onClick={(e) => e.stopPropagation()}>
            <img
              ref={imgRef}
              src={photo.src}
              alt={photo.alt}
              className={styles.lightboxImg}
              onWheel={onWheel}
              style={{
                transform: `scale(${scale})`,
                transformOrigin: origin,
                cursor: scale > 1 ? 'zoom-out' : 'zoom-in',
              }}
            />
            <p className={styles.lightboxCaption}>{photo.alt}</p>
          </div>
        </div>
      )}
    </section>
  )
}
