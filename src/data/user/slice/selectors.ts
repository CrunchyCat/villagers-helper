import { createSelector } from '@reduxjs/toolkit'
import { RootState } from 'types'
import { initialState } from '.'

export const selectDisabledCards = createSelector(
  [(state: RootState) => state.userData || initialState],
  userData => userData.disabledCards
)

export const selectSelectedExps = createSelector(
  [(state: RootState) => state.userData || initialState],
  userData => userData.selectedExps
)