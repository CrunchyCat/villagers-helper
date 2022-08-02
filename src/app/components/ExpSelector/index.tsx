import * as React from 'react'
import styled from 'styled-components/macro'
import { FormLabel } from 'app/components/FormLabel'
import { ExpCheckbox } from 'app/components/ExpCheckbox'
import { useDispatch, useSelector } from 'react-redux'
import { getSelectedExps } from 'data/user/slice/selectors'
import { useDataSlice } from 'data/user/slice'
import { saveSelectedExps } from 'data/user/user-data'
import { useTranslation } from 'react-i18next'
import { messages } from './messages'
import { Group, groups } from 'data/card/cards'

export const ExpSelector = () => {
  const { t } = useTranslation()
  const exps = groups[Group.Exp].sets
  const selectedExps = useSelector(getSelectedExps)
  const { actions } = useDataSlice()
  const dispatch = useDispatch()

  const handleExpansionChange = id => {
    const newExps = selectedExps.includes(id)
      ? selectedExps.filter(i => i !== id)
      : selectedExps.concat(id)
    saveSelectedExps(newExps)
    dispatch(actions.setSelectedExpansions(newExps))
  }

  return (
    <Wrapper>
      <FormLabel>{t(...messages.selectLanguage())}</FormLabel>
      <Expansions>
        {exps
          .filter((_, id) => id !== 0) // Remove None Expansion
          .map((set, id) => (
            <ExpCheckbox
              id={'' + (id + 1)}
              img={set.img}
              label={set.name}
              onChange={() => handleExpansionChange(id + 1)}
              isSelected={selectedExps.includes(id + 1)}
              key={id}
            />
          ))}
      </Expansions>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`

const Expansions = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr 1fr;
  row-gap: 0.5rem;
  column-gap: 2rem;
`
