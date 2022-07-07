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
  const [showModal, setShowModal] = React.useState(false)

  return (
    <>
      <CardModal
        show={showModal}
        cardID={viewCard}
        clickClose={() => {
          setShowModal(false)
          document.body.style.overflow = 'unset'
        }}
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
            setViewCard={cardID => {
              setViewCard(cardID)
              setShowModal(true)
              document.body.style.overflow = 'hidden'
            }}
            key={setID}
          />
        ))}
    </>
  )
}
