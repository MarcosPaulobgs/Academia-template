import shared from '../../styles/shared.module.css'
import styles from './Comentarios.module.css'

const INSTAGRAM_HREF = '#'

const TESTIMONIALS = [
  { text: '"A melhor 😍😍😍"', who: '@cliente.um' },
  { text: '"O treinador é o número 1 da parada 🔥"', who: '@cliente.dois' },
  { text: '"Maravilhosa minha academia 😍 Parabéns à equipe 😍"', who: '@cliente.tres' },
  { text: '"Referência. Ficou top 👏👏👏"', who: '@cliente.quatro' },
  { text: '"Treinão !!!👏👏👏👏Diferenciada essa academia !"', who: '@cliente.cinco' },
  { text: '"Vamos que vamoos 🔥🔥"', who: '@cliente.seis' },
]

export default function Comentarios() {
  return (
    <section id="comentarios" className={styles.comentariosSection}>
      <div className={shared.wrap}>
        
        {/* Cabeçalho da Seção */}
        <div className={`${shared.sectionHead} ${shared.reveal} ${styles.centerHead} reveal`}>
          <span className={shared.eyebrow}>Direto do Instagram</span>
          <h2 className={styles.heading}>O que a comunidade comenta lá</h2>
          <p className={styles.subHeading}>
            Comentários de seguidores do{' '}
            <a href={INSTAGRAM_HREF} target="_blank" rel="noopener" className={styles.instaLink}>
              @suaacademia
            </a>{' '}
            nas nossas publicações.
          </p>
        </div>

        {/* Grade de Depoimentos */}
        <div className={styles.testiGrid}>
          {TESTIMONIALS.map((t) => (
            <div className={`${styles.testi} ${shared.reveal} reveal`} key={t.who}>
              <p className={styles.commentText}>{t.text}</p>
              <div className={styles.who}>{t.who}</div>
            </div>
          ))}
        </div>

        {/* Botão de Ação Inferior */}
        <div className={`${shared.ctaRow} ${styles.moreRow}`}>
          <a className={`${shared.btn} ${shared.btnGhost} ${styles.fullWidthBtn}`} href={INSTAGRAM_HREF} target="_blank" rel="noopener">
            Ver mais no Instagram
          </a>
        </div>

      </div>
    </section>
  )
}
