import * as React from 'react'
import styled from 'styled-components/macro'
import { StyleConstants } from 'styles/StyleConstants'
import { Link } from 'app/components/Link'
import logo from './assets/logo.png'

export const TitleBar = () => (
  <Link to="/">
    <Wrapper>
      <img src={logo} alt="villagers helper" />
      <Title>villagers helper</Title>
      <Description>A helpful tool for villagers</Description>
    </Wrapper>
  </Link>
)

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  img {
    max-height: calc(${StyleConstants.NAV_BAR_HEIGHT} - 1rem);
  }
`

const Title = styled.div`
  font-size: 1.25rem;
  color: ${p => p.theme.text};
  font-weight: bold;
  margin: 0 1rem 0 1rem;
`

const Description = styled.div`
  font-size: 0.875rem;
  color: ${p => p.theme.textSecondary};
  font-weight: normal;
`
