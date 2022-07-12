import * as React from 'react'

interface Props {
  width?: string
  height?: string
}

export const IconClose = ({ width, height }: Props) => (
  <svg width={width} height={height} viewBox="5 5 14 14">
    <path d="M5.72 5.72a.75.75 0 011.06 0L12 10.94l5.22-5.22a.75.75 0 111.06 1.06L13.06 12l5.22 5.22a.75.75 0 11-1.06 1.06L12 13.06l-5.22 5.22a.75.75 0 01-1.06-1.06L10.94 12 5.72 6.78a.75.75 0 010-1.06z" />
  </svg>
)
