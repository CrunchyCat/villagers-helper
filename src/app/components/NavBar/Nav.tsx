import * as React from 'react'
import styled from 'styled-components/macro'
import { Link as RouterLink } from 'react-router-dom'

export const Nav = () => (
  <Wrapper>
    <Item to="/rules" title="game rules">
      rules
    </Item>
    <Item to="/configs" title="game configurations">
      configurations
    </Item>
    <Item to="/cards" title="game cards">
      cards
    </Item>
    <Item to="/settings" title="settings">
      settings
    </Item>
  </Wrapper>
)

const Wrapper = styled.nav`
  display: flex;
  margin-right: -1rem;
`

const Item = styled(RouterLink)`
  color: ${p => p.theme.primary};
  cursor: pointer;
  text-decoration: none;
  display: flex;
  padding: 0.25rem 1rem;
  font-size: 0.875rem;
  font-weight: 500;
  align-items: center;

  &:hover {
    opacity: 0.8;
  }

  &:active {
    opacity: 0.4;
  }

  .icon {
    margin-right: 0.25rem;
  }
`
