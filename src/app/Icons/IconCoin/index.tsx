import * as React from 'react'
import styled from 'styled-components/macro'

interface Props {
  type: 'gold' | 'silver' | 'bronze'
  amount?: number
  width?: string
  height?: string
}

export const IconCoin = ({ type, amount, width = '', height = '' }: Props) => (
  <Coin width={width} height={height}>
    <CoinInner width={width}>{amount}</CoinInner>
    {/* TODO: silver+bronze */}
  </Coin>
)

const Coin = styled.div<{ width: string; height: string }>`
  width: ${p => p.width};
  height: ${p => p.height};
  border-radius: 50%;
  border-style: solid 0.1rem;
  transform: rotate(6deg);

  background: #ffc100;
  border-color: #a45c16;
  box-shadow: 2px 1px #a45c16;
`
const CoinInner = styled.div<{ width: string }>`
  position: relative;
  top: 15%;
  margin: auto;
  width: 70%;
  height: 70%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: black;
  font-size: calc(${p => p.width} * 0.3);
  font-weight: bold;
  border: 1px solid #a45c16;
  border-radius: 50%;
  user-select: none;
`
