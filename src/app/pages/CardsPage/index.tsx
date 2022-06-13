import * as React from 'react'
import styled from 'styled-components/macro'
import { Helmet } from 'react-helmet-async'
import { NavBar } from 'app/components/NavBar'
import { VillagersCards } from 'app/components/VillagersCards'
import { CardSet, packs } from 'data/card/cards'

export const CardsPage = () => (
  <>
    <Helmet>
      <title>cards</title>
      <meta name="description" content="cards" />
    </Helmet>
    <NavBar />
    <Wrapper>
      <Title>cards</Title>
      {/* TODO: Put Filters and Search at Top */}
      <VillagersCards cardSets={loadCards()} />
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
  font-size: 3.375rem;
  font-weight: bold;
  color: ${p => p.theme.text};
`

const loadCards = (): CardSet[] => {
  console.log('CARD DATA', packs) //TODO: Remove this
  //TODO: Return appropriate card sets
  return packs
}
