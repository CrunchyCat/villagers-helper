import * as React from 'react'
import styled from 'styled-components/macro'
import { VillagersCard } from './VillagersCard'
import { cards, CardSet, Villager } from 'data/card/cards'
import { IconInfo } from 'app/Icons/IconInfo'
import { IconCoin } from 'app/Icons/IconCoin'
import icon_lock from 'data/assets/icons/icon_lock.png'
import icon_food from 'data/assets/icons/icon_food.png'
import icon_builder from 'data/assets/icons/icon_builder.png'

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
                    <td>
                      {card.lock && (
                        <IconText>
                          <img
                            src={icon_lock}
                            alt={`unlocked by: ${card.lock}`}
                          />
                          {cards[card.lock].name}
                        </IconText>
                      )}
                    </td>
                    <td>
                      {!!card.food && (
                        <IconText>
                          {[...Array(card.food).keys()].map(i => (
                            <img
                              src={icon_food}
                              alt={`${card.food} food`}
                              key={`F${cardID}${i}`}
                            />
                          ))}
                        </IconText>
                      )}
                    </td>
                    <td>
                      {!!card.builders && (
                        <IconText>
                          {[...Array(card.builders).keys()].map(i => (
                            <img
                              src={icon_builder}
                              alt={`${card.builders} builder(s)`}
                              key={`B${cardID}${i}`}
                            />
                          ))}
                        </IconText>
                      )}
                    </td>
                    <td>
                      {card.gold && (
                        <IconCoin
                          gold={card.gold}
                          width="1.825rem"
                          height="1.825rem"
                        />
                      )}
                    </td>
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
  margin-top: 0.75rem;
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
        width: 13%;
        padding: 0.25rem 0 0.25rem;
        border-top: 1px solid ${p => p.color};
        color: ${p => p.theme.text};
        &:first-child {
          font-weight: bold;
          padding-left: 0.5rem;
          width: 33.4%;
        }
        &:nth-child(2) {
          width: 33.1%;
        }
        &:last-child {
          width: 10%;
          padding-right: 0.5rem;
          text-align: right;
        }
      }
    }
  }
`

const IconText = styled.div`
  display: flex;
  align-items: center;
  gap: 0.25rem;
  font-size: 0.9rem;
  color: ${p => p.theme.text};
  img {
    max-width: 1.825rem;
    max-height: 1.825rem;
    width: auto;
    height: auto;
  }
`
