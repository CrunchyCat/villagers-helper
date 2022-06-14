/* Grains Villager Assets */
import back_grains from '../assets/cards/0b.png'
import founders from '../assets/cards/0_0.png'
import back_founders from '../assets/cards/0_0b.png'
import brewer from '../assets/cards/0_1.png'
import poulterer from '../assets/cards/0_2.png'
import swineherd from '../assets/cards/0_3.png'
import truffler from '../assets/cards/0_4.png'
/* Wood Villager Assets */
import back_wood from '../assets/cards/1b.png'
import lumberjack from '../assets/cards/1_0.png'
import back_lumberjack from '../assets/cards/1_0b.png'
import carpenter from '../assets/cards/1_1.png'
import cartwright from '../assets/cards/1_2.png'
import cooper from '../assets/cards/1_3.png'
import log_rafter from '../assets/cards/1_4.png'
import shipwright from '../assets/cards/1_5.png'
import wheeler from '../assets/cards/1_6.png'
import wood_carver from '../assets/cards/1_7.png'
import arkwright from '../assets/cards/1_8.png'
import healey from '../assets/cards/1_9.png'
/* Hay Villager Assets */
import back_hay from '../assets/cards/2b.png'
import hayer from '../assets/cards/2_0.png'
import back_hayer from '../assets/cards/2_0b.png'
import bed_builder from '../assets/cards/2_1.png'
import fromager from '../assets/cards/2_2.png'
import grazier from '../assets/cards/2_3.png'
import horse_trader from '../assets/cards/2_4.png'
import milk_maid from '../assets/cards/2_5.png'
import ore_muler from '../assets/cards/2_6.png'
import peddler from '../assets/cards/2_7.png'
import thatcher from '../assets/cards/2_8.png'
import carter from '../assets/cards/2_9.png'
import vasel from '../assets/cards/2_10.png'
/* Ore Villager Assets */
import back_ore from '../assets/cards/3b.png'
import miner from '../assets/cards/3_0.png'
import back_miner from '../assets/cards/3_0b.png'
import blacksmith from '../assets/cards/3_1.png'
import glass_blower from '../assets/cards/3_2.png'
import jeweler from '../assets/cards/3_3.png'
import locksmith from '../assets/cards/3_4.png'
import mason from '../assets/cards/3_5.png'
import seeker from '../assets/cards/3_6.png'
import spelunker from '../assets/cards/3_7.png'
import alchemist from '../assets/cards/3_8.png'
import garcia from '../assets/cards/3_9.png'
/* Grapes Villager Assets */
import back_grapes from '../assets/cards/5b.png'
import graper from '../assets/cards/5_0.png'
import vintner from '../assets/cards/5_1.png'
import wine_trader from '../assets/cards/5_2.png'
/* Wool Villager Assets */
import back_wool from '../assets/cards/6b.png'
import shepherd from '../assets/cards/6_0.png'
import spinner from '../assets/cards/6_1.png'
import tailor from '../assets/cards/6_2.png'
import weaver from '../assets/cards/6_3.png'
/* Leather Villager Assets */
import back_leather from '../assets/cards/7b.png'
import cobbler from '../assets/cards/7_0.png'
import saddler from '../assets/cards/7_1.png'
import tanner from '../assets/cards/7_2.png'
/* Solitary Villager Assets */
import back_solitary from '../assets/cards/8b.png'
import agent from '../assets/cards/8_0.png'
import beekeeper from '../assets/cards/8_1.png'
import chandler from '../assets/cards/8_2.png'
import fisher from '../assets/cards/8_3.png'
import freemason from '../assets/cards/8_4.png'
import grocer from '../assets/cards/8_5.png'
import harvester from '../assets/cards/8_6.png'
import hunter from '../assets/cards/8_7.png'
import priest from '../assets/cards/8_8.png'
import wattler from '../assets/cards/8_9.png'
import captain from '../assets/cards/8_10.png'
import wholesaler from '../assets/cards/8_11.png'
import plower from '../assets/cards/8_12.png'
import scribe from '../assets/cards/8_13.png'
/* Special Villager Assets */
import back_special from '../assets/cards/9b.png'
import apprentice from '../assets/cards/9_0.png'
import monk from '../assets/cards/9_1.png'
import smuggler from '../assets/cards/9_2.png'
import tinner from '../assets/cards/9_3.png'
import benefactor from '../assets/cards/9_4.png'
import nun from '../assets/cards/9_5.png'
import pigeoneer from '../assets/cards/9_6.png'
import prophet from '../assets/cards/9_7.png'
import recruiter from '../assets/cards/9_8.png'
import barbarian from '../assets/cards/9_9.png'
import courier from '../assets/cards/9_10.png'
import flaker from '../assets/cards/9_11.png'
import noble from '../assets/cards/9_12.png'
import schemer from '../assets/cards/9_13.png'
import sheriff from '../assets/cards/9_14.png'
import thief from '../assets/cards/9_15.png'
import freelancer from '../assets/cards/9_16.png'
/* Suit Icons */
import suit_grains from '../assets/icons/suit_grains.png'
import suit_wood from '../assets/icons/suit_wood.png'
import suit_hay from '../assets/icons/suit_hay.png'
import suit_ore from '../assets/icons/suit_ore.png'
import suit_grapes from '../assets/icons/suit_grapes.png'
import suit_wool from '../assets/icons/suit_wool.png'
import suit_leather from '../assets/icons/suit_leather.png'
import suit_solitary from '../assets/icons/suit_solitary.png'
import suit_special from '../assets/icons/suit_special.png'
/* Set/Expansion Icons */
import exp_base from '../assets/icons/exp_base.png'
import exp_4player from '../assets/icons/exp_4player.png'
import exp_saints from '../assets/icons/exp_saints.png'
import exp_scoundrels from '../assets/icons/exp_scoundrels.png'
import exp_profiteers from '../assets/icons/exp_profiteers.png'
import exp_promo1 from '../assets/icons/exp_promo1.png'
import exp_dicetower from '../assets/icons/exp_dicetower.png'

export type VillagersCardDetails = {
  id: string
  name: string
  img_front: string
  img_back: string
}

export type CardSet = {
  id: number
  name: string
  img: string
  color: string
  cards: VillagersCardDetails[]
}

// prettier-ignore
export const cards: VillagersCardDetails[] = [
  /* Grains Villagers */
  { id: '0_0', name: 'Founders', img_front: founders, img_back: back_founders },
  { id: '0_1', name: 'Brewer', img_front: brewer, img_back: back_grains },
  { id: '0_2', name: 'Poulterer', img_front: poulterer, img_back: back_grains },
  { id: '0_3', name: 'Swineherd', img_front: swineherd, img_back: back_grains },
  { id: '0_4', name: 'Truffler', img_front: truffler, img_back: back_grains },
  /* Wood Villagers */
  { id: '1_0', name: 'Lumberjack', img_front: lumberjack, img_back: back_lumberjack },
  { id: '1_1', name: 'Carpenter', img_front: carpenter, img_back: back_wood },
  { id: '1_2', name: 'Cartwright', img_front: cartwright, img_back: back_wood },
  { id: '1_3', name: 'Cooper', img_front: cooper, img_back: back_wood },
  { id: '1_4', name: 'Log Rafter', img_front: log_rafter, img_back: back_wood },
  { id: '1_5', name: 'Shipwright', img_front: shipwright, img_back: back_wood },
  { id: '1_6', name: 'Wheeler', img_front: wheeler, img_back: back_wood },
  { id: '1_7', name: 'Wood Carver', img_front: wood_carver, img_back: back_wood },
  { id: '1_8', name: 'Arkwright', img_front: arkwright, img_back: back_wood },
  { id: '1_9', name: 'Healey', img_front: healey, img_back: back_wood },
  /* Hay Villagers */
  { id: '2_0', name: 'Hayer', img_front: hayer, img_back: back_hayer },
  { id: '2_1', name: 'Bed Builder', img_front: bed_builder, img_back: back_hay },
  { id: '2_2', name: 'Fromager', img_front: fromager, img_back: back_hay },
  { id: '2_3', name: 'Grazier', img_front: grazier, img_back: back_hay },
  { id: '2_4', name: 'Horse Trader', img_front: horse_trader, img_back: back_hay },
  { id: '2_5', name: 'Milk Maid', img_front: milk_maid, img_back: back_hay },
  { id: '2_6', name: 'Ore Muler', img_front: ore_muler, img_back: back_hay },
  { id: '2_7', name: 'Peddler', img_front: peddler, img_back: back_hay },
  { id: '2_8', name: 'Thatcher', img_front: thatcher, img_back: back_hay },
  { id: '2_9', name: 'Carter', img_front: carter, img_back: back_hay },
  { id: '2_10', name: 'Vasel', img_front: vasel, img_back: back_hay },
  /* Ore Villagers */
  { id: '3_0', name: 'Miner', img_front: miner, img_back: back_miner },
  { id: '3_1', name: 'Blacksmith', img_front: blacksmith, img_back: back_ore },
  { id: '3_2', name: 'Glass Blower', img_front: glass_blower, img_back: back_ore },
  { id: '3_3', name: 'Jeweler', img_front: jeweler, img_back: back_ore },
  { id: '3_4', name: 'Locksmith', img_front: locksmith, img_back: back_ore },
  { id: '3_5', name: 'Mason', img_front: mason, img_back: back_ore },
  { id: '3_6', name: 'Seeker', img_front: seeker, img_back: back_ore },
  { id: '3_7', name: 'Spelunker', img_front: spelunker, img_back: back_ore },
  { id: '3_8', name: 'Alchemist', img_front: alchemist, img_back: back_ore },
  { id: '3_9', name: 'Garcia', img_front: garcia, img_back: back_ore },
  /* Grapes Villagers */
  { id: '5_0', name: 'Graper', img_front: graper, img_back: back_grapes },
  { id: '5_1', name: 'Vintner', img_front: vintner, img_back: back_grapes },
  { id: '5_2', name: 'Wine Trader', img_front: wine_trader, img_back: back_grapes },
  /* Wool Villagers */
  { id: '6_0', name: 'Shepherd', img_front: shepherd, img_back: back_wool },
  { id: '6_1', name: 'Spinner', img_front: spinner, img_back: back_wool },
  { id: '6_2', name: 'Tailor', img_front: tailor, img_back: back_wool },
  { id: '6_3', name: 'Weaver', img_front: weaver, img_back: back_wool },
  /* Leather Villagers */
  { id: '7_0', name: 'Cobbler', img_front: cobbler, img_back: back_leather },
  { id: '7_1', name: 'Saddler', img_front: saddler, img_back: back_leather },
  { id: '7_2', name: 'Tanner', img_front: tanner, img_back: back_leather },
  /* Solitary Villagers */
  { id: '8_0', name: 'Agent', img_front: agent, img_back: back_solitary },
  { id: '8_1', name: 'Beekeeper', img_front: beekeeper, img_back: back_solitary },
  { id: '8_2', name: 'Chandler', img_front: chandler, img_back: back_solitary },
  { id: '8_3', name: 'Fisher', img_front: fisher, img_back: back_solitary },
  { id: '8_4', name: 'Freemason', img_front: freemason, img_back: back_solitary },
  { id: '8_5', name: 'Grocer', img_front: grocer, img_back: back_solitary },
  { id: '8_6', name: 'Harvester', img_front: harvester, img_back: back_solitary },
  { id: '8_7', name: 'Hunter', img_front: hunter, img_back: back_solitary },
  { id: '8_8', name: 'Priest', img_front: priest, img_back: back_solitary },
  { id: '8_9', name: 'Wattler', img_front: wattler, img_back: back_solitary },
  { id: '8_10', name: 'Captain', img_front: captain, img_back: back_solitary },
  { id: '8_11', name: 'Wholesaler', img_front: wholesaler, img_back: back_solitary },
  { id: '8_12', name: 'Plower', img_front: plower, img_back: back_solitary },
  { id: '8_13', name: 'Scribe', img_front: scribe, img_back: back_solitary },
  /* Special Villagers */
  { id: '9_0', name: 'Apprentice', img_front: apprentice, img_back: back_special },
  { id: '9_1', name: 'Monk', img_front: monk, img_back: back_special },
  { id: '9_2', name: 'Smuggler', img_front: smuggler, img_back: back_special },
  { id: '9_3', name: 'Tinner', img_front: tinner, img_back: back_special },
  { id: '9_4', name: 'Benefactor', img_front: benefactor, img_back: back_special },
  { id: '9_5', name: 'Nun', img_front: nun, img_back: back_special },
  { id: '9_6', name: 'Pigeoneer', img_front: pigeoneer, img_back: back_special },
  { id: '9_7', name: 'Prophet', img_front: prophet, img_back: back_special },
  { id: '9_8', name: 'Recruiter', img_front: recruiter, img_back: back_special },
  { id: '9_9', name: 'Barbarian', img_front: barbarian, img_back: back_special },
  { id: '9_10', name: 'Courier', img_front: courier, img_back: back_special },
  { id: '9_11', name: 'Flaker', img_front: flaker, img_back: back_special },
  { id: '9_12', name: 'Noble', img_front: noble, img_back: back_special },
  { id: '9_13', name: 'Schemer', img_front: schemer, img_back: back_special },
  { id: '9_14', name: 'Sheriff', img_front: sheriff, img_back: back_special },
  { id: '9_15', name: 'Thief', img_front: thief, img_back: back_special },
  { id: '9_16', name: 'Freelancer', img_front: freelancer, img_back: back_special }
]

