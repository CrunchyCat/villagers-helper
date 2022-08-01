import * as React from 'react'
import styled from 'styled-components/macro'
import { FormLabel } from 'app/components/FormLabel'
import { Radio } from 'app/components/Radio'
import { useDispatch, useSelector } from 'react-redux'
import { themeActions } from 'styles/theme/slice'
import { ThemeKeyType } from 'styles/theme/slice/types'
import { selectThemeKey } from 'styles/theme/slice/selectors'
import { saveTheme } from 'styles/theme/utils'
import { useTranslation } from 'react-i18next'
import { messages } from './messages'

export const ThemeSwitch = () => {
  const { t } = useTranslation()
  const theme = useSelector(selectThemeKey)
  const dispatch = useDispatch()

  const handleThemeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value as ThemeKeyType
    saveTheme(value)
    dispatch(themeActions.changeTheme(value))
  }

  return (
    <Wrapper>
      <FormLabel>{t(...messages.selectTheme())}</FormLabel>
      <Themes>
        <Radio
          id="system"
          label="System theme"
          name="theme"
          onChange={handleThemeChange}
          value="system"
          isSelected={theme === 'system'}
        />
        <Radio
          id="light"
          label="Light"
          name="theme"
          onChange={handleThemeChange}
          value="light"
          isSelected={theme === 'light'}
        />
        <Radio
          id="dark"
          label="Dark"
          name="theme"
          onChange={handleThemeChange}
          value="dark"
          isSelected={theme === 'dark'}
        />
      </Themes>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`

const Themes = styled.div`
  display: flex;

  div {
    margin-right: 1.5rem;
  }
`
