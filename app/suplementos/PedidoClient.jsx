'use client'

import { useMemo, useState, useEffect, useCallback, useRef } from 'react'
import shared from '../styles/shared.module.css'
import styles from './Suplementos.module.css'

const WHATSAPP_NUMBER = '5500000000000'
const PHOTOS_PER_PRODUCT = 3

function formatBRL(value) {
  return value.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })
}

function ProductPhotoCarousel({ productName }) {
  const [activeIndex, setActiveIndex] = useState(0)
  const [touchStart, setTouchStart] = useState(null)
  const [touchEnd, setTouchEnd] = useState(null)

  const minSwipeDistance = 50

  const goTo = (index, e) => {
    e?.stopPropagation()
    const total = PHOTOS_PER_PRODUCT
    setActiveIndex(((index % total) + total) % total)
  }

  const handleTouchStart = (e) => {
    setTouchEnd(null)
    setTouchStart(e.targetTouches[0].clientX)
  }

  const handleTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX)
  }

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return
    const distance = touchStart - touchEnd

    if (distance > minSwipeDistance) {
      goTo(activeIndex + 1)
    } else if (distance < -minSwipeDistance) {
      goTo(activeIndex - 1)
    }
  }

  return (
    <div
      className={styles.photoCarousel}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      <div className={styles.photoSlotPlaceholder}>
        <span className={styles.photoSlotIcon} aria-hidden="true">
          📷
        </span>
        <span className={styles.photoSlotLabel}>
          Foto {activeIndex + 1} de {PHOTOS_PER_PRODUCT}
        </span>
        <span className={styles.photoSlotSub}>{productName}</span>
      </div>

      <button
        type="button"
        className={`${styles.photoArrow} ${styles.photoArrowPrev}`}
        aria-label="Foto anterior"
        onClick={(e) => goTo(activeIndex - 1, e)}
      >
        ‹
      </button>
      <button
        type="button"
        className={`${styles.photoArrow} ${styles.photoArrowNext}`}
        aria-label="Próxima foto"
        onClick={(e) => goTo(activeIndex + 1, e)}
      >
        ›
      </button>

      <div className={styles.photoDots}>
        {Array.from({ length: PHOTOS_PER_PRODUCT }).map((_, index) => (
          <button
            key={index}
            type="button"
            className={`${styles.photoDot} ${index === activeIndex ? styles.photoDotActive : ''}`}
            aria-label={`Ir para foto ${index + 1}`}
            onClick={(e) => goTo(index, e)}
          />
        ))}
      </div>
    </div>
  )
}