// prettier-ignore
export const suits: CardSet[] = [
  { /* Grains Villagers */
    id: 0, name: 'Grains', img: suit_grains, color: '#92D1BB',
    cards: [0, 1, 2, 3, 4].map(i => cards[i])
  },
  { /* Wood Villagers */
    id: 1, name: 'Wood', img: suit_wood, color: '#9DC274',
    cards: [5, 6, 7, 8, 9, 10, 11, 12, 13, 14].map(i => cards[i])
  },
  { /* Hay Villagers */
    id: 2, name: 'Hay', img: suit_hay, color: '#7F499F',
    cards: [15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25].map(i => cards[i])
  },
  { /* Ore Villagers */
    id: 3, name: 'Ore', img: suit_ore, color: '#0D0709',
    cards: [26, 27, 28, 29, 30, 31, 32, 33, 34, 35].map(i => cards[i])
  },
  { /* Grapes Villagers */
    id: 5, name: 'Grapes', img: suit_grapes, color: '#F15FA7',
    cards: [36, 37, 38].map(i => cards[i])
  },
  { /* Wool Villagers */
    id: 6, name: 'Wool', img: suit_wool, color: '#41B4D3',
    cards: [39, 40, 41, 42].map(i => cards[i])
  },
  { /* Leather Villagers */
    id: 7, name: 'Leather', img: suit_leather, color: '#FFC748',
    cards: [43, 44, 45].map(i => cards[i])
  },
  { /* Solitary Villagers */
    id: 8, name: 'Solitary', img: suit_solitary, color: '#814B26',
    cards: [46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59].map(i => cards[i])
  },
  { /* Special Villagers */
    id: 9, name: 'Special', img: suit_special, color: '#FE5240',
    cards: [60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76].map(i => cards[i])
  }
]

