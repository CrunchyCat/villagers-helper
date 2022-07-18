import * as React from 'react'
import styled from 'styled-components/macro'
import { mediaMax, mediaMin } from 'styles/media'
import { Backdrop } from 'app/components/Backdrop'
import { IconClose } from 'app/Icons/IconClose'
import { IconCoin } from 'app/components/IconCoin'
import { Villager, cards, Group, groups, Gold } from 'data/card/cards'
import icon_lock from 'data/assets/icons/icon_lock.png'
import icon_food from 'data/assets/icons/icon_food.png'
import icon_builder from 'data/assets/icons/icon_builder.png'
import { IconUse } from 'app/components/IconUse'

interface Props {
  show: boolean
  cardID: Villager
  clickClose: () => void
}

export const CardModal = ({ show, cardID, clickClose }: Props) => {
  const card = cards[cardID]
  const suit = groups[Group.Suit].sets[card.suit]
  const exp = groups[Group.Exp].sets[card.exp]

  return (
    <>
      <Modal show={show}>
        <div>
          <ColorStrip color={suit.color}>
            <img src={suit.img} alt={suit.name} />
            {card.discard && (
              <IconUse
                playType="discard"
                color={suit.color}
                width="1.5rem"
                height="2.25rem"
              />
            )}
            {/* TODO: Show 1, 2, and 1/2 children cards */}
          </ColorStrip>
          <TitleBar>
            <h1>{card.name}</h1>
            <span>
              <div onClick={clickClose}>
                <IconClose />
              </div>
            </span>
          </TitleBar>
          {card.lock && (
            <IconTextCenter>
              <img src={icon_lock} alt={`unlocked by: ${card.lock}`} />
              {cards[card.lock].name}
            </IconTextCenter>
          )}
          <IconTextCenter>
            {/* TODO: Move Card Playing to Cards Data */}
            {cardID === Villager.Founders
              ? 'Starting card'
              : `Play ${
                  cardID === Villager.Courier
                    ? "at start of another player's"
                    : 'during'
                } ${card?.draftPlay ? 'Draft' : 'Build'} Phase ${
                  card?.discard ? '& Discard' : 'into Village'
                }`}
          </IconTextCenter>
          <IconTextCenter>{card.use}</IconTextCenter>
          <SetTop>
            {!!card.food && (
              <IconTextSplit>
                <ImgSet>
                  {[...Array(card.food).keys()].map(i => (
                    <img
                      src={icon_food}
                      alt={`${card.food} Food`}
                      key={`F${cardID}${i}`}
                    />
                  ))}
                </ImgSet>
                {card.food} Food
              </IconTextSplit>
            )}
            {!!card.builders && (
              <IconTextSplit>
                <ImgSet>
                  {[...Array(card.builders).keys()].map(i => (
                    <img
                      src={icon_builder}
                      alt={`${card.builders} Builder(s)`}
                      key={`B${cardID}${i}`}
                    />
                  ))}
                </ImgSet>
                <span>{card.builders} Builder(s)</span>
              </IconTextSplit>
            )}
            {card.gold && (
              <IconTextSplit>
                <IconCoin gold={card.gold} width="1.825rem" height="1.825rem" />
                {/* TODO: Fix text reward description, size is small */}
                <span style={{ fontSize: '0.712rem' }}>{`${card.gold.amt} ${
                  Gold[card.gold.type]
                } ${card.gold.condition}`}</span>
              </IconTextSplit>
            )}
          </SetTop>
        </div>
        <SetMid>
          {card.desc}
          <>
            {card.clarification?.map((i, k) => (
              <div key={k}>{i}</div>
            ))}
          </>
        </SetMid>
        <SetBottom>
          <IconTextCenter>
            <img src={suit.img} alt={suit.name} />
            {suit.name}
          </IconTextCenter>
          <IconTextCenter>
            <img src={exp.img} alt={exp.name} />
            {exp.name}
          </IconTextCenter>
        </SetBottom>
      </Modal>
      <Backdrop show={show} click={clickClose} />
      {/*TODO: Remove this and use only one root level backdrop */}
    </>
  )
}

