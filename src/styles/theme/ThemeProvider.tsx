import { Children } from 'react'
import { ThemeProvider as OriginalThemeProvider } from 'styled-components/macro'
import { useSelector } from 'react-redux'
import { useThemeSlice } from './slice'
import { selectTheme } from './slice/selectors'

export const ThemeProvider = (props: { children: React.ReactElement }) => {
  useThemeSlice()

  const theme = useSelector(selectTheme)
  return <OriginalThemeProvider theme={theme}>{Children.only(props.children)}</OriginalThemeProvider>
}
