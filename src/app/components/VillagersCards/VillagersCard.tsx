import * as React from 'react'
import styled from 'styled-components/macro'
import { IconInfo } from 'app/Icons/IconInfo'
import { Villager, cards, Group, groups, View } from 'data/card/cards'

interface Props {
  cardID: Villager
  view: View
  editMode: boolean
  selectCard: (cardID: Villager, show: boolean) => void
}

export const VillagersCard = ({
  cardID,
  view,
  editMode,
  selectCard
}: Props) => {
  const card = cards[cardID]
  const color = groups[Group.Suit].sets[card.suit].color

  const [shouldFlip, setShouldFlip] = React.useState(false)
  const [didFlip, setDidFlip] = React.useState(false)

  return (
    <>
      {editMode ? (
        <CardHolder>
          <Card
            editMode={true}
            view={view}
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
          view={view}
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
  editMode: boolean
  view: View
  color: string
  flip: boolean
  flipRight?: boolean
}>`
  max-width: ${p => p.view === View.Normal ? '11rem' : '7.447rem'};
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
  transition: max-width 0.35s, transform 0.5s;
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
  transition: all 0.6s ease-out;
`

const InfoText = styled.div`
  margin-top: 0.5rem;
  padding: 0.2rem;
  text-align: center;
  opacity: 0.8;
  color: ${p => p.theme.text};
  background-color: ${p => p.theme.backgroundVariant};
  border-radius: 1.5rem;

  p {
    margin: 0;
    font-size: 1.2rem;
    font-weight: bold;
  }
`

const CardOption = styled.div`
  align-self: center;
  display: flex;
  align-items: center;
  opacity: 0.8;
  font-weight: 900;
  color: ${p => p.theme.text};
  background-color: ${p => p.theme.backgroundVariant};
  border-radius: 1rem 50% 50% 1rem;
  cursor: pointer;
  pointer-events: all;

  svg {
    width: 2.2rem;
    height: 2.2rem;
    stroke: ${p => p.theme.text};
    background-color: ${p => p.theme.backgroundVariant};
    border-radius: 50%;
  }
`
