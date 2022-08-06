import * as React from 'react'
import styled from 'styled-components/macro'

interface Props {
  playType: '1' | '2' | '3' | 'discard'
  color: string
  width: string
  height: string
}

export const IconUse = ({ playType, color, width, height }: Props) => {
  switch (playType) {
    case '1':
      return (
        <Wrapper>
          <IconCard color={color} width={width} height={height} />
        </Wrapper>
      )
    case '2':
      return (
        <Wrapper>
          <IconCard color={color} width={width} height={height} />
          <IconCard color={color} width={width} height={height} />
        </Wrapper>
      )
    case '3':
      return (
        <Wrapper style={{ transform: 'translateX(20%)' }}>
          <IconCard color={color} width={width} height={height} />
          <IconCard color={color} width={width} height={height} />
          <IconSlash color={color} width={width} height={height} />
          <IconCard color={color} width={width} height={height} />
        </Wrapper>
      )
    case 'discard':
      return (
        <Wrapper>
          <IconDiscard width={width} height={height} />
        </Wrapper>
      )
  }
}

const Wrapper = styled.span`
  display: flex;
  column-gap: 0.1rem;
`

const IconBase = styled.div<{ width: string; height: string }>`
  width: ${p => p.width};
  height: ${p => p.height};
  box-shadow: 0 0 0.1rem white;
  border: 1px solid white;
  border-radius: 0.25rem;
`

const IconCard = styled(IconBase)<{ color: string }>`
  background-color: ${p => p.color};
`

const IconSlash = styled.div<{ color: string; width: string; height: string }>`
  width: calc(${p => p.width} / 6);
  height: calc(${p => p.height} * 1.2);
  margin: 0 0.35rem;
  background-color: ${p => p.color};
  box-shadow: 0 0 0.1rem white;
  border: 1px solid white;
  border-radius: 0.1rem;
  transform: rotate(15deg) translateY(-8%);
`

const IconDiscard = styled(IconBase)`
  display: flex;
  justify-content: center;
  align-items: center;
  &:before {
    content: 'X';
  }
  font-weight: 500;
  font-size: calc(${p => p.height} * 0.6);
  color: white;
  background-color: #fd8982;
  transform: rotate(10deg);
`
