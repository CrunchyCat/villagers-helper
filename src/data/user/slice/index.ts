import { PayloadAction } from '@reduxjs/toolkit'
import { createSlice } from 'utils/@reduxjs/toolkit'
import { useInjectReducer } from 'utils/redux-injectors'
import { getConfigsFromStorage, getSelectedExpsFromStorage } from '../user-data'
import { Config, UserDataState } from './types'
import { Exp, Villager } from 'data/card/cards'

const defaultConfigs: Config[] = [
  {
    name: 'Standard Game',
    color: '#ff0000',
    cards: [Villager.Founders] // TODO: make configurations
  }
]

export const initialState: UserDataState = {
  configs: getConfigsFromStorage() || defaultConfigs,
  selectedExps: getSelectedExpsFromStorage() || [Exp.Base, Exp.FourPlayer, Exp.Promo1, Exp.DiceTower, Exp.Profiteers, Exp.Saints, Exp.Scoundrels],
}

const slice = createSlice({
  name: 'userData',
  initialState,
  reducers: {
    setDisabledCards(state, action: PayloadAction<UserDataState['configs']>) {
      state.configs = action.payload
    },
    setSelectedExpansions(state, action: PayloadAction<UserDataState['selectedExps']>) {
      state.selectedExps = action.payload
    }
  }
})

export const { actions: userDataActions, reducer } = slice

export const useDataSlice = () => {
  useInjectReducer({ key: slice.name, reducer: slice.reducer })
  return { actions: slice.actions }
}
