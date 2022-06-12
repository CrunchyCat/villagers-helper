import * as React from 'react'
import styled from 'styled-components/macro'
import { Link } from 'app/components/Link'

interface Props {
  show: boolean
}

export const SideDrawer = ({ show }: Props) => (
  <Drawer show={show}>
    <DrawerList>
      <DrawerListItem>
        <Link to="/rules">rules</Link>
      </DrawerListItem>
      <DrawerListItem>
        <Link to="/configs">configurations</Link>
      </DrawerListItem>
      <DrawerListItem>
        <Link to="/cards">cards</Link>
      </DrawerListItem>
      <DrawerListItem>
        <Link to="/settings">settings</Link>
      </DrawerListItem>
    </DrawerList>
  </Drawer>
)

const Drawer = styled.nav<{ show: boolean }>`
  height: 100%;
  background-color: ${p => p.theme.backgroundVariant};
  box-shadow: 1px 0px 7px rgba(0, 0, 0, 0.5);
  position: fixed;
  top: 0;
  left: 0;
  width: 60%;
  max-width: 3000px;
  z-index: 10;
  transform: ${p => (p.show ? 'translateX(0)' : 'translateX(-100%)')};
  transition: transform 0.2s ease-out;
`

const DrawerList = styled.ul`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`

const DrawerListItem = styled.li`
  margin: 0.5rem;
  font-size: 1.5rem;
`
