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
import cooper from '../assets/cards/1_2.png'
import shipwright from '../assets/cards/1_3.png'
import wheeler from '../assets/cards/1_4.png'
import cartwright from '../assets/cards/1_5.png'
import wood_carver from '../assets/cards/1_6.png'
import log_rafter from '../assets/cards/1_7.png'
import healey from '../assets/cards/1_8.png'
import arkwright from '../assets/cards/1_9.png'
/* Hay Villager Assets */
import back_hay from '../assets/cards/2b.png'
import hayer from '../assets/cards/2_0.png'
import back_hayer from '../assets/cards/2_0b.png'
import thatcher from '../assets/cards/2_1.png'
import bed_builder from '../assets/cards/2_2.png'
import grazier from '../assets/cards/2_3.png'
import milk_maid from '../assets/cards/2_4.png'
import fromager from '../assets/cards/2_5.png'
import peddler from '../assets/cards/2_6.png'
import horse_trader from '../assets/cards/2_7.png'
import ore_muler from '../assets/cards/2_8.png'
import vasel from '../assets/cards/2_9.png'
import carter from '../assets/cards/2_10.png'
/* Ore Villager Assets */
import back_ore from '../assets/cards/3b.png'
import miner from '../assets/cards/3_0.png'
import back_miner from '../assets/cards/3_0b.png'
import blacksmith from '../assets/cards/3_1.png'
import glass_blower from '../assets/cards/3_2.png'
import mason from '../assets/cards/3_3.png'
import seeker from '../assets/cards/3_4.png'
import spelunker from '../assets/cards/3_5.png'
import jeweler from '../assets/cards/3_6.png'
import locksmith from '../assets/cards/3_7.png'
import garcia from '../assets/cards/3_8.png'
import alchemist from '../assets/cards/3_9.png'
/* Grapes Villager Assets */
import back_grapes from '../assets/cards/5b.png'
import graper from '../assets/cards/5_0.png'
import vintner from '../assets/cards/5_1.png'
import wine_trader from '../assets/cards/5_2.png'
/* Wool Villager Assets */
import back_wool from '../assets/cards/6b.png'
import shepherd from '../assets/cards/6_0.png'
import spinner from '../assets/cards/6_1.png'
import weaver from '../assets/cards/6_2.png'
import tailor from '../assets/cards/6_3.png'
/* Leather Villager Assets */
import back_leather from '../assets/cards/7b.png'
import saddler from '../assets/cards/7_1.png'
import tanner from '../assets/cards/7_0.png'
import cobbler from '../assets/cards/7_2.png'
/* Solitary Villager Assets */
import back_solitary from '../assets/cards/8b.png'
import harvester from '../assets/cards/8_0.png'
import hunter from '../assets/cards/8_1.png'
import chandler from '../assets/cards/8_2.png'
import wattler from '../assets/cards/8_3.png'
import fisher from '../assets/cards/8_4.png'
import beekeeper from '../assets/cards/8_5.png'
import grocer from '../assets/cards/8_6.png'
import freemason from '../assets/cards/8_7.png'
import priest from '../assets/cards/8_8.png'
import agent from '../assets/cards/8_9.png'
import plower from '../assets/cards/8_10.png'
import scribe from '../assets/cards/8_11.png'
import wholesaler from '../assets/cards/8_12.png'
import captain from '../assets/cards/8_13.png'
/* Special Villager Assets */
import back_special from '../assets/cards/9b.png'
import monk from '../assets/cards/9_0.png'
import apprentice from '../assets/cards/9_1.png'
import tinner from '../assets/cards/9_2.png'
import smuggler from '../assets/cards/9_3.png'
import freelancer from '../assets/cards/9_4.png'
import benefactor from '../assets/cards/9_5.png'
import nun from '../assets/cards/9_6.png'
import pigeoneer from '../assets/cards/9_7.png'
import prophet from '../assets/cards/9_8.png'
import recruiter from '../assets/cards/9_9.png'
import barbarian from '../assets/cards/9_10.png'
import courier from '../assets/cards/9_11.png'
import flaker from '../assets/cards/9_12.png'
import noble from '../assets/cards/9_13.png'
import schemer from '../assets/cards/9_14.png'
import thief from '../assets/cards/9_15.png'
import sheriff from '../assets/cards/9_16.png'
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

