import * as React from 'react'
import styled from 'styled-components/macro'
import { NavLink } from 'react-router-dom'
import { StyleConstants } from 'styles/StyleConstants'

interface Props {
  show: boolean
}

export const SideDrawer = ({ show }: Props) => (
  <Drawer show={show}>
    <DrawerList>
      <DrawerListItem>
        <NavLink
          className={({ isActive }) => (isActive ? 'active' : 'inactive')}
          to="/rules"
        >
          rules
        </NavLink>
      </DrawerListItem>
      <DrawerListItem>
        <NavLink
          className={({ isActive }) => (isActive ? 'active' : 'inactive')}
          to="/configs"
        >
          configurations
        </NavLink>
      </DrawerListItem>
      <DrawerListItem>
        <NavLink
          className={({ isActive }) => (isActive ? 'active' : 'inactive')}
          to="/cards"
        >
          cards
        </NavLink>
      </DrawerListItem>
      <DrawerListItem>
        <NavLink
          className={({ isActive }) => (isActive ? 'active' : 'inactive')}
          to="/settings"
        >
          settings
        </NavLink>
      </DrawerListItem>
    </DrawerList>
  </Drawer>
)

const Drawer = styled.nav<{ show: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  width: 60%;
  max-width: 20rem;
  height: 100%;
  z-index: 8;
  background-color: ${p => p.theme.backgroundVariant};
  box-shadow: 1px 0px 7px rgba(0, 0, 0, 0.5);
  transform: ${p => (p.show ? 'translateX(0)' : 'translateX(-100%)')};
  transition: transform 0.2s ease-out;
`

const DrawerList = styled.ul`
  margin: 0;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media only screen and (orientation: landscape) {
    margin-left: calc(1rem + ${StyleConstants.STATUS_BAR_HEIGHT});
  }
`

const DrawerListItem = styled.li`
  margin: 0.75rem;
  font-size: 1.5rem;

  .active {
    margin-left: 0.6rem;
    color: ${p => p.theme.textSecondary};
    text-decoration: none;
    cursor: default;
  }

  .inactive {
    color: ${p => p.theme.primary};
    text-decoration: none;

    &:hover {
      margin-left: 0.6rem;
      opacity: 0.8;
      transition: margin-left 0.1s ease-in-out;
    }

    &:active {
      opacity: 0.4;
    }
  }
`
