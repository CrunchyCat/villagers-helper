import { View } from 'data/card/cards'

interface SvgProps {
  width?: string
  height?: string
}

interface Props extends SvgProps {
  view: View
}

const SvgCompact = ({ width, height }: SvgProps) => (
  <svg width={width} height={height} viewBox="0 0 64 64">
    <path d="M0 0h13v13H0zm18 4h46v5H18zM0 26h13v12H0zm18 3h46v6H18zM0 51h13v13H0zm18 4h46v5H18z" />
  </svg>
)

const SvgNormal = ({ width, height }: SvgProps) => (
  <svg width={width} height={height} viewBox="0 0 28 28">
    <path d="M10.8 15c1.2 0 2.2 1 2.2 2.3v5.4c0 1.3-1 2.3-2.3 2.3H5.3C4 25 3 24 3 22.7v-5.4C3 16 4 15 5.3 15h5.5Zm12 0c1.2 0 2.2 1 2.2 2.3v5.4c0 1.3-1 2.3-2.3 2.3h-5.4C16 25 15 24 15 22.7v-5.4c0-1.3 1-2.3 2.3-2.3h5.4Zm-12-12C12 3 13 4 13 5.3v5.5c0 1.2-1 2.2-2.3 2.2H5.3C4 13 3 12 3 10.7V5.3C3 4 4 3 5.3 3h5.5Zm12 0C24 3 25 4 25 5.3v5.5c0 1.2-1 2.2-2.3 2.2h-5.4C16 13 15 12 15 10.7V5.3C15 4 16 3 17.3 3h5.4Z" />
  </svg>
)

const SvgWide = ({ width, height }: SvgProps) => (
  <svg width={width} height={height} viewBox="0 0 11 11" stroke="none">
    <path d="M5 4h1c.6 0 1 .4 1 1v1c0 .6-.4 1-1 1H5a1 1 0 0 1-1-1V5c0-.6.4-1 1-1zm0-4h1c.6 0 1 .4 1 1v1c0 .6-.4 1-1 1H5a1 1 0 0 1-1-1V1c0-.6.4-1 1-1zm4 4h1c.6 0 1 .4 1 1v1c0 .6-.4 1-1 1H9a1 1 0 0 1-1-1V5c0-.6.4-1 1-1zm0-4h1c.6 0 1 .4 1 1v1c0 .6-.4 1-1 1H9a1 1 0 0 1-1-1V1c0-.6.4-1 1-1zm0 8h1c.6 0 1 .4 1 1v1c0 .6-.4 1-1 1H9a1 1 0 0 1-1-1V9c0-.6.4-1 1-1zM5 8h1c.6 0 1 .4 1 1v1c0 .6-.4 1-1 1H5a1 1 0 0 1-1-1V9c0-.6.4-1 1-1zM1 4h1c.6 0 1 .4 1 1v1c0 .6-.4 1-1 1H1a1 1 0 0 1-1-1V5c0-.6.4-1 1-1zm0-4h1c.6 0 1 .4 1 1v1c0 .6-.4 1-1 1H1a1 1 0 0 1-1-1V1c0-.6.4-1 1-1zm0 8h1c.6 0 1 .4 1 1v1c0 .6-.4 1-1 1H1a1 1 0 0 1-1-1V9c0-.6.4-1 1-1z" />
  </svg>
)

export const IconToggleView = ({ view, width, height }: Props) => (
  <>
    {view === View.Compact && <SvgCompact width={width} height={height} />}
    {view === View.Normal && <SvgNormal width={width} height={height} />}
    {view === View.Wide && <SvgWide width={width} height={height} />}
  </>
)
