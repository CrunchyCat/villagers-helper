import * as React from 'react'
import styled from 'styled-components/macro'
import { Helmet } from 'react-helmet-async'
import { NavBar } from 'app/components/NavBar'

export const RulesPage = () => (
  <>
    <Helmet>
      <title>rules</title>
      <meta name="description" content="rules" />
    </Helmet>
    <NavBar title="rules" />
    <Wrapper>{/* TODO: Add Rules */}</Wrapper>
  </>
)

//TODO: Fix Scrolling with Toolbar hidden on iOS
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`
