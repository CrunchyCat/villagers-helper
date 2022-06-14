import back_unknown from '../assets/cards/0.png'
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
export enum Villager {
  Unknown, Founders, Brewer, Poulterer, Swineherd, Truffler, Lumberjack, Carpenter, Cooper, ShipWright, Wheeler,
  Cartwright, WoodCarver, LogRafter, Healey, Arkwright, Hayer, Thatcher, BedBuilder, Grazier, MilkMaid, Fromager,
  Peddler, HorseTrader, OreMuler, Vasel, Carter, Miner, Blacksmith, GlassBlower, Mason, Seeker, Spelunker, Jeweler, 
  Locksmith, Garcia, Alchemist, Graper, Vintner, WineTrader, Shepherd, Spinner, Weaver, Tailor, Saddler, Tanner,
  Cobbler, Harvester, Hunter, Chandler, Wattler, Fisher, Beekeeper, Grocer, Freemason, Priest, Agent, Plower, Scribe,
  Wholesaler, Captain, Monk, Apprentice, Tinner, Smuggler, Freelancer, Benefactor, Nun, Pigeoneer, Prophet, Recruiter,
  Barbarian, Courier, Flaker, Noble, Schemer, Thief, Sheriff
}

// prettier-ignore
export enum Suit { Unknown = -1, Grains, Wood, Hay, Ore, Grapes, Wool, Leather, Solitary, Special }

// prettier-ignore
export enum Exp { None = -1, Base, FourPlayer, Promo1, DiceTower, Profiteers, Saints, Scoundrels }

export type VillagerDetails = {
  name: string
  suit: Suit
  exp: Exp
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
  cards: Villager[]
}

// prettier-ignore
export const cards: VillagerDetails[] = [
  /* Unknown Villager */
  { name: 'Unknown', suit: Suit.Unknown, exp: Exp.None, img_front: back_unknown, img_back: back_unknown,
    food: 0, builders: 0, gold: 0 },
  /* Grains Villagers */
  { name: 'Founders', suit: Suit.Grains, exp: Exp.Base, img_front: founders, img_back: back_founders,
    food: 1, builders: 0, gold: 2 },
  { name: 'Brewer', suit: Suit.Grains, exp: Exp.Base, img_front: brewer, img_back: back_grains ,
    food: 1, builders: 1, gold: 0 },
  { name: 'Poulterer', suit: Suit.Grains, exp: Exp.Base, img_front: poulterer, img_back: back_grains ,
    food: 1, builders: 0, gold: 3 },
  { name: 'Swineherd', suit: Suit.Grains, exp: Exp.Base, img_front: swineherd, img_back: back_grains ,
    food: 1, builders: 0, gold: 2 },
  { name: 'Truffler', suit: Suit.Grains, exp: Exp.Base, img_front: truffler, img_back: back_grains ,
    food: 1, builders: 0, gold: 8 },
  /* Wood Villagers */
  { name: 'Lumberjack', suit: Suit.Wood, exp: Exp.Base, img_front: lumberjack, img_back: back_lumberjack ,
    food: 0, builders: 0, gold: 0 },
  { name: 'Carpenter', suit: Suit.Wood, exp: Exp.Base, img_front: carpenter, img_back: back_wood ,
    food: 0, builders: 1, gold: 0 },
  { name: 'Cooper', suit: Suit.Wood, exp: Exp.Base, img_front: cooper, img_back: back_wood ,
    food: 0, builders: 0, gold: 4 },
  { name: 'Shipwright', suit: Suit.Wood, exp: Exp.Base, img_front: shipwright, img_back: back_wood ,
    food: 0, builders: 1, gold: 2 },
  { name: 'Wheeler', suit: Suit.Wood, exp: Exp.Base, img_front: wheeler, img_back: back_wood ,
    food: 0, builders: 0, gold: 3 },
  { name: 'Cartwright', suit: Suit.Wood, exp: Exp.Base, img_front: cartwright, img_back: back_wood ,
    food: 0, builders: 0, gold: 9 },
  { name: 'Wood Carver', suit: Suit.Wood, exp: Exp.Base, img_front: wood_carver, img_back: back_wood ,
    food: 0, builders: 0, gold: 0 },
  { name: 'Log Rafter', suit: Suit.Wood, exp: Exp.Base, img_front: log_rafter, img_back: back_wood ,
    food: 0, builders: 0, gold: 0 },
  { name: 'Healey', suit: Suit.Wood, exp: Exp.DiceTower, img_front: healey, img_back: back_wood ,
    food: 0, builders: 1, gold: 3 },
  { name: 'Arkwright', suit: Suit.Wood, exp: Exp.Profiteers, img_front: arkwright, img_back: back_wood ,
    food: 0, builders: 0, gold: 0 },
  /* Hay Villagers */
  { name: 'Hayer', suit: Suit.Hay, exp: Exp.Base, img_front: hayer, img_back: back_hayer ,
    food: 0, builders: 0, gold: 0 },
  { name: 'Thatcher', suit: Suit.Hay, exp: Exp.Base, img_front: thatcher, img_back: back_hay ,
    food: 0, builders: 1, gold: 2 },
  { name: 'Bed Builder', suit: Suit.Hay, exp: Exp.Base, img_front: bed_builder, img_back: back_hay ,
    food: 0, builders: 0, gold: 4 },
  { name: 'Grazier', suit: Suit.Hay, exp: Exp.Base, img_front: grazier, img_back: back_hay ,
    food: 1, builders: 0, gold: 0 },
  { name: 'Milk Maid', suit: Suit.Hay, exp: Exp.Base, img_front: milk_maid, img_back: back_hay ,
    food: 2, builders: 0, gold: 0 },
  { name: 'Fromager', suit: Suit.Hay, exp: Exp.Base, img_front: fromager, img_back: back_hay ,
    food: 1, builders: 0, gold: 15 },
  { name: 'Peddler', suit: Suit.Hay, exp: Exp.Base, img_front: peddler, img_back: back_hay ,
    food: 0, builders: 0, gold: 0 },
  { name: 'Horse Trader', suit: Suit.Hay, exp: Exp.Base, img_front: horse_trader, img_back: back_hay ,
    food: 0, builders: 0, gold: 0 },
  { name: 'Ore Muler', suit: Suit.Hay, exp: Exp.Base, img_front: ore_muler, img_back: back_hay ,
    food: 0, builders: 0, gold: 0 },
  { name: 'Vasel', suit: Suit.Hay, exp: Exp.DiceTower, img_front: vasel, img_back: back_hay ,
    food: 0, builders: 0, gold: 3 },
  { name: 'Carter', suit: Suit.Hay, exp: Exp.Profiteers, img_front: carter, img_back: back_hay ,
    food: 0, builders: 0, gold: 0 },
  /* Ore Villagers */
  { name: 'Miner', suit: Suit.Ore, exp: Exp.Base, img_front: miner, img_back: back_miner ,
    food: 0, builders: 0, gold: 0 },
  { name: 'Blacksmith', suit: Suit.Ore, exp: Exp.Base, img_front: blacksmith, img_back: back_ore ,
    food: 0, builders: 0, gold: 2 },
  { name: 'Glass Blower', suit: Suit.Ore, exp: Exp.Base, img_front: glass_blower, img_back: back_ore ,
    food: 0, builders: 0, gold: 4 },
  { name: 'Mason', suit: Suit.Ore, exp: Exp.Base, img_front: mason, img_back: back_ore ,
    food: 0, builders: 1, gold: 2 },
  { name: 'Seeker',  suit: Suit.Ore, exp: Exp.Base, img_front: seeker, img_back: back_ore ,
    food: 0, builders: 0, gold: 0 },
  { name: 'Spelunker', suit: Suit.Ore, exp: Exp.Base, img_front: spelunker, img_back: back_ore ,
    food: 0, builders: 0, gold: 10 },
  { name: 'Jeweler', suit: Suit.Ore, exp: Exp.Base, img_front: jeweler, img_back: back_ore ,
    food: 0, builders: 0, gold: 20 },
  { name: 'Locksmith', suit: Suit.Ore, exp: Exp.Base, img_front: locksmith, img_back: back_ore ,
    food: 0, builders: 0, gold: 0 },
  { name: 'Garcia', suit: Suit.Ore, exp: Exp.DiceTower, img_front: garcia, img_back: back_ore ,
    food: 1, builders: 0, gold: 3 },
  { name: 'Alchemist', suit: Suit.Ore, exp: Exp.Profiteers, img_front: alchemist, img_back: back_ore ,
    food: 0, builders: 0, gold: 0 },
  /* Grapes Villagers */
  { name: 'Graper', suit: Suit.Grapes, exp: Exp.Base, img_front: graper, img_back: back_grapes ,
    food: 1, builders: 0, gold: 0 },
  { name: 'Vintner', suit: Suit.Grapes, exp: Exp.Base, img_front: vintner, img_back: back_grapes ,
    food: 0, builders: 0, gold: 5 },
  { name: 'Wine Trader', suit: Suit.Grapes, exp: Exp.Base, img_front: wine_trader, img_back: back_grapes ,
    food: 0, builders: 0, gold: 14 },
  /* Wool Villagers */
  { name: 'Shepherd', suit: Suit.Wool, exp: Exp.FourPlayer, img_front: shepherd, img_back: back_wool ,
    food: 1, builders: 0, gold: 0 },
  { name: 'Spinner', suit: Suit.Wool, exp: Exp.FourPlayer, img_front: spinner, img_back: back_wool ,
    food: 0, builders: 0, gold: 4 },
  { name: 'Weaver', suit: Suit.Wool, exp: Exp.FourPlayer, img_front: weaver, img_back: back_wool ,
    food: 0, builders: 0, gold: 12 },
  { name: 'Tailor', suit: Suit.Wool, exp: Exp.FourPlayer, img_front: tailor, img_back: back_wool ,
    food: 0, builders: 0, gold: 24 },
  /* Leather Villagers */
  { name: 'Tanner', suit: Suit.Leather, exp: Exp.FourPlayer, img_front: tanner, img_back: back_leather ,
    food: 0, builders: 0, gold: 2 },
  { name: 'Saddler', suit: Suit.Leather, exp: Exp.FourPlayer, img_front: saddler, img_back: back_leather ,
    food: 0, builders: 0, gold: 5 },
  { name: 'Cobbler', suit: Suit.Leather, exp: Exp.FourPlayer, img_front: cobbler, img_back: back_leather ,
  food: 0, builders: 0, gold: 6 },
  /* Solitary Villagers */
  { name: 'Harvester', suit: Suit.Solitary, exp: Exp.Base, img_front: harvester, img_back: back_solitary ,
    food: 1, builders: 0, gold: 0 },
  { name: 'Hunter', suit: Suit.Solitary, exp: Exp.Base, img_front: hunter, img_back: back_solitary ,
    food: 1, builders: 0, gold: 0 },
  { name: 'Chandler', suit: Suit.Solitary, exp: Exp.Base, img_front: chandler, img_back: back_solitary ,
    food: 0, builders: 0, gold: 3 },
  { name: 'Wattler', suit: Suit.Solitary, exp: Exp.Base, img_front: wattler, img_back: back_solitary ,
    food: 0, builders: 1, gold: 0 },
  { name: 'Fisher', suit: Suit.Solitary, exp: Exp.Base, img_front: fisher, img_back: back_solitary ,
    food: 1, builders: 0, gold: 3 },
  { name: 'Beekeeper', suit: Suit.Solitary, exp: Exp.Base, img_front: beekeeper, img_back: back_solitary ,
    food: 0, builders: 0, gold: 4 },
  { name: 'Grocer', suit: Suit.Solitary, exp: Exp.Base, img_front: grocer, img_back: back_solitary ,
    food: 0, builders: 0, gold: 0 },
  { name: 'Freemason', suit: Suit.Solitary, exp: Exp.Base, img_front: freemason, img_back: back_solitary ,
    food: 0, builders: 0, gold: 0 },
  { name: 'Priest', suit: Suit.Solitary, exp: Exp.Base, img_front: priest, img_back: back_solitary ,
    food: 0, builders: 0, gold: 0 },
  { name: 'Agent', suit: Suit.Solitary, exp: Exp.Base, img_front: agent, img_back: back_solitary ,
    food: 0, builders: 0, gold: 0 },
  { name: 'Plower', suit: Suit.Solitary, exp: Exp.Promo1, img_front: plower, img_back: back_solitary ,
    food: 0, builders: 0, gold: 0 },
  { name: 'Scribe', suit: Suit.Solitary, exp: Exp.Promo1, img_front: scribe, img_back: back_solitary ,
    food: 0, builders: 0, gold: 0 },
  { name: 'Wholesaler', suit: Suit.Solitary, exp: Exp.Profiteers, img_front: wholesaler, img_back: back_solitary ,
    food: 0, builders: 0, gold: 0 },
  { name: 'Captain', suit: Suit.Solitary, exp: Exp.Profiteers, img_front: captain, img_back: back_solitary ,
    food: 0, builders: 0, gold: 0 },
  /* Special Villagers */
  { name: 'Monk', suit: Suit.Special, exp: Exp.Base, img_front: monk, img_back: back_special ,
    food: 0, builders: 0, gold: 0 },
  { name: 'Apprentice', suit: Suit.Special, exp: Exp.Base, img_front: apprentice, img_back: back_special ,
    food: 0, builders: 0, gold: 0 },
  { name: 'Tinner', suit: Suit.Special, exp: Exp.Base, img_front: tinner, img_back: back_special ,
    food: 0, builders: 0, gold: 0 },
  { name: 'Smuggler', suit: Suit.Special, exp: Exp.Base, img_front: smuggler, img_back: back_special ,
    food: 0, builders: 0, gold: 0 },
  { name: 'Freelancer', suit: Suit.Special, exp: Exp.Profiteers, img_front: freelancer, img_back: back_special,
    food: 0, builders: 0, gold: 0 },
  { name: 'Benefactor', suit: Suit.Special, exp: Exp.Saints, img_front: benefactor, img_back: back_special ,
    food: 0, builders: 0, gold: 0 },
  { name: 'Nun', suit: Suit.Special, exp: Exp.Saints, img_front: nun, img_back: back_special ,
    food: 0, builders: 0, gold: 0 },
  { name: 'Pigeoneer', suit: Suit.Special, exp: Exp.Saints, img_front: pigeoneer, img_back: back_special ,
    food: 0, builders: 0, gold: 0 },
  { name: 'Prophet', suit: Suit.Special, exp: Exp.Saints, img_front: prophet, img_back: back_special ,
    food: 0, builders: 0, gold: 0 },
  { name: 'Recruiter', suit: Suit.Special, exp: Exp.Saints, img_front: recruiter, img_back: back_special ,
    food: 0, builders: 0, gold: 0 },
  { name: 'Barbarian', suit: Suit.Special, exp: Exp.Scoundrels, img_front: barbarian, img_back: back_special ,
    food: 0, builders: 0, gold: 0 },
  { name: 'Courier', suit: Suit.Special, exp: Exp.Scoundrels, img_front: courier, img_back: back_special ,
    food: 0, builders: 0, gold: 0 },
  { name: 'Flaker', suit: Suit.Special, exp: Exp.Scoundrels, img_front: flaker, img_back: back_special ,
    food: 0, builders: 0, gold: 0 },
  { name: 'Noble', suit: Suit.Special, exp: Exp.Scoundrels, img_front: noble, img_back: back_special ,
    food: 0, builders: 0, gold: 0 },
  { name: 'Schemer', suit: Suit.Special, exp: Exp.Scoundrels, img_front: schemer, img_back: back_special ,
    food: 0, builders: 0, gold: 0 },
  { name: 'Thief', suit: Suit.Special, exp: Exp.Scoundrels, img_front: thief, img_back: back_special ,
    food: 0, builders: 0, gold: 0 },
  { name: 'Sheriff', suit: Suit.Special, exp: Exp.Scoundrels, img_front: sheriff, img_back: back_special ,
    food: 0, builders: 0, gold: 0 }
]

