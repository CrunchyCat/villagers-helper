import * as React from 'react'
import styled from 'styled-components/macro'
import { mediaMin } from 'styles/media'
import { IconClose } from 'app/Icons/IconClose'
import { IconCoin } from 'app/components/IconCoin'
import { Villager, cards, Group, groups, Gold, Suit } from 'data/card/cards'
import { IconUse } from 'app/components/IconUse'
import icon_lock from 'data/assets/icons/icon_lock.png'
import icon_unlock from 'data/assets/icons/icon_unlock.png'
import { IconFood } from 'app/Icons/IconFood'
import icon_builder from 'data/assets/icons/icon_builder.png'

interface Props {
  show: boolean
  cardID: Villager
  clickClose: () => void
  clickChange: (cardID: Villager) => void
}

export const CardModal = ({ show, cardID, clickClose, clickChange }: Props) => {
  const card = cards[cardID]
  const suit = groups[Group.Suit].sets[card.suit]
  const exp = groups[Group.Exp].sets[card.exp]
  const unlocks = cards
    .map((v, i) => ({ v, i }))
    .filter(v => v.v.lock === cardID)

  return (
    <Modal show={show}>
      <div>
        <ColorStrip color={suit.color}>
          {[...Array(card.symbols || 1).keys()].map(i => (
            <img
              src={suit.img}
              alt={suit.name}
              key={i}
              style={{
                transform: `translateX(${i * 110 - (card.symbols ? 55 : 0)}%)`
              }} //TODO: Allow for more than 2 symbols
            />
          ))}
          {card.discard && (
            <IconUse
              playType="discard"
              color={suit.color}
              width="1.5rem"
              height="2.25rem"
            />
          )}
          {!card.above &&
            card.suit !== Suit.Solitary &&
            card.suit !== Suit.Special && (
              <IconUse
                playType="2"
                color={suit.color}
                width="1.5rem"
                height="2.25rem"
              />
            )}
          {card.below && (
            <IconUse
              playType={card.suit === Suit.Special ? '3' : '1'}
              color={
                card.suit === Suit.Special
                  ? groups[Group.Suit].sets[Suit.Unknown].color
                  : suit.color
              }
              width="1.5rem"
              height="2.25rem"
            />
          )}
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
          <ItemsCenter
            onClick={() => card.lock && clickChange(card.lock)}
            title={`${card.name} is unlocked by ${cards[card.lock].name}`}
          >
            <ImgSmall
              src={icon_lock}
              alt={`unlocked by: ${cards[card.lock].name}`}
            />
            <CardLink>{cards[card.lock].name}</CardLink>
          </ItemsCenter>
        )}
        {(card.suit === Suit.Special || cardID === Villager.Founders) && (
          <>
            <ItemsCenter>
              {cardID === Villager.Founders
                ? 'Starting card'
                : `Play ${
                    cardID === Villager.Courier
                      ? "at start of a player's"
                      : 'during'
                  } ${card?.draftPlay ? 'Draft' : 'Build'} Phase ${
                    card?.discard ? '& Discard' : ''
                  }`}
            </ItemsCenter>
            <ItemsCenter>{card.use}</ItemsCenter>
          </>
        )}
        <SetTop>
          <SepLine />
          {!!unlocks.length && (
            <ItemsSplit>
              <ImgSmall
                src={icon_unlock}
                style={{ margin: '0 0.5rem 0 0.2rem' }}
                alt={`unlocks other villagers`}
              />
              <ItemSet>
                {unlocks.map(v => (
                  <CardLink onClick={() => clickChange(v.i)} key={v.i}>
                    {v.v.name}
                  </CardLink>
                ))}
              </ItemSet>
            </ItemsSplit>
          )}
          {!!card.food && (
            <ItemsSplit>
              <IconFoods>
                {[...Array(card.food).keys()].map(i => (
                  <IconFood width="1.825rem" height="1.825rem" key={i} />
                ))}
              </IconFoods>
              {card.food} Food
            </ItemsSplit>
          )}
          {!!card.builders && (
            <ItemsSplit>
              <ItemSet style={{ marginLeft: '0.35rem' }}>
                {[...Array(card.builders).keys()].map(i => (
                  <ImgSmall
                    src={icon_builder}
                    alt={`${card.builders} Builder(s)`}
                    key={i}
                  />
                ))}
              </ItemSet>
              <span>{card.builders} Builder(s)</span>
            </ItemsSplit>
          )}
          {card.gold && (
            <ItemsSplit>
              <IconCoin gold={card.gold} width="1.825rem" height="1.825rem" />
              <span style={{ marginLeft: '0.5rem' }}>
                {`${card.gold.amt} ${Gold[card.gold.type]}
                  ${card.gold.condition}`}
              </span>
            </ItemsSplit>
          )}
        </SetTop>
      </div>
      {(card.desc || card.clarification) && (
        <SetDesc>
          {card.desc}
          {card.clarification?.map((i, k) => (
            <SetClar key={k}>{i}</SetClar>
          ))}
        </SetDesc>
      )}
      <SetBottom>
        <ItemsCenter>
          <ImgSmall src={suit.img} alt={suit.name} />
          {suit.name}
        </ItemsCenter>
        <ItemsCenter>
          <ImgSmall src={exp.img} alt={exp.name} />
          {exp.name}
        </ItemsCenter>
      </SetBottom>
    </Modal>
  )
}

const Modal = styled.div<{ show: boolean }>`
  position: fixed;
  z-index: 7;
  padding-bottom: calc(env(safe-area-inset-bottom) * 0.65);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  visibility: ${p => (p.show ? 'visible' : 'hidden')};
  color: ${p => p.theme.text};
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

  top: 28%;
  width: 96%;
  height: 72%;
  margin: 0 2%;
  border-radius: 1.5rem 1.5rem 0 0;
  transform: ${p => (p.show ? 'translateY(1)' : 'translateY(120%)')};
  transition: visibility 0.2s, transform 0.2s ease-out;

  ${mediaMin.small`
    top: 0;
    width: 80%;
    max-width: 50rem;
    height: 100%;
    max-height: 40rem;
    margin: clamp(0px, calc(50vh - 20rem), 100vh) clamp(calc(50vw - 25rem), 10vw, 100vw);
    border-radius: 1.5rem;
    opacity: ${p => (p.show ? '1' : '0')};
    transform: ${p => (p.show ? 'translateY(0)' : 'translateY(30%)')};
    transition: visibility 0.15s, opacity 0.15s, transform 0.25s ease-out;
  `}
`

const ColorStrip = styled.div<{ color: string }>`
  display: flex;
  justify-content: center;
  padding-top: clamp(1.375rem, 10vh, 2.375rem);
  margin-bottom: clamp(0.25rem, 6vh, 2rem);
  background-color: ${p => p.color};
  img {
    position: absolute;
    align-self: center;
    width: clamp(1.75rem, 13vh, 3.75rem);
  }
  span {
    position absolute;
    top: clamp(0.25rem, 5vh, 1.1875rem);
    right: 15%;
  }
`

const TitleBar = styled.div`
  margin: 0 1.5rem;
  display: flex;
  &::before,
  h1,
  span {
    content: '';
    flex: 1;
  }
  h1 {
    text-align: center;
    font-size: clamp(1.75rem, min(9.25vw, 8.25vh), 2.5rem);
    line-height: clamp(1.75rem, min(10.3vw, 8.5vh), 2.5rem);
    margin: 0;
    font-weight: bold;
    white-space: nowrap;
  }
  span > div {
    float: right;
    display: flex;
    align-items: center;
    cursor: pointer;
    svg {
      width: 1.5rem;
      height: 1.5rem;
    }
  }
`

const SetTop = styled.div`
  margin: 0 1.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
`

const SetDesc = styled.div`
  flex-grow: 1;
  margin: 0.4rem 0.75rem 0;
  padding: 0.7rem;
  font-size: clamp(0.7rem, min(4vw, 3.5vh), 1.5rem);
  border-radius: 0.75rem;
  background-color: ${p =>
    p.theme.background.replace(
      /rgba?(\(\s*\d+\s*,\s*\d+\s*,\s*\d+)(?:\s*,.+?)?\)/,
      'rgba$1,0.4)'
    )};
  overflow-y: auto;

  div:first-child {
    margin-top: 1.5rem;
  }
`

const SetClar = styled.div`
  margin: 0.75rem 1% 0 1%;
  font-size: clamp(0.7rem, min(3.4vw, 3.3vh), 1.25rem);
  border-bottom: 1px solid ${p => p.theme.border};
`

const SetBottom = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1.5rem;
  margin: clamp(0.25rem, 1.35vh, 0.7rem) 0;
`

const IconText = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
`

const ItemsSplit = styled(IconText)`
  min-width: 12rem;
  max-width: 26rem;
  justify-content: space-between;
`

const ItemsCenter = styled(IconText)`
  justify-content: center;
  gap: 0.5rem;
  font-size: 0.9rem;
`

const SepLine = styled.hr`
  height: 1px;
  width: 100%;
  min-width: 12rem;
  max-width: 26rem;
  margin: clamp(0px, 1.75vh, 0.4rem) 0 0;
  border: none;
  background-color: ${p => p.theme.text};
`

const CardLink = styled.span`
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
`

const ItemSet = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: flex-end;
  gap: 0.25rem;
  span:not(:last-child)::after {
    content: ' • ';
  }
`

const ImgSmall = styled.img`
  max-width: 1.825rem;
  max-height: 1.825rem;
  width: auto;
  height: auto;
`

const IconFoods = styled.div`
  display: flex;
  color: #fe3d33;
  stroke: #fe3d33;
  transform: scale(1.2);
`
