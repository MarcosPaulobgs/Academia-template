import Link from 'next/link'
import shared from './styles/shared.module.css'

export const metadata = {
  title: 'Página não encontrada',
  robots: { index: false, follow: false },
}

export default function NotFound() {
  return (
    <section
      style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        padding: '24px',
      }}
    >
      <div className={shared.wrap} style={{ maxWidth: 560 }}>
        <span className={shared.eyebrow}>Erro 404</span>
        <h1 style={{ fontFamily: 'var(--font-anton), sans-serif', fontSize: 'clamp(2rem, 6vw, 3.5rem)', margin: '12px 0' }}>
          Essa página fugiu do treino
        </h1>
        <p style={{ color: 'var(--gray)', marginBottom: 28 }}>
          A página que você procura não existe ou foi movida. Volte para o início e continue por lá.
        </p>
        <div className={shared.ctaRow} style={{ justifyContent: 'center' }}>
          <Link href="/" className={`${shared.btn} ${shared.btnPrimary}`}>
            Voltar para o início
          </Link>
        </div>
      </div>
    </section>
  )
}