export default function PedidoClient({ produtos }) {
  const [quantities, setQuantities] = useState({})
  const [selectedProduct, setSelectedProduct] = useState(null)
  const [isClosing, setIsClosing] = useState(false)

  const isClosingRef = useRef(false)
  const pushedHistoryRef = useRef(false)

  // Fecha a gaveta executando a animação de saída primeiro
  const closeDrawer = useCallback((fromPopState = false) => {
    if (isClosingRef.current) return
    isClosingRef.current = true
    setIsClosing(true)

    // Se o fechamento não foi originado pelo botão voltar do dispositivo e tínhamos empurrado o histórico
    if (!fromPopState && pushedHistoryRef.current) {
      pushedHistoryRef.current = false
      window.history.back()
    }

    setTimeout(() => {
      setSelectedProduct(null)
      setIsClosing(false)
      isClosingRef.current = false
    }, 200) // Tempo sincronizado com os 0.2s do CSS
  }, [])

  // Gerencia atalhos de saída (Voltar do celular, ESC no PC) e trava de scroll
  useEffect(() => {
    if (!selectedProduct) return

    // Trava o scroll da página enquanto a gaveta estiver aberta
    document.body.style.overflow = 'hidden'

    // Registra uma nova entrada no histórico para interceptar o botão voltar no celular
    window.history.pushState({ drawerOpen: true }, '', window.location.href)
    pushedHistoryRef.current = true

    // Intercepta o botão voltar do aparelho/navegador
    const handlePopState = () => {
      if (pushedHistoryRef.current) {
        pushedHistoryRef.current = false
        closeDrawer(true)
      }
    }

    // Intercepta a tecla ESC no PC
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        closeDrawer()
      }
    }

    window.addEventListener('popstate', handlePopState)
    window.addEventListener('keydown', handleKeyDown)

    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('popstate', handlePopState)
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [selectedProduct, closeDrawer])

  const cartItems = useMemo(() => {
    return produtos
      .map((product) => ({ ...product, qty: quantities[product.id] || 0 }))
      .filter((item) => item.qty > 0)
  }, [produtos, quantities])

  const total = useMemo(
    () => cartItems.reduce((sum, item) => sum + item.price * item.qty, 0),
    [cartItems]
  )

  const totalItems = cartItems.reduce((sum, item) => sum + item.qty, 0)

  const addOne = (id) => {
    setQuantities((prev) => ({ ...prev, [id]: (prev[id] || 0) + 1 }))
  }

  const removeOne = (id) => {
    setQuantities((prev) => {
      const next = (prev[id] || 0) - 1
      return { ...prev, [id]: next > 0 ? next : 0 }
    })
  }

  const whatsappHref = useMemo(() => {
    if (cartItems.length === 0) {
      return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
        'Oi! Quero saber mais sobre os suplementos'
      )}`
    }

    const lines = [
      'Oi! Quero fazer um pedido de suplementos:',
      '',
      ...cartItems.map((item) => `• ${item.qty}x ${item.name} — ${formatBRL(item.price * item.qty)}`),
      '',
      `Total: ${formatBRL(total)}`,
    ]

    return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(lines.join('\n'))}`
  }, [cartItems, total])

  return (
    <>
      <div className={styles.produtosGrid}>
        {produtos.map((product) => {
          const qty = quantities[product.id] || 0
          return (
            <div
              className={`${styles.produtoCard} ${shared.reveal} reveal`}
              key={product.id}
              onClick={() => setSelectedProduct(product)}
            >
              <div className={styles.cardImageContainer}>
                <div className={styles.photoSlotPlaceholderThumb}>
                  <span className={styles.photoSlotIcon}>📷</span>
                </div>
                <span className={styles.shopeeBadge}>Indicado</span>
              </div>

              <div className={styles.produtoInfo}>
                <h3 className={styles.cardTitle}>{product.name}</h3>
                <div className={styles.cardPriceRow}>
                  <span className={styles.produtoPreco}>{formatBRL(product.price)}</span>
                </div>
                {qty > 0 && <span className={styles.cardBadgeQty}>{qty} no carrinho</span>}
              </div>
            </div>
          )
        })}
      </div>

      {selectedProduct && (
        <div
          className={`${styles.drawerBackdrop} ${isClosing ? styles.drawerBackdropClosing : ''}`}
          onClick={() => closeDrawer()}
        >
          <div
            className={`${styles.drawerContainer} ${isClosing ? styles.drawerContainerClosing : ''}`}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              className={styles.closeDrawerBtn}
              onClick={() => closeDrawer()}
              aria-label="Fechar"
            >
              ✕
            </button>

            <div className={styles.drawerBody}>
              <ProductPhotoCarousel productName={selectedProduct.name} />

              <div className={styles.drawerInfo}>
                <h2>{selectedProduct.name}</h2>
                <span className={styles.drawerPreco}>{formatBRL(selectedProduct.price)}</span>

                <div className={styles.drawerDescription}>
                  <h4>Descrição</h4>
                  <p>{selectedProduct.description || 'Sem descrição cadastrada.'}</p>
                </div>

                <div className={styles.drawerActions}>
                  {(quantities[selectedProduct.id] || 0) === 0 ? (
                    <button
                      type="button"
                      className={`${shared.btn} ${shared.btnPrimary} ${styles.drawerAddBtn}`}
                      onClick={() => addOne(selectedProduct.id)}
                    >
                      Adicionar ao carrinho
                    </button>
                  ) : (
                    <div className={styles.drawerStepperContainer}>
                      <span>Quantidade no carrinho:</span>
                      <div className={styles.qtyStepper}>
                        <button type="button" onClick={() => removeOne(selectedProduct.id)}>
                          −
                        </button>
                        <span>{quantities[selectedProduct.id]}</span>
                        <button type="button" onClick={() => addOne(selectedProduct.id)}>
                          +
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      <div className={styles.cartBar}>
        <div className={styles.cartSummary}>
          {totalItems > 0 ? (
            <>
              <span className={styles.cartCount}>
                {totalItems} {totalItems === 1 ? 'item' : 'itens'}
              </span>
              <span className={styles.cartTotal}>{formatBRL(total)}</span>
            </>
          ) : (
            <span className={styles.cartEmpty}>Seu carrinho está vazio</span>
          )}
        </div>

        <a
          className={`${shared.btn} ${shared.btnPrimary} ${styles.cartCta}`}
          href={whatsappHref}
          target="_blank"
          rel="noopener"
        >
          <svg
            className={styles.waIcon}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            width="20"
            height="20"
          >
            <path d="M19.005 4.995A9.943 9.943 0 0 0 12 2c-5.523 0-10 4.477-10 10 0 1.77.46 3.493 1.332 5.013L2 22l5.127-1.33A9.932 9.932 0 0 0 12 22c5.523 0 10-4.477 10-10 0-2.67-1.04-5.18-2.995-7.005zM12 20.18a8.13 8.13 0 0 1-4.148-1.135l-.297-.176-3.08.801.823-2.99-.196-.312A8.138 8.138 0 0 1 3.82 12c0-4.51 3.67-8.18 8.18-8.18 2.185 0 4.24.85 5.785 2.395A8.125 8.125 0 0 1 20.18 12c0 4.51-3.67 8.18-8.18 8.18zm4.512-6.143c-.247-.124-1.463-.722-1.69-.804-.227-.083-.392-.124-.557.124-.165.247-.64.804-.784.97-.144.165-.289.185-.536.062-.247-.124-1.044-.385-1.988-1.227-.735-.656-1.232-1.465-1.376-1.712-.144-.247-.015-.38.109-.503.111-.11.247-.288.371-.432.124-.144.165-.247.247-.412.083-.165.041-.31-.02-.433-.062-.124-.557-1.341-.763-1.836-.2-.483-.404-.418-.557-.426h-.475c-.165 0-.433.062-.66.31-.227.247-.866.846-.866 2.064 0 1.218.887 2.394 1.01 2.56.124.165 1.747 2.668 4.232 3.743.59.255 1.052.408 1.412.522.593.188 1.133.161 1.56.098.476-.071 1.463-.598 1.67-1.176.206-.578.206-1.073.144-1.176-.062-.103-.227-.165-.474-.289z" />
          </svg>
          <span>{totalItems > 0 ? 'Finalizar pedido no WhatsApp' : 'Perguntar no WhatsApp'}</span>
        </a>
      </div>
    </>
  )
}