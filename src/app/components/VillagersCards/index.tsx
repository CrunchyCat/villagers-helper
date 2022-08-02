import * as React from 'react'
import { VillagersSet } from './VillagersSet'
import { cards, Group, groups, View } from 'data/card/cards'
import { useSelector } from 'react-redux'
import { getSelectedExps } from 'data/user/slice/selectors'
import { getCardsFilters } from 'app/pages/CardsPage/slice/selectors'

interface Props {
  group: Group
  query: string
  view: View
  editMode: boolean
}

export const VillagersCards = React.memo(
  ({ group, query, view, editMode }: Props) => {
    const selectedExps = useSelector(getSelectedExps)
    const filters = useSelector(getCardsFilters)

    return (
      <>
        {Object.entries(groups[group].sets) // For each card set
          .filter(x => !x[1]?.hide) // Filter out hidden sets
          .filter(x =>
            x[1].cards.some(x => selectedExps.includes(cards[x].exp))
          ) // Filter to only show selected expansions
          .filter(x => !filters.hasFood || x[1].cards.some(x => cards[x].food)) // Filter to Food
          .filter(
            x => !filters.hasBuilders || x[1].cards.some(x => cards[x].builders)
          ) // Filter to Builders
          .filter(
            x =>
              !filters.hasBuilders ||
              !filters.hasFood ||
              x[1].cards.some(x => cards[x].builders && cards[x].food)
          ) // Filter to Food+Builders
          .filter(x =>
            x[1].cards.some(
              x => cards[x].name.toLowerCase().indexOf(query) > -1
            )
          ) // Filter out by search filter string
          .map(([setID, set]) => (
            <VillagersSet
              setID={setID}
              set={set}
              query={query}
              view={view}
              editMode={editMode}
              key={setID}
            />
          ))}
      </>
    )
  }
)
