// Logo genérica de demonstração (substitui a logo da marca real).
export default function LogoMark({ size = 44, className }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 44 44"
      className={className}
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="44" height="44" rx="10" fill="#ff0000" />
      <g fill="#fff">
        <rect x="11" y="20" width="22" height="4" rx="1.5" />
        <rect x="7" y="14" width="5" height="16" rx="1.5" />
        <rect x="32" y="14" width="5" height="16" rx="1.5" />
      </g>
    </svg>
  )
}
