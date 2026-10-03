import Link from 'next/link'
import shared from '../styles/shared.module.css'
import styles from './page.module.css'

const WHATSAPP_HREF = '#'

export const metadata = {
  title: 'Quem Somos | Academia Modelo',
  description: 'Conheça a história e o propósito da Academia Modelo em Sua Cidade, UF.',
}

export default function QuemSomosPage() {
  return (
    <main className={styles.mainContainer}>
      <section className={styles.quemSomosSection}>
        <div className={`${shared.wrap} ${styles.contentWrap}`}>
          
          {/* CABEÇALHO */}
          <header className={styles.headerBlock}>
            <span className={shared.eyebrow}>Nossa História & Propósito</span>
            <h1 className={styles.heading}>Quem Somos</h1>
          </header>

          {/* PARÁGRAFOS DE TEXTO */}
          <article className={styles.textBlock}>
            <p>
              Fundada há mais de 10 anos, a Academia Modelo nasceu de um sonho claro: provar que treinar
              vai muito além da estética. É sobre construir saúde, conquistar longevidade e transformar a
              rotina de cada aluno em uma jornada diária de superação e vitalidade. Acreditamos que a
              verdadeira força se desenvolve quando aliamos cuidado, dedicação e acompanhamento
              profissional qualificado.
            </p>
            <p>
              Ao longo desses anos em Sua Cidade, nos orgulhamos de abrir nossas portas para pessoas de
              todas as idades, transformando cansaço em energia, dúvida em confiança e metas em
              realidade. Seja para alcançar um objetivo estético, buscar reabilitação terapêutica ou
              simplesmente viver com mais disposição, nossa estrutura e equipe estão prontas para apoiar
              cada passo da sua evolução.
            </p>
            <p>
              Aqui, cada treino é uma nova oportunidade de honrar o seu corpo e superar os seus próprios
              limites. Nós não apenas cuidamos do seu condicionamento físico; nós caminhamos lado a lado
              com você na construção da sua melhor versão, criando um ambiente acolhedor onde a
              disciplina encontra o propósito.
            </p>
          </article>

          {/* CARD DE CTA CENTRALIZADO */}
          <div className={styles.ctaCard}>
            <span className={shared.eyebrow}>Faça Parte</span>
            <h2 className={styles.ctaTitle}>Venha Treinar Com a Gente</h2>
            <p className={styles.ctaSub}>
              O primeiro passo é o único que falta. O resto a gente caminha junto.
            </p>
            <a
              className={`${shared.btn} ${shared.btnPrimary} ${styles.ctaBtn}`}
              href={WHATSAPP_HREF}
              target="_blank"
              rel="noopener noreferrer"
            >
              Bora Treinar
            </a>
          </div>

        </div>
      </section>
    </main>
  )
}