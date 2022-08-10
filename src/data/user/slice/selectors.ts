import { createSelector } from '@reduxjs/toolkit'
import { RootState } from 'types'
import { initialState } from '.'

export const selectConfigs = createSelector(
  [(state: RootState) => state.userData || initialState],
  userData => userData.configs
)

export const selectSelectedExps = createSelector(
  [(state: RootState) => state.userData || initialState],
  userData => userData.selectedExps
)