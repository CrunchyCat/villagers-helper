import * as React from 'react'
import styled from 'styled-components/macro'
import { Backdrop } from '../Backdrop'
import { IconClose } from 'app/Icons/IconClose'
import { cards, suits, Villager } from 'data/card/cards'

interface Props {
  cardID: Villager
  clickClose: () => void
}

export const CardModal = ({ clickClose, cardID }: Props) => {
  const card = cards[cardID]
  const color = suits[card.suit].color

  return (
    <>
      <Modal show={cardID !== Villager.Unknown}>
        <ColorStrip color={color || '#FFFFFF'}>
          {/*TODO: Put Suit img here */}
          <img src={card.img_front} alt={card.name} height="5%" />
        </ColorStrip>
        <SetTop>
          <h1>{card.name}</h1>
          <div>
            {card.suit}
            <br />
            {card.exp}
            <br />
            {card.food}
            <br />
            {card.builders}
            <br />
            {card.lock}
            <br />
            {card.gold}
            {/* <IconInfo /> */}
          </div>
          <div onClick={clickClose}>
            <IconClose width="2rem" height="2rem" />
          </div>
        </SetTop>
      </Modal>
      <Backdrop show={cardID !== Villager.Unknown} click={clickClose} />
    </>
  )
}

const Modal = styled.div<{ show: boolean }>`
  position: fixed;
  top: 23%;
  left: 2%;
  width: 96%;
  height: 77%;
  z-index: 7;
  background-color: ${p => p.theme.backgroundVariant};
  border-radius: 1.5rem 1.5rem 0 0;
  transform: ${p => (p.show ? 'translateY(0)' : 'translateY(120%)')};
  transition: transform 0.25s ease-out;
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
    font-size: 2.5rem;
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
