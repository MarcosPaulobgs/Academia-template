'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import shared from '../../styles/shared.module.css'
import styles from './Sobre.module.css'
import { useScrollZoom } from '../../hooks/useScrollZoom'
import { placeholder } from '../../lib/placeholder'

export default function Sobre() {
  const [isOpen, setIsOpen] = useState(false)
  const { scale, origin, imgRef, onWheel, resetZoom } = useScrollZoom()

  const photo = {
    src: placeholder('Fachada da academia'),
    alt: 'Fachada da Academia Modelo'
  }

  const openLightbox = () => {
    setIsOpen(true)
  }

  const closeLightbox = () => {
    setIsOpen(false)
    resetZoom()
  }

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [isOpen])

  return (
    <section id="sobre" className={styles.aboutSection}>
      <div className={`${shared.wrap} ${styles.aboutGrid}`}>

        {/* FOTO DA FACHADA */}
        <div 
          className={`${shared.photoSlot} ${styles.aboutVisual} ${styles.galleryItem} ${shared.reveal} reveal`}
          onClick={openLightbox}
        >
          <Image
            src={photo.src}
            alt={photo.alt}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 480px, 560px"
            className={styles.mainImg}
          />
        </div>

        {/* BLOCO DE TEXTOS */}
        <div className={styles.textBlock}>
          <span className={`${shared.eyebrow} ${styles.eyebrowText}`}>Há mais de 10 anos em Sua Cidade</span>
          <h2 className={styles.heading}>Sobre nós</h2>
          <p className={styles.text}>
            Fundada há mais de 10 anos, a Academia Modelo se preocupa em trazer saúde e qualidade
            de vida aos alunos, com todo o suporte de profissionais bem preparados e estrutura
            para o desenvolvimento de diversas práticas esportivas. Atendemos pessoas de todas
            as idades, com foco estético e terapêutico.
          </p>
        </div>

        {/* BOTÃO DE AÇÃO (DIRECIONA PARA /quem-somos) */}
        <div className={`${shared.ctaRow} ${styles.customCtaRow}`}>
          <Link 
            className={`${shared.btn} ${shared.btnPrimary}`} 
            href="/quem-somos"
          >
            Conhecer a academia
          </Link>
        </div>

      </div>

      {/* MODAL DE ZOOM (LIGHTBOX) */}
      {isOpen && (
        <div className={styles.lightbox} onClick={closeLightbox}>
          <div className={styles.lightboxContent} onClick={(e) => e.stopPropagation()}>
            <img
              ref={imgRef}
              src={photo.src}
              alt={photo.alt}
              className={styles.lightboxImg}
              style={{ transform: `scale(${scale})`, transformOrigin: origin }}
              onWheel={onWheel}
            />
            <p className={styles.lightboxCaption}>{photo.alt}</p>
          </div>
          <button
            type="button"
            className={styles.closeBtn}
            aria-label="Fechar"
            onClick={closeLightbox}
          >
            ×
          </button>
        </div>
      )}
    </section>
  )
}