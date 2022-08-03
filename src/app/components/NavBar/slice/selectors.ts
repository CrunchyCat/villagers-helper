import { createSelector } from '@reduxjs/toolkit'
import { RootState } from 'types'
import { initialState } from '.'

export const setOverlay = createSelector(
  [(state: RootState) => state.overlay || initialState],
  state => state
)
