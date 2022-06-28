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

//TODO: Remove justify-content, height, min-height from Wrapper (only for centering vertically)
const Wrapper = styled.main`
  height: calc(${window.innerHeight}px - ${StyleConstants.NAV_BAR_HEIGHT});
  min-height: 320px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
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
