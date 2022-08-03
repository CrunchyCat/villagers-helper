import * as React from 'react'
import styled from 'styled-components/macro'
import { useTranslation } from 'react-i18next'
import { messages } from './messages'
import { FormLabel } from 'app/components/FormLabel'
import { Radio } from 'app/components/Radio'

export const LanguageSwitch = () => {
  const { t, i18n } = useTranslation()
  const handleLanguageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    i18n.changeLanguage(event.target.value)
  }

  return (
    <Wrapper>
      <FormLabel>{t(...messages.selectLanguage())}</FormLabel>
      <Languages>
        <Radio
          id="en"
          label="English"
          name="language"
          onChange={handleLanguageChange}
          value="en"
          isSelected={i18n.language.startsWith('en')}
        />
        <Radio
          id="es"
          label="Español"
          name="language"
          onChange={handleLanguageChange}
          value="es"
          isSelected={i18n.language.startsWith('es')}
        />
      </Languages>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`

const Languages = styled.div`
  display: flex;

  div {
    margin-right: 1.5rem;
  }
`
