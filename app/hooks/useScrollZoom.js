'use client'

import { useCallback, useRef, useState } from 'react'

// Zoom controlado por scroll do mouse, ancorado no ponto do cursor.
// Feito para o lightbox: em telas touch (sem wheel) simplesmente não é acionado.
const MIN_SCALE = 1
const MAX_SCALE = 3
const ZOOM_SPEED = 0.0016

export function useScrollZoom() {
  const [scale, setScale] = useState(1)
  const [origin, setOrigin] = useState('center center')
  const imgRef = useRef(null)

  const onWheel = useCallback((e) => {
    // Impede o scroll da página por trás do lightbox enquanto dá zoom na imagem
    e.preventDefault()

    if (imgRef.current) {
      const rect = imgRef.current.getBoundingClientRect()
      const x = ((e.clientX - rect.left) / rect.width) * 100
      const y = ((e.clientY - rect.top) / rect.height) * 100
      setOrigin(`${Math.min(100, Math.max(0, x))}% ${Math.min(100, Math.max(0, y))}%`)
    }

    setScale((prev) => {
      const next = prev - e.deltaY * ZOOM_SPEED
      return Math.min(MAX_SCALE, Math.max(MIN_SCALE, next))
    })
  }, [])

  const resetZoom = useCallback(() => {
    setScale(1)
    setOrigin('center center')
  }, [])

  return { scale, origin, imgRef, onWheel, resetZoom }
}
