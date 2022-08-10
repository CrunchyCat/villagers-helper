import * as React from 'react'
import styled from 'styled-components/macro'
import { Helmet } from 'react-helmet-async'
import { NavBar } from 'app/components/Overlay/components/NavBar'
import { A } from 'app/components/A'

export const HomePage = () => (
  <>
    <Helmet>
      <title>vilrs</title>
      <meta name="description" content="A helpful tool for villagers" />
    </Helmet>
    <NavBar title="" />
    <Wrapper>
      <Title>vilrs</Title>
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
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const Title = styled.h1`
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
