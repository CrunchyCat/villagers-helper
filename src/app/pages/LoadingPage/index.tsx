import styled from 'styled-components/macro'
import { LoadingIndicator } from 'app/components/LoadingIndicator'

const LoadingWrapper = styled.main`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const LoadingPage = () => (
  <LoadingWrapper>
    <LoadingIndicator />
  </LoadingWrapper>
)
