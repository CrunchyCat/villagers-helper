import * as React from 'react'
import styled from 'styled-components/macro'
import { Helmet } from 'react-helmet-async'
import { NavBar } from 'app/components/Overlay/components/NavBar'
import { P } from 'app/components/P'
import { Link } from 'app/components/Link'

export const NotFoundPage = () => (
  <>
    <Helmet>
      <title>404</title>
      <meta name="description" content="Page not found" />
    </Helmet>
    <NavBar title="4😢4" />
    <Wrapper>
      <Title>
        4
        <span role="img" aria-label="Crying Face">
          😢
        </span>
        4
      </Title>
      <P>page not found</P>
      <Link to="/">Return to Home Page</Link>
    </Wrapper>
  </>
)

const Wrapper = styled.main`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

const Title = styled.div`
  font-size: 3.375rem;
  font-weight: bold;
  color: ${p => p.theme.text};

  span {
    font-size: 3.125rem;
  }
`
