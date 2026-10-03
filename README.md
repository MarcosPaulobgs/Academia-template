[🇧🇷 Português](#português) | [🇺🇸 English](#english) | [🇪🇸 Español](#español)

---

## Português

# Academia Modelo — Next.js

Site da Academia Modelo (Sua Cidade, UF), construído em **Next.js 14 (App Router)**.

### Estrutura

```
.
├── app/
│   ├── components/            → um componente por seção, cada um com seu .module.css
│   │   ├── Header/             → logo, navegação e menu mobile
│   │   ├── Hero/                → vídeo de fundo (um só vídeo montado por vez, mobile ou desktop)
│   │   ├── Strip/                → faixa animada com os diferenciais
│   │   ├── Diferenciais/         → cards "por que treinar aqui"
│   │   ├── Galeria/ e GaleriaWide/ → fotos do espaço, com lightbox e zoom
│   │   ├── Sobre/                → texto institucional + foto da fachada (com lightbox)
│   │   ├── Essencia/             → desativado (retorna null; mantido só para não quebrar o import)
│   │   ├── Comentarios/          → depoimentos do Instagram
│   │   ├── Horarios/             → horário de funcionamento + CTA de WhatsApp
│   │   ├── Local/                → endereço, mapa e contato
│   │   ├── CtaFinal/             → chamada final para aula experimental
│   │   ├── Footer/               → rodapé
│   │   ├── WhatsappFloat/        → botão flutuante de WhatsApp
│   │   └── RevealProvider.jsx   → ativa o useReveal sem transformar page.js num client component
│   ├── hooks/
│   │   ├── useReveal.js         → animação de scroll-reveal (IntersectionObserver)
│   │   └── useScrollZoom.js     → zoom com o scroll do mouse dentro dos lightboxes
│   ├── styles/
│   │   ├── tokens.css           → cores, espaçamento entre seções e escala tipográfica (:root)
│   │   ├── base.css             → reset, tipografia global e a linha tracejada entre seções
│   │   └── shared.module.css    → classes reaproveitadas entre componentes (botões, cards, grid...)
│   ├── layout.js                → fontes, metadata, Open Graph e JSON-LD
│   ├── page.js                  → monta as seções da home
│   ├── sitemap.js e robots.js   → SEO técnico
│   └── not-found.js             → página 404
├── next.config.js
└── package.json
```

### Páginas

- **Home (`/`)** — todas as seções listadas acima, na ordem em que aparecem em `page.js`.
- **Quem somos (`/quem-somos`)** — página institucional separada.
- **Suplementos (`/suplementos`)** — catálogo de suplementos e fluxo de pedido.

### Hospedagem das mídias

Não existe pasta `public/images`: todas as fotos e o vídeo do Hero estão hospedados no
**Cloudinary** e são referenciados direto pela URL dentro de cada componente. Para trocar uma
imagem ou o vídeo, basta atualizar a URL no componente correspondente.

---

## English

# Academia Modelo — Next.js

Website for Academia Modelo (Sua Cidade, UF, Brazil), built with **Next.js 14 (App Router)**.

### Structure

```
.
├── app/
│   ├── components/            → one component per section, each with its own .module.css
│   │   ├── Header/             → logo, navigation and mobile menu
│   │   ├── Hero/                → background video (only one video mounted at a time, mobile or desktop)
│   │   ├── Strip/                → animated marquee with the gym's highlights
│   │   ├── Diferenciais/         → "why train here" cards
│   │   ├── Galeria/ and GaleriaWide/ → gym photos, with lightbox and zoom
│   │   ├── Sobre/                → about text + facade photo (with lightbox)
│   │   ├── Essencia/             → disabled (returns null; kept only so the import doesn't break)
│   │   ├── Comentarios/          → Instagram testimonials
│   │   ├── Horarios/             → opening hours + WhatsApp CTA
│   │   ├── Local/                → address, map and contact
│   │   ├── CtaFinal/             → final call-to-action for a trial class
│   │   ├── Footer/               → footer
│   │   ├── WhatsappFloat/        → floating WhatsApp button
│   │   └── RevealProvider.jsx   → wires up useReveal without turning page.js into a client component
│   ├── hooks/
│   │   ├── useReveal.js         → scroll-reveal animation (IntersectionObserver)
│   │   └── useScrollZoom.js     → mouse-wheel zoom inside the lightboxes
│   ├── styles/
│   │   ├── tokens.css           → colors, spacing between sections and type scale (:root)
│   │   ├── base.css             → reset, global typography and the dashed line between sections
│   │   └── shared.module.css    → classes shared across components (buttons, cards, grid...)
│   ├── layout.js                → fonts, metadata, Open Graph and JSON-LD
│   ├── page.js                  → assembles the homepage sections
│   ├── sitemap.js and robots.js → technical SEO
│   └── not-found.js             → 404 page
├── next.config.js
└── package.json
```

### Pages

- **Home (`/`)** — all sections listed above, in the order they appear in `page.js`.
- **About us (`/quem-somos`)** — standalone about page.
- **Supplements (`/suplementos`)** — supplements catalog and order flow.

### Media hosting

There is no `public/images` folder: every photo and the Hero video are hosted on
**Cloudinary** and referenced directly by URL inside each component. To swap an image or the
video, just update the URL in the corresponding component.

---

## Español

# Academia Modelo — Next.js

Sitio web de Academia Modelo (Sua Cidade, UF, Brasil), construido con **Next.js 14 (App Router)**.

### Estructura

```
.
├── app/
│   ├── components/            → un componente por sección, cada uno con su .module.css
│   │   ├── Header/             → logo, navegación y menú móvil
│   │   ├── Hero/                → video de fondo (solo un video montado a la vez, móvil o escritorio)
│   │   ├── Strip/                → franja animada con los diferenciales
│   │   ├── Diferenciais/         → tarjetas "por qué entrenar aquí"
│   │   ├── Galeria/ y GaleriaWide/ → fotos del gimnasio, con lightbox y zoom
│   │   ├── Sobre/                → texto institucional + foto de la fachada (con lightbox)
│   │   ├── Essencia/             → desactivado (devuelve null; se mantiene solo para no romper el import)
│   │   ├── Comentarios/          → testimonios de Instagram
│   │   ├── Horarios/             → horario de atención + CTA de WhatsApp
│   │   ├── Local/                → dirección, mapa y contacto
│   │   ├── CtaFinal/             → llamado final a la clase de prueba
│   │   ├── Footer/               → pie de página
│   │   ├── WhatsappFloat/        → botón flotante de WhatsApp
│   │   └── RevealProvider.jsx   → activa useReveal sin convertir page.js en un client component
│   ├── hooks/
│   │   ├── useReveal.js         → animación de scroll-reveal (IntersectionObserver)
│   │   └── useScrollZoom.js     → zoom con la rueda del mouse dentro de los lightbox
│   ├── styles/
│   │   ├── tokens.css           → colores, espaciado entre secciones y escala tipográfica (:root)
│   │   ├── base.css             → reset, tipografía global y la línea punteada entre secciones
│   │   └── shared.module.css    → clases compartidas entre componentes (botones, tarjetas, grid...)
│   ├── layout.js                → fuentes, metadata, Open Graph y JSON-LD
│   ├── page.js                  → arma las secciones de la home
│   ├── sitemap.js y robots.js   → SEO técnico
│   └── not-found.js             → página 404
├── next.config.js
└── package.json
```

### Páginas

- **Home (`/`)** — todas las secciones listadas arriba, en el orden en que aparecen en `page.js`.
- **Quiénes somos (`/quem-somos`)** — página institucional aparte.
- **Suplementos (`/suplementos`)** — catálogo de suplementos y flujo de pedido.

### Hospedaje de los medios

Ya no existe la carpeta `public/images`: todas las fotos y el video del Hero están alojados en
**Cloudinary** y se referencian directamente por URL dentro de cada componente. Para cambiar
una imagen o el video, basta con actualizar la URL en el componente correspondiente.