// prettier-ignore
export enum VillagerType {
  Founders, Brewer, Poulterer, Swineherd, Truffler, Lumberjack, Carpenter, Cooper, ShipWright, Wheeler, Cartwright,
  WoodCarver, LogRafter, Healey, Arkwright, Hayer, Thatcher, BedBuilder, Grazier, MilkMaid, Fromager, Peddler,
  HorseTrader, OreMuler, Vasel, Carter, Miner, Blacksmith, GlassBlower, Mason, Seeker, Spelunker, Jeweler, Locksmith,
  Garcia, Alchemist, Graper, Vintner, WineTrader, Shepherd, Spinner, Weaver, Tailor, Saddler, Tanner, Cobbler,
  Harvester, Hunter, Chandler, Wattler, Fisher, Beekeeper, Grocer, Freemason, Priest, Agent, Plower, Scribe,
  Wholesaler, Captain, Monk, Apprentice, Tinner, Smuggler, Freelancer, Benefactor, Nun, Pigeoneer, Prophet, Recruiter,
  Barbarian, Courier, Flaker, Noble, Schemer, Thief, Sheriff
}

export enum SuitType {
  Grains = 0,
  Wood = 1,
  Hay = 2,
  Ore = 3,
  Grapes = 5,
  Wool = 6,
  Leather = 7,
  Solitary = 8,
  Special = 9
}

export enum ExpType {
  Base = 0,
  FourPlayer = 1,
  Promo1 = 2,
  DiceTower = 3,
  Profiteers = 4,
  Saints = 5,
  Scoundrels = 6
}

export type VillagersCardDetails = {
  name: string
  suit: SuitType
  exp: ExpType
  img_front: string
  img_back: string
  food: number
  builders: number
  gold: number
}

export type CardSet = {
  name: string
  img: string
  color: string
  cards: VillagerType[]
}

