import { PayloadAction } from '@reduxjs/toolkit'
import { createSlice } from 'utils/@reduxjs/toolkit'
import { useInjectReducer } from 'utils/redux-injectors'
import { OverlayState } from './types'
import { Villager } from 'data/card/cards'

export const initialState: OverlayState = {
  showBackdrop: false,
  showDrawer: false,
  showCardModal: false,
  cardModalCard: Villager.Unknown
}

const slice = createSlice({
  name: 'overlay',
  initialState,
  reducers: {
    toggleBackdrop(state, action: PayloadAction<boolean>) {
      state.showBackdrop = action.payload
    },
    toggleSideDrawer(state, action: PayloadAction<boolean>) {
      state.showBackdrop = action.payload
      state.showDrawer = action.payload
    },
    toggleCardModal(state, action: PayloadAction<boolean>) {
      state.showBackdrop = action.payload
      state.showCardModal = action.payload
    },
    setCardModal(state, action: PayloadAction<Villager>) {
      state.cardModalCard = action.payload
      state.showBackdrop = true
      state.showCardModal = true
    },
    closeAll(state) {
      state.showBackdrop = false
      state.showDrawer = false
      state.showCardModal = false
    }
  }
})

export const { actions: backdropActions } = slice

export const useOverlaySlice = () => {
  useInjectReducer({ key: slice.name, reducer: slice.reducer })
  return { actions: slice.actions }
}
