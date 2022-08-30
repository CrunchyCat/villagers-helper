import styled from 'styled-components/macro'

interface Props {
  click: () => void
}

export const DrawerToggleButton = ({ click }: Props) => (
  <DrawerButton onClick={click}>
    <IconLine />
    <IconLine />
    <IconLine />
  </DrawerButton>
)

const DrawerButton = styled.button`
  height: 1.4rem;
  width: 1.875rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  box-sizing: border-box;
  &:focus {
    outline: none;
  }
`

const IconLine = styled.div`
  width: 100%;
  height: 12%;
  background-color: ${p => p.theme.primary};
`
