import { Fragment } from 'react'
import styles from './Strip.module.css'

const ITEMS = [
  'SAÚDE E BEM-ESTAR EM UM SÓ LUGAR',
  'MUSCULAÇÃO',
  'TREINO FUNCIONAL',
  'ACOMPANHAMENTO PERSONALIZADO',
]

// Repete os itens várias vezes dentro de cada "metade" da faixa.
// Isso garante que cada metade seja sempre mais larga que a tela
// (mesmo em monitores ultrawide/TVs), então o loop translateX(-50%)
// nunca chega a mostrar um vão vazio antes de reiniciar.
const HALF_REPEATS = 6
const half = Array.from({ length: HALF_REPEATS }, () => ITEMS).flat()
const repeated = [...half, ...half]

export default function Strip() {
  return (
    <div className={styles.strip} aria-hidden="true">
      <div className={styles.stripTrack}>
        {repeated.map((text, i) => (
          <Fragment key={i}>
            <span>{text}</span>
            <span>★</span>
          </Fragment>
        ))}
      </div>
    </div>
  )
}
