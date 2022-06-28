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
    <NavBar title="configurations" />
    <Wrapper>no configurations yet {/* TODO: Add Configurations */}</Wrapper>
  </>
)

//TODO: Fix Scrolling with Toolbar hidden on iOS
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`
