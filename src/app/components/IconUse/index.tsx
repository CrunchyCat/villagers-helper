import * as React from 'react'
import styled from 'styled-components/macro'

interface Props {
  playType: '1' | '2' | 'discard'
  color: string
  width: string
  height: string
}

export const IconUse = ({ playType, color, width, height }: Props) => (
  <span>
    {playType === '1' && (
      <IconCard color={color} width={width} height={height} />
    )}
    {playType === '2' && (
      <div style={{ display: 'flex', columnGap: '0.1rem' }}>
        <IconCard color={color} width={width} height={height} />
        <IconCard color={color} width={width} height={height} />
      </div>
    )}
    {playType === 'discard' && <IconDiscard width={width} height={height} />}
  </span>
)

const IconBase = styled.div<{ width: string; height: string }>`
  height: ${p => p.height};
  width: ${p => p.width};
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0 0 0.15rem white;
  border: 1px solid white;
  border-radius: 0.25rem;
  font-weight: 500;
  font-size: calc(${p => p.height} * 0.6);
  color: white;
`

const IconCard = styled(IconBase)<{ color: string }>`
  background-color: ${p => p.color};
`

const IconDiscard = styled(IconBase)`
  &:before {
    content: 'X';
  }
  background-color: #fd8982;
  transform: rotate(10deg);
`
