import * as React from 'react'
import styled from 'styled-components/macro'
import { ExpSelector } from 'app/pages/SettingsPage/components/ExpSelector'
import { ThemeSwitch } from 'app/pages/SettingsPage/components/ThemeSwitch'
import { LanguageSwitch } from 'app/pages/SettingsPage/components/LanguageSwitch'
import { Helmet } from 'react-helmet-async'
import { NavBar } from 'app/components/Overlay/components/NavBar'
import { FormLabel } from 'app/components/FormLabel'
import { P } from 'app/components/P'

export const SettingsPage = () => (
  <>
    <Helmet>
      <title>settings</title>
      <meta name="description" content="settings" />
    </Helmet>
    <NavBar title="settings" />
    <Wrapper>
      <SettingsWrapper>
        <div>
          <FormLabel>configurations</FormLabel>
          <P style={{ margin: '.5rem 0 0 0' }}>
            user configurations will be shown here.
          </P>
        </div>
        <ExpSelector />
        <LanguageSwitch />
        <ThemeSwitch />
      </SettingsWrapper>
    </Wrapper>
  </>
)

const Wrapper = styled.main`
  width: 100%;
  max-width: 52.75rem;
  height: 100%;
  max-height: 49.25rem;
  margin: 0 auto;
  padding: 1rem max(1rem, env(safe-area-inset-right))
    calc(1rem + env(safe-area-inset-bottom))
    max(1rem, env(safe-area-inset-left));
  display: flex;
  flex-direction: column;
`

const SettingsWrapper = styled.div`
  height: 100%;
  display: flex;
  flex-flow: column wrap;
  justify-content: space-between;
  row-gap: 1rem;
  column-gap: 3rem;
`
