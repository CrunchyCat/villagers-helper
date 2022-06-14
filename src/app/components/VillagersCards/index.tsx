import * as React from 'react'
import styled from 'styled-components/macro'
import { VillagersCard } from './VillagersCard'
import { IconInfo } from 'app/Icons/IconInfo'
import { CardModal } from '../CardModal/Index'
import { CardSet, cards, suits, VillagersCardDetails } from 'data/card/cards'

interface Props {
  cardSets: CardSet[]
  editMode: boolean
}

export const VillagersCards = ({ cardSets, editMode }: Props) => {
  const [modalContent, setModalContent] = React.useState(
    undefined as VillagersCardDetails | undefined
  )

  return (
    <>
      <CardModal
        clickClose={() => setModalContent(undefined)}
        card={modalContent}
      />
      {Object.entries(cardSets).map(([setID, set]) => (
        <SetWrapper color={set.color} key={setID}>
          <ColorStrip color={set.color}>
            <img src={set.img} alt={set.name} />
          </ColorStrip>
          <SetTop>
            <h1>{set.name}</h1>
            <div>
              {`(${set.cards.length}/${set.cards.length})`}
              <IconInfo />
            </div>
          </SetTop>
          <CardsWrapper color={set.color}>
            {set.cards.map((cardID, i) => (
              <VillagersCard
                editMode={editMode}
                cardID={cardID}
                card={cards[cardID]}
                color={suits[cards[cardID].suit].color}
                selectCard={(card, view) =>
                  view ? setModalContent(card) : removeCard(card)
                }
                key={`${setID}${i}`}
              />
            ))}
          </CardsWrapper>
        </SetWrapper>
      ))}
    </>
  )
}

const removeCard = (card: VillagersCardDetails) => {
  console.log('TOGGLING CARD: ', card) //TODO: Make Cards Remove from view, probably using index
}

const SetWrapper = styled.div<{ color: string }>`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 78rem;
  margin: 1rem 0;
  background-color: ${p => p.theme.backgroundVariant};
  box-shadow: 0.05rem 0.05rem 0.1rem ${p => p.color};
  border-radius: 1.5rem;
`

const ColorStrip = styled.div<{ color: string }>`
  display: flex;
  justify-content: center;
  padding-top: 2.5rem;
  border-radius: 1.5rem 1.5rem 0 0;
  background-color: ${p => p.color};
  img {
    position: absolute;
    align-self: center;
    width: 4rem;
  }
`

const SetTop = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  margin: 1rem 1rem 0 1rem;
  &::before,
  h1,
  div {
    content: '';
    flex-basis: 100%;
  }
  h1 {
    font-size: 2rem;
    font-weight: bold;
    white-space: nowrap;
    color: ${p => p.theme.text};
    margin: 1rem 0 0.5rem 0;
  }
  div {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    font-size: 1rem;
    color: ${p => p.theme.textSecondary};
  }
  svg {
    margin-left: 0.7rem;
    cursor: pointer;
    width: 1.5rem;
    height: 1.5rem;
  }
`

const CardsWrapper = styled.div<{ color: string }>`
  display: flex;
  flex-flow: row wrap;
  align-content: flex-start;
  justify-content: center;
  padding: 1.5rem 1rem 1.5rem 1rem;
  gap: 1rem 1rem;
  background-color: ${p => p.color}40;
  border-radius: 0 0 1.5rem 1.5rem;
`
