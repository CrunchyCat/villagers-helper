import * as React from 'react'
import styled from 'styled-components/macro'
import { Helmet } from 'react-helmet-async'
import { NavBar } from 'app/components/NavBar'
import { VillagersCards } from 'app/components/VillagersCards'
import { suits, exps } from 'data/card/cards'

export const CardsPage = () => {
  const [group, setGroup] = React.useState(suits)

  return (
    <>
      <Helmet>
        <title>cards</title>
        <meta name="description" content="cards" />
      </Helmet>
      <NavBar />
      <Wrapper>
        <Title>cards</Title>
        <GroupBy
          onClick={() => setGroup(prev => (prev === suits ? exps : suits))}
        >
          group by
        </GroupBy>
        {/* TODO: Put Filters and Search at Top */}
        <VillagersCards cardSets={group} editMode={false} />
      </Wrapper>
    </>
  )
}

//TODO: Fix Scrolling with Toolbar hidden on iOS
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 0.2rem 0 0.2rem;
`

const Title = styled.div`
  font-size: 3.375rem;
  font-weight: bold;
  color: ${p => p.theme.text};
`

const GroupBy = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${p => p.theme.text};
  user-select: none;
  cursor: pointer;
`
