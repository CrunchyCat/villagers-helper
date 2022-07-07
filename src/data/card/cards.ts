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

export enum Gold { Gold, Silver, Bronze }

export enum Villager {
  Unknown, Founders, Brewer, Poulterer, Swineherd, Truffler, Lumberjack, Carpenter, Cooper, Shipwright, Wheeler,
  Cartwright, WoodCarver, LogRafter, Healey, Arkwright, Hayer, Thatcher, BedBuilder, Grazier, MilkMaid, Fromager,
  Peddler, HorseTrader, OreMuler, Vasel, Carter, Miner, Blacksmith, GlassBlower, Mason, Seeker, Spelunker, Jeweler, 
  Locksmith, Garcia, Alchemist, Graper, Vintner, WineTrader, Shepherd, Spinner, Weaver, Tailor, Tanner, Saddler, 
  Cobbler, Harvester, Hunter, Chandler, Wattler, Fisher, Beekeeper, Grocer, Freemason, Priest, Agent, Plower, Scribe,
  Wholesaler, Captain, Monk, Apprentice, Tinner, Smuggler, Freelancer, Benefactor, Nun, Pigeoneer, Prophet, Recruiter,
  Barbarian, Courier, Flaker, Noble, Schemer, Thief, Sheriff
}

export enum Suit { Unknown, Grains, Wood, Hay, Ore, Grapes, Wool, Leather, Solitary, Special }
export enum Exp { None, Base, FourPlayer, Promo1, DiceTower, Profiteers, Saints, Scoundrels }

export type VillagerDetails = {
  name: string
  suit: Suit
  exp: Exp
  imgFront: string
  imgBack: string
  food?: number
  builders?: number
  lock?: Villager | null
  gold?: {
    type: Gold
    amt: number
    condition: string
  }
}

export type CardSet = {
  name: string
  img: string
  color: string
  cards: Villager[]
  hide?: boolean
}

/* Private Functions for Calculating Card Info */

enum Condition { Any, Each, All }

/**
 * Creates a Conditional Gold Object
 * @param type - Type of gold (gold, silver, or bronze)
 * @param amt - Amount of gold rewarded for the condition
 * @param quantifier - 0: Any, 1: Each, 2: All
 * @param condition - Thing being counted (ie. Hay Symbols)
 * @param size - Size of the condition set (ie. Every *1* Hay Symbol)
 * @returns Conditional Gold Object
 */
 const getGold = (type: Gold, amt: number, quantifier?: Condition, condition?: string, size?: number) => {
  if (type === Gold.Gold)
    return {type: type, amt: amt, condition: 'at each market phase'}
  if (quantifier === 1) {
    const strCondition = size ? `for every ${size} ${condition}s` : `for each ${condition}`
    return { type: type, amt: amt, condition: strCondition }
  }
  const strCondition = `sum of ${quantifier === 0 ? '1' : 'all'} ${condition}`
  return { type: type, amt: amt, condition: strCondition }
}

/* End of Private Functions */

