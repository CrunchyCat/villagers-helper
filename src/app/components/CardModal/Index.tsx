import * as React from 'react'
import styled from 'styled-components/macro'
import { Backdrop } from '../Backdrop'

interface Props {
  clickClose: () => void
  show: boolean
}

export const CardModal = ({ clickClose, show }: Props) => (
  <>
    <Modal show={show}>
      <button type="button" onClick={clickClose}>
        Close
      </button>
    </Modal>
    <Backdrop show={show} click={clickClose} />
  </>
)

const Modal = styled.div<{ show: boolean }>`
  position: fixed;
  top: 25%;
  left: 2%;
  width: 96%;
  height: 75%;
  z-index: 7;
  background-color: ${p => p.theme.backgroundVariant};
  border-radius: 1.5rem 1.5rem 0 0;
  transform: ${p => (p.show ? 'translateY(0)' : 'translateY(100%)')};
  transition: transform 0.2s ease-out;
`
