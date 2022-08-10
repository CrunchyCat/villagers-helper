import * as React from 'react'
import styled from 'styled-components/macro'
import { IconClose } from 'app/Icons/IconClose'

const clickHide = () => {
  const thisModal = document.getElementById('updateModal')
  thisModal!.style.visibility = 'hidden'
  thisModal!.style.opacity = '0'
  thisModal!.style.transform = 'translateY(30%)'
}

export const UpdateModal = () => {
  const [updateText, setUpdateText] = React.useState('restart to apply update')

  React.useEffect(() => {
    fetch(
      'https://raw.githubusercontent.com/CrunchyCat/villagers-helper/master/changelog.txt'
    )
      .then(resp => resp.text())
      .then(data => setUpdateText(data))
  })

  return (
    <ModalScreen id="updateModal">
      <Tint onClick={clickHide} />
      <ModalWindow>
        <TitleBar>
          <h1>update available</h1>
          <span>
            <div onClick={clickHide}>
              <IconClose />
            </div>
          </span>
        </TitleBar>
        <TextCenter>restart the app to update to the latest version</TextCenter>
        <SepLine />
        <LinkSet>
          <LinkCenter href="https://www.calebhoff.com">
            {/* <img src={suit.img} alt={suit.name} /> */}
            calebhoff.com
          </LinkCenter>
          <LinkCenter href="https://github.com/CrunchyCat/villagers-helper">
            {/* <img src={exp.img} alt={exp.name} /> */}
            Github
          </LinkCenter>
        </LinkSet>
        <SetDesc>{updateText}</SetDesc>
        <LinkSet>
          <BtnCenter onClick={clickHide}>
            {/* <img src={exp.img} alt={exp.name} /> */}
            continue
          </BtnCenter>
        </LinkSet>
      </ModalWindow>
    </ModalScreen>
  )
}

const ModalScreen = styled.div`
  visibility: hidden;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 8;
  opacity: 1;
  transform: translateY(0);
  transition: visibility 0.15s, opacity 0.15s, transform 0.25s ease-out;
`

const Tint = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 6;
  background-color: rgba(0, 0, 0, 0.3);
  opacity: 1;
  transform: translateY(0);
  transition: visibility 0.15s, opacity 0.15s, transform 0.25s ease-out;
`

const ModalWindow = styled.div`
  position: fixed;
  top: 0;
  width: 94%;
  max-width: 50rem;
  height: 100%;
  max-height: 30rem;
  margin: clamp(0px, calc(50vh - 15rem), 100vh)
    clamp(calc(50vw - 25rem), 3vw, 100vw);
  z-index: 9;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  color: ${p => p.theme.text};
  background-color: ${p => p.theme.backgroundVariant};
  border: 2px solid ${p => p.theme.background};
  border-radius: 1.5rem;
  overflow: hidden;

  @supports (backdrop-filter: blur(2px)) {
    backdrop-filter: blur(14px);
    background-color: ${p =>
      p.theme.backgroundVariant.replace(
        /rgba?(\(\s*\d+\s*,\s*\d+\s*,\s*\d+)(?:\s*,.+?)?\)/,
        'rgba$1,0.9)'
      )};
  }
`

const TitleBar = styled.div`
  margin: 1rem 1.5rem 0.5rem;
  display: flex;
  &::before,
  h1,
  span {
    content: '';
    flex: 1;
  }
  h1 {
    text-align: center;
    font-size: clamp(1.25rem, 7.3vw, 2.5rem);
    line-height: clamp(1.75rem, min(10.3vw, 8.5vh), 2.5rem);
    margin: 0;
    font-weight: bold;
    white-space: nowrap;
  }
  span > div {
    float: right;
    cursor: pointer;
    svg {
      width: 1.5rem;
      height: 1.5rem;
    }
  }
`

const SepLine = styled.hr`
  height: 1px;
  width: calc(100% - 1.5rem);
  border: 0 none;
  background-color: ${p => p.theme.text};
`

const SetDesc = styled.div`
  flex-grow: 1;
  margin: 0 0.75rem;
  padding: 0.7rem;
  font-size: clamp(0.8rem, 2vmin, 1.25rem);
  border-radius: 0.75rem;
  background-color: ${p =>
    p.theme.background.replace(
      /rgba?(\(\s*\d+\s*,\s*\d+\s*,\s*\d+)(?:\s*,.+?)?\)/,
      'rgba$1,0.4)'
    )};
  overflow-y: auto;
`

const LinkSet = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1.5rem;
  margin: 1rem 0;
`

const TextCenter = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.9rem;

  img {
    max-width: 1.825rem;
    max-height: 1.825rem;
    width: auto;
    height: auto;
  }
`

const LinkCenter = styled.a`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.9rem;
  color: ${p => p.theme.text};
  cursor: pointer;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }

  img {
    max-width: 1.825rem;
    max-height: 1.825rem;
    width: auto;
    height: auto;
  }
`

const BtnCenter = styled(TextCenter)`
  width: 20%;
  height: 2rem;
  margin: 0 auto;
  color: ${p => p.theme.text};
  background-color: ${p =>
    p.theme.backgroundVariant.replace(
      /rgba?(\(\s*\d+\s*,\s*\d+\s*,\s*\d+)(?:\s*,.+?)?\)/,
      'rgba$1,0.85)'
    )};
  border: 1px solid ${p => p.theme.textSecondary};
  cursor: pointer;
  border-radius: 2rem;

  &:hover {
    background-color: ${p => p.theme.backgroundVariant};
    border: 1px solid ${p => p.theme.text};
  }
`
