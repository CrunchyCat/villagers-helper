import * as React from 'react'
import styled from 'styled-components/macro'
import { P } from 'app/components/P'
import { NavBar } from 'app/components/NavBar'
import { Helmet } from 'react-helmet-async'
import { StyleConstants } from 'styles/StyleConstants'
import { ExpSelector } from 'app/components/ExpSelector'
import { ThemeSwitch } from 'app/components/ThemeSwitch'
import { LanguageSwitch } from 'app/components/LanguageSwitch'
import { FormLabel } from 'app/components/FormLabel'

//TODO: Remove this after testing
import { useDispatch, useSelector } from 'react-redux'
import { getDisabledCards } from 'data/user/slice/selectors'
import { useDataSlice } from 'data/user/slice'
import { saveDisabledCards } from 'data/user/user-data'

export const SettingsPage = () => {
  //TODO: Remove this after testing
  const disabledCards = useSelector(getDisabledCards)
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
          {/* TODO: Allow card expansion selection & remove above */}
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
