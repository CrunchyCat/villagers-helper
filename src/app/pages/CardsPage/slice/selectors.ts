import { createSelector } from '@reduxjs/toolkit'
import { RootState } from 'types'
import { initialState } from '.'

export const selectCardsFilters = createSelector(
  [(state: RootState) => state.cardsFilters || initialState],
  cardsFilters => cardsFilters
)
