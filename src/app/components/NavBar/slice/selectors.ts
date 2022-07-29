import { createSelector } from '@reduxjs/toolkit'
import { RootState } from 'types'
import { initialState } from '.'

const selectSlice = (state: RootState) => state.overlay || initialState

export const setOverlay = createSelector([selectSlice], state => state)
