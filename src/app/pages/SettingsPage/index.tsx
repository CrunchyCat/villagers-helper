import * as React from 'react'
import styled from 'styled-components/macro'
import { StyleConstants } from 'styles/StyleConstants'
import { ExpSelector } from 'app/pages/SettingsPage/components/ExpSelector'
import { ThemeSwitch } from 'app/pages/SettingsPage/components/ThemeSwitch'
import { LanguageSwitch } from 'app/pages/SettingsPage/components/LanguageSwitch'
import { Helmet } from 'react-helmet-async'
import { NavBar } from 'app/components/NavBar'
import { P } from 'app/components/P'
import { FormLabel } from 'app/components/FormLabel'

//TODO: Remove this after testing
import { useDispatch, useSelector } from 'react-redux'
import { selectDisabledCards } from 'data/user/slice/selectors'
import { useDataSlice } from 'data/user/slice'
import { saveDisabledCards } from 'data/user/user-data'

export const SettingsPage = () => {
  //TODO: Remove this after testing
  const disabledCards = useSelector(selectDisabledCards)
  const { actions } = useDataSlice()
  const dispatch = useDispatch()
  const handleUserDataChange = event => {
    const disabledCards = [Math.floor(Math.random() * 20)]
    saveDisabledCards(disabledCards)
    dispatch(actions.setDisabledCards(disabledCards))
    alert('---TEST---\n disabling: ' + disabledCards)
  }

  return (
    <>
      <Helmet>
        <title>settings</title>
        <meta name="description" content="settings" />
      </Helmet>
      <NavBar title="settings" />
      <Wrapper>
        <P>some settings</P>
        <SettingsWrapper>
          <div>
            {/*TODO: Remove this */}
            <FormLabel>CONTENT (DEV)</FormLabel>
            <P style={{ margin: '.5rem 0 0 0' }} onClick={handleUserDataChange}>
              disabled cards: ({disabledCards.join(', ')})
            </P>
          </div>
          <ExpSelector />
          <LanguageSwitch />
          <ThemeSwitch />
        </SettingsWrapper>
      </Wrapper>
    </>
  )
}

//TODO: Fix Scrolling with Toolbar hidden on iOS
const Wrapper = styled.div`
  height: calc(
    100vh - ${StyleConstants.NAV_BAR_HEIGHT} -
      ${StyleConstants.BROWSER_BAR_HEIGHT}
  );
  min-height: 280px;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media only screen and (display-mode: standalone) {
    height: calc(100vh - ${StyleConstants.COMBINED_BAR_HEIGHT});
    padding-top: calc(${StyleConstants.STATUS_BAR_HEIGHT});
  }
`

const SettingsWrapper = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
`
