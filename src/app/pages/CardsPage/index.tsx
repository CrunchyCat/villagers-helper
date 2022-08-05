import * as React from 'react'
import styled from 'styled-components/macro'
import { Helmet } from 'react-helmet-async'
import { StyleConstants } from 'styles/StyleConstants'
import { NavBar } from 'app/components/NavBar'
import { ViewBar } from './components/ViewBar'
import { VillagersCards } from 'app/components/VillagersCards'
import { useDispatch, useSelector } from 'react-redux'
import { useCardsFiltersSlice } from 'app/pages/CardsPage/slice'
import { selectCardsFilters } from 'app/pages/CardsPage/slice/selectors'

export const CardsPage = () => {
  const filters = useSelector(selectCardsFilters)
  const { actions } = useCardsFiltersSlice()
  const dispatch = useDispatch()

  return (
    <>
      <Helmet>
        <title>cards</title>
        <meta name="description" content="cards" />
      </Helmet>
      <NavBar
        title="cards"
        btnSearch={() =>
          dispatch(actions.setViewbarHidden(!filters.hideViewbar))
        }
      />
      <Wrapper>
        <ViewBar />
        <VillagersCards
          group={filters.group}
          query={filters.query.trim()}
          view={filters.view}
          editMode={false}
        />
      </Wrapper>
    </>
  )
}

const Wrapper = styled.div`
  max-width: 78rem;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding 0 0.2rem 0.5rem 0.2rem;

  @media only screen and (display-mode: standalone) {
    min-height: calc(100vh - ${StyleConstants.COMBINED_BAR_HEIGHT});
  }
`