// prettier-ignore
export const suits: CardSet[] = [
  { /* Grains Villagers */
    name: 'Grains', img: suit_grains, color: '#92D1BB',
    cards: [Villager.Founders, Villager.Brewer, Villager.Poulterer, Villager.Swineherd, Villager.Truffler]
  },
  { /* Wood Villagers */
    name: 'Wood', img: suit_wood, color: '#9DC274',
    cards: [6, 7, 8, 9, 10, 11, 12, 13, 14, 15]
  },
  { /* Hay Villagers */
    name: 'Hay', img: suit_hay, color: '#7F499F',
    cards: [16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26]
  },
  { /* Ore Villagers */
    name: 'Ore', img: suit_ore, color: '#0D0709',
    cards: [27, 28, 29, 30, 31, 32, 33, 34, 35, 36]
  },
  { /* Grapes Villagers */
    name: 'Grapes', img: suit_grapes, color: '#F15FA7',
    cards: [Villager.Graper, Villager.Vintner, Villager.WineTrader]
  },
  { /* Wool Villagers */
    name: 'Wool', img: suit_wool, color: '#41B4D3',
    cards: [Villager.Shepherd, Villager.Spinner, Villager.Weaver, Villager.Tailor]
  },
  { /* Leather Villagers */
    name: 'Leather', img: suit_leather, color: '#FFC748',
    cards: [Villager.Tanner, Villager.Saddler, Villager.Cobbler]
  },
  { /* Solitary Villagers */
    name: 'Solitary', img: suit_solitary, color: '#814B26',
    cards: [47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60]
  },
  { /* Special Villagers */
    name: 'Special', img: suit_special, color: '#FE5240',
    cards: [61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77]
  }
]

