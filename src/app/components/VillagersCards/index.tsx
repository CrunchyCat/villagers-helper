import * as React from 'react'
import { VillagersSet } from './VillagersSet'
import { cards, Group, groups, View } from 'data/card/cards'
import { useSelector } from 'react-redux'
import { selectSelectedExps } from 'data/user/slice/selectors'
import { selectCardsFilters } from 'app/pages/CardsPage/slice/selectors'

interface Props {
  group: Group
  query: string
  view: View
  editMode: boolean
}

export const VillagersCards = React.memo(
  ({ group, query, view, editMode }: Props) => {
    const selectedExps = useSelector(selectSelectedExps)
    const filters = useSelector(selectCardsFilters)

    //prettier-ignore
    return (
      <>
        {Object.entries(groups[group].sets) // For each card set, apply filters to hide empty sets
          .filter(x => !x[1]?.hide) // Hidden sets
          .filter(x => x[1].cards.some(x => selectedExps.includes(cards[x].exp))) // Unselected expansions
          .filter(x => !filters.hasFood || x[1].cards.some(x => cards[x].food)) // without food (if on)
          .filter(x => !filters.hasBuilders || x[1].cards.some(x => cards[x].builders)) // without builder (if on)
          .filter(x => !filters.hasBuilders || !filters.hasFood || x[1].cards.some(x => cards[x].builders && cards[x].food)) // without both (if on)
          .filter(x => x[1].cards.some(x => cards[x].name.toLowerCase().indexOf(query) > -1)) // not in query filter
          .map(([setID, set]) => 
            <VillagersSet
              setID={setID}
              set={set}
              query={query}
              view={view}
              editMode={editMode}
              key={setID}
            />
          )}
      </>
    )
  }
)
