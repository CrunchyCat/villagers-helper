import styled from 'styled-components/macro'
import { NavLink } from 'react-router-dom'
import { StyleConstants } from 'styles/StyleConstants'
import { mediaMinMedium } from 'styles/media'
import { DrawerToggleButton } from './DrawerToggleButton'
import { useDispatch, useSelector } from 'react-redux'
import { selectOverlay } from '../../slice/selectors'
import { selectTheme } from 'styles/theme/slice/selectors'
import { useOverlaySlice } from '../../slice'
import { themes } from 'styles/theme/themes'
import logo from './assets/logo.webp'

interface Props {
  title: string
  btnSearch?: any
}

export const NavBar = ({ title, btnSearch }: Props) => {
  const { actions } = useOverlaySlice()
  const overlayState = useSelector(selectOverlay)
  const theme = useSelector(selectTheme)
  const dispatch = useDispatch()

  return (
    <TopBar>
      {theme === themes.light && <ColorBG />}

      <NavLeft className="mobile">
        <DrawerToggleButton
          click={() =>
            dispatch(actions.toggleSideDrawer(!overlayState.showDrawer))
          }
        />
      </NavLeft>
      <HomeLink to="/" className="desktop">
        <img src={logo} alt="vilrs" />
        <span>
          <strong>vilrs</strong>A helpful tool for villagers
        </span>
      </HomeLink>

      <Title>{title}</Title>

      <NavRight className="mobile">
        {btnSearch && <div onClick={btnSearch} />}
      </NavRight>
      {/* prettier-ignore */}
      <NavLinks className="desktop">
        <NavLink to="/rules"className={({ isActive }) => (isActive ? 'active' : 'inactive')}  title="game rules">rules</NavLink>
        <NavLink to="/configs" className={({ isActive }) => (isActive ? 'active' : 'inactive')} title="game configurations">configurations</NavLink>
        <NavLink to="/cards" className={({ isActive }) => (isActive ? 'active' : 'inactive')} title="game cards">cards</NavLink>
        <NavLink to="/settings" className={({ isActive }) => (isActive ? 'active' : 'inactive')} title="settings">settings</NavLink>
      </NavLinks>
    </TopBar>
  )
}

const TopBar = styled.header`
  position: fixed;
  top: 0;
  width: 100%;
  height: calc(${StyleConstants.COMBINED_BAR_HEIGHT});
  padding: calc(${StyleConstants.STATUS_BAR_HEIGHT})
    calc(1.5rem + env(safe-area-inset-right)) 0
    calc(1.5rem + env(safe-area-inset-left));
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

  .desktop {
    display: none !important;
  }

  ${mediaMinMedium} {
    align-items: center;
    .desktop {
      display: inherit !important;
    }
    .mobile {
      display: none !important;
    }
  }
`

const ColorBG = styled.div`
  @media only screen and (display-mode: standalone) and (orientation: portrait) {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: env(safe-area-inset-top);
    z-index: -1;
    background: linear-gradient(#0000005a 80%, #ffffff00 80%);
  }
`

const NavLeft = styled.div`
  flex: 1;
  margin-right: auto;
  display: flex;
  align-items: center;
`

const HomeLink = styled(NavLink)`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: end;
  text-decoration: none;
  img {
    max-height: calc(${StyleConstants.NAV_BAR_HEIGHT} - 1rem);
  }
  span {
    font-size: 0.875rem;
    color: ${p => p.theme.textSecondary};
    strong {
      font-size: 1.6rem;
      color: ${p => p.theme.text};
      font-weight: bold;
      margin: 0 0.75rem;
    }
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

//TODO: Implement search icon using a component (+add hover/focus styling)
const NavRight = styled.nav`
  flex: 1;
  div {
    margin-left: auto;
    width: 24px;
    height: 100%;
    background: transparent
      url("data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' fill='${p =>
        p.theme
          .textSecondary}' width='24' height='24' viewBox='0 0 487.95 487.95'><path d='M481.8,453l-140-140.1c27.6-33.1,44.2-75.4,44.2-121.6C386,85.9,299.5,0.2,193.1,0.2S0,86,0,191.4s86.5,191.1,192.9,191.1
        c45.2,0,86.8-15.5,119.8-41.4l140.5,140.5c8.2,8.2,20.4,8.2,28.6,0C490,473.4,490,461.2,481.8,453z M41,191.4
        c0-82.8,68.2-150.1,151.9-150.1s151.9,67.3,151.9,150.1s-68.2,150.1-151.9,150.1S41,274.1,41,191.4z'/></svg>")
      no-repeat center;
    cursor: pointer;
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
