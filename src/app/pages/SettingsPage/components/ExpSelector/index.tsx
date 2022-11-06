import styled from 'styled-components/macro'
import { FormLabel } from 'app/components/FormLabel'
import { Checkbox } from 'app/components/Checkbox'
import { useDispatch, useSelector } from 'react-redux'
import { selectSelectedExps } from 'data/user/slice/selectors'
import { useDataSlice } from 'data/user/slice'
import { saveSelectedExps } from 'data/user/user-data'
import { useTranslation } from 'react-i18next'
import { messages } from './messages'
import { Group, groups } from 'data/card/cards'

export const ExpSelector = () => {
  const { t } = useTranslation()
  const selectedExps = useSelector(selectSelectedExps)
  const { actions } = useDataSlice()
  const dispatch = useDispatch()

  const handleSelectedExpChange = id => {
    const newExps = selectedExps.includes(id) ? selectedExps.filter(i => i !== id) : selectedExps.concat(id)
    saveSelectedExps(newExps)
    dispatch(actions.setSelectedExpansions(newExps))
  }

  return (
    <Wrapper aria-label="Expansion Selector">
      <FormLabel>{t(...messages.selectLanguage())}</FormLabel>
      <Expansions>
        {groups[Group.Exp].sets
          .filter((_, id) => id !== 0) // Remove None Expansion
          .map((set, id) => (
            <Checkbox
              id={'' + (id + 1)}
              img={set.img}
              label={set.name}
              onChange={() => handleSelectedExpChange(id + 1)}
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