// prettier-ignore
export const cards: VillagersCardDetails[] = [
  /* Grains Villagers */
  { name: 'Founders', suit: SuitType.Grains, exp: ExpType.Base, img_front: founders, img_back: back_founders,
    food: 1, builders: 0, gold: 2 },
  { name: 'Brewer', suit: SuitType.Grains, exp: ExpType.Base, img_front: brewer, img_back: back_grains ,
    food: 1, builders: 1, gold: 0 },
  { name: 'Poulterer', suit: SuitType.Grains, exp: ExpType.Base, img_front: poulterer, img_back: back_grains ,
    food: 1, builders: 0, gold: 3 },
  { name: 'Swineherd', suit: SuitType.Grains, exp: ExpType.Base, img_front: swineherd, img_back: back_grains ,
    food: 1, builders: 0, gold: 2 },
  { name: 'Truffler', suit: SuitType.Grains, exp: ExpType.Base, img_front: truffler, img_back: back_grains ,
    food: 1, builders: 0, gold: 8 },
  /* Wood Villagers */
  { name: 'Lumberjack', suit: SuitType.Wood, exp: ExpType.Base, img_front: lumberjack, img_back: back_lumberjack ,
    food: 0, builders: 0, gold: 0 },
  { name: 'Carpenter', suit: SuitType.Wood, exp: ExpType.Base, img_front: carpenter, img_back: back_wood ,
    food: 0, builders: 1, gold: 0 },
  { name: 'Cooper', suit: SuitType.Wood, exp: ExpType.Base, img_front: cooper, img_back: back_wood ,
    food: 0, builders: 0, gold: 4 },
  { name: 'Shipwright', suit: SuitType.Wood, exp: ExpType.Base, img_front: shipwright, img_back: back_wood ,
    food: 0, builders: 1, gold: 2 },
  { name: 'Wheeler', suit: SuitType.Wood, exp: ExpType.Base, img_front: wheeler, img_back: back_wood ,
    food: 0, builders: 0, gold: 3 },
  { name: 'Cartwright', suit: SuitType.Wood, exp: ExpType.Base, img_front: cartwright, img_back: back_wood ,
    food: 0, builders: 0, gold: 9 },
  { name: 'Wood Carver', suit: SuitType.Wood, exp: ExpType.Base, img_front: wood_carver, img_back: back_wood ,
    food: 0, builders: 0, gold: 0 },
  { name: 'Log Rafter', suit: SuitType.Wood, exp: ExpType.Base, img_front: log_rafter, img_back: back_wood ,
    food: 0, builders: 0, gold: 0 },
  { name: 'Healey', suit: SuitType.Wood, exp: ExpType.DiceTower, img_front: healey, img_back: back_wood ,
    food: 0, builders: 1, gold: 3 },
  { name: 'Arkwright', suit: SuitType.Wood, exp: ExpType.Profiteers, img_front: arkwright, img_back: back_wood ,
    food: 0, builders: 0, gold: 0 },
  /* Hay Villagers */
  { name: 'Hayer', suit: SuitType.Hay, exp: ExpType.Base, img_front: hayer, img_back: back_hayer ,
    food: 0, builders: 0, gold: 0 },
  { name: 'Thatcher', suit: SuitType.Hay, exp: ExpType.Base, img_front: thatcher, img_back: back_hay ,
    food: 0, builders: 1, gold: 2 },
  { name: 'Bed Builder', suit: SuitType.Hay, exp: ExpType.Base, img_front: bed_builder, img_back: back_hay ,
    food: 0, builders: 0, gold: 4 },
  { name: 'Grazier', suit: SuitType.Hay, exp: ExpType.Base, img_front: grazier, img_back: back_hay ,
    food: 1, builders: 0, gold: 0 },
  { name: 'Milk Maid', suit: SuitType.Hay, exp: ExpType.Base, img_front: milk_maid, img_back: back_hay ,
    food: 2, builders: 0, gold: 0 },
  { name: 'Fromager', suit: SuitType.Hay, exp: ExpType.Base, img_front: fromager, img_back: back_hay ,
    food: 1, builders: 0, gold: 15 },
  { name: 'Peddler', suit: SuitType.Hay, exp: ExpType.Base, img_front: peddler, img_back: back_hay ,
    food: 0, builders: 0, gold: 0 },
  { name: 'Horse Trader', suit: SuitType.Hay, exp: ExpType.Base, img_front: horse_trader, img_back: back_hay ,
    food: 0, builders: 0, gold: 0 },
  { name: 'Ore Muler', suit: SuitType.Hay, exp: ExpType.Base, img_front: ore_muler, img_back: back_hay ,
    food: 0, builders: 0, gold: 0 },
  { name: 'Vasel', suit: SuitType.Hay, exp: ExpType.DiceTower, img_front: vasel, img_back: back_hay ,
    food: 0, builders: 0, gold: 3 },
  { name: 'Carter', suit: SuitType.Hay, exp: ExpType.Profiteers, img_front: carter, img_back: back_hay ,
    food: 0, builders: 0, gold: 0 },
  /* Ore Villagers */
  { name: 'Miner', suit: SuitType.Ore, exp: ExpType.Base, img_front: miner, img_back: back_miner ,
    food: 0, builders: 0, gold: 0 },
  { name: 'Blacksmith', suit: SuitType.Ore, exp: ExpType.Base, img_front: blacksmith, img_back: back_ore ,
    food: 0, builders: 0, gold: 2 },
  { name: 'Glass Blower', suit: SuitType.Ore, exp: ExpType.Base, img_front: glass_blower, img_back: back_ore ,
    food: 0, builders: 0, gold: 4 },
  { name: 'Mason', suit: SuitType.Ore, exp: ExpType.Base, img_front: mason, img_back: back_ore ,
    food: 0, builders: 1, gold: 2 },
  { name: 'Seeker',  suit: SuitType.Ore, exp: ExpType.Base, img_front: seeker, img_back: back_ore ,
    food: 0, builders: 0, gold: 0 },
  { name: 'Spelunker', suit: SuitType.Ore, exp: ExpType.Base, img_front: spelunker, img_back: back_ore ,
    food: 0, builders: 0, gold: 10 },
  { name: 'Jeweler', suit: SuitType.Ore, exp: ExpType.Base, img_front: jeweler, img_back: back_ore ,
    food: 0, builders: 0, gold: 20 },
  { name: 'Locksmith', suit: SuitType.Ore, exp: ExpType.Base, img_front: locksmith, img_back: back_ore ,
    food: 0, builders: 0, gold: 0 },
  { name: 'Garcia', suit: SuitType.Ore, exp: ExpType.DiceTower, img_front: garcia, img_back: back_ore ,
    food: 1, builders: 0, gold: 3 },
  { name: 'Alchemist', suit: SuitType.Ore, exp: ExpType.Profiteers, img_front: alchemist, img_back: back_ore ,
    food: 0, builders: 0, gold: 0 },
  /* Grapes Villagers */
  { name: 'Graper', suit: SuitType.Grapes, exp: ExpType.Base, img_front: graper, img_back: back_grapes ,
    food: 1, builders: 0, gold: 0 },
  { name: 'Vintner', suit: SuitType.Grapes, exp: ExpType.Base, img_front: vintner, img_back: back_grapes ,
    food: 0, builders: 0, gold: 5 },
  { name: 'Wine Trader', suit: SuitType.Grapes, exp: ExpType.Base, img_front: wine_trader, img_back: back_grapes ,
    food: 0, builders: 0, gold: 14 },
  /* Wool Villagers */
  { name: 'Shepherd', suit: SuitType.Wool, exp: ExpType.FourPlayer, img_front: shepherd, img_back: back_wool ,
    food: 1, builders: 0, gold: 0 },
  { name: 'Spinner', suit: SuitType.Wool, exp: ExpType.FourPlayer, img_front: spinner, img_back: back_wool ,
    food: 0, builders: 0, gold: 4 },
  { name: 'Weaver', suit: SuitType.Wool, exp: ExpType.FourPlayer, img_front: weaver, img_back: back_wool ,
    food: 0, builders: 0, gold: 12 },
  { name: 'Tailor', suit: SuitType.Wool, exp: ExpType.FourPlayer, img_front: tailor, img_back: back_wool ,
    food: 0, builders: 0, gold: 24 },
  /* Leather Villagers */
  { name: 'Tanner', suit: SuitType.Leather, exp: ExpType.FourPlayer, img_front: tanner, img_back: back_leather ,
    food: 0, builders: 0, gold: 2 },
  { name: 'Saddler', suit: SuitType.Leather, exp: ExpType.FourPlayer, img_front: saddler, img_back: back_leather ,
    food: 0, builders: 0, gold: 5 },
  { name: 'Cobbler', suit: SuitType.Leather, exp: ExpType.FourPlayer, img_front: cobbler, img_back: back_leather ,
  food: 0, builders: 0, gold: 6 },
  /* Solitary Villagers */
  { name: 'Harvester', suit: SuitType.Solitary, exp: ExpType.Base, img_front: harvester, img_back: back_solitary ,
    food: 1, builders: 0, gold: 0 },
  { name: 'Hunter', suit: SuitType.Solitary, exp: ExpType.Base, img_front: hunter, img_back: back_solitary ,
    food: 1, builders: 0, gold: 0 },
  { name: 'Chandler', suit: SuitType.Solitary, exp: ExpType.Base, img_front: chandler, img_back: back_solitary ,
    food: 0, builders: 0, gold: 3 },
  { name: 'Wattler', suit: SuitType.Solitary, exp: ExpType.Base, img_front: wattler, img_back: back_solitary ,
    food: 0, builders: 1, gold: 0 },
  { name: 'Fisher', suit: SuitType.Solitary, exp: ExpType.Base, img_front: fisher, img_back: back_solitary ,
    food: 1, builders: 0, gold: 3 },
  { name: 'Beekeeper', suit: SuitType.Solitary, exp: ExpType.Base, img_front: beekeeper, img_back: back_solitary ,
    food: 0, builders: 0, gold: 4 },
  { name: 'Grocer', suit: SuitType.Solitary, exp: ExpType.Base, img_front: grocer, img_back: back_solitary ,
    food: 0, builders: 0, gold: 0 },
  { name: 'Freemason', suit: SuitType.Solitary, exp: ExpType.Base, img_front: freemason, img_back: back_solitary ,
    food: 0, builders: 0, gold: 0 },
  { name: 'Priest', suit: SuitType.Solitary, exp: ExpType.Base, img_front: priest, img_back: back_solitary ,
    food: 0, builders: 0, gold: 0 },
  { name: 'Agent', suit: SuitType.Solitary, exp: ExpType.Base, img_front: agent, img_back: back_solitary ,
    food: 0, builders: 0, gold: 0 },
  { name: 'Plower', suit: SuitType.Solitary, exp: ExpType.Promo1, img_front: plower, img_back: back_solitary ,
    food: 0, builders: 0, gold: 0 },
  { name: 'Scribe', suit: SuitType.Solitary, exp: ExpType.Promo1, img_front: scribe, img_back: back_solitary ,
    food: 0, builders: 0, gold: 0 },
  { name: 'Wholesaler', suit: SuitType.Solitary, exp: ExpType.Profiteers, img_front: wholesaler, img_back: back_solitary ,
    food: 0, builders: 0, gold: 0 },
  { name: 'Captain', suit: SuitType.Solitary, exp: ExpType.Profiteers, img_front: captain, img_back: back_solitary ,
    food: 0, builders: 0, gold: 0 },
  /* Special Villagers */
  { name: 'Monk', suit: SuitType.Special, exp: ExpType.Base, img_front: monk, img_back: back_special ,
    food: 0, builders: 0, gold: 0 },
  { name: 'Apprentice', suit: SuitType.Special, exp: ExpType.Base, img_front: apprentice, img_back: back_special ,
    food: 0, builders: 0, gold: 0 },
  { name: 'Tinner', suit: SuitType.Special, exp: ExpType.Base, img_front: tinner, img_back: back_special ,
    food: 0, builders: 0, gold: 0 },
  { name: 'Smuggler', suit: SuitType.Special, exp: ExpType.Base, img_front: smuggler, img_back: back_special ,
    food: 0, builders: 0, gold: 0 },
  { name: 'Freelancer', suit: SuitType.Special, exp: ExpType.Profiteers, img_front: freelancer, img_back: back_special,
    food: 0, builders: 0, gold: 0 },
  { name: 'Benefactor', suit: SuitType.Special, exp: ExpType.Saints, img_front: benefactor, img_back: back_special ,
    food: 0, builders: 0, gold: 0 },
  { name: 'Nun', suit: SuitType.Special, exp: ExpType.Saints, img_front: nun, img_back: back_special ,
    food: 0, builders: 0, gold: 0 },
  { name: 'Pigeoneer', suit: SuitType.Special, exp: ExpType.Saints, img_front: pigeoneer, img_back: back_special ,
    food: 0, builders: 0, gold: 0 },
  { name: 'Prophet', suit: SuitType.Special, exp: ExpType.Saints, img_front: prophet, img_back: back_special ,
    food: 0, builders: 0, gold: 0 },
  { name: 'Recruiter', suit: SuitType.Special, exp: ExpType.Saints, img_front: recruiter, img_back: back_special ,
    food: 0, builders: 0, gold: 0 },
  { name: 'Barbarian', suit: SuitType.Special, exp: ExpType.Scoundrels, img_front: barbarian, img_back: back_special ,
    food: 0, builders: 0, gold: 0 },
  { name: 'Courier', suit: SuitType.Special, exp: ExpType.Scoundrels, img_front: courier, img_back: back_special ,
    food: 0, builders: 0, gold: 0 },
  { name: 'Flaker', suit: SuitType.Special, exp: ExpType.Scoundrels, img_front: flaker, img_back: back_special ,
    food: 0, builders: 0, gold: 0 },
  { name: 'Noble', suit: SuitType.Special, exp: ExpType.Scoundrels, img_front: noble, img_back: back_special ,
    food: 0, builders: 0, gold: 0 },
  { name: 'Schemer', suit: SuitType.Special, exp: ExpType.Scoundrels, img_front: schemer, img_back: back_special ,
    food: 0, builders: 0, gold: 0 },
  { name: 'Thief', suit: SuitType.Special, exp: ExpType.Scoundrels, img_front: thief, img_back: back_special ,
    food: 0, builders: 0, gold: 0 },
  { name: 'Sheriff', suit: SuitType.Special, exp: ExpType.Scoundrels, img_front: sheriff, img_back: back_special ,
    food: 0, builders: 0, gold: 0 }
]

