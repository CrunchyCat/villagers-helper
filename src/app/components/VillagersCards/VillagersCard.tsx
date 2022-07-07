import * as React from 'react'
import styled from 'styled-components/macro'
import { Villager, cards, suits } from 'data/card/cards'
import { IconInfo } from 'app/Icons/IconInfo'

interface Props {
  cardID: Villager
  editMode: boolean
  selectCard: (cardID: Villager, view: boolean) => void
}

export const VillagersCard = ({ cardID, editMode, selectCard }: Props) => {
  const card = cards[cardID]
  const color = suits[card.suit].color

  const [shouldFlip, setShouldFlip] = React.useState(false)
  const [didFlip, setDidFlip] = React.useState(false)

  return (
    <>
      {editMode ? (
        <CardHolder>
          <Card
            editMode={true}
            color={color}
            flip={!shouldFlip}
            flipRight={
              card.name.toLowerCase().charAt(0) === 'b' ||
              card.name.toLowerCase().charAt(0) === 'c' ||
              card.name.toLowerCase().charAt(0) === 'p' ||
              card.name.toLowerCase().charAt(0) === 's' ||
              card.name.toLowerCase().charAt(0) === 'w'
            }
            src={didFlip ? card.imgBack : card.imgFront}
            alt={card.name}
            onClick={() => {
              selectCard(cardID, false)
              setShouldFlip(x => !x)
              setTimeout(() => setDidFlip(x => !x), 120)
            }}
          />
          <InfoCard show={shouldFlip} color={color}>
            <InfoText>
              <p>{card.name}</p>
              <strong>disabled</strong>
            </InfoText>
            <CardOption onClick={() => selectCard(cardID, true)}>
              &nbsp;info&nbsp;
              <IconInfo />
            </CardOption>
          </InfoCard>
        </CardHolder>
      ) : (
        <Card
          editMode={false}
          color={color}
          flip={!shouldFlip}
          src={card.imgFront}
          alt={card.name}
          onClick={() => {
            selectCard(cardID, true)
            if (shouldFlip) return
            setShouldFlip(true)
            setTimeout(() => setShouldFlip(false), 350)
          }}
        />
      )}
    </>
  )
}

const CardHolder = styled.div`
  position: relative;
`

// prettier-ignore
const Card = styled.img<{
  color: string
  flip: boolean
  flipRight?: boolean
  editMode: boolean
}>`
  max-width: 10rem;
  max-height: 42vh;
  border-radius: 6.5%/4%;
  border: groove ${p => p.color};
  border-width: 0 1px 1px 0;
  box-shadow: 0.075rem 0.075rem 0.15rem ${p => p.color};
  user-select: none;
  cursor: pointer;
  ${p => p.editMode ? `
    transform: translateZ(-1000px) ${p.flip ? 'rotate3d(0,0,0,0,0);': `rotate3d(${p.flipRight ? -0.05 : 0.05},1,0.08,-180deg) scale(-1, 1);`};
  `:`
    transform: ${p.flip ? 'translateY(0);' : `scale(1.17) translateY(-5vh);`};
  `}
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

const InfoText = styled.div`
  text-align: center;
  color: ${p => p.theme.text};
  background-color: ${p => p.theme.backgroundVariant};
  opacity: 0.8;
  border-radius: 1.5rem;
  margin: 0.5rem 0;
  padding: 0.25rem;

  p {
    margin: 0;
    font-size: 1.2rem;
    font-weight: bold;
  }
`

const CardOption = styled.div`
  display: flex;
  align-items: center;
  align-self: center;
  color: ${p => p.theme.text};
  background-color: ${p => p.theme.backgroundVariant};
  border-radius: 1rem 50% 50% 1rem;
  opacity: 0.8;
  cursor: pointer;
  font-weight: 900;
  pointer-events: all;

  svg {
    width: 2.2rem;
    height: 2.2rem;
    background-color: ${p => p.theme.backgroundVariant};
    border-radius: 50%;
  }
`
