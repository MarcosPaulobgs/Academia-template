import shared from '../../styles/shared.module.css'
import styles from './Horarios.module.css'

const WHATSAPP_HREF = '#'

const SCHEDULE = [
  { days: 'Segunda a sexta', time: '05h30 às 11h00', active: true },
  { days: 'Segunda a sexta', time: '15h00 às 21h00', active: true },
  { days: 'Sábado', time: '08h00 às 11h00', active: false },
  { days: 'Domingo', time: 'Fechado', active: false },
  { days: 'Feriados', time: 'Horário especial', active: false },
]

export default function Horarios() {
  return (
    <section id="horarios" className={styles.horariosSection}>
      <div className={`${shared.wrap} ${styles.horariosGrid}`}>

        {/* Lado Esquerdo: Lista de Horários */}
        <div className={`${shared.reveal} reveal`}>
          <span className={shared.eyebrow}>Funcionamento</span>
          <h2 className={styles.heading}>Horários de atendimento</h2>
          <p className={styles.text}>
            Sem desculpa para faltar. Confira os horários da nossa unidade e organize sua semana de treinos.
          </p>
          <div className={styles.scheduleList}>
            {SCHEDULE.map((row, i) => (
              <div className={`${styles.scheduleRow} ${row.active ? styles.scheduleRowActive : ''}`} key={i}>
                <span>{row.days}</span>
                <span>{row.time}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Lado Direito: Card Premium de Suporte WhatsApp */}
        <div className={`${shared.reveal} ${styles.ctaContainer} reveal`}>
          <div className={styles.ctaCard}>
            <span className={`${shared.eyebrow} ${styles.secondEyebrow}`}>Dúvida sobre horário de feriado?</span>
            <h2 className={styles.secondHeading}>Fale direto com a gente</h2>
            <p className={styles.secondText}>
              Respondemos rápido pelo WhatsApp, inclusive sobre mensalidade, planos e avaliação física.
            </p>

            {/* Tags ordenadas */}
            <div className={styles.topicsList}>
              <span className={styles.topicTag}>Planos</span>
              <span className={styles.topicTag}>Mensalidade</span>
              <span className={styles.topicTag}>Avaliação física</span>
              <span className={styles.topicTag}>Horário de feriado</span>
            </div>
            <a className={`${shared.btn} ${shared.btnPrimary} ${styles.ctaBtn}`} href={WHATSAPP_HREF} target="_blank" rel="noopener">
              Tirar dúvida no WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
