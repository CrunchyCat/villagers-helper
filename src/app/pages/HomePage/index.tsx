import * as React from 'react'
import styled from 'styled-components/macro'
import { StyleConstants } from 'styles/StyleConstants'
import { Helmet } from 'react-helmet-async'
import { NavBar } from 'app/components/NavBar'
import { A } from 'app/components/A'

export const HomePage = () => (
  <>
    <Helmet>
      <title>villagers helper</title>
      <meta name="description" content="A helpful tool for villagers" />
    </Helmet>
    <NavBar title="" />
    <Wrapper>
      <Title>villagers helper</Title>
      <Lead>
        this was <strong>created</strong> by{' '}
        <A
          href="http://www.calebhoff.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Caleb
        </A>
      </Lead>
    </Wrapper>
  </>
)

const Wrapper = styled.main`
  height: calc(
    100vh - ${StyleConstants.NAV_BAR_HEIGHT} -
      ${StyleConstants.BROWSER_BAR_HEIGHT}
  );
  min-height: 280px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media only screen and (display-mode: standalone) {
    height: calc(100vh - ${StyleConstants.COMBINED_BAR_HEIGHT});
    padding-top: ${StyleConstants.STATUS_BAR_HEIGHT};
  }
`

const Title = styled.h1`
  margin-top: -8vh;
  font-size: 2rem;
  font-weight: bold;
  color: ${p => p.theme.text};
`

const Lead = styled.p`
  font-size: 1.5rem;
  font-weight: 300;
  line-height: 1.5;
  color: ${p => p.theme.textSecondary};
  margin: 0 0 1.5rem 0;

  strong {
    color: ${p => p.theme.text};
  }
`
