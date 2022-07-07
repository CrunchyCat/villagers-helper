import * as React from 'react'
import styled from 'styled-components/macro'
import { Helmet } from 'react-helmet-async'
import { NavBar } from 'app/components/NavBar'
import { VillagersCards } from 'app/components/VillagersCards'
import { suits, exps } from 'data/card/cards'

export const CardsPage = () => {
  const [isViewBarHidden, setViewBarHidden] = React.useState(false)
  const [filter, setFilter] = React.useState('')
  const [group, setGroup] = React.useState(suits)
  const [isCompact, setCompact] = React.useState(false)

  return (
    <>
      <Helmet>
        <title>cards</title>
        <meta name="description" content="cards" />
      </Helmet>
      <NavBar title="cards" btnSearch={() => setViewBarHidden(prev => !prev)} />
      <Wrapper>
        <ViewBar isHidden={isViewBarHidden}>
          <ViewSwitch onClick={() => console.log('Set Filters')}>
            filt {/* TODO: Add Filter Options & Swap for Icon */}
          </ViewSwitch>
          <SearchBar onChange={e => setFilter(e.target.value.toLowerCase())} />
          <ViewSwitch
            onClick={() => setGroup(prev => (prev === suits ? exps : suits))}
          >
            {group === suits ? 'suit' : 'pack'} {/* TODO: Swap out for Icon */}
          </ViewSwitch>
          <ViewSwitch onClick={() => setCompact(prev => !prev)}>
            view {/* TODO: Add Filter Options & Swap for Icon */}
          </ViewSwitch>
        </ViewBar>
        <VillagersCards
          cardSets={group}
          filter={filter.trim()}
          compact={isCompact}
          editMode={false}
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
  padding-bottom: 0.5rem;
`

const ViewBar = styled.div<{ isHidden: boolean }>`
  position: sticky;
  top: 3.25rem;
  width: 100%;
  height: ${p => (p.isHidden ? '0' : '3.5rem')};
  max-width: 78rem;
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: flex-end;
  z-index: 4;
  gap: 1.5%;
  padding: 1rem 0.2rem 0 0.2rem;
  transform: ${p => (p.isHidden ? 'translateY(-7rem)' : 'translateX(0)')};
  opacity: ${p => (p.isHidden ? '0' : '1')};
  transition: height 0.4s, transform 0.5s, opacity 0.8s ease-out;
`

//TODO: Implement search icon using a component (making it clean to add hover/focus styling)
const SearchBar = styled.input`
  width: 52%;
  max-width: 22rem;
  padding: 0.5rem 1rem 0.5rem 2.5rem;
  color: ${p => p.theme.text};
  background-color: ${p => p.theme.backgroundVariant};
  border: 0.1rem solid ${p => p.theme.textSecondary};
  border-radius: 1.5rem;
  background: transparent
    url("data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' fill='${p =>
      p.theme
        .textSecondary}' width='20px' height='20px' viewBox='0 0 487.95 487.95'><path d='M481.8,453l-140-140.1c27.6-33.1,44.2-75.4,44.2-121.6C386,85.9,299.5,0.2,193.1,0.2S0,86,0,191.4s86.5,191.1,192.9,191.1
        c45.2,0,86.8-15.5,119.8-41.4l140.5,140.5c8.2,8.2,20.4,8.2,28.6,0C490,473.4,490,461.2,481.8,453z M41,191.4
        c0-82.8,68.2-150.1,151.9-150.1s151.9,67.3,151.9,150.1s-68.2,150.1-151.9,150.1S41,274.1,41,191.4z'></path></svg>")
    no-repeat 0.75rem center;
  &:focus {
    outline: none;
    border-color: ${p => p.theme.primary};
  }
  @supports (backdrop-filter: blur(2px)) {
    backdrop-filter: blur(2px);
    background-color: ${p =>
      p.theme.backgroundVariant.replace(
        /rgba?(\(\s*\d+\s*,\s*\d+\s*,\s*\d+)(?:\s*,.+?)?\)/,
        'rgba$1,0.85)'
      )};
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

  @supports (backdrop-filter: blur(2px)) {
    backdrop-filter: blur(2px);
    background-color: ${p =>
      p.theme.backgroundVariant.replace(
        /rgba?(\(\s*\d+\s*,\s*\d+\s*,\s*\d+)(?:\s*,.+?)?\)/,
        'rgba$1,0.85)'
      )};
  }
`
