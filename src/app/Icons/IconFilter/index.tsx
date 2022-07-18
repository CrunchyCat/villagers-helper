import * as React from 'react'

interface Props {
  width?: string
  height?: string
}

export const IconFilter = ({ width, height }: Props) => (
  <svg width={width} height={height} viewBox="0 0 24 24">
    <path d="M19 6h-14c-1.1 0-1.4.6-.6 1.4l4.2 4.2c.8.8 1.4 2.3 1.4 3.4v5l4-2v-3.5c0-.8.6-2.1 1.4-2.9l4.2-4.2c.8-.8.5-1.4-.6-1.4z" />
  </svg>
)
