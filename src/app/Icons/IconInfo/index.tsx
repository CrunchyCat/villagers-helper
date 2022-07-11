import * as React from 'react'

interface Props {
  width?: string
  height?: string
}

export const IconInfo = ({ width, height }: Props) => (
  <svg width={width} height={height} viewBox="0 0 490.3 490.3">
    <circle cx="245.15" cy="245.15" r="215.15" strokeWidth="60" fill="none" />
    <path d="M270 221h-50c-8 0-15 7-15 15v148c0 8 7 15 15 15h50c8 0 15-7 15-15V236c0-8-7-15-15-15zM245 91a44 44 0 1 0 0 89 44 44 0 0 0 0-89z" />
  </svg>
)
