import Image from 'next/image'
import shared from '../../styles/shared.module.css'
import styles from './Galeria.module.css'
import GalleryGridItem from './GalleryGridItem' // Importa o novo subcomponente interativo
import { placeholder } from '../../lib/placeholder'

const PHOTOS = [
  { src: placeholder('Salão de treino'), alt: 'Salão de treino com iluminação neon' },
  { src: placeholder('Spinning e musculação'), alt: 'Equipamentos de spinning e musculação de alta qualidade' },
  { src: placeholder('Área de musculação'), alt: 'Área de musculação com equipamentos profissionais' },
  { src: placeholder('Leg press'), alt: 'Equipamento de leg press' },
  { src: placeholder('Recepção'), alt: 'Recepção ampla e bem decorada da academia' },
  { src: placeholder('Espaço amplo'), alt: 'Área ampla de musculação' },
]

export default function Galeria() {
  return (
    <section id="galeria" className={styles.galeriaSection}>
      <div className={shared.wrap}>

        {/* CORREÇÃO DO CABEÇALHO: Removida a classe customHead que desconfigurava o tamanho. 
            Adicionamos uma classe local limpa chamada 'galeriaHead' apenas para guiar o alinhamento no desktop */}
        <div className={`${shared.sectionHead} ${styles.galeriaHead} ${shared.reveal} reveal`}>
          <span className={shared.eyebrow}>Estrutura real</span>
          <h2>Como é treinar aqui, de verdade</h2>
          <p>Ambiente climatizado, equipamentos profissionais e o espaço ideal para você construir a sua melhor versão. Sem distrações, apenas foco.</p>
        </div>

        {/* Container customizado para o grid de fotos */}
        <div className={styles.gridRightShift}>
          <GalleryGridItem photos={PHOTOS} />
        </div>
      </div>

      {/* ELEMENTO DECORATIVO: Agora fixado com segurança no lado ESQUERDO da página */}
      <Image
        src="https://res.cloudinary.com/gfbljogf/image/upload/v1788062185/anilhade10kg.png"
        alt=""
        aria-hidden="true"
        width={1536}
        height={1024}
        sizes="(max-width: 720px) 0px, 340px"
        className={styles.decorPlateLeft}
      />
    </section>
  )
}
