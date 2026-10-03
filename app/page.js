import Hero from './components/Hero/Hero'
import Strip from './components/Strip/Strip'
import Diferenciais from './components/Diferenciais/Diferenciais'
import Galeria from './components/Galeria/Galeria'
import Sobre from './components/Sobre/Sobre'
import Essencia from './components/Essencia/Essencia'
import Comentarios from './components/Comentarios/Comentarios'
import Horarios from './components/Horarios/Horarios'
import Local from './components/Local/Local'
import GaleriaWide from './components/GaleriaWide/GaleriaWide'
import CtaFinal from './components/CtaFinal/CtaFinal'
import RevealProvider from './components/RevealProvider'

export default function Home() {
  return (
    <RevealProvider>
      {/* Removidos daqui: Header, Footer e WhatsappFloat (agora gerenciados no Layout global) */}
      <Hero />
      <Strip />
      <Diferenciais />
      <Galeria />
      <Sobre />
      <Essencia />
      <Comentarios />
      <Horarios />
      <Local />
      <GaleriaWide />
      <CtaFinal />
    </RevealProvider>
  )
}
