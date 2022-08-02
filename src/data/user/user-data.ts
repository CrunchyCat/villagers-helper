import { UserDataState } from './slice/types'

export const saveDisabledCards = (data: UserDataState['disabledCards']) => {
  window.localStorage?.setItem('disabledCards', JSON.stringify(data))
}

export const saveSelectedExps = (data: UserDataState['selectedExps']) => {
  window.localStorage?.setItem('selectedExps', JSON.stringify(data))
}


export const getDisabledCardsFromStorage = (): UserDataState['disabledCards'] | null => {
  return window.localStorage?.getItem('disabledCards') ? JSON.parse(window.localStorage.getItem('disabledCards') || '[]') : null
}

export const getSelectedExpsFromStorage = (): UserDataState['selectedExps'] | null => {
  return window.localStorage?.getItem('selectedExps') ? JSON.parse(window.localStorage.getItem('selectedExps') || '[]') : null
}