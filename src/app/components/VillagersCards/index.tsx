import * as React from 'react'
import styled from 'styled-components/macro'
import { VillagersCard } from './VillagersCard'
import { VillagersSuit } from './slice/types'
import back_grains from './assets/cards/0b.png'
import founders from './assets/cards/0_0.png'
import back_founders from './assets/cards/0_0b.png'
import brewer from './assets/cards/0_1.png'
import poulterer from './assets/cards/0_2.png'
import swineherd from './assets/cards/0_3.png'
import truffler from './assets/cards/0_4.png'
import back_wood from './assets/cards/1b.png'
import lumberjack from './assets/cards/1_0.png'
import back_lumberjack from './assets/cards/1_0b.png'
import carpenter from './assets/cards/1_1.png'
import cartwright from './assets/cards/1_2.png'
import cooper from './assets/cards/1_3.png'
import log_rafter from './assets/cards/1_4.png'
import shipwright from './assets/cards/1_5.png'
import wheeler from './assets/cards/1_6.png'
import wood_carver from './assets/cards/1_7.png'
import arkwright from './assets/cards/1_8.png'
import healey from './assets/cards/1_9.png'
import back_hay from './assets/cards/2b.png'
import hayer from './assets/cards/2_0.png'
import back_hayer from './assets/cards/2_0b.png'
import bed_builder from './assets/cards/2_1.png'
import fromager from './assets/cards/2_2.png'
import grazier from './assets/cards/2_3.png'
import horse_trader from './assets/cards/2_4.png'
import milk_maid from './assets/cards/2_5.png'
import ore_muler from './assets/cards/2_6.png'
import peddler from './assets/cards/2_7.png'
import thatcher from './assets/cards/2_8.png'
import carter from './assets/cards/2_9.png'
import vasel from './assets/cards/2_10.png'
import back_ore from './assets/cards/3b.png'
import miner from './assets/cards/3_0.png'
import back_miner from './assets/cards/3_0b.png'
import blacksmith from './assets/cards/3_1.png'
import glass_blower from './assets/cards/3_2.png'
import jeweler from './assets/cards/3_3.png'
import locksmith from './assets/cards/3_4.png'
import mason from './assets/cards/3_5.png'
import seeker from './assets/cards/3_6.png'
import spelunker from './assets/cards/3_7.png'
import alchemist from './assets/cards/3_8.png'
import garcia from './assets/cards/3_9.png'
import back_grapes from './assets/cards/5b.png'
import graper from './assets/cards/5_0.png'
import vintner from './assets/cards/5_1.png'
import wine_trader from './assets/cards/5_2.png'
import back_wool from './assets/cards/6b.png'
import shepherd from './assets/cards/6_0.png'
import spinner from './assets/cards/6_1.png'
import tailor from './assets/cards/6_2.png'
import weaver from './assets/cards/6_3.png'
import back_leather from './assets/cards/7b.png'
import cobbler from './assets/cards/7_0.png'
import saddler from './assets/cards/7_1.png'
import tanner from './assets/cards/7_2.png'
import back_solitary from './assets/cards/8b.png'
import agent from './assets/cards/8_0.png'
import beekeeper from './assets/cards/8_1.png'
import chandler from './assets/cards/8_2.png'
import fisher from './assets/cards/8_3.png'
import freemason from './assets/cards/8_4.png'
import grocer from './assets/cards/8_5.png'
import harvester from './assets/cards/8_6.png'
import hunter from './assets/cards/8_7.png'
import priest from './assets/cards/8_8.png'
import wattler from './assets/cards/8_9.png'
import captain from './assets/cards/8_10.png'
import wholesaler from './assets/cards/8_11.png'
import plower from './assets/cards/8_12.png'
import scribe from './assets/cards/8_13.png'
import back_special from './assets/cards/9b.png'
import apprentice from './assets/cards/9_0.png'
import monk from './assets/cards/9_1.png'
import smuggler from './assets/cards/9_2.png'
import tinner from './assets/cards/9_3.png'
import benefactor from './assets/cards/9_4.png'
import nun from './assets/cards/9_5.png'
import pigeoneer from './assets/cards/9_6.png'
import prophet from './assets/cards/9_7.png'
import recruiter from './assets/cards/9_8.png'
import barbarian from './assets/cards/9_9.png'
import courier from './assets/cards/9_10.png'
import flaker from './assets/cards/9_11.png'
import noble from './assets/cards/9_12.png'
import schemer from './assets/cards/9_13.png'
import sheriff from './assets/cards/9_14.png'
import thief from './assets/cards/9_15.png'
import freelancer from './assets/cards/9_16.png'
import suit_grains from './assets/icons/suit_grains.png'
import suit_wood from './assets/icons/suit_wood.png'
import suit_hay from './assets/icons/suit_hay.png'
import suit_ore from './assets/icons/suit_ore.png'
import suit_grapes from './assets/icons/suit_grapes.png'
import suit_wool from './assets/icons/suit_wool.png'
import suit_leather from './assets/icons/suit_leather.png'
import suit_solitary from './assets/icons/suit_solitary.png'
import suit_special from './assets/icons/suit_special.png'

export const VillagersCards = () => {
  const cards_set = loadCards()
  return (
    <>
      {cards_set.map(suit => (
        <SetWrapper color={suit.color}>
          <ColorStrip color={suit.color} />
          <Icon src={suit.img} alt={suit.name} />
          <Title>{suit.name}</Title>
          <CardsWrapper color={suit.color}>
            {suit.cards.map(cardDetails => (
              <VillagersCard {...cardDetails} color={suit.color} />
            ))}
          </CardsWrapper>
        </SetWrapper>
      ))}
    </>
  )
}

const SetWrapper = styled.div<{ color: string }>`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 78rem;
  margin: 1rem 0.75rem;
  background-color: ${p => p.theme.backgroundVariant};
  box-shadow: 0.05rem 0.05rem 0.1rem ${p => p.color};
  border-radius: 1.5rem;
`

const CardsWrapper = styled.div<{ color: string }>`
  display: flex;
  flex-flow: row wrap;
  align-content: flex-start;
  justify-content: center;
  padding: 1.5rem 1rem 1.5rem 1rem;
  gap: 1rem 1rem;
  background-color: ${p => p.color}40;
  border-radius: 0 0 1.5rem 1.5rem;
`

const ColorStrip = styled.div<{ color: string }>`
  width: 100%;
  align-self: center;
  height: 2.5rem;
  border-radius: 1.5rem 1.5rem 0 0;
  background-color: ${p => p.color};
  display: flex;
`

// TODO: Show number of cards in each suit
// const InfoText = styled.p`
//   font-size: 1.5rem;
//   font-weight: bold;
//   color: ${p => p.theme.text};
// `

const Icon = styled.img`
  align-self: center;
  width: 4rem;
  transform: translateY(-2rem);
`

const Title = styled.h1`
  align-self: center;
  font-size: 2rem;
  font-weight: bold;
  color: ${p => p.theme.text};
  margin: 0 0 -1.5rem 0;
  transform: translateY(-2rem);
`

// prettier-ignore
const loadCards = (): VillagersSuit[] => {
  return [
    { /* Grains Villagers */
      id: 0,
      name: 'Grains',
      img: suit_grains,
      color: '#92D1BB',
      cards: [
        { id: 0, name: 'Founders', img_front: founders, img_back: back_founders },
        { id: 1, name: 'Brewer', img_front: brewer, img_back: back_grains },
        { id: 2, name: 'Poulterer', img_front: poulterer, img_back: back_grains },
        { id: 3, name: 'Swineherd', img_front: swineherd, img_back: back_grains },
        { id: 4, name: 'Truffler', img_front: truffler, img_back: back_grains }
      ]
    },
    { /* Wood Villagers */
      id: 1,
      name: 'Wood',
      img: suit_wood,
      color: '#9DC274',
      cards: [
        { id: 0, name: 'Lumberjack', img_front: lumberjack, img_back: back_lumberjack },
        { id: 1, name: 'Carpenter', img_front: carpenter, img_back: back_wood },
        { id: 2, name: 'Cartwright', img_front: cartwright, img_back: back_wood },
        { id: 3, name: 'Cooper', img_front: cooper, img_back: back_wood },
        { id: 4, name: 'Log Rafter', img_front: log_rafter, img_back: back_wood },
        { id: 5, name: 'Shipwright', img_front: shipwright, img_back: back_wood },
        { id: 6, name: 'Wheeler', img_front: wheeler, img_back: back_wood },
        { id: 7, name: 'Wood Carver', img_front: wood_carver, img_back: back_wood },
        { id: 8, name: 'Arkwright', img_front: arkwright, img_back: back_wood },
        { id: 9, name: 'Healey', img_front: healey, img_back: back_wood }
      ]
    },
    { /* Hay Villagers */
      id: 2,
      name: 'Hay',
      img: suit_hay,
      color: '#7F499F',
      cards: [
        { id: 0, name: 'Hayer', img_front: hayer, img_back: back_hayer },
        { id: 1, name: 'Bed Builder', img_front: bed_builder, img_back: back_hay },
        { id: 2, name: 'Fromager', img_front: fromager, img_back: back_hay },
        { id: 3, name: 'Grazier', img_front: grazier, img_back: back_hay },
        { id: 4, name: 'Horse Trader', img_front: horse_trader, img_back: back_hay },
        { id: 5, name: 'Milk Maid', img_front: milk_maid, img_back: back_hay },
        { id: 6, name: 'Ore Muler', img_front: ore_muler, img_back: back_hay },
        { id: 7, name: 'Peddler', img_front: peddler, img_back: back_hay },
        { id: 8, name: 'Thatcher', img_front: thatcher, img_back: back_hay },
        { id: 9, name: 'Carter', img_front: carter, img_back: back_hay },
        { id: 10, name: 'Vasel', img_front: vasel, img_back: back_hay }
      ]
    },
    { /* Ore Villagers */
      id: 3,
      name: 'Ore',
      img: suit_ore,
      color: '#0D0709',
      cards: [
        { id: 0, name: 'Miner', img_front: miner, img_back: back_miner },
        { id: 1, name: 'Blacksmith', img_front: blacksmith, img_back: back_ore },
        { id: 2, name: 'Glass Blower', img_front: glass_blower, img_back: back_ore },
        { id: 3, name: 'Jeweler', img_front: jeweler, img_back: back_ore },
        { id: 4, name: 'Locksmith', img_front: locksmith, img_back: back_ore },
        { id: 5, name: 'Mason', img_front: mason, img_back: back_ore },
        { id: 6, name: 'Seeker', img_front: seeker, img_back: back_ore },
        { id: 7, name: 'Spelunker', img_front: spelunker, img_back: back_ore },
        { id: 8, name: 'Alchemist', img_front: alchemist, img_back: back_ore },
        { id: 9, name: 'Garcia', img_front: garcia, img_back: back_ore }
      ]
    },
    { /* Grapes Villagers */
      id: 5,
      name: 'Grapes',
      img: suit_grapes,
      color: '#F15FA7',
      cards: [
        { id: 0, name: 'Graper', img_front: graper, img_back: back_grapes },
        { id: 1, name: 'Vintner', img_front: vintner, img_back: back_grapes },
        { id: 2, name: 'Wine Trader', img_front: wine_trader, img_back: back_grapes }
      ]
    },
    { /* Wool Villagers */
      id: 6,
      name: 'Wool',
      img: suit_wool,
      color: '#41B4D3',
      cards: [
        { id: 0, name: 'Shepherd', img_front: shepherd, img_back: back_wool },
        { id: 1, name: 'Spinner', img_front: spinner, img_back: back_wool },
        { id: 2, name: 'Tailor', img_front: tailor, img_back: back_wool },
        { id: 3, name: 'Weaver', img_front: weaver, img_back: back_wool }
      ]
    },
    { /* Leather Villagers */
      id: 7,
      name: 'Leather',
      img: suit_leather,
      color: '#FFC748',
      cards: [
        { id: 0, name: 'Cobbler', img_front: cobbler, img_back: back_leather },
        { id: 1, name: 'Saddler', img_front: saddler, img_back: back_leather },
        { id: 2, name: 'Tanner', img_front: tanner, img_back: back_leather }
      ]
    },
    { /* Solitary Villagers */
      id: 8,
      name: 'Solitary',
      img: suit_solitary,
      color: '#814B26',
      cards: [
        { id: 0, name: 'Agent', img_front: agent, img_back: back_solitary },
        { id: 1, name: 'Beekeeper', img_front: beekeeper, img_back: back_solitary },
        { id: 2, name: 'Chandler', img_front: chandler, img_back: back_solitary },
        { id: 3, name: 'Fisher', img_front: fisher, img_back: back_solitary },
        { id: 4, name: 'Freemason', img_front: freemason, img_back: back_solitary },
        { id: 5, name: 'Grocer', img_front: grocer, img_back: back_solitary },
        { id: 6, name: 'Harvester', img_front: harvester, img_back: back_solitary },
        { id: 7, name: 'Hunter', img_front: hunter, img_back: back_solitary },
        { id: 8, name: 'Priest', img_front: priest, img_back: back_solitary },
        { id: 9, name: 'Wattler', img_front: wattler, img_back: back_solitary },
        { id: 10, name: 'Captain', img_front: captain, img_back: back_solitary },
        { id: 11, name: 'Wholesaler', img_front: wholesaler, img_back: back_solitary },
        { id: 12, name: 'Plower', img_front: plower, img_back: back_solitary },
        { id: 13, name: 'Scribe', img_front: scribe, img_back: back_solitary }
      ]
    },
    { /* Special Villagers */
      id: 9,
      name: 'Special',
      img: suit_special,
      color: '#FE5240',
      cards: [
        { id: 0, name: 'Apprentice', img_front: apprentice, img_back: back_special },
        { id: 1, name: 'Monk', img_front: monk, img_back: back_special },
        { id: 2, name: 'Smuggler', img_front: smuggler, img_back: back_special },
        { id: 3, name: 'Tinner', img_front: tinner, img_back: back_special },
        { id: 4, name: 'Benefactor', img_front: benefactor, img_back: back_special },
        { id: 5, name: 'Nun', img_front: nun, img_back: back_special },
        { id: 6, name: 'Pigeoneer', img_front: pigeoneer, img_back: back_special },
        { id: 7, name: 'Prophet', img_front: prophet, img_back: back_special },
        { id: 8, name: 'Recruiter', img_front: recruiter, img_back: back_special },
        { id: 9, name: 'Barbarian', img_front: barbarian, img_back: back_special },
        { id: 10, name: 'Courier', img_front: courier, img_back: back_special },
        { id: 11, name: 'Flaker', img_front: flaker, img_back: back_special },
        { id: 12, name: 'Noble', img_front: noble, img_back: back_special },
        { id: 13, name: 'Schemer', img_front: schemer, img_back: back_special },
        { id: 14, name: 'Sheriff', img_front: sheriff, img_back: back_special },
        { id: 15, name: 'Thief', img_front: thief, img_back: back_special },
        { id: 16, name: 'Freelancer', img_front: freelancer, img_back: back_special }
      ]
    }
  ]
}
