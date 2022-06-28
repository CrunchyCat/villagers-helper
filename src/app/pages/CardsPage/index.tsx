import * as React from 'react'
import styled from 'styled-components/macro'
import { Helmet } from 'react-helmet-async'
import { NavBar } from 'app/components/NavBar'
import { VillagersCards } from 'app/components/VillagersCards'
import { suits, exps } from 'data/card/cards'

export const CardsPage = () => {
  const [group, setGroup] = React.useState(suits)
  const [filter, setFilter] = React.useState('')

  return (
    <>
      <Helmet>
        <title>cards</title>
        <meta name="description" content="cards" />
      </Helmet>
      <NavBar title="cards" />
      <Wrapper>
        <ViewBar>
          <ViewSwitch onClick={() => console.log('Set Filters')}>
            filt {/* TODO: Add Filter Options & Swap for Icon */}
          </ViewSwitch>
          <SearchBar onChange={e => setFilter(e.target.value.toLowerCase())} />
          <ViewSwitch
            onClick={() => setGroup(prev => (prev === suits ? exps : suits))}
          >
            {group === suits ? 'suit' : 'pack'} {/* TODO: Swap out for Icon */}
          </ViewSwitch>
          <ViewSwitch onClick={() => console.log('Set View')}>
            view {/* TODO: Add Filter Options & Swap for Icon */}
          </ViewSwitch>
        </ViewBar>
        <VillagersCards
          cardSets={group}
          filter={filter.trim()}
          editMode={true}
        />
      </Wrapper>
    </>
  )
}

//TODO: Fix Scrolling with Toolbar hidden on iOS
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 0.2rem 0 0.2rem;
`

const ViewBar = styled.div`
  position: sticky;
  top: 3.25rem;
  width: 100%;
  max-width: 78rem;
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: flex-end;
  z-index: 4;
  gap: 1.5%;
  padding: 1rem 0.2rem 0 0.2rem;
`

const SearchBar = styled.input`
  width: 52%;
  max-width: 22rem;
  padding: 0.5rem 1rem;
  color: ${p => p.theme.text};
  background-color: ${p => p.theme.backgroundVariant};
  border: 0.1rem solid ${p => p.theme.textSecondary};
  border-radius: 1.5rem;
  &:focus {
    outline: none;
    border-color: ${p => p.theme.primary};
  }
`

const ViewSwitch = styled.div`
  width: 15.5%;
  max-width: 4rem;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${p => p.theme.text};
  background-color: ${p => p.theme.backgroundVariant};
  border: 0.1rem solid ${p => p.theme.textSecondary};
  user-select: none;
  cursor: pointer;
  &:active {
    outline: none;
    border-color: ${p => p.theme.primary};
  }
  border-radius: 1.5rem;
  padding: 0.4rem;
`
