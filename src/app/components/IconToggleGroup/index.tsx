import * as React from 'react'
import { Group } from 'data/card/cards'

interface Props {
  group: Group
  width: string
  height: string
}

export const IconToggleGroup = ({ group, width, height }: Props) => (
  <svg width={width} height={height} viewBox="0 0 64 64">
    {group === Group.All && <circle cx="32" cy="32" r="30" />}
    {group === Group.Suit && (
      <>
        <circle cx="32" cy="32" r="30" strokeWidth="4" fill="none" />
        <circle cx="25" cy="25" r="5" />
        <circle cx="41" cy="23" r="5" />
        <circle cx="23" cy="41" r="5" />
        <circle cx="39" cy="39" r="5" />
      </>
    )}
    {group === Group.Exp && (
      <>
        <circle cx="32" cy="32" r="27" strokeWidth="10" fill="none" />
        <circle cx="26" cy="26" r="7" />
        <circle cx="40" cy="24" r="3" />
        <circle cx="24" cy="40" r="3" />
        <circle cx="38" cy="38" r="7" />
      </>
    )}
  </svg>
)
