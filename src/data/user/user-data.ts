import { UserDataState } from './slice/types'

export const saveConfigs = (data: UserDataState['configs']) =>
  window.localStorage?.setItem('configs', JSON.stringify(data))

export const saveSelectedExps = (data: UserDataState['selectedExps']) =>
  window.localStorage?.setItem('selectedExps', JSON.stringify(data))

export const getConfigsFromStorage = (): UserDataState['configs'] | null =>
  window.localStorage?.getItem('configs') ? JSON.parse(window.localStorage.getItem('configs') || '[]') : null

export const getSelectedExpsFromStorage = (): UserDataState['selectedExps'] | null =>
  window.localStorage?.getItem('selectedExps') ? JSON.parse(window.localStorage.getItem('selectedExps') || '[]') : null