import { Villager } from 'data/card/cards'

export interface OverlayState {
  showBackdrop: boolean
  showDrawer: boolean
  showCardModal: boolean
  cardModalCard: Villager
}
