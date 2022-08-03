import { PayloadAction } from '@reduxjs/toolkit'
import { createSlice } from 'utils/@reduxjs/toolkit'
import { useInjectReducer } from 'utils/redux-injectors'
import { getDisabledCardsFromStorage, getSelectedExpsFromStorage } from '../user-data'
import { UserDataState } from './types'
import { Villager, Exp } from 'data/card/cards'

export const initialState: UserDataState = {
  //TODO: Add configurations list here--- configurations: [ { name, color, icon, cards } ]
  disabledCards: getDisabledCardsFromStorage() || [Villager.Unknown], //TODO: Put into configurations list
  selectedExps: getSelectedExpsFromStorage() || [Exp.Base, Exp.FourPlayer, Exp.Promo1, Exp.DiceTower, Exp.Profiteers, Exp.Saints, Exp.Scoundrels],
}

const slice = createSlice({
  name: 'userData',
  initialState,
  reducers: {
    setDisabledCards(state, action: PayloadAction<Villager[]>) {
      state.disabledCards = action.payload
    },
    setSelectedExpansions(state, action: PayloadAction<number[]>) {
      state.selectedExps = action.payload
    }
  }
})

export const { actions: userDataActions, reducer } = slice

export const useDataSlice = () => {
  useInjectReducer({ key: slice.name, reducer: slice.reducer })
  return { actions: slice.actions }
}
