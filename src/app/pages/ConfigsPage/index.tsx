import * as React from 'react'
import styled from 'styled-components/macro'
import { Helmet } from 'react-helmet-async'
import { NavBar } from 'app/components/NavBar'

export const ConfigsPage = () => (
  <>
    <Helmet>
      <title>configurations</title>
      <meta name="description" content="configurations" />
    </Helmet>
    <NavBar />
    <Wrapper>
      <Title>configurations</Title>
    </Wrapper>
  </>
)

//TODO: Fix Scrolling with Toolbar hidden on iOS
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const Title = styled.div`
  font-size: 3rem;
  font-weight: bold;
  letter-spacing: -0.1rem;
  color: ${p => p.theme.text};
`
