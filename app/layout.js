import { Anton, Barlow, Barlow_Condensed } from 'next/font/google'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import WhatsappFloat from './components/WhatsappFloat/WhatsappFloat'
import './styles/tokens.css'
import './styles/base.css'

const anton = Anton({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-anton',
})

const barlow = Barlow({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-barlow',
})

const barlowCondensed = Barlow_Condensed({
  subsets: ['latin'],
  weight: ['600', '700'],
  variable: '--font-barlow-condensed',
})

const SITE_URL = 'https://academia-modelo.vercel.app'
const SITE_TITLE = 'Academia Modelo — Sua Cidade, UF'
const SITE_DESCRIPTION =
  'Musculação, treino funcional e acompanhamento de perto na Academia Modelo, em Sua Cidade, UF. Agende sua aula experimental grátis.'

export const viewport = {
  themeColor: '#0a0a0a',
  width: 'device-width',
  initialScale: 1,
}

export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: SITE_TITLE,
    template: '%s | Academia Modelo',
  },
  description: SITE_DESCRIPTION,
  keywords: [
    'academia em Sua Cidade',
    'academia',
    'musculação',
    'treino funcional',
    'Academia Modelo',
  ],
  authors: [{ name: 'Academia Modelo' }],
  alternates: {
    canonical: '/',
  },
  robots: {
    index: false,
    follow: false,
  },
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    url: SITE_URL,
    siteName: 'Academia Modelo',
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
  },
  twitter: {
    card: 'summary_large_image',
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
  },
}

const localBusinessJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ExerciseGym',
  name: 'Academia Modelo',
  url: SITE_URL,
  telephone: '+550000000000',
  email: 'contato@seudominio.com',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Av. Exemplo, 123',
    addressLocality: 'Sua Cidade',
    addressRegion: 'UF',
    postalCode: '00000-000',
    addressCountry: 'BR',
  },
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '05:30',
      closes: '11:00',
    },
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '15:00',
      closes: '21:00',
    },
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: 'Saturday',
      opens: '08:00',
      closes: '11:00',
    },
  ],
}

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR" className={`${anton.variable} ${barlow.variable} ${barlowCondensed.variable}`}>
      <body
        style={{
          fontFamily: 'var(--font-barlow), sans-serif',
          display: 'flex',
          flexDirection: 'column',
          minHeight: '100vh',
        }}
      >
        <Header />

        <main style={{ flexGrow: 1 }}>
          {children}
        </main>

        <Footer />
        <WhatsappFloat />

        <script
          type="application/ld+json"
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(localBusinessJsonLd).replace(/</g, '\\u003c'),
          }}
        />
      </body>
    </html>
  )
}