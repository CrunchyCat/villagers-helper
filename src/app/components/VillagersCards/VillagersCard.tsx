import * as React from 'react'
import styled from 'styled-components/macro'
import { VillagersCardDetails } from 'data/card/cards'

interface Props extends VillagersCardDetails {
  color: string
  selectCard: (id: string) => void
}

export const VillagersCard = ({
  id,
  img_front,
  img_back,
  name,
  color,
  selectCard
}: Props) => {
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
        <InfoText color={color}>{name}</InfoText>
        <CardOptions>
          <CardOption onClick={() => selectCard(id || '')}>i</CardOption>
          <CardOption>X</CardOption>
        </CardOptions>
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
  box-shadow: 0.075rem 0.075rem 0.15rem ${p => p.color};
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
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  pointer-events: none;
  user-select: none;
  visibility: ${p => (p.show ? 'visible' : 'hidden')};
  opacity: ${p => (p.show ? 1 : 0)};
  transition: visibility 0.6s, opacity 0.6s ease-out;
`

const InfoText = styled.div<{ color: string }>`
  font-size: 1.2rem;
  font-weight: bold;
  text-align: center;
  color: ${p => p.theme.text};
  background-color: ${p => p.theme.backgroundVariant};
  opacity: 0.8;
  border-radius: 1.5rem;
  margin: 0.5rem 0;
`

const CardOptions = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
`

const CardOption = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 2rem;
  height: 2rem;
  color: ${p => p.theme.text};
  background-color: ${p => p.theme.backgroundVariant};
  border: 0.2rem solid ${p => p.theme.text};
  border-radius: 50%;
  opacity: 0.8;
  cursor: pointer;
  font-weight: 900;
  pointer-events: all;
`
