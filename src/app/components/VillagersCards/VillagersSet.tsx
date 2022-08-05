import * as React from 'react'
import styled from 'styled-components/macro'
import { VillagersCard } from './VillagersCard'
import { IconInfo } from 'app/Icons/IconInfo'
import { IconCoin } from 'app/components/IconCoin'
import { Villager, CardSet, cards, View, groups, Group } from 'data/card/cards'
import { useDispatch, useSelector } from 'react-redux'
import { useOverlaySlice } from '../NavBar/slice'
import { selectSelectedExps } from 'data/user/slice/selectors'
import { selectCardsFilters } from 'app/pages/CardsPage/slice/selectors'
import icon_lock from 'data/assets/icons/icon_lock.png'
import { IconFood } from 'app/Icons/IconFood'
import icon_builder from 'data/assets/icons/icon_builder.png'
import { IconUse } from '../IconUse'

interface Props {
  setID: string
  set: CardSet
  query: string
  view: View
  editMode: boolean
}

export const VillagersSet = ({ setID, set, query, view, editMode }: Props) => {
  const selectedExps = useSelector(selectSelectedExps)
  const filters = useSelector(selectCardsFilters)
  const { actions } = useOverlaySlice()
  const dispatch = useDispatch()

  const cardsAvailable = set.cards.filter(id =>
    selectedExps.includes(cards[id].exp)
  ) // Filter to only show selected expansions

  const cardsFiltered = cardsAvailable
    .filter(id => cards[id].name.toLowerCase().indexOf(query) > -1) // Filter by search filter string
    .filter(id => !filters.hasFood || cards[id].food) // Filter to Food
    .filter(id => !filters.hasBuilders || cards[id].builders) // Filter to Builders

  return (
    <SetWrapper color={set.color} compact={view !== View.Normal} key={setID}>
      <ColorStrip color={set.color} compact={view !== View.Normal}>
        <img src={set.img} alt={set.name} />
      </ColorStrip>
      {view === View.Compact ? (
        <CardsTable color={set.color}>
          <tbody>
            {cardsFiltered.map((cardID, i) => {
              const card = cards[cardID]
              return (
                //TODO: add compact edit mode
                <tr
                  onClick={() => dispatch(actions.setCardModal(cardID))}
                  key={`${setID}${i}`}
                >
                  <td>{card.name}</td>
                  <td>
                    {card.lock && (
                      <IconText
                        title={`${card.name} is unlocked by ${
                          cards[card.lock].name
                        }`}
                      >
                        <img
                          src={icon_lock}
                          alt={`unlocked by: ${cards[card.lock].name}`}
                        />
                        {cards[card.lock].name}
                      </IconText>
                    )}
                  </td>
                  <td>
                    {!!card.food && (
                      <IconFoods>
                        {[...Array(card.food).keys()].map(i => (
                          <IconFood
                            width="1.825rem"
                            height="1.825rem"
                            key={`F${cardID}${i}`}
                          />
                        ))}
                      </IconFoods>
                    )}
                  </td>
                  <td>
                    {!!card.builders && (
                      <IconText>
                        {[...Array(card.builders).keys()].map(i => (
                          <img
                            src={icon_builder}
                            alt={`${card.builders} Builder(s)`}
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
                    {card.discard && (
                      <IconUse
                        playType="discard"
                        color={groups[Group.Suit].sets[card.suit].color}
                        width="1.1rem"
                        height="1.825rem"
                      />
                    )}
                  </td>
                </tr>
              )
            })}
          </tbody>
        </CardsTable>
      ) : (
        <>
          <SetTop wide={view === View.Wide}>
            <h1>{set.name}</h1>
            <div>
              {`(${cardsFiltered.length}/${cardsAvailable.length})`}
              <IconInfo />
            </div>
          </SetTop>
          <CardsWrapper color={set.color} wide={view === View.Wide}>
            {cardsFiltered.map((cardID, i) => (
              <VillagersCard
                cardID={cardID}
                view={view}
                editMode={editMode}
                selectCard={(cardID, show) =>
                  show
                    ? dispatch(actions.setCardModal(cardID))
                    : removeCard(cardID)
                }
                key={`${setID}${i}`}
              />
            ))}
          </CardsWrapper>
        </>
      )}
    </SetWrapper>
  )
}

const removeCard = (cardID: Villager) => {
  console.log('TOGGLING CARD: ', cards[cardID]) //TODO: Make Cards Remove from view, probably using index
}

const SetWrapper = styled.div<{ color: string; compact: boolean }>`
  width: 100%;
  max-width: 78rem;
  margin-top: ${p => (p.compact ? '0.75rem' : '1.2rem')};
  display: flex;
  flex-direction: column;
  background-color: ${p => p.theme.backgroundVariant};
  box-shadow: 0.05rem 0.05rem 0.1rem ${p => p.color};
  border-radius: 1.5rem;
  overflow: hidden;
  transition: all 0.35s ease-in-out;
`

const ColorStrip = styled.div<{ color: string; compact: boolean }>`
  display: flex;
  justify-content: center;
  padding-top: ${p => (p.compact ? '1.75rem' : '2.5rem')};
  background-color: ${p => p.color};
  img {
    position: absolute;
    align-self: center;
    width: ${p => (p.compact ? '2.5rem' : '4rem')};
    transition: width 0.2s ease-in-out;
  }
  transition: padding-top 0.2s ease-in-out;
`

const SetTop = styled.div<{ wide: boolean }>`
  margin: 1rem 1rem 0 1rem;
  display: flex;

  &::before,
  h1,
  div {
    content: '';
    flex-basis: 100%;
  }

  h1 {
    text-align: center;
    font-size: ${p => (p.wide ? '1.75rem' : '2rem')};
    font-weight: bold;
    white-space: nowrap;
    color: ${p => p.theme.text};
    margin: ${p => (p.wide ? '0.25rem  0 0.25rem 0' : '1rem  0 0.5rem 0')};
    transition: all 0.25s ease-in-out;
  }

  div {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    color: ${p => p.theme.textSecondary};
  }

  svg {
    stroke: ${p => p.theme.textSecondary};
    margin-left: 0.7rem;
    width: 1.5rem;
    height: 1.5rem;
    cursor: pointer;
  }
`

const CardsWrapper = styled.div<{ color: string; wide: boolean }>`
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  padding: ${p => (p.wide ? '0.5rem' : '1.25rem')} 0;
  gap: ${p => (p.wide ? '0.5rem 0.35rem' : '0.75rem')};
  background-color: ${p => p.color}40;
  transition: all 0.25s ease-in-out;
`

const CardsTable = styled.table<{ color: string }>`
  background-color: ${p => p.color}40;
  overflow: hidden;
  tbody > tr {
    td {
      line-height: 1.825rem;
      padding: 0.25rem 0;
      border-top: 1px solid ${p => p.color};
      color: ${p => p.theme.text};
      &:first-child {
        font-weight: bold;
        padding-left: calc(0.5rem + env(safe-area-inset-left));
        width: 32%;
      }
      &:nth-child(2) {
        width: 31.7%;
      }
      &:nth-child(3) {
        width: 17%;
      }
      &:nth-child(4) {
        width: 9.2%;
      }
      &:last-child {
        width: 10.1%;
        padding-right: calc(0.5rem + env(safe-area-inset-right));
      }
    }
    &:first-child > td {
      padding-top: 1.25rem;
    }
    &:last-child > td {
      padding-bottom: 0.35rem;
    }
    &:nth-child(even) {
      background-color: ${p => p.color}30;
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

const IconFoods = styled.div`
  display: flex;
  color: #fe3d33;
  stroke: #fe3d33;
  transform: scale(1.2);
`
