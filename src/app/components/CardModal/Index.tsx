import * as React from 'react'
import styled from 'styled-components/macro'
import { Backdrop } from '../Backdrop'
import { cards, VillagersCardDetails } from 'data/card/cards'

interface Props {
  clickClose: () => void
  card: VillagersCardDetails | undefined
}

export const CardModal = ({ clickClose, card }: Props) => (
  <>
    <Modal show={card !== undefined}>
      <button style={{ margin: '1rem' }} type="button" onClick={clickClose}>
        Close
      </button>
      <Title>{card?.name}</Title>
      <div>
        <Title>suit: {card?.suit}</Title>
        <Title>pack: {card?.exp}</Title>
        <Title>food: {card?.food}</Title>
        <Title>builders: {card?.builders}</Title>
        <Title>gold: {card?.gold}</Title>
        <img src={card?.img_front} alt={card?.name} />
      </div>
    </Modal>
    <Backdrop show={card !== undefined} click={clickClose} />
  </>
)

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

const Title = styled.div`
  font-size: 3.375rem;
  font-weight: bold;
  color: ${p => p.theme.text};
`
