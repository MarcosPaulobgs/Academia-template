import Image from 'next/image'
import shared from '../../styles/shared.module.css'
import styles from './Diferenciais.module.css' // Importação do novo CSS
import { placeholder } from '../../lib/placeholder'

const CARDS = [
  {
    num: '01',
    title: 'Equipamentos completos',
    text: 'Estações de musculação, funcional e cardio sem fila de espera, mesmo no horário de pico.',
    bg: placeholder('Equipamentos', 900, 600),
  },
  {
    num: '02',
    title: 'Horário estendido',
    text: 'Abrimos cedo e fechamos tarde para caber no seu dia, seja antes do trabalho ou depois do expediente.',
    bg: placeholder('Horário estendido', 900, 600),
  },
  {
    num: '03',
    title: 'Acompanhamento de perto',
    text: 'Equipe presente no chão de treino, corrigindo execução e ajustando sua ficha conforme sua evolução.',
    bg: placeholder('Acompanhamento', 900, 600),
  },
]

export default function Diferenciais() {
  return (
    <section id="diferenciais" className={styles.diferenciaisSection}>
      {/* Elemento decorativo: apenas visual, não interfere na leitura por leitores de tela */}
     <Image
  src="https://res.cloudinary.com/gfbljogf/image/upload/q_auto,f_auto/v1787777953/dumbbells-red.webp"
  alt=""
  aria-hidden="true"
  width={1536}
  height={1024}
  sizes="(max-width: 600px) 220px, (max-width: 900px) 320px, 480px"
  className={styles.decorDumbbells}
/>
      <div className={shared.wrap}>
        <div className={`${shared.sectionHead} ${styles.headBlock} ${shared.reveal} reveal`}>
          <span className={shared.eyebrow}>Por que treinar aqui</span>
          {/* Aplicada a classe com a correção de line-height */}
          <h2 className={styles.heading}>Estrutura que aguenta a sua evolução</h2>
          <p className={styles.lede}>Cada detalhe do espaço foi pensado para tirar o &quot;depois eu treino&quot; da sua rotina.</p>
        </div>
        <div className={shared.grid3}>  
          {CARDS.map((card) => (
            <div
              className={`${shared.card} ${styles.card} ${shared.reveal} reveal`}
              key={card.num}
              style={{ '--card-bg': `url("${card.bg}")` }}
            >
              <div className={styles.cardBg} aria-hidden="true" />
              <span className={`${shared.cardNum} ${styles.cardNum}`}>{card.num}</span>
              <h3 className={styles.cardTitle}>{card.title}</h3>
              <p className={styles.cardText}>{card.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
