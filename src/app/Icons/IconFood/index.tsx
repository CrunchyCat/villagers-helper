interface Props {
  width?: string
  height?: string
}

export const IconFood = ({ width, height }: Props) => (
  <svg width={width} height={height} viewBox="-14 12 32 64">
    <g transform="rotate(45)">
      <ellipse cx="34" cy="29" rx="25" ry="23.5" strokeWidth="8" fill="none" />
      <ellipse cx="34" cy="28.5" rx="22" ry="22" strokeWidth="9" fill="none" />
      <line x1="34" y1="51" x2="34" y2="36" strokeWidth="3" />
      <line x1="35.5" y1="51" x2="34" y2="36" strokeWidth="3" />
      <ellipse cx="34" cy="28" rx="7.5" ry="10.5" />
      <ellipse cx="35" cy="56.5" rx="2.5" ry="6.6" />
    </g>
  </svg>
)
