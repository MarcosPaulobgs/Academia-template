'use client';

import { usePathname } from 'next/navigation';
import styles from './WhatsappFloat.module.css';

export default function WhatsappFloat() {
  const pathname = usePathname();
  const isSuplementos = pathname?.includes('suplementos');

  // Não renderiza o botão na página de suplementos (esconde no celular e PC)
  if (isSuplementos) return null;

  return (
    <a
      href="#"
      target="_blank"
      rel="noopener noreferrer"
      className={styles.waFloat}
      aria-label="WhatsApp"
    >
      <svg viewBox="0 0 32 32" fill="currentColor">
        <path d="M16 2a13.9 13.9 0 0 0-12 21L2 30l7.2-1.9A13.9 13.9 0 1 0 16 2zm0 25.4a11.5 11.5 0 0 1-5.9-1.6l-.4-.2-4.4 1.1 1.2-4.3-.3-.5A11.5 11.5 0 1 1 16 27.4zm6.3-8.6c-.3-.2-2-.1-2.3 0s-.6.3-.8.6-.5.6-.8.3a10.1 10.1 0 0 1-2.9-1.8 11.2 11.2 0 0 1-2-2.5c-.2-.4 0-.6.1-.8l.6-.7c.2-.2.2-.4.1-.6l-1-2.4c-.3-.6-.6-.6-.8-.6h-.7c-.2 0-.7.1-1 .4a4.3 4.3 0 0 0-1.3 3.2 7.5 7.5 0 0 0 1.6 4 15.6 15.6 0 0 0 6 5.3c2.4 1 3.3.9 3.9.8a3.3 3.3 0 0 0 2.2-1.5 2.7 2.7 0 0 0 .2-1.5c-.1-.1-.4-.2-.7-.3z"/>
      </svg>
    </a>
  );
}