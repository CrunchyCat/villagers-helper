import { ThemeKeyType } from './slice/types'

export const isSystemDark = window.matchMedia('(prefers-color-scheme: dark)')?.matches

export const saveTheme = (theme: ThemeKeyType) => window.localStorage?.setItem('selectedTheme', theme)

export const getThemeFromStorage = (): ThemeKeyType | null =>
  (window.localStorage?.getItem('selectedTheme') as ThemeKeyType) || null