// prettier-ignore
export const suits: CardSet[] = [
  { /* Grains Villagers */
    name: 'Grains', img: suit_grains, color: '#92D1BB',
    cards: [0, 1, 2, 3, 4]
  },
  { /* Wood Villagers */
    name: 'Wood', img: suit_wood, color: '#9DC274',
    cards: [5, 6, 7, 8, 9, 10, 11, 12, 13, 14]
  },
  { /* Hay Villagers */
    name: 'Hay', img: suit_hay, color: '#7F499F',
    cards: [15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25]
  },
  { /* Ore Villagers */
    name: 'Ore', img: suit_ore, color: '#0D0709',
    cards: [26, 27, 28, 29, 30, 31, 32, 33, 34, 35]
  },
  { /* Grapes Villagers */
    name: 'Grapes', img: suit_grapes, color: '#F15FA7',
    cards: [36, 37, 38]
  },
  { /* Wool Villagers */
    name: 'Wool', img: suit_wool, color: '#41B4D3',
    cards: [39, 40, 41, 42]
  },
  { /* Leather Villagers */
    name: 'Leather', img: suit_leather, color: '#FFC748',
    cards: [43, 44, 45]
  },
  { /* Solitary Villagers */
    name: 'Solitary', img: suit_solitary, color: '#814B26',
    cards: [46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59]
  },
  { /* Special Villagers */
    name: 'Special', img: suit_special, color: '#FE5240',
    cards: [60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76]
  }
]

