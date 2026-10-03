// Gera uma imagem demonstrativa (SVG inline) para substituir fotos reais.
export function placeholder(label = 'Foto demonstrativa', w = 1200, h = 800) {
  const text = String(label).toUpperCase()
  const svg =
    `<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 ${w} ${h}'>` +
    `<defs><linearGradient id='g' x1='0' y1='0' x2='1' y2='1'>` +
    `<stop offset='0' stop-color='#161616'/><stop offset='1' stop-color='#2b0a0a'/>` +
    `</linearGradient></defs>` +
    `<rect width='100%' height='100%' fill='url(#g)'/>` +
    `<g transform='translate(${w / 2} ${h / 2 - 20})' fill='#ff0000' fill-opacity='.5'>` +
    `<rect x='-110' y='-8' width='220' height='16' rx='4'/>` +
    `<rect x='-130' y='-50' width='22' height='100' rx='5'/>` +
    `<rect x='108' y='-50' width='22' height='100' rx='5'/>` +
    `<rect x='-104' y='-34' width='18' height='68' rx='4'/>` +
    `<rect x='86' y='-34' width='18' height='68' rx='4'/>` +
    `</g>` +
    `<text x='${w / 2}' y='${h / 2 + 100}' text-anchor='middle' fill='#8a8a8a' ` +
    `font-family='Arial, sans-serif' font-size='26' letter-spacing='4'>${text}</text>` +
    `</svg>`
  return `data:image/svg+xml;utf8,${encodeURIComponent(svg)}`
}