export const cards: VillagerDetails[] = [
  /* Unknown Villager */
  { name: 'Unknown', suit: Suit.Unknown, exp: Exp.None, imgFront: back_unknown, imgBack: back_unknown },
  /* Grains Villagers */
  { name: 'Founders', suit: Suit.Grains, exp: Exp.Base, imgFront: founders, imgBack: back_founders,
    food: 1, gold: getGold(Gold.Gold, 2) },
  { name: 'Brewer', suit: Suit.Grains, exp: Exp.Base, imgFront: brewer, imgBack: back_grains,
    food: 1, builders: 1, lock: Villager.Cooper },
  { name: 'Poulterer', suit: Suit.Grains, exp: Exp.Base, imgFront: poulterer, imgBack: back_grains,
    food: 1, lock: Villager.Carpenter, gold: getGold(Gold.Gold, 3) },
  { name: 'Swineherd', suit: Suit.Grains, exp: Exp.Base, imgFront: swineherd, imgBack: back_grains,
    food: 1, gold: getGold(Gold.Gold, 2) },
  { name: 'Truffler', suit: Suit.Grains, exp: Exp.Base, imgFront: truffler, imgBack: back_grains,
    food: 1, lock: Villager.Hunter, gold: getGold(Gold.Gold, 8) },
  /* Wood Villagers */
  { name: 'Lumberjack', suit: Suit.Wood, exp: Exp.Base, imgFront: lumberjack, imgBack: back_lumberjack },
  { name: 'Carpenter', suit: Suit.Wood, exp: Exp.Base, imgFront: carpenter, imgBack: back_wood, builders: 1},
  { name: 'Cooper', suit: Suit.Wood, exp: Exp.Base, imgFront: cooper, imgBack: back_wood,
    lock: Villager.Blacksmith, gold: getGold(Gold.Gold, 4) },
  { name: 'Shipwright', suit: Suit.Wood, exp: Exp.Base, imgFront: shipwright, imgBack: back_wood,
    builders: 1, gold: getGold(Gold.Gold, 2) },
  { name: 'Wheeler', suit: Suit.Wood, exp: Exp.Base, imgFront: wheeler, imgBack: back_wood,
    gold: getGold(Gold.Gold, 3) },
  { name: 'Cartwright', suit: Suit.Wood, exp: Exp.Base, imgFront: cartwright, imgBack: back_wood,
    gold: getGold(Gold.Gold, 9) },
  { name: 'Wood Carver', suit: Suit.Wood, exp: Exp.Base, imgFront: wood_carver, imgBack: back_wood,
    gold: getGold(Gold.Silver, 1, Condition.All, "wood villagers' gold") },
  { name: 'Log Rafter', suit: Suit.Wood, exp: Exp.Base, imgFront: log_rafter, imgBack: back_wood,
    gold: getGold(Gold.Silver, 1, Condition.Each, "wood symbol") },
  { name: 'Healey', suit: Suit.Wood, exp: Exp.DiceTower, imgFront: healey, imgBack: back_wood,
    builders: 1, lock: Villager.Vasel, gold: getGold(Gold.Gold, 3) },
  { name: 'Arkwright', suit: Suit.Wood, exp: Exp.Profiteers, imgFront: arkwright, imgBack: back_wood,
    gold: getGold(Gold.Bronze, 2, Condition.Each, "wood symbol") },
  /* Hay Villagers */
  { name: 'Hayer', suit: Suit.Hay, exp: Exp.Base, imgFront: hayer, imgBack: back_hayer },
  { name: 'Thatcher', suit: Suit.Hay, exp: Exp.Base, imgFront: thatcher, imgBack: back_hay,
    builders: 1, gold: getGold(Gold.Gold, 2) },
  { name: 'Bed Builder', suit: Suit.Hay, exp: Exp.Base, imgFront: bed_builder, imgBack: back_hay,
    lock: Villager.Carpenter, gold: getGold(Gold.Gold, 4) },
  { name: 'Grazier', suit: Suit.Hay, exp: Exp.Base, imgFront: grazier, imgBack: back_hay, food: 1},
  { name: 'Milk Maid', suit: Suit.Hay, exp: Exp.Base, imgFront: milk_maid, imgBack: back_hay,
    food: 2, lock: Villager.Cooper },
  { name: 'Fromager', suit: Suit.Hay, exp: Exp.Base, imgFront: fromager, imgBack: back_hay,
    food: 1, gold: getGold(Gold.Gold, 15) },
  { name: 'Peddler', suit: Suit.Hay, exp: Exp.Base, imgFront: peddler, imgBack: back_hay,
    lock: Villager.Cartwright, gold: getGold(Gold.Silver, 3, Condition.Each, 'gold symbol', 2) },
  { name: 'Horse Trader', suit: Suit.Hay, exp: Exp.Base, imgFront: horse_trader, imgBack: back_hay,
    gold: getGold(Gold.Silver, 3, Condition.Each, 'hay symbol', 2) },
  { name: 'Ore Muler', suit: Suit.Hay, exp: Exp.Base, imgFront: ore_muler, imgBack: back_hay,
    gold: getGold(Gold.Silver, 3, Condition.Each, 'ore symbol', 2) },
  { name: 'Vasel', suit: Suit.Hay, exp: Exp.DiceTower, imgFront: vasel, imgBack: back_hay,
    gold: getGold(Gold.Gold, 3) },
  { name: 'Carter', suit: Suit.Hay, exp: Exp.Profiteers, imgFront: carter, imgBack: back_hay,
    gold: getGold(Gold.Bronze, 1, Condition.Each, 'production chain with 3+ villagers') },
  /* Ore Villagers */
  { name: 'Miner', suit: Suit.Ore, exp: Exp.Base, imgFront: miner, imgBack: back_miner },
  { name: 'Blacksmith', suit: Suit.Ore, exp: Exp.Base, imgFront: blacksmith, imgBack: back_ore,
    gold: getGold(Gold.Gold, 2) },
  { name: 'Glass Blower', suit: Suit.Ore, exp: Exp.Base, imgFront: glass_blower, imgBack: back_ore,
    lock: Villager.Blacksmith, gold: getGold(Gold.Gold, 4) },
  { name: 'Mason', suit: Suit.Ore, exp: Exp.Base, imgFront: mason, imgBack: back_ore,
    builders: 1, gold: getGold(Gold.Gold, 2) },
  { name: 'Seeker',  suit: Suit.Ore, exp: Exp.Base, imgFront: seeker, imgBack: back_ore },
  { name: 'Spelunker', suit: Suit.Ore, exp: Exp.Base, imgFront: spelunker, imgBack: back_ore,
    lock: Villager.Chandler, gold: getGold(Gold.Gold, 10) },
  { name: 'Jeweler', suit: Suit.Ore, exp: Exp.Base, imgFront: jeweler, imgBack: back_ore,
    lock: Villager.Blacksmith, gold: getGold(Gold.Gold, 20) },
  { name: 'Locksmith', suit: Suit.Ore, exp: Exp.Base, imgFront: locksmith, imgBack: back_ore,
    lock: Villager.Blacksmith },
  { name: 'Garcia', suit: Suit.Ore, exp: Exp.DiceTower, imgFront: garcia, imgBack: back_ore,
    food: 1, lock: Villager.Vasel, gold: getGold(Gold.Gold, 3) },
  { name: 'Alchemist', suit: Suit.Ore, exp: Exp.Profiteers, imgFront: alchemist, imgBack: back_ore,
    gold: getGold(Gold.Bronze, 0.5, Condition.Any, "villager's silver, rounding down") },
  /* Grapes Villagers */
  { name: 'Graper', suit: Suit.Grapes, exp: Exp.Base, imgFront: graper, imgBack: back_grapes, food: 1},
  { name: 'Vintner', suit: Suit.Grapes, exp: Exp.Base, imgFront: vintner, imgBack: back_grapes,
    lock: Villager.Cooper, gold: getGold(Gold.Gold, 5) },
  { name: 'Wine Trader', suit: Suit.Grapes, exp: Exp.Base, imgFront: wine_trader, imgBack: back_grapes,
    lock: Villager.GlassBlower, gold: getGold(Gold.Gold, 14) },
  /* Wool Villagers */
  { name: 'Shepherd', suit: Suit.Wool, exp: Exp.FourPlayer, imgFront: shepherd, imgBack: back_wool, food: 1},
  { name: 'Spinner', suit: Suit.Wool, exp: Exp.FourPlayer, imgFront: spinner, imgBack: back_wool,
    gold: getGold(Gold.Gold, 4) },
  { name: 'Weaver', suit: Suit.Wool, exp: Exp.FourPlayer, imgFront: weaver, imgBack: back_wool,
    lock: Villager.Carpenter, gold: getGold(Gold.Gold, 12) },
  { name: 'Tailor', suit: Suit.Wool, exp: Exp.FourPlayer, imgFront: tailor, imgBack: back_wool,
    gold: getGold(Gold.Gold, 24) },
  /* Leather Villagers */
  { name: 'Tanner', suit: Suit.Leather, exp: Exp.FourPlayer, imgFront: tanner, imgBack: back_leather,
    gold: getGold(Gold.Gold, 2) },
  { name: 'Saddler', suit: Suit.Leather, exp: Exp.FourPlayer, imgFront: saddler, imgBack: back_leather,
    gold: getGold(Gold.Gold, 5) },
  { name: 'Cobbler', suit: Suit.Leather, exp: Exp.FourPlayer, imgFront: cobbler, imgBack: back_leather,
    lock: Villager.Blacksmith, gold: getGold(Gold.Gold, 6) },
  /* Solitary Villagers */
  { name: 'Harvester', suit: Suit.Solitary, exp: Exp.Base, imgFront: harvester, imgBack: back_solitary, food: 1},
  { name: 'Hunter', suit: Suit.Solitary, exp: Exp.Base, imgFront: hunter, imgBack: back_solitary, food: 1},
  { name: 'Chandler', suit: Suit.Solitary, exp: Exp.Base, imgFront: chandler, imgBack: back_solitary,
    gold: getGold(Gold.Gold, 3) },
  { name: 'Wattler', suit: Suit.Solitary, exp: Exp.Base, imgFront: wattler, imgBack: back_solitary, builders: 1},
  { name: 'Fisher', suit: Suit.Solitary, exp: Exp.Base, imgFront: fisher, imgBack: back_solitary,
    food: 1, lock: Villager.Shipwright, gold: getGold(Gold.Gold, 3) },
  { name: 'Beekeeper', suit: Suit.Solitary, exp: Exp.Base, imgFront: beekeeper, imgBack: back_solitary,
    lock: Villager.Carpenter, gold: getGold(Gold.Gold, 4) },
  { name: 'Grocer', suit: Suit.Solitary, exp: Exp.Base, imgFront: grocer, imgBack: back_solitary,
    lock: Villager.Harvester, gold: getGold(Gold.Silver, 3, Condition.Each, "food") },
  { name: 'Freemason', suit: Suit.Solitary, exp: Exp.Base, imgFront: freemason, imgBack: back_solitary,
    lock: Villager.Brewer, gold: getGold(Gold.Silver, 3, Condition.Each, "builder") },
  { name: 'Priest', suit: Suit.Solitary, exp: Exp.Base, imgFront: priest, imgBack: back_solitary,
    lock: Villager.Chandler, gold: getGold(Gold.Silver, 3, Condition.Each, "solitary symbol", 2) },
  { name: 'Agent', suit: Suit.Solitary, exp: Exp.Base, imgFront: agent, imgBack: back_solitary,
    gold: getGold(Gold.Silver, 1, Condition.Any, "villager's coins sitting on top of the card") },
  { name: 'Plower', suit: Suit.Solitary, exp: Exp.Promo1, imgFront: plower, imgBack: back_solitary,
    gold: getGold(Gold.Silver, 2, Condition.Each, "grain symbol") },
  { name: 'Scribe', suit: Suit.Solitary, exp: Exp.Promo1, imgFront: scribe, imgBack: back_solitary,
    gold: getGold(Gold.Silver, 1, Condition.Each, "card in hand") },
  { name: 'Wholesaler', suit: Suit.Solitary, exp: Exp.Profiteers, imgFront: wholesaler, imgBack: back_solitary,
    gold: getGold(Gold.Silver, 3, Condition.Each, "set of 1 ore symbol, 1 hay symbol, & 1 wood symbol") },
  { name: 'Captain', suit: Suit.Solitary, exp: Exp.Profiteers, imgFront: captain, imgBack: back_solitary,
    gold: getGold(Gold.Bronze, 1, Condition.Each, "gold symbol") },
  /* Special Villagers */
  { name: 'Monk', suit: Suit.Special, exp: Exp.Base, imgFront: monk, imgBack: back_special },
  { name: 'Apprentice', suit: Suit.Special, exp: Exp.Base, imgFront: apprentice, imgBack: back_special },
  { name: 'Tinner', suit: Suit.Special, exp: Exp.Base, imgFront: tinner, imgBack: back_special },
  { name: 'Smuggler', suit: Suit.Special, exp: Exp.Base, imgFront: smuggler, imgBack: back_special,
    lock: Villager.Shipwright },
  { name: 'Freelancer', suit: Suit.Special, exp: Exp.Profiteers, imgFront: freelancer, imgBack: back_special },
  { name: 'Benefactor', suit: Suit.Special, exp: Exp.Saints, imgFront: benefactor, imgBack: back_special },
  { name: 'Nun', suit: Suit.Special, exp: Exp.Saints, imgFront: nun, imgBack: back_special },
  { name: 'Pigeoneer', suit: Suit.Special, exp: Exp.Saints, imgFront: pigeoneer, imgBack: back_special },
  { name: 'Prophet', suit: Suit.Special, exp: Exp.Saints, imgFront: prophet, imgBack: back_special },
  { name: 'Recruiter', suit: Suit.Special, exp: Exp.Saints, imgFront: recruiter, imgBack: back_special },
  { name: 'Barbarian', suit: Suit.Special, exp: Exp.Scoundrels, imgFront: barbarian, imgBack: back_special },
  { name: 'Courier', suit: Suit.Special, exp: Exp.Scoundrels, imgFront: courier, imgBack: back_special },
  { name: 'Flaker', suit: Suit.Special, exp: Exp.Scoundrels, imgFront: flaker, imgBack: back_special },
  { name: 'Noble', suit: Suit.Special, exp: Exp.Scoundrels, imgFront: noble, imgBack: back_special },
  { name: 'Schemer', suit: Suit.Special, exp: Exp.Scoundrels, imgFront: schemer, imgBack: back_special },
  { name: 'Thief', suit: Suit.Special, exp: Exp.Scoundrels, imgFront: thief, imgBack: back_special },
  { name: 'Sheriff', suit: Suit.Special, exp: Exp.Scoundrels, imgFront: sheriff, imgBack: back_special }
]

export const suits: CardSet[] = [
  { /* Unknown Villager */
    name: 'Unknown', img: back_unknown, color: '#92D1BB',
    cards: [Villager.Unknown], hide: true
  },
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

export const exps: CardSet[] = [
  { /* None/Unknown */
    name: 'None', img: exp_base, color: '#8FD959',
    cards: [Villager.Unknown], hide: true
  },
  { /* Base Game */
    name: 'Base', img: exp_base, color: '#83D67F',
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
