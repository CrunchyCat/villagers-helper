import * as React from 'react'
import styled from 'styled-components/macro'
import { Helmet } from 'react-helmet-async'
import { NavBar } from 'app/components/Overlay/components/NavBar'
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
          editMode={true}
        />
      </Wrapper>
    </>
  )
}

const Wrapper = styled.main`
  max-width: 78rem;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  padding 0 0.2rem 0.5rem 0.2rem;
`
