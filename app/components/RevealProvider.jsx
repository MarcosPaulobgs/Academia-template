'use client'

import useReveal from '../hooks/useReveal'

export default function RevealProvider({ children }) {
  useReveal()
  return children
}
