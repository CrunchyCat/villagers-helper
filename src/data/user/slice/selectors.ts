import { createSelector } from '@reduxjs/toolkit'
import { RootState } from 'types'
import { initialState } from '.'

export const getDisabledCards = createSelector(
  [(state: RootState) => state.userData || initialState],
  userData => userData.disabledCards
)

export const getSelectedExps = createSelector(
  [(state: RootState) => state.userData || initialState],
  userData => userData.selectedExps
)