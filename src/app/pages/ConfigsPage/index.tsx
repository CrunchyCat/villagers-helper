import * as React from 'react'
import styled from 'styled-components/macro'
import { Helmet } from 'react-helmet-async'
import { NavBar } from 'app/components/Overlay/components/NavBar'

export const ConfigsPage = () => (
  <>
    <Helmet>
      <title>configurations</title>
      <meta name="description" content="configurations" />
    </Helmet>
    <NavBar title="configurations" />
    <Wrapper>{/* TODO: Add Configurations */}</Wrapper>
  </>
)

const Wrapper = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
`
