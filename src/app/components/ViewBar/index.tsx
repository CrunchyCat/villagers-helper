import * as React from 'react'
import styled from 'styled-components/macro'
import { StyleConstants } from 'styles/StyleConstants'
import { mediaMinMedium } from 'styles/media'
import { IconToggleGroup } from 'app/components/IconToggleGroup'
import { IconToggleView } from 'app/components/IconToggleView'
import { useDispatch, useSelector } from 'react-redux'
import { useCardsFiltersSlice } from 'app/pages/CardsPage/slice'
import { selectCardsFilters } from 'app/pages/CardsPage/slice/selectors'
import { IconFilter } from 'app/Icons/IconFilter'
import { GROUPS_LENGTH, groups, VIEWS_LENGTH, views } from 'data/card/cards'

export const ViewBar = () => {
  const filters = useSelector(selectCardsFilters)
  const { actions } = useCardsFiltersSlice()
  const dispatch = useDispatch()

  return (
    <Wrapper isHidden={filters.hideViewbar}>
      <ViewSwitch
        title="filter"
        onClick={() => {
          dispatch(actions.setHasFood(Math.random() < 0.5))
          dispatch(actions.setHasBuilders(Math.random() < 0.5))
        }}
      >
        <IconFilter width="1.5rem" height="1.5rem" />
      </ViewSwitch>
      <SearchBar
        defaultValue={filters.query}
        onChange={e => dispatch(actions.setQuery(e.target.value.toLowerCase()))}
      />
      <ViewSwitch
        onClick={() =>
          dispatch(actions.setGroup((filters.group + 1) % GROUPS_LENGTH))
        }
        title={`group by: ${groups[filters.group].name}`}
      >
        <IconToggleGroup group={filters.group} width="1.5rem" height="1.5rem" />
      </ViewSwitch>
      <ViewSwitch
        onClick={() =>
          dispatch(actions.setView((filters.view + 1) % VIEWS_LENGTH))
        }
        title={`${views[filters.view]} view`}
      >
        <IconToggleView view={filters.view} width="1.5rem" height="1.5rem" />
      </ViewSwitch>
    </Wrapper>
  )
}

const Wrapper = styled.div<{ isHidden: boolean }>`
  position: sticky;
  top: calc(3rem + ${StyleConstants.STATUS_BAR_HEIGHT});
  z-index: 4;
  width: 100%;
  height: ${p => (p.isHidden ? '0' : '3.5rem')};
  padding-top: ${p => (p.isHidden ? '0' : '1rem')};
  padding-right: env(safe-area-inset-right);
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 1.5%;
  opacity: ${p => (p.isHidden ? '0' : '1')};
  transform: ${p => (p.isHidden ? 'translateY(-7rem)' : 'translateX(0)')};
  transition: height 0.4s, padding-top 0.1s, opacity 0.8s,
    transform 0.5s ease-out;

  ${mediaMinMedium} {
    height: 3.5rem;
    padding-top: 1rem;
    opacity: 1;
    transform: translateX(0);
  }
`

//TODO: Implement search icon using a component (making it clean to add hover/focus styling)
const SearchBar = styled.input`
  width: 52%;
  max-width: 22rem;
  height: 100%;
  padding: 0.5rem 1rem 0.5rem 2.5rem;
  font-size: 1rem;
  color: ${p => p.theme.text};
  background-color: ${p => p.theme.backgroundVariant};
  border: 0.1rem solid ${p => p.theme.textSecondary};
  border-radius: 1.5rem;
  background: transparent
    url("data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' fill='${p =>
      p.theme
        .textSecondary}' width='20' height='20' viewBox='0 0 487.95 487.95'><path d='M481.8,453l-140-140.1c27.6-33.1,44.2-75.4,44.2-121.6C386,85.9,299.5,0.2,193.1,0.2S0,86,0,191.4s86.5,191.1,192.9,191.1
        c45.2,0,86.8-15.5,119.8-41.4l140.5,140.5c8.2,8.2,20.4,8.2,28.6,0C490,473.4,490,461.2,481.8,453z M41,191.4
        c0-82.8,68.2-150.1,151.9-150.1s151.9,67.3,151.9,150.1s-68.2,150.1-151.9,150.1S41,274.1,41,191.4z'/></svg>")
    no-repeat 0.75rem center;

  @media only screen and (pointer: fine) {
    &:hover {
      border-color: ${p => p.theme.text};
    }
  }

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
  padding: 0.4rem;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${p => p.theme.text};
  stroke: ${p => p.theme.text};
  background-color: ${p => p.theme.backgroundVariant};
  border: 0.1rem solid ${p => p.theme.textSecondary};
  border-radius: 1.5rem;
  user-select: none;
  cursor: pointer;

  &:active {
    border-color: ${p => p.theme.primary};
  }

  @media only screen and (pointer: fine) {
    &:hover {
      border-color: ${p => p.theme.text};
    }
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
