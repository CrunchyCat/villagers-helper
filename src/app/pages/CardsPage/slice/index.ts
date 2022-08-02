import { PayloadAction } from '@reduxjs/toolkit'
import { createSlice } from 'utils/@reduxjs/toolkit'
import { useInjectReducer } from 'utils/redux-injectors'
import { CardsFilterState } from './types'
import { Group, View } from 'data/card/cards'

export const initialState: CardsFilterState = {
  view: View.Normal,
  hideViewbar: false,
  group: Group.Suit,
  query: '',
  hasFood: false,
  hasBuilders: false
}

const slice = createSlice({
  name: 'cardsFilters',
  initialState,
  reducers: {
    setView(state, action: PayloadAction<View>) {
      state.view = action.payload
    },
    setViewbarHidden(state, action: PayloadAction<boolean>) {
      state.hideViewbar = action.payload
    },
    setGroup(state, action: PayloadAction<Group>) {
      state.group = action.payload
    },
    setQuery(state, action: PayloadAction<string>) {
      state.query = action.payload
    },
    setHasFood(state, action: PayloadAction<boolean>) {
      state.hasFood = action.payload
    },
    setHasBuilders(state, action: PayloadAction<boolean>) {
      state.hasBuilders = action.payload
    }
  }
})

export const { actions: cardsFiltersActions, reducer } = slice

export const useCardsFiltersSlice = () => {
  useInjectReducer({ key: slice.name, reducer: slice.reducer })
  return { actions: slice.actions }
}
