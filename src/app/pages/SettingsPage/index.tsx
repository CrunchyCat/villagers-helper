import * as React from 'react'
import styled from 'styled-components/macro'
import { P } from 'app/components/P'
import { NavBar } from 'app/components/NavBar'
import { Helmet } from 'react-helmet-async'
import { StyleConstants } from 'styles/StyleConstants'
import { ThemeSwitch } from 'app/components/ThemeSwitch'
import { LanguageSwitch } from 'app/components/LanguageSwitch'
import { FormLabel } from 'app/components/FormLabel'

export const SettingsPage = () => (
  <>
    <Helmet>
      <title>settings</title>
      <meta name="description" content="settings" />
    </Helmet>
    <NavBar />
    <Wrapper>
      <Title>settings</Title>
      <P>some settings</P>
      <SettingsWrapper>
        <FormLabel>CONTENT</FormLabel>
        <P>select what expansions to include</P>
        <P>{window.innerHeight}</P>
        {/* TODO: Allow card expansion selection & remove above */}
        <LanguageSwitch />
        <ThemeSwitch />
      </SettingsWrapper>
    </Wrapper>
  </>
)

//TODO: Fix Scrolling with Toolbar hidden on iOS
const Wrapper = styled.div`
  height: calc(${window.innerHeight}px - ${StyleConstants.NAV_BAR_HEIGHT});
  min-height: 320px;
  display: flex;
  flex-direction: column;
  align-items: center;
`

const SettingsWrapper = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
`

const Title = styled.div`
  font-size: 3.375rem;
  font-weight: bold;
  color: ${p => p.theme.text};
`
