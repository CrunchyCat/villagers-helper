import * as React from 'react'
import { VillagersSet } from './VillagersSet'
import { cards, Group, groups, View } from 'data/card/cards'

interface Props {
  group: Group
  filter: string
  view: View
  editMode: boolean
}

export const VillagersCards = ({ group, filter, view, editMode }: Props) => (
  <>
    {Object.entries(groups[group].sets) // For Each Card Set
      .filter(x => !x[1]?.hide) // Filter out Hidden Sets
      .filter(x =>
        x[1].cards.some(x => cards[x].name.toLowerCase().indexOf(filter) > -1)
      ) // Filter out Sets with no matching cards
      // .filter(x => x[1].cards.some(x => cards[x].builders))
      .map(([setID, set]) => (
        <VillagersSet
          setID={setID}
          set={set}
          filter={filter}
          view={view}
          editMode={editMode}
          key={setID}
        />
      ))}
  </>
)
