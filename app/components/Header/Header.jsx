'use client'

import { useState, useEffect } from 'react'
import { usePathname } from 'next/navigation'
import LogoMark from '../LogoMark'
import Link from 'next/link'
import shared from '../../styles/shared.module.css'
import styles from './Header.module.css'

// Adicionamos a propriedade "id" correspondente
const NAV_LINKS = [
  { href: '#diferenciais', id: 'diferenciais', label: 'Diferenciais' },
  { href: '#horarios', id: 'horarios', label: 'Horários' },
  { href: '#local', id: 'local', label: 'Localização' },
]

export default function Header() {
  const pathname = usePathname()
  const isHome = pathname === '/'
  const links = isHome ? NAV_LINKS : [] 

  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const closeMenu = () => setIsMenuOpen(false)

  // Função para rolar com offsets independentes para Mobile e PC
  const scrollToSection = (e, id) => {
    e.preventDefault()
    closeMenu()

    const element = document.getElementById(id)
    if (element) {
      const isMobile = window.innerWidth <= 900
      
      // PC (130): Mantém a faixa vermelha visível com respiro
      // Mobile (60): Desce mais a página para cortar a faixa e focar no conteúdo
      const headerOffset = isMobile ? 60 : 130 

      const elementPosition = element.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      })
    }
  }

  // 1. Detecta scroll
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // 2. Fecha menu em telas grandes
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 900) closeMenu()
    }
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  // 3. Trava rolagem do fundo quando menu mobile abre
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [isMenuOpen])

  // 4. Tecla ESC fecha o menu
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') closeMenu()
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [])

  return (
    <header className={`${styles.header} ${isScrolled ? styles.headerScrolled : ''}`}>
      <div className={`${shared.wrap} ${styles.nav}`}>

        <Link href="/" className={styles.logoContainer} aria-label="Ir para o início" onClick={closeMenu}>
          <LogoMark size={44} className={styles.logoImage} />
          
          <div className={styles.logoText}>
            <span>ACADEMIA</span> <span className={styles.accentText}>MODELO</span>
          </div>
        </Link>

        {/* Navegação desktop */}
        <nav className={styles.navLinks} aria-label="Navegação principal">
          {links.map((link) => (
            <a 
              key={link.id} 
              href={link.href} 
              onClick={(e) => scrollToSection(e, link.id)}
            >
              {link.label}
            </a>
          ))}
        </nav>

        {isHome ? (
          <button
            type="button"
            className={`${styles.menuToggle} ${isMenuOpen ? styles.menuToggleOpen : ''}`}
            aria-label={isMenuOpen ? 'Fechar menu' : 'Abrir menu'}
            aria-expanded={isMenuOpen}
            onClick={() => setIsMenuOpen((open) => !open)}
          >
            <span />
            <span />
            <span />
          </button>
        ) : (
          <Link href="/" className={styles.homeButton}>
            Início
          </Link>
        )}

      </div>

      {/* Menu mobile (dropdown) */}
      {isHome && (
        <nav
          className={`${styles.mobileMenu} ${isMenuOpen ? styles.mobileMenuOpen : ''}`}
          aria-label="Navegação mobile"
        >
          {links.map((link) => (
            <a 
              key={link.id} 
              href={link.href} 
              onClick={(e) => scrollToSection(e, link.id)}
            >
              {link.label}
            </a>
          ))}
        </nav>
      )}
    </header>
  )
}