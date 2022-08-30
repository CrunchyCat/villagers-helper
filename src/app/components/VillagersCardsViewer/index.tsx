import styled from 'styled-components/macro'
import { ViewBar } from 'app/components/ViewBar'
import { VillagersSet } from './VillagersSet'
import { groups } from 'data/card/cards'
import { useSelector } from 'react-redux'
import { selectCardsFilters } from 'app/pages/CardsPage/slice/selectors'

export const VillagersCardsViewer = () => {
  const filters = useSelector(selectCardsFilters)

  return (
    <Wrapper>
      <ViewBar />
      {Object.entries(groups[filters.group].sets)
        .filter(x => !x[1]?.hide) // Ignore hidden sets
        .map(([setID, set]) => (
          <VillagersSet
            setID={setID}
            set={set}
            query={filters.query.trim()}
            view={filters.view}
            editMode={false}
            key={setID}
          />
        ))}
    </Wrapper>
  )
}

const Wrapper = styled.main`
  max-width: 78rem;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  padding: 0 0.2rem 0.5rem 0.2rem;
`