const Modal = styled.div<{ show: boolean }>`
  position: fixed;
  max-width: 50rem;
  max-height: 40rem;
  z-index: 7;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  visibility: ${p => (p.show ? 'visible' : 'hidden')};
  background-color: ${p => p.theme.backgroundVariant};
  overflow: hidden;

  @supports (backdrop-filter: blur(2px)) {
    backdrop-filter: blur(14px);
    background-color: ${p =>
      p.theme.backgroundVariant.replace(
        /rgba?(\(\s*\d+\s*,\s*\d+\s*,\s*\d+)(?:\s*,.+?)?\)/,
        'rgba$1,0.92)'
      )};
  }

  ${mediaMax.small`
    top: 28%;
    width: 96%;
    height: 72%;

    @media only screen and (display-mode: standalone) {
      padding-bottom: 0.75rem;
    }

    border-radius: 1.5rem 1.5rem 0 0;
    transform: ${p => (p.show ? 'translateY(1)' : 'translateY(120%)')};
    transition: visibility 0.2s, transform 0.2s ease-out;
  `}

  ${mediaMin.small`
    top: 10%;
    width: 80%;
    height: 90%;
    border-radius: 1.5rem;
    opacity: ${p => (p.show ? '1' : '0')};
    transform: ${p => (p.show ? 'translateY(0)' : 'translateY(30%)')};
    transition: visibility 0.15s, opacity 0.15s, transform 0.25s ease-out;
  `}
`

const ColorStrip = styled.div<{ color: string }>`
  display: flex;
  justify-content: center;
  padding-top: 2.375rem;
  margin-bottom: 2rem;
  background-color: ${p => p.color};
  img {
    position: absolute;
    align-self: center;
    width: 3.75rem;
  }
  span {
    position absolute;
    top: 1.1875rem;
    right: 15%;
  }
`

const TitleBar = styled.div`
  padding: 0 1.5rem;
  display: flex;
  color: ${p => p.theme.text};
  &::before,
  h1,
  span {
    content: '';
    flex: 1;
  }
  h1 {
    text-align: center;
    font-size: 2.25rem;
    line-height: 2.5rem;
    margin: 0;
    font-weight: bold;
    white-space: nowrap;
  }
  span > div {
    float: right;
    display: flex;
    align-items: center;
    cursor: pointer;
  }
  svg {
    width: 1.5rem;
    height: 1.5rem;
  }
`

const SetTop = styled.div`
  margin: 0 1.5rem 0.7rem 1.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  color: ${p => p.theme.text};
`

//TODO: Add card/art spinning behind text
const SetMid = styled.div`
  flex-grow: 2;
  margin: 0 0.75rem;
  padding: 0.7rem;
  font-size: clamp(0.7rem, 2vh, 1.6rem);
  border-radius: 0.75rem;
  color: ${p => p.theme.text};
  background-color: ${p => p.theme.background};
  @supports (backdrop-filter: blur(2px)) {
    background-color: ${p =>
      p.theme.background.replace(
        /rgba?(\(\s*\d+\s*,\s*\d+\s*,\s*\d+)(?:\s*,.+?)?\)/,
        'rgba$1,0.4)'
      )};
  }
  overflow-y: auto;
`

const SetBottom = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1.5rem;
  margin: 0.7rem 0;
  color: ${p => p.theme.text};
`

const IconText = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 0.9rem;
  color: ${p => p.theme.text};
  img {
    max-width: 1.825rem;
    max-height: 1.825rem;
    width: auto;
    height: auto;
  }
`

const IconTextSplit = styled(IconText)`
  min-width: 12rem;
  max-width: 26rem;
  justify-content: space-between;
`

const IconTextCenter = styled(IconText)`
  justify-content: center;
  gap: 0.5rem;
`

const ImgSet = styled.div`
  display: flex;
  gap: 0.5rem;
`
