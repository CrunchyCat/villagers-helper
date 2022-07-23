import * as React from 'react'
import styled from 'styled-components/macro'
import { StyleConstants } from 'styles/StyleConstants'
import { Helmet } from 'react-helmet-async'
import { NavBar } from 'app/components/NavBar'
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

//TODO: Fix Scrolling with Toolbar hidden on iOS
const Wrapper = styled.div`
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
    padding-top: calc(${StyleConstants.STATUS_BAR_HEIGHT});
  }
`

const Title = styled.div`
  margin-top: -8vh;
  font-size: 3.375rem;
  font-weight: bold;
  color: ${p => p.theme.text};

  span {
    font-size: 3.125rem;
  }
`
