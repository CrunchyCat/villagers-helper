import * as React from 'react'
import styled from 'styled-components/macro'
import { mediaMax, mediaMin } from 'styles/media'
import { Backdrop } from '../Backdrop'
import { IconClose } from 'app/Icons/IconClose'
import { cards, exps, suits, Villager } from 'data/card/cards'
import { IconCoin } from 'app/Icons/IconCoin'
import icon_lock from 'data/assets/icons/icon_lock.png'
import icon_food from 'data/assets/icons/icon_food.png'
import icon_builder from 'data/assets/icons/icon_builder.png'

interface Props {
  show: boolean
  cardID: Villager
  clickClose: () => void
}

export const CardModal = ({ show, cardID, clickClose }: Props) => {
  const card = cards[cardID]
  const suit = suits[card.suit]

  return (
    <>
      <Modal show={show}>
        <ColorStrip color={suit.color || '#FFFFFF'}>
          <img src={suit.img} alt={suit.name} />
        </ColorStrip>
        <TitleBar>
          <h1>{card.name}</h1>
          <span>
            <div onClick={clickClose}>
              <IconClose />
            </div>
          </span>
        </TitleBar>
        <SetTop>
          {card.lock && (
            <IconText>
              <img src={icon_lock} alt={`unlocked by: ${card.lock}`} />
              {cards[card.lock].name}
            </IconText>
          )}
          {!!card.food && (
            <IconText>
              food:
              {[...Array(card.food).keys()].map(i => (
                <img
                  src={icon_food}
                  alt={`${card.food} food`}
                  key={`F${cardID}${i}`}
                />
              ))}
            </IconText>
          )}
          <IconText>
            {!!card.builders && (
              <IconText>
                builders:
                {[...Array(card.builders).keys()].map(i => (
                  <img
                    src={icon_builder}
                    alt={`${card.builders} builder(s)`}
                    key={`B${cardID}${i}`}
                  />
                ))}
              </IconText>
            )}
          </IconText>
          {card.gold && (
            <IconCoin gold={card.gold} width="1.825rem" height="1.825rem" />
          )}
          <br />
          expansion: {exps[card.exp].name}
        </SetTop>
      </Modal>
      <Backdrop show={show} click={clickClose} />
      {/*TODO: Remove this and use only one root level backdrop */}
    </>
  )
}

const Modal = styled.div<{ show: boolean }>`
  z-index: 7;
  position: fixed;

  ${mediaMax.small`
    top: 28%;
    width: 96%;
    height: 72%;
    background-color: ${p => p.theme.backgroundVariant};
    border-radius: 1.5rem 1.5rem 0 0;
    transform: ${p => (p.show ? 'translateY(0)' : 'translateY(120%)')};
    transition: transform 0.25s ease-out;
  `}

  ${mediaMin.small`
    top: 10%;
    width: 80%;
    height: 80%;
    max-width: 50rem;
    max-height: 50rem;
    background-color: ${p => p.theme.backgroundVariant};
    border-radius: 1.5rem;
    transform: ${p => (p.show ? 'translateY(0)' : 'translateY(30%)')};
    opacity: ${p => (p.show ? '1' : '0')};
    visibility: ${p => (p.show ? 'visible' : 'hidden')};
    transition: transform 0.25s, opacity 0.15s, visibility 0.15s ease-out;
  `}
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

const TitleBar = styled.div`
  height: 5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2rem 1.25rem 0 1.25rem;
  color: ${p => p.theme.text};
  &::before,
  h1,
  span {
    content: '';
    flex: 1;
  }
  h1 {
    text-align: center;
    font-size: 2.25rem;
    font-weight: bold;
    white-space: nowrap;
  }
  span {
    height: 100%;
    display: flex;
    justify-content: flex-end;
  }
  div {
    height: 100%;
    cursor: pointer;
  }
  svg {
    width: 1.75rem;
    height: 1.75rem;
  }
`

const SetTop = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: ${p => p.theme.text};
`

const IconText = styled.div`
  display: flex;
  align-items: center;
  gap: 0.25rem;
  color: ${p => p.theme.text};
  img {
    max-width: 1.825rem;
    max-height: 1.825rem;
    width: auto;
    height: auto;
  }
`
