import styled from 'styled-components/macro'
import { Helmet } from 'react-helmet-async'
import { NavBar } from 'app/components/Overlay/components/NavBar'

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

const Wrapper = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
`
