import RevealProvider from '../components/RevealProvider'
import shared from '../styles/shared.module.css'
import styles from './Suplementos.module.css'
import PedidoClient from './PedidoClient'
import { PRODUTOS } from './produtos'

export const metadata = {
  title: 'Suplementos',
  description:
    'Suplementos para musculação e treino funcional na Academia Modelo, em Sua Cidade, UF.',
  alternates: {
    canonical: '/suplementos',
  },
}

export default function Suplementos() {
  return (
    <RevealProvider>
      <div style={{ display: 'flex', flexDirection: 'column', width: '100%' }}>
        <section 
          className={styles.suplementosSection} 
          style={{ paddingBottom: '160px', minHeight: '100vh', display: 'block', position: 'relative' }}
        >
          <div className={shared.wrap}>
            {/* 5. Alinhamento centralizado no topo */}
            <div 
              className={`${shared.sectionHead} ${shared.reveal} reveal`} 
              style={{ textAlign: 'center', margin: '0 auto 40px auto', maxWidth: '680px' }}
            >
              <span className={shared.eyebrow}>Loja da academia</span>
              <h2>Suplementos pra acelerar seu resultado</h2>
              <p>
                Monte seu pedido e finalize direto pelo WhatsApp. Fale com a gente pra
                ver o estoque e os preços atualizados.
              </p>
            </div>

            <PedidoClient produtos={PRODUTOS} />
          </div>
        </section>
      </div>
    </RevealProvider>
  )
}