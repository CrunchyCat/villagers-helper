import * as React from 'react'
import styled from 'styled-components/macro'
import { VillagersCardDetails } from './slice/types'

interface Props extends VillagersCardDetails {
  color: string
}

export const VillagersCard = ({ img_front, img_back, name, color }: Props) => {
  const [shouldFlip, setShouldFlip] = React.useState(false)
  const [didFlip, setDidFlip] = React.useState(false)

  return (
    <CardHolder>
      <Card
        color={color}
        flip={!shouldFlip}
        flipRight={
          name.toLowerCase().charAt(0) === 'b' ||
          name.toLowerCase().charAt(0) === 'c' ||
          name.toLowerCase().charAt(0) === 'p' ||
          name.toLowerCase().charAt(0) === 's' ||
          name.toLowerCase().charAt(0) === 'w'
        }
        src={didFlip ? img_back : img_front}
        alt={name}
        onClick={() => {
          setShouldFlip(x => !x)
          setTimeout(() => setDidFlip(x => !x), 120)
        }}
      />
      <InfoCard show={shouldFlip} color={color}>
        <InfoText>{name}</InfoText>
      </InfoCard>
    </CardHolder>
  )
}

const CardHolder = styled.div`
  position: relative;
  width: 47.55%;
  max-width: 10rem;
`

const Card = styled.img<{ color: string; flip: boolean; flipRight: boolean }>`
  cursor: pointer;
  user-select: none;
  width: 100%;
  border-radius: 6.5%/4%;
  border: groove ${p => p.color};
  border-width: 0 1px 1px 0;
  box-shadow: 0.075em 0.075em 0.15em ${p => p.color};
  transform: ${p =>
    p.flip
      ? 'rotate3d(0, 0, 0, 0, 0);'
      : `rotate3d(${
          p.flipRight ? -0.05 : 0.05
        }, 1, 0.08, -180deg) scale(-1, 1);`};
  transition: transform 0.5s;
`

const InfoCard = styled.div<{ show: boolean; color: string }>`
  position: absolute;
  top: 11%;
  left: 11%;
  width: 82%;
  height: 82%;
  visibility: ${p => (p.show ? 'visible' : 'hidden')};
  background-color: ${p => p.color}D0;
  border-radius: 6.5%/4%;
  pointer-events: none;
`

const InfoText = styled.div`
  font-size: 1.2rem;
  font-weight: bold;
  color: ${p => p.theme.text};
  text-align: center;
  margin: 0.5rem 0;
`
