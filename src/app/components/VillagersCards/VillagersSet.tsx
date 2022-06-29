import * as React from 'react'
import styled from 'styled-components/macro'
import { VillagersCard } from './VillagersCard'
import { IconInfo } from 'app/Icons/IconInfo'
import { cards, CardSet, suits, Villager } from 'data/card/cards'

interface Props {
  setID: string
  set: CardSet
  filter: string
  compact: boolean
  editMode: boolean
  setViewCard: (cardID: Villager) => void
}

export const VillagersSet = ({
  setID,
  set,
  filter,
  compact,
  editMode,
  setViewCard
}: Props) => (
  <>
    {compact ? (
      <SetWrapperCompact color={set.color} key={setID}>
        <SetTopCompact color={set.color}>
          <img src={set.img} alt={set.name} />
        </SetTopCompact>
        <CardsTable color={set.color}>
          <tbody>
            {set.cards
              .filter(id => cards[id].name.toLowerCase().indexOf(filter) > -1)
              .map((cardID, i) => {
                const card = cards[cardID]
                return (
                  <tr onClick={() => setViewCard(cardID)} key={`${setID}${i}`}>
                    <td>{card.name}</td>
                    <td>{card.lock ? 'locked' : ''}</td>
                    <td>{card.food ? 'food' : ''}</td>
                    <td>{card.builders ? 'builder' : ''}</td>
                    <td>{card.gold ? `g x${card.gold}` : ''}</td>
                  </tr>
                )
              })}
          </tbody>
        </CardsTable>
      </SetWrapperCompact>
    ) : (
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
    )}
  </>
)

const removeCard = (cardID: Villager) => {
  console.log('TOGGLING CARD: ', cards[cardID]) //TODO: Make Cards Remove from view, probably using index
}

const SetWrapper = styled.div<{ color: string }>`
  width: 100%;
  max-width: 78rem;
  margin-top: 1.2rem;
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

const SetWrapperCompact = styled.div<{ color: string }>`
  width: 100%;
  max-width: 78rem;
  margin-top: 0.5rem;
  display: flex;
  flex-direction: column;
  background-color: ${p => p.theme.backgroundVariant};
  box-shadow: 0.05rem 0.05rem 0.1rem ${p => p.color};
  border-radius: 1.5rem;
`

const SetTopCompact = styled.div<{ color: string }>`
  display: flex;
  justify-content: center;
  padding-top: 1.75rem;
  border-radius: 1.5rem 1.5rem 0 0;
  background-color: ${p => p.color};
  img {
    position: absolute;
    align-self: center;
    width: 2.5rem;
  }
`

const CardsTable = styled.table<{ color: string }>`
  background-color: ${p => p.color}40;
  border-radius: 0 0 1.5rem 1.5rem;
  tbody {
    tr {
      &:first-child {
        td {
          padding-top: 1.25rem;
        }
      }
      &:nth-child(even) {
        background-color: ${p => p.color}30;
      }
      &:last-child {
        td {
          &:first-child {
            border-radius: 0 0 0 1.5rem;
          }
          &:last-child {
            border-radius: 0 0 1.5rem 0;
          }
        }
      }
      td {
        width: 17.78%;
        padding: 0.65rem 0 0.65rem;
        font-size: 0.8rem;
        border-top: 1px solid ${p => p.color};
        color: ${p => p.theme.text};
        &:first-child {
          font-size: 0.95rem;
          font-weight: bold;
          padding-left: 0.75rem;
          width: 28.88%;
        }
        &:last-child {
          text-align: right;
          padding-right: 0.75rem;
        }
      }
    }
  }
`
