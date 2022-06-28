import * as React from 'react'
import styled from 'styled-components/macro'
import { VillagersCard } from './VillagersCard'
import { IconInfo } from 'app/Icons/IconInfo'
import { CardModal } from '../CardModal'
import { cards, CardSet, Villager } from 'data/card/cards'

interface Props {
  cardSets: CardSet[]
  filter: string
  editMode: boolean
}

export const VillagersCards = ({ cardSets, filter, editMode }: Props) => {
  const [viewCard, setViewCard] = React.useState(Villager.Unknown)

  return (
    <>
      <CardModal
        cardID={viewCard}
        clickClose={() => setViewCard(Villager.Unknown)}
      />
      {Object.entries(cardSets) // For Each Card Set
        .filter(x => !x[1]?.hide) // Filter out Hidden Sets
        .filter(x =>
          x[1].cards.some(x => cards[x].name.toLowerCase().indexOf(filter) > -1)
        ) // Filter out Sets with no matching cards
        .map(([setID, set]) => (
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
              {set.cards
                .filter(id => cards[id].name.toLowerCase().indexOf(filter) > -1)
                .map((cardID, i) => (
                  <VillagersCard
                    cardID={cardID}
                    editMode={editMode}
                    selectCard={(cardID, view) =>
                      view ? setViewCard(cardID) : removeCard(cardID)
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

const removeCard = (cardID: Villager) => {
  console.log('TOGGLING CARD: ', cards[cardID]) //TODO: Make Cards Remove from view, probably using index
}

const SetWrapper = styled.div<{ color: string }>`
  width: 100%;
  max-width: 78rem;
  margin: 1rem 0;
  display: flex;
  flex-direction: column;
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
    width: 1.5rem;
    height: 1.5rem;
    cursor: pointer;
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
