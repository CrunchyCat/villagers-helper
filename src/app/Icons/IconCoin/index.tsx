import * as React from 'react'
import styled from 'styled-components/macro'
import { Gold } from 'data/card/cards'

interface Props {
  gold: { type: Gold; amt: number; condition: string }
  width?: string
  height?: string
}

export const IconCoin = ({ gold, width = '', height = '' }: Props) => (
  <Coin width={width} height={height} type={gold.type} title={gold.condition}>
    <div>{gold.amt === 0.5 ? '1/2' : gold.amt}</div>
  </Coin>
)

const Coin = styled.div<{ width: string; height: string; type: Gold }>`
  width: ${p => p.width};
  height: ${p => p.height};
  border-radius: 50%;
  border: solid 0.04rem;
  transform: rotate(6deg);
  div {
    position: relative;
    top: 14%;
    margin: auto;
    width: 70%;
    height: 70%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: calc(${p => p.width} * 0.37);
    font-weight: bold;
    border-radius: 50%;
    user-select: none;
  }

  ${p => {
    if (p.type === Gold.Bronze)
      return `
        background: #b05e27;
        border-color: #773b1b;
        box-shadow: 1.75px 1px #773b1b;
        div {
          color: black;
          background: #bb6932;
          border: 1px solid #773b1b;
        }
      `
    else if (p.type === Gold.Silver)
      return `
        background: #9c9d9b;
        border-color: #5e6061;
        box-shadow: 1.75px 1px #5e6061;
        div {
          color: #c4c5c3;
          background: #505253;
          box-shadow: 0 0 0 0.7px #9c9d9b, 0 0 0 1.7px #5e6061;
        }
      `
    else
      return `
    background: #ffc100;
    border-color: #a45c16;
    box-shadow: 1.75px 1px #a45c16;
    div {
      color: black;
      border: 1px solid #a45c16;
    }
  `
  }}
`
