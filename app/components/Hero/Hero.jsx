'use client'

import { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import shared from '../../styles/shared.module.css'
import styles from './Hero.module.css'

const WHATSAPP_HREF = '#'

const VIDEO_SRC =
  'https://res.cloudinary.com/gfbljogf/video/upload/v1787777678/videohero_desktop.mp4'

const POSTER_SRC =
  'https://res.cloudinary.com/gfbljogf/image/upload/v1788069610/videohero_imagem.png'

export default function Hero() {
  const videoRef = useRef(null)
  const [isMobile, setIsMobile] = useState(null)

  useEffect(() => {
    const mq = window.matchMedia('(max-width: 720px)')
    setIsMobile(mq.matches)
    const handleChange = (e) => setIsMobile(e.matches)
    mq.addEventListener('change', handleChange)
    return () => mq.removeEventListener('change', handleChange)
  }, [])

  useEffect(() => {
    const videoElement = videoRef.current
    if (videoElement) {
      videoElement.muted = true
      videoElement.playbackRate = 0.81

      videoElement.play().catch((err) => {
        console.log("Autoplay bloqueado aguardando interação do usuário:", err)
      })
    }
  }, [isMobile])

  return (
    <section className={styles.hero}>

      {isMobile === false && (
        <video
          ref={videoRef}
          poster={POSTER_SRC}
          autoPlay
          muted
          loop
          playsInline
          className={`${styles.heroVideo} ${styles.desktopVideo}`}
          preload="auto"
        >
          <source src={VIDEO_SRC} type="video/mp4" />
          Seu navegador não suporta a reprodução de vídeos.
        </video>
      )}

      {isMobile === true && (
        <div className={styles.mobileVideoFrame}>
          <video
            ref={videoRef}
            poster={POSTER_SRC}
            autoPlay
            muted
            loop
            playsInline
            className={`${styles.heroVideo} ${styles.mobileVideo}`}
            preload="auto"
          >
            <source src={VIDEO_SRC} type="video/mp4" />
            Seu navegador não suporta a reprodução de vídeos.
          </video>
        </div>
      )}

      <div className={`${shared.wrap} ${styles.heroGrid}`}>
        <div className={styles.heroMainContent}>
          <span className={shared.eyebrow}>Sua Cidade — UF</span>
          <h1>
            SHAPE DE <span className={styles.accent}>HERÓI</span>,<br />
            RESULTADO DE VERDADE
          </h1>
          <p className={styles.lede}>
            Musculação, treino funcional e acompanhamento de perto, em um espaço pensado
            para quem quer treinar sério sem enrolação.
          </p>
          <div className={styles.ctaRow}>
            <a
              className={`${shared.btn} ${shared.btnPrimary}`}
              href={WHATSAPP_HREF}
              target="_blank"
              rel="noopener noreferrer"
            >
              Agendar aula grátis no WhatsApp
            </a>
            <Link className={`${shared.btn} ${shared.btnGhost}`} href="/suplementos">
              Ver suplementos
            </Link>
          </div>

          <div className={styles.trustRow}>
            <div className={styles.trustItem}>
              <strong>+10</strong>
              anos treinando gente de verdade
            </div>
            <div className={styles.trustItem}>
              <strong>05h30</strong>
              abertura, todo dia útil
            </div>
            <div className={styles.trustItem}>
              <strong>+1 mil</strong>
              alunos treinando com a gente
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}