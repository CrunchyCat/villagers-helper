import * as React from 'react'
import styled from 'styled-components/macro'
import { NavLink } from 'react-router-dom'
import { StyleConstants } from 'styles/StyleConstants'
import { mediaMin, mediaMax } from 'styles/media'
import { SideDrawer } from './SideDrawer'
import { Backdrop } from 'app/components/Backdrop'
import { DrawerToggleButton } from './DrawerToggleButton'
import logo from './assets/logo.png'

interface Props {
  title: string
  btnSearch?: any
}

export const NavBar = ({ title, btnSearch }: Props) => {
  const [drawerIsOpen, setDrawerIsOpen] = React.useState(false)

  return (
    <>
      <SideDrawer show={drawerIsOpen} />
      <Backdrop click={() => setDrawerIsOpen(false)} show={drawerIsOpen} />
      <TopBar>
        <WrapperMobile>
          <NavLeft>
            <DrawerToggleButton click={() => setDrawerIsOpen(x => !x)} />
          </NavLeft>

          <Title>{title}</Title>
          <NavRight>{btnSearch && <div onClick={btnSearch} />}</NavRight>
        </WrapperMobile>

        {/* prettier-ignore */}
        <WrapperDesktop>
          <HomeLink to="/">
            <img src={logo} alt="villagers helper" />
            <span><strong>villagers helper</strong>A helpful tool for villagers</span>
          </HomeLink>
          <Title>{title}</Title>
          <NavLinks>
            <NavLink to="/rules" title="game rules" className={({ isActive }) => (isActive ? 'active' : 'inactive')}>rules</NavLink>
            <NavLink to="/configs" title="game configurations" className={({ isActive }) => (isActive ? 'active' : 'inactive')}>configurations</NavLink>
            <NavLink to="/cards" title="game cards" className={({ isActive }) => (isActive ? 'active' : 'inactive')}>cards</NavLink>
            <NavLink to="/settings" title="settings" className={({ isActive }) => (isActive ? 'active' : 'inactive')}>settings</NavLink>
          </NavLinks>
        </WrapperDesktop>
      </TopBar>
    </>
  )
}

const TopBar = styled.header`
  position: fixed;
  top: 0;
  width: 100%;
  height: ${StyleConstants.NAV_BAR_HEIGHT};
  z-index: 5;
  display: flex;
  box-shadow: 0 1px 0 0 ${p => p.theme.borderLight};
  background-color: ${p => p.theme.background};

  @supports (backdrop-filter: blur(6px)) {
    backdrop-filter: blur(6px);
    background-color: ${p =>
      p.theme.background.replace(
        /rgba?(\(\s*\d+\s*,\s*\d+\s*,\s*\d+)(?:\s*,.+?)?\)/,
        'rgba$1,0.75)'
      )};
  }
`

const Title = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-self: center;
  font-size: 1.634rem;
  font-weight: bold;
  color: ${p => p.theme.text};
`

const WrapperMobile = styled.div`
  width: 100%;
  margin: 0 1rem 0 1rem;
  display: flex;

  ${mediaMin.medium`
    display: none !important
  `}
`

const NavLeft = styled.div`
  flex: 1;
  margin-right: auto;
  display: flex;
  align-items: center;
`

//TODO: Implement search icon using a component (making it clean to add hover/focus styling)
const NavRight = styled.nav`
  flex: 1;
  div {
    margin-left: auto;
    width: 24px;
    height: ${StyleConstants.NAV_BAR_HEIGHT};
    background: transparent
      url("data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' fill='${p =>
        p.theme
          .textSecondary}' width='24px' height='24px' viewBox='0 0 487.95 487.95'><path d='M481.8,453l-140-140.1c27.6-33.1,44.2-75.4,44.2-121.6C386,85.9,299.5,0.2,193.1,0.2S0,86,0,191.4s86.5,191.1,192.9,191.1
        c45.2,0,86.8-15.5,119.8-41.4l140.5,140.5c8.2,8.2,20.4,8.2,28.6,0C490,473.4,490,461.2,481.8,453z M41,191.4
        c0-82.8,68.2-150.1,151.9-150.1s151.9,67.3,151.9,150.1s-68.2,150.1-151.9,150.1S41,274.1,41,191.4z'></path></svg>")
      no-repeat center;
    cursor: pointer;
  }
`

const WrapperDesktop = styled.div`
  width: 100%;
  display: flex;
  align-items: center;

  ${mediaMax.medium`
    display: none !important
  `}
`

const HomeLink = styled(NavLink)`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: end;
  img {
    max-height: calc(${StyleConstants.NAV_BAR_HEIGHT} - 1rem);
  }
  span {
    font-size: 0.875rem;
    color: ${p => p.theme.textSecondary};
    strong {
      font-size: 1.25rem;
      color: ${p => p.theme.text};
      font-weight: bold;
      margin: 0 1rem;
    }
  }
`

// TODO: Add icons with .icon { margin-right: 0.25rem; }
const NavLinks = styled.nav`
  flex: 1;
  display: flex;

  .active {
    padding: 0.25rem 1rem;
    font-size: 0.875rem;
    color: ${p => p.theme.textSecondary};
    cursor: default;
    text-decoration: none;
  }

  .inactive {
    padding: 0.25rem 1rem;
    font-size: 0.875rem;
    color: ${p => p.theme.primary};
    text-decoration: none;

    &:hover {
      opacity: 0.8;
    }

    &:active {
      opacity: 0.4;
    }
  }
`
