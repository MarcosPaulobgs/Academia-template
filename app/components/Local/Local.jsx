import shared from '../../styles/shared.module.css'
import styles from './Local.module.css'

// Links de demonstração
const MAPS_HREF = '#'
const INSTAGRAM_HREF = '#'

export default function Local() {
  return (
    <section id="local" className={styles.localSection}>
      <div className={`${shared.wrap} ${styles.locGrid}`}>
        
        {/* Bloco de Título e Chamada */}
        <div className={`${styles.titleBlock} ${shared.reveal} reveal`}>
          <span className={`${shared.eyebrow} ${styles.eyebrowText}`}>Onde estamos</span>
          <h2 className={styles.heading}>Fácil de chegar,<br className={styles.desktopBr} /> difícil de esquecer</h2>
          
          <div className={`${shared.ctaRow} ${styles.customCtaRow}`}>
            {/* Botão do Google Maps */}
            <a 
              className={`${shared.btn} ${shared.btnPrimary}`} 
              href={MAPS_HREF} 
              target="_blank" 
              rel="noopener noreferrer"
            >
              Ver no Google Maps
            </a>
            
            {/* Botão do Instagram */}
            <a 
              className={`${shared.btn} ${shared.btnGhost}`} 
              href={INSTAGRAM_HREF} 
              target="_blank" 
              rel="noopener noreferrer"
            >
              Seguir no Instagram
            </a>
          </div>
        </div>

        {/* Bloco de Informações Práticas */}
        <div className={`${styles.infoBlock} ${shared.reveal} reveal`}>
          
          {/* Item: Endereço */}
          <div className={styles.locItem}>
            <div className={styles.locIcon}>
              <svg fill="#ff0000" width="22" height="22" viewBox="0 0 297 297" aria-hidden="true">
                <path d="M148.5,0C87.43,0,37.747,49.703,37.747,110.797c0,91.026,99.729,179.905,103.976,183.645c1.936,1.705,4.356,2.559,6.777,2.559c2.421,0,4.841-0.853,6.778-2.559c4.245-3.739,103.975-92.618,103.975-183.645C259.253,49.703,209.57,0,148.5,0z M148.5,272.689c-22.049-21.366-90.243-93.029-90.243-161.892c0-49.784,40.483-90.287,90.243-90.287s90.243,40.503,90.243,90.287C238.743,179.659,170.549,251.322,148.5,272.689z"></path>
                <path d="M148.5,59.183c-28.273,0-51.274,23.154-51.274,51.614c0,28.461,23.001,51.614,51.274,51.614c28.273,0,51.274-23.153,51.274-51.614C199.774,82.337,176.773,59.183,148.5,59.183z M148.5,141.901c-16.964,0-30.765-13.953-30.765-31.104c0-17.15,13.801-31.104,30.765-31.104c16.964,0,30.765,13.953,30.765,31.104C179.265,127.948,165.464,141.901,148.5,141.901z"></path>
              </svg>
            </div>
            <div>
              <h3>Endereço</h3>
              <p>Av. Exemplo, 123 — Sua Cidade, UF, 00000-000</p>
            </div>
          </div>

          {/* Item: Funcionamento */}
          <div className={styles.locItem}>
            <div className={styles.locIcon}>
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://w3.org" aria-hidden="true">
                <path d="M12 7V12H15M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="#ff0000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
              </svg>
            </div>
            <div>
              <h3>Funcionamento</h3>
              <p>Segunda a sexta, 05h30 às 11h00 e 15h00 às 21h00<br />Sábado, 08h00 às 11h00</p>
            </div>
          </div>

          {/* Item: Contato */}
          <div className={styles.locItem}>
            <div className={styles.locIcon}>
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://w3.org" transform="matrix(-1, 0, 0, 1, 0, 0)" aria-hidden="true">
                <path d="M8 11H8.01M12 11H12.01M16 11H16.01M21 20L17.6757 18.3378C17.4237 18.2118 17.2977 18.1488 17.1656 18.1044C17.0484 18.065 16.9277 18.0365 16.8052 18.0193C16.6672 18 16.5263 18 16.2446 18H6.2C5.07989 18 4.51984 18 4.09202 17.782C3.71569 17.5903 3.40973 17.2843 3.21799 16.908C3 16.4802 3 15.9201 3 14.8V7.2C3 6.07989 3 5.51984 3.21799 5.09202C3.40973 4.71569 3.71569 4.40973 4.09202 4.21799C4.51984 4 5.0799 4 6.2 4H17.8C18.9201 4 19.4802 4 19.908 4.21799C20.2843 4.40973 20.5903 4.71569 20.782 5.09202C21 5.51984 21 6.0799 21 7.2V20Z" stroke="#ff0000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
              </svg>
            </div>
            <div>
              <h3>Contato</h3>
              <p>WhatsApp (00) 00000-0000<br />contato@seudominio.com</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
