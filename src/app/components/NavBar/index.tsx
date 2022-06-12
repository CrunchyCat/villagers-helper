import * as React from 'react'
import styled from 'styled-components/macro'
import { StyleConstants } from 'styles/StyleConstants'
import { SideDrawer } from './SideDrawer'
import { Backdrop } from 'app/components/Backdrop'
import { DrawerToggleButton } from './DrawerToggleButton'
import { TitleBar } from './TitleBar'
import { Nav } from './Nav'
import { mediaMin, mediaMax } from 'styles/media'
import { A } from 'app/components/A'

export const NavBar = () => {
  const [drawerIsOpen, setDrawerIsOpen] = React.useState(false)

  return (
    <>
      <SideDrawer show={drawerIsOpen} />
      <Backdrop click={() => setDrawerIsOpen(false)} show={drawerIsOpen} />
      <TopBar>
        <WrapperMobile>
          <DrawerToggleButton click={() => setDrawerIsOpen(x => !x)} />
          <div>
            {/*TODO: entire div*/}
            <A href={window.location.href + '/oops'}>404</A>&nbsp;&nbsp;&nbsp;
            <A href={window.location.href}>🔄</A>
          </div>
        </WrapperMobile>
        <WrapperDesktop>
          <TitleBar />
          <Nav />
        </WrapperDesktop>
      </TopBar>
    </>
  )
}

const TopBar = styled.header`
  box-shadow: 0 1px 0 0 ${p => p.theme.borderLight};
  height: ${StyleConstants.NAV_BAR_HEIGHT};
  display: flex;
  position: fixed;
  top: 0;
  width: 100%;
  background-color: ${p => p.theme.background};
  z-index: 2;

  @supports (backdrop-filter: blur(10px)) {
    backdrop-filter: blur(10px);
    background-color: ${p =>
      p.theme.background.replace(
        /rgba?(\(\s*\d+\s*,\s*\d+\s*,\s*\d+)(?:\s*,.+?)?\)/,
        'rgba$1,0.75)'
      )};
  }
`

const WrapperMobile = styled.div`
  width: 100%;
  padding: 0 1.2rem 0 1.2rem;
  align-items: center;
  display: flex;
  justify-content: space-between;
  ${mediaMin.medium`
    display: none !important
  `}
`

const WrapperDesktop = styled.div`
  width: 100%;
  padding: 0 1.2rem 0 1.2rem;
  align-items: center;
  display: flex;
  justify-content: space-between;
  ${mediaMax.medium`
    display: none !important
  `}
`
