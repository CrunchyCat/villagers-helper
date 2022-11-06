import { useState } from 'react'
import styled from 'styled-components/macro'
import { IconInfo } from 'app/Icons/IconInfo'
import { Villager, cards, Group, groups, View } from 'data/card/cards'

interface Props {
  cardID: Villager
  view: View
  editMode: boolean
  selectCard: (cardID: Villager, show: boolean) => void
}

export const VillagersCard = ({ cardID, view, editMode, selectCard }: Props) => {
  const card = cards[cardID]
  const color = groups[Group.Suit].sets[card.suit].color

  const [shouldFlip, setShouldFlip] = useState(false)
  const [didFlip, setDidFlip] = useState(false)

  return (
    <>
      {editMode ? (
        <CardHolder>
          <Card
            editMode
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
            <InfoText wide={view === View.Wide}>
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

//prettier-ignore
const Card = styled.img<{editMode: boolean; view: View; color: string; flip: boolean; flipRight?: boolean }>`
  max-width: ${p => p.view === View.Normal ? '11rem' : '7.447rem'};
  height: 100%;
  aspect-ratio: 5/8;
  max-height: 42vh;
  border: groove ${p => p.color};
  box-shadow: 0.075rem 0.075rem 0.15rem ${p => p.color};
  border-width: 0 1px 1px 0;
  border-radius: 6.5%/4%;
  user-select: none;
  cursor: pointer;
  transform: ${p => p.editMode ? `translateZ(-1000px) rotate3d(${p.flip?'0,0,0,0,0':`${p.flipRight?'-':''}0.05,1,0.08,-180deg) scale(-1, 1`})` : `translateY(${p.flip ?'0':`-5vh) scale(1.17`})`};
  transition: max-width 0.35s, transform 0.5s;
`

const InfoCard = styled.div<{ show: boolean; color: string }>`
  position: absolute;
  top: 11%;
  left: 6%;
  width: 88%;
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

const InfoText = styled.div<{ wide: boolean }>`
  margin-top: 0.5rem;
  padding: 0.2rem;
  text-align: center;
  opacity: 0.8;
  color: ${p => p.theme.text};
  background-color: ${p => p.theme.backgroundVariant};
  border-radius: 1.5rem;

  p {
    margin: 0;
    font-size: ${p => (p.wide ? '0.97rem' : 'clamp(0.97rem,3.5vh,1.46rem)')};
    font-weight: bold;
    transition: all 0.35s;
  }
`

const CardOption = styled.div`
  align-self: center;
  padding: 0.1rem;
  display: flex;
  align-items: center;
  opacity: 0.8;
  font-weight: 900;
  color: ${p => p.theme.text};
  background-color: ${p => p.theme.backgroundVariant};
  border-radius: 1.5rem;
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
