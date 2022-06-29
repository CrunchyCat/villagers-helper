import * as React from 'react'
import { CardModal } from '../CardModal'
import { cards, CardSet, Villager } from 'data/card/cards'
import { VillagersSet } from './VillagersSet'

interface Props {
  cardSets: CardSet[]
  filter: string
  compact: boolean
  editMode: boolean
}

export const VillagersCards = ({
  cardSets,
  filter,
  compact,
  editMode
}: Props) => {
  const [viewCard, setViewCard] = React.useState(Villager.Unknown)

  return (
    <>
      <CardModal
        cardID={viewCard}
        clickClose={() => setViewCard(Villager.Unknown)}
      />
      {Object.entries(cardSets) // For Each Card Set
        .filter(x => !x[1]?.hide) // Filter out Hidden Sets
        .filter(x =>
          x[1].cards.some(x => cards[x].name.toLowerCase().indexOf(filter) > -1)
        ) // Filter out Sets with no matching cards
        .map(([setID, set]) => (
          <VillagersSet
            setID={setID}
            set={set}
            filter={filter}
            compact={compact}
            editMode={editMode}
            setViewCard={setViewCard}
            key={setID}
          />
        ))}
    </>
  )
}