// prettier-ignore
export const packs: CardSet[] = [
  { /* Base Game */
    name: 'Base', img: exp_base, color: '#8FD959',
    cards: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 16, 17, 18, 19, 20, 21, 22, 23, 24, 27, 28, 29, 30,
      31, 32, 33, 34, 37, 38, 39, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 61, 62, 63, 64]
  },
  { /* 4+ Players Expansion */
    name: '4+ Players', img: exp_4player, color: '#FF6153',
    cards: [40, 41, 42, 43, 44, 45, 46]
  },
  { /* Promo Pack #1 */
    name: 'Promo #1', img: exp_promo1, color: '#814B26',
    cards: [Villager.Plower, Villager.Scribe]
  },
  { /* Dice Tower Promo Cards */
    name: 'Dice Tower', img: exp_dicetower, color: '#B71427',
    cards: [Villager.Vasel, Villager.Garcia, Villager.Healey]
  },
  { /* Profiteers Expansion */
    name: 'Profiteers', img: exp_profiteers, color: '#999998',
    cards: [59, 65, 15,  26, 36, 60]
  },
  { /* Saints Expansion */
    name: 'Saints', img: exp_saints, color: '#E94FAC',
    cards: [Villager.Benefactor, Villager.Nun, Villager.Pigeoneer, Villager.Prophet, Villager.Recruiter]
  },
  { /* Scoundrels Expansion */
    name: 'Scoundrels', img: exp_scoundrels, color: '#2E629F',
    cards: [71, 72, 73, 74, 75, 76, 77]
  }
]