// prettier-ignore
export const packs: CardSet[] = [
  { /* Base Game */
    name: 'Base', img: exp_base, color: '#8FD959',
    cards: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 15, 16, 17, 18, 19, 20, 21, 22, 23, 26, 27, 28, 29, 30,
      31, 32, 33, 36, 37, 38, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 60, 61, 62, 63]
  },
  { /* 4+ Players Expansion */
    name: '4+ Players', img: exp_4player, color: '#FF6153',
    cards: [39, 40, 41, 42, 43, 44, 45]
  },
  { /* Promo Pack #1 */
    name: 'Promo #1', img: exp_promo1, color: '#814B26',
    cards: [56, 57]
  },
  { /* Dice Tower Promo Cards */
    name: 'Dice Tower', img: exp_dicetower, color: '#B71427',
    cards: [24, 34, 13]
  },
  { /* Profiteers Expansion */
    name: 'Profiteers', img: exp_profiteers, color: '#999998',
    cards: [58, 64, 14,  25, 35, 59]
  },
  { /* Saints Expansion */
    name: 'Saints', img: exp_saints, color: '#E94FAC',
    cards: [65, 66, 67, 68, 69]
  },
  { /* Scoundrels Expansion */
    name: 'Scoundrels', img: exp_scoundrels, color: '#2E629F',
    cards: [70, 71, 72, 73, 74, 75, 76]
  }
]
