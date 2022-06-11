import * as React from 'react'
import styled from 'styled-components/macro'

interface Props {
  click: () => void
  show: boolean
}

export const Backdrop = ({ click, show }: Props) => (
  <Tint onClick={click} show={show} />
)

const Tint = styled.div<{ show: boolean }>`
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  visibility: ${p => (p.show ? 'visible' : 'hidden')};
  opacity: ${p => (p.show ? 1 : 0)};
  background-color: rgba(0, 0, 0, 0.3);
  transition: visibility 0.4s, opacity 0.4s linear;
  z-index: 9;
`