// prettier-ignore
export const packs: CardSet[] = [
  { /* Base Game */
    id: 0, name: 'Base', img: exp_base, color: '#8FD959',
    cards: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 15, 16, 17, 18, 19, 20, 21, 22, 23, 26, 27, 28, 29, 30,
      31, 32, 33, 36, 37, 38, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 60, 61, 62, 63].map(i => cards[i])
  },
  { /* 4+ Players Expansion */
    id: 1, name: '4+ Players', img: exp_4player, color: '#FF6153',
    cards: [39, 40, 41, 42, 43, 44, 45].map(i => cards[i])
  },
  { /* Saints Expansion */
    id: 2, name: 'Saints', img: exp_saints, color: '#E94FAC',
    cards: [64, 65, 66, 67, 68].map(i => cards[i])
  },
  { /* Scoundrels Expansion */
    id: 3, name: 'Scoundrels', img: exp_scoundrels, color: '#2E629F',
    cards: [69, 70, 71, 72, 73, 74, 75].map(i => cards[i])
  },
  { /* Profiteers Expansion */
    id: 4, name: 'Profiteers', img: exp_profiteers, color: '#999998',
    cards: [34, 13, 56, 24, 76, 57].map(i => cards[i])
  },
  { /* Promo Pack #1 */
    id: 5, name: 'Promo #1', img: exp_promo1, color: '#814B26',
    cards: [58, 59].map(i => cards[i])
  },
  { /* Dice Tower Promo Cards */
    id: 6, name: 'Dice Tower', img: exp_dicetower, color: '#B71427',
    cards: [14, 25, 35].map(i => cards[i])
  }
]
