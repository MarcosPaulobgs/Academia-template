import shared from '../../styles/shared.module.css'
import styles from './CtaFinal.module.css'

const WHATSAPP_HREF = '#'

export default function CtaFinal() {
  return (
    <section>
      <div className={shared.wrap}>
        <div className={`${styles.ctaFinal} ${shared.reveal} reveal`}>
          {/* Elemento decorativo removido: o arquivo /images/decor/barbell-red.webp
              não existe no projeto (pasta public/images não tem "decor"), então
              aparecia como ícone de imagem quebrada. Se quiser, suba esse arquivo
              em public/images/decor/ e volte a chamá-lo aqui do mesmo jeito que
              o Diferenciais faz com o dumbbells-red.webp. */}
          <span className={`${shared.eyebrow} ${styles.eyebrow}`}>Sem desculpa, só ação</span>
          <h2>Sua próxima versão começa nesta semana</h2>
          <p>Marque sua aula experimental gratuita e conheça a estrutura antes de decidir. Sem compromisso.</p>
          <a className={`${shared.btn} ${shared.btnPrimary} ${styles.btnOnRed}`} href={WHATSAPP_HREF} target="_blank" rel="noopener">
            Quero minha aula grátis
          </a>
        </div>
      </div>
    </section>
  )
}
