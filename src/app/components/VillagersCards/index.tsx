import * as React from 'react'
import { VillagersSet } from './VillagersSet'
import { Group, groups, View } from 'data/card/cards'

interface Props {
  group: Group
  query: string
  view: View
  editMode: boolean
}

export const VillagersCards = React.memo(
  ({ group, query, view, editMode }: Props) => (
    <>
      {Object.entries(groups[group].sets)
        .filter(x => !x[1]?.hide) // Ignore hidden sets
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
)
