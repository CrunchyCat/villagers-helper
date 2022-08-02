import { Group, View } from 'data/card/cards'

export interface CardsFilterState {
  // View/Sort Parameters
  view: View
  hideViewbar: boolean
  group: Group

  // Filter Parameters
  query: string
  hasFood: boolean
  hasBuilders: boolean
}
