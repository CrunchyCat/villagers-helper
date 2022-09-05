import back_unknown from '../assets/cards/0.webp'
/* Grains Villager Assets */
import back_grains from '../assets/cards/0b.webp'
import founders from '../assets/cards/0_0.webp'
import back_founders from '../assets/cards/0_0b.webp'
import brewer from '../assets/cards/0_1.webp'
import poulterer from '../assets/cards/0_2.webp'
import swineherd from '../assets/cards/0_3.webp'
import truffler from '../assets/cards/0_4.webp'
/* Wood Villager Assets */
import back_wood from '../assets/cards/1b.webp'
import lumberjack from '../assets/cards/1_0.webp'
import back_lumberjack from '../assets/cards/1_0b.webp'
import carpenter from '../assets/cards/1_1.webp'
import cooper from '../assets/cards/1_2.webp'
import shipwright from '../assets/cards/1_3.webp'
import wheeler from '../assets/cards/1_4.webp'
import cartwright from '../assets/cards/1_5.webp'
import wood_carver from '../assets/cards/1_6.webp'
import log_rafter from '../assets/cards/1_7.webp'
import healey from '../assets/cards/1_8.webp'
import arkwright from '../assets/cards/1_9.webp'
/* Hay Villager Assets */
import back_hay from '../assets/cards/2b.webp'
import hayer from '../assets/cards/2_0.webp'
import back_hayer from '../assets/cards/2_0b.webp'
import thatcher from '../assets/cards/2_1.webp'
import bed_builder from '../assets/cards/2_2.webp'
import grazier from '../assets/cards/2_3.webp'
import milk_maid from '../assets/cards/2_4.webp'
import fromager from '../assets/cards/2_5.webp'
import peddler from '../assets/cards/2_6.webp'
import horse_trader from '../assets/cards/2_7.webp'
import ore_muler from '../assets/cards/2_8.webp'
import vasel from '../assets/cards/2_9.webp'
import carter from '../assets/cards/2_10.webp'
/* Ore Villager Assets */
import back_ore from '../assets/cards/3b.webp'
import miner from '../assets/cards/3_0.webp'
import back_miner from '../assets/cards/3_0b.webp'
import blacksmith from '../assets/cards/3_1.webp'
import glass_blower from '../assets/cards/3_2.webp'
import mason from '../assets/cards/3_3.webp'
import seeker from '../assets/cards/3_4.webp'
import spelunker from '../assets/cards/3_5.webp'
import jeweler from '../assets/cards/3_6.webp'
import locksmith from '../assets/cards/3_7.webp'
import garcia from '../assets/cards/3_8.webp'
import alchemist from '../assets/cards/3_9.webp'
/* Grapes Villager Assets */
import back_grapes from '../assets/cards/5b.webp'
import graper from '../assets/cards/5_0.webp'
import vintner from '../assets/cards/5_1.webp'
import wine_trader from '../assets/cards/5_2.webp'
/* Wool Villager Assets */
import back_wool from '../assets/cards/6b.webp'
import shepherd from '../assets/cards/6_0.webp'
import spinner from '../assets/cards/6_1.webp'
import weaver from '../assets/cards/6_2.webp'
import tailor from '../assets/cards/6_3.webp'
/* Leather Villager Assets */
import back_leather from '../assets/cards/7b.webp'
import saddler from '../assets/cards/7_1.webp'
import tanner from '../assets/cards/7_0.webp'
import cobbler from '../assets/cards/7_2.webp'
/* Solitary Villager Assets */
import back_solitary from '../assets/cards/8b.webp'
import harvester from '../assets/cards/8_0.webp'
import hunter from '../assets/cards/8_1.webp'
import chandler from '../assets/cards/8_2.webp'
import wattler from '../assets/cards/8_3.webp'
import fisher from '../assets/cards/8_4.webp'
import beekeeper from '../assets/cards/8_5.webp'
import grocer from '../assets/cards/8_6.webp'
import freemason from '../assets/cards/8_7.webp'
import priest from '../assets/cards/8_8.webp'
import agent from '../assets/cards/8_9.webp'
import plower from '../assets/cards/8_10.webp'
import scribe from '../assets/cards/8_11.webp'
import wholesaler from '../assets/cards/8_12.webp'
import captain from '../assets/cards/8_13.webp'
/* Special Villager Assets */
import back_special from '../assets/cards/9b.webp'
import monk from '../assets/cards/9_0.webp'
import apprentice from '../assets/cards/9_1.webp'
import tinner from '../assets/cards/9_2.webp'
import smuggler from '../assets/cards/9_3.webp'
import freelancer from '../assets/cards/9_4.webp'
import benefactor from '../assets/cards/9_5.webp'
import nun from '../assets/cards/9_6.webp'
import pigeoneer from '../assets/cards/9_7.webp'
import prophet from '../assets/cards/9_8.webp'
import recruiter from '../assets/cards/9_9.webp'
import barbarian from '../assets/cards/9_10.webp'
import courier from '../assets/cards/9_11.webp'
import flaker from '../assets/cards/9_12.webp'
import noble from '../assets/cards/9_13.webp'
import schemer from '../assets/cards/9_14.webp'
import thief from '../assets/cards/9_15.webp'
import sheriff from '../assets/cards/9_16.webp'
/* Suit Icons */
import suit_grains from '../assets/icons/suit_grains.webp'
import suit_wood from '../assets/icons/suit_wood.webp'
import suit_hay from '../assets/icons/suit_hay.webp'
import suit_ore from '../assets/icons/suit_ore.webp'
import suit_grapes from '../assets/icons/suit_grapes.webp'
import suit_wool from '../assets/icons/suit_wool.webp'
import suit_leather from '../assets/icons/suit_leather.webp'
import suit_solitary from '../assets/icons/suit_solitary.webp'
import suit_special from '../assets/icons/suit_special.webp'
/* Set/Expansion Icons */
import exp_all from '../assets/icons/exp_all.webp'
import exp_base from '../assets/icons/exp_base.webp'
import exp_4player from '../assets/icons/exp_4player.webp'
import exp_saints from '../assets/icons/exp_saints.webp'
import exp_scoundrels from '../assets/icons/exp_scoundrels.webp'
import exp_profiteers from '../assets/icons/exp_profiteers.webp'
import exp_promo1 from '../assets/icons/exp_promo1.webp'
import exp_dicetower from '../assets/icons/exp_dicetower.webp'

export type Gold = 'Gold' | 'Silver' | 'Bronze'

export enum View { Normal, Wide, Compact }
export const VIEWS_LENGTH = 3

export const enum Group { All, Suit, Exp }
export const GROUPS_LENGTH = 3

export const enum All { Unknown, All }
export const enum Suit { Unknown, Grains, Wood, Hay, Ore, Grapes, Wool, Leather, Solitary, Special }
export const enum Exp { None, Base, FourPlayer, Promo1, DiceTower, Profiteers, Saints, Scoundrels }

export const enum Villager {
  Unknown, Founders, Brewer, Poulterer, Swineherd, Truffler, Lumberjack, Carpenter, Cooper, Shipwright, Wheeler,
  Cartwright, WoodCarver, LogRafter, Healey, Arkwright, Hayer, Thatcher, BedBuilder, Grazier, MilkMaid, Fromager,
  Peddler, HorseTrader, OreMuler, Vasel, Carter, Miner, Blacksmith, GlassBlower, Mason, Seeker, Spelunker, Jeweler, 
  Locksmith, Garcia, Alchemist, Graper, Vintner, WineTrader, Shepherd, Spinner, Weaver, Tailor, Tanner, Saddler, 
  Cobbler, Harvester, Hunter, Chandler, Wattler, Fisher, Beekeeper, Grocer, Freemason, Priest, Agent, Plower, Scribe,
  Wholesaler, Captain, Monk, Apprentice, Tinner, Smuggler, Freelancer, Benefactor, Nun, Pigeoneer, Prophet, Recruiter,
  Barbarian, Courier, Flaker, Noble, Schemer, Thief, Sheriff
}

export interface VillagerDetails {
  name: string
  suit: Suit
  exp: Exp
  imgFront: string
  imgBack: string
  basic?: true
  above?: Villager // Villager this card is above
  below?: Villager[] // Villagers this card can be below
  symbols?: number // Number of symbols on card (specified only if not 1)
  lock?: Villager | null
  food?: number
  builders?: number
  gold?: {
    type: Gold
    amt: number
    condition: string
  }
  desc?: string
  clarification?: string[]
  use?: string
  draftPlay?: true
  discard?: true
}

export interface CardSet {
  name: string
  img: string
  color: string
  cards: Villager[]
  hide?: true
}

/* Private Functions for Calculating Card Info */

const enum Condition { Any, Each, All }

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
  if (type === 'Gold')
    return {type: type, amt: amt, condition: 'at each Market Phase'}
  if (quantifier === 1) {
    const strCondition = size ? `for every ${size} ${condition}s` : `for each ${condition}`
    return { type: type, amt: amt, condition: strCondition }
  }
  const strCondition = `x sum of ${quantifier === 0 ? 'one' : 'all'} ${condition}`
  return { type: type, amt: amt, condition: strCondition }
}

/* End of Private Functions */

export const cards: VillagerDetails[] = [
  /* Unknown Villager */
  { name: 'Unknown', suit: Suit.Unknown, exp: Exp.None, imgFront: back_unknown, imgBack: back_unknown },
  /* Grains Villagers */
  { name: 'Founders', suit: Suit.Grains, exp: Exp.Base, imgFront: founders, imgBack: back_founders,
    below: [Villager.Brewer, Villager.Poulterer, Villager.Swineherd], food: 1, gold: getGold('Gold', 2),
    desc: "Provides a Village with 2 Gold, or 1 Food if the player's Village has none at the end of the first Build Phase.",
    clarification: ["Founders can't be removed from your village, even by another player's apprentice.",
      "If you use an apprentice to replace a Founders card in your own village, you may choose which side is face-up."] },
  { name: 'Brewer', suit: Suit.Grains, exp: Exp.Base, imgFront: brewer, imgBack: back_grains,
    above: Villager.Founders, lock: Villager.Cooper, food: 1, builders: 1 },
  { name: 'Poulterer', suit: Suit.Grains, exp: Exp.Base, imgFront: poulterer, imgBack: back_grains,
    above: Villager.Founders, lock: Villager.Carpenter, food: 1, gold: getGold('Gold', 3) },
  { name: 'Swineherd', suit: Suit.Grains, exp: Exp.Base, imgFront: swineherd, imgBack: back_grains,
    above: Villager.Founders, below: [Villager.Swineherd], food: 1, gold: getGold('Gold', 2) },
  { name: 'Truffler', suit: Suit.Grains, exp: Exp.Base, imgFront: truffler, imgBack: back_grains,
    above: Villager.Swineherd, lock: Villager.Hunter, food: 1, gold: getGold('Gold', 8) },
  /* Wood Villagers */
  { name: 'Lumberjack', suit: Suit.Wood, exp: Exp.Base, imgFront: lumberjack, imgBack: back_lumberjack, basic: true,
    below: [Villager.Carpenter, Villager.Cooper, Villager.Shipwright, Villager.Wheeler, Villager.WoodCarver,
      Villager.LogRafter, Villager.Healey, Villager.Arkwright] },
  { name: 'Carpenter', suit: Suit.Wood, exp: Exp.Base, imgFront: carpenter, imgBack: back_wood,
    above: Villager.Lumberjack, builders: 1 },
  { name: 'Cooper', suit: Suit.Wood, exp: Exp.Base, imgFront: cooper, imgBack: back_wood,
    above: Villager.Lumberjack, lock: Villager.Blacksmith, gold: getGold('Gold', 4) },
  { name: 'Shipwright', suit: Suit.Wood, exp: Exp.Base, imgFront: shipwright, imgBack: back_wood,
    above: Villager.Lumberjack, builders: 1, gold: getGold('Gold', 2) },
  { name: 'Wheeler', suit: Suit.Wood, exp: Exp.Base, imgFront: wheeler, imgBack: back_wood,
    above: Villager.Lumberjack, below: [Villager.Cartwright], gold: getGold('Gold', 3) },
  { name: 'Cartwright', suit: Suit.Wood, exp: Exp.Base, imgFront: cartwright, imgBack: back_wood,
    above: Villager.Wheeler, gold: getGold('Gold', 9) },
  { name: 'Wood Carver', suit: Suit.Wood, exp: Exp.Base, imgFront: wood_carver, imgBack: back_wood,
    above: Villager.Lumberjack, gold: getGold('Silver', 1, Condition.All, "wood villagers' gold") },
  { name: 'Log Rafter', suit: Suit.Wood, exp: Exp.Base, imgFront: log_rafter, imgBack: back_wood,
    above: Villager.Lumberjack, symbols: 2, gold: getGold('Silver', 1, Condition.Each, "wood symbol") },
  { name: 'Healey', suit: Suit.Wood, exp: Exp.DiceTower, imgFront: healey, imgBack: back_wood,
    above: Villager.Lumberjack, lock: Villager.Vasel, builders: 1, gold: getGold('Gold', 3) },
  { name: 'Arkwright', suit: Suit.Wood, exp: Exp.Profiteers, imgFront: arkwright, imgBack: back_wood,
    above: Villager.Lumberjack, gold: getGold('Bronze', 2, Condition.Each, "wood symbol") },
  /* Hay Villagers */
  { name: 'Hayer', suit: Suit.Hay, exp: Exp.Base, imgFront: hayer, imgBack: back_hayer, basic: true,
    below: [Villager.Thatcher, Villager.BedBuilder, Villager.Grazier, Villager.Peddler, Villager.HorseTrader,
      Villager.OreMuler, Villager.Vasel, Villager.Carter]},
  { name: 'Thatcher', suit: Suit.Hay, exp: Exp.Base, imgFront: thatcher, imgBack: back_hay,
    above: Villager.Hayer, builders: 1, gold: getGold('Gold', 2) },
  { name: 'Bed Builder', suit: Suit.Hay, exp: Exp.Base, imgFront: bed_builder, imgBack: back_hay,
    above: Villager.Hayer, symbols: 2, lock: Villager.Carpenter, gold: getGold('Gold', 4) },
  { name: 'Grazier', suit: Suit.Hay, exp: Exp.Base, imgFront: grazier, imgBack: back_hay, above: Villager.Hayer,
    below: [Villager.MilkMaid], food: 1 },
  { name: 'Milk Maid', suit: Suit.Hay, exp: Exp.Base, imgFront: milk_maid, imgBack: back_hay,
    above: Villager.Grazier, below: [Villager.Fromager], lock: Villager.Cooper, food: 2 },
  { name: 'Fromager', suit: Suit.Hay, exp: Exp.Base, imgFront: fromager, imgBack: back_hay,
    above: Villager.MilkMaid, food: 1, gold: getGold('Gold', 15) },
  { name: 'Peddler', suit: Suit.Hay, exp: Exp.Base, imgFront: peddler, imgBack: back_hay,
    above: Villager.Hayer, lock: Villager.Cartwright, gold: getGold('Silver', 3, Condition.Each, 'gold symbol', 2) },
  { name: 'Horse Trader', suit: Suit.Hay, exp: Exp.Base, imgFront: horse_trader, imgBack: back_hay,
    above: Villager.Hayer, gold: getGold('Silver', 3, Condition.Each, 'hay symbol', 2) },
  { name: 'Ore Muler', suit: Suit.Hay, exp: Exp.Base, imgFront: ore_muler, imgBack: back_hay,
    above: Villager.Hayer, gold: getGold('Silver', 3, Condition.Each, 'ore symbol', 2) },
  { name: 'Vasel', suit: Suit.Hay, exp: Exp.DiceTower, imgFront: vasel, imgBack: back_hay,
    above: Villager.Hayer, gold: getGold('Gold', 3) },
  { name: 'Carter', suit: Suit.Hay, exp: Exp.Profiteers, imgFront: carter, imgBack: back_hay,
    above: Villager.Hayer, gold: getGold('Bronze', 1, Condition.Each, 'Production Chain with 3+ villagers') },
  /* Ore Villagers */
  { name: 'Miner', suit: Suit.Ore, exp: Exp.Base, imgFront: miner, imgBack: back_miner, basic: true,
    below: [Villager.Blacksmith, Villager.GlassBlower, Villager.Mason, Villager.Seeker, Villager.Locksmith,
      Villager.Garcia, Villager.Alchemist] },
  { name: 'Blacksmith', suit: Suit.Ore, exp: Exp.Base, imgFront: blacksmith, imgBack: back_ore,
    above: Villager.Miner, gold: getGold('Gold', 2) },
  { name: 'Glass Blower', suit: Suit.Ore, exp: Exp.Base, imgFront: glass_blower, imgBack: back_ore,
    above: Villager.Miner, symbols: 2, lock: Villager.Blacksmith, gold: getGold('Gold', 4) },
  { name: 'Mason', suit: Suit.Ore, exp: Exp.Base, imgFront: mason, imgBack: back_ore,
    above: Villager.Miner, builders: 1, gold: getGold('Gold', 2) },
  { name: 'Seeker', suit: Suit.Ore, exp: Exp.Base, imgFront: seeker, imgBack: back_ore, above: Villager.Miner,
    below: [Villager.Spelunker] },
  { name: 'Spelunker', suit: Suit.Ore, exp: Exp.Base, imgFront: spelunker, imgBack: back_ore,
    above: Villager.Seeker, below: [Villager.Jeweler], lock: Villager.Chandler, gold: getGold('Gold', 10) },
  { name: 'Jeweler', suit: Suit.Ore, exp: Exp.Base, imgFront: jeweler, imgBack: back_ore,
    above: Villager.Spelunker, lock: Villager.Blacksmith, gold: getGold('Gold', 20) },
  { name: 'Locksmith', suit: Suit.Ore, exp: Exp.Base, imgFront: locksmith, imgBack: back_ore,
    above: Villager.Miner, lock: Villager.Blacksmith },
  { name: 'Garcia', suit: Suit.Ore, exp: Exp.DiceTower, imgFront: garcia, imgBack: back_ore,
    above: Villager.Miner, lock: Villager.Vasel, food: 1, gold: getGold('Gold', 3) },
  { name: 'Alchemist', suit: Suit.Ore, exp: Exp.Profiteers, imgFront: alchemist, imgBack: back_ore,
    above: Villager.Miner, gold: getGold('Bronze', 0.5, Condition.Any, "villager's silver, rounding down") },
  /* Grapes Villagers */
  { name: 'Graper', suit: Suit.Grapes, exp: Exp.Base, imgFront: graper, imgBack: back_grapes,
    below: [Villager.Vintner], food: 1 },
  { name: 'Vintner', suit: Suit.Grapes, exp: Exp.Base, imgFront: vintner, imgBack: back_grapes,
    above: Villager.Graper, below: [Villager.WineTrader], lock: Villager.Cooper, gold: getGold('Gold', 5) },
  { name: 'Wine Trader', suit: Suit.Grapes, exp: Exp.Base, imgFront: wine_trader, imgBack: back_grapes,
    above: Villager.Vintner, lock: Villager.GlassBlower, gold: getGold('Gold', 14) },
  /* Wool Villagers */
  { name: 'Shepherd', suit: Suit.Wool, exp: Exp.FourPlayer, imgFront: shepherd, imgBack: back_wool,
    below: [Villager.Spinner], food: 1 },
  { name: 'Spinner', suit: Suit.Wool, exp: Exp.FourPlayer, imgFront: spinner, imgBack: back_wool,
    above: Villager.Shepherd, below: [Villager.Weaver], gold: getGold('Gold', 4) },
  { name: 'Weaver', suit: Suit.Wool, exp: Exp.FourPlayer, imgFront: weaver, imgBack: back_wool,
    above: Villager.Spinner, below: [Villager.Tailor], lock: Villager.Carpenter, gold: getGold('Gold', 12) },
  { name: 'Tailor', suit: Suit.Wool, exp: Exp.FourPlayer, imgFront: tailor, imgBack: back_wool,
    above: Villager.Weaver, gold: getGold('Gold', 24) },
  /* Leather Villagers */
  { name: 'Tanner', suit: Suit.Leather, exp: Exp.FourPlayer, imgFront: tanner, imgBack: back_leather,
    below: [Villager.Saddler, Villager.Cobbler], gold: getGold('Gold', 2) },
  { name: 'Saddler', suit: Suit.Leather, exp: Exp.FourPlayer, imgFront: saddler, imgBack: back_leather,
    above: Villager.Tanner, gold: getGold('Gold', 5) },
  { name: 'Cobbler', suit: Suit.Leather, exp: Exp.FourPlayer, imgFront: cobbler, imgBack: back_leather,
    above: Villager.Tanner, lock: Villager.Blacksmith, gold: getGold('Gold', 6) },
  /* Solitary Villagers */
  { name: 'Harvester', suit: Suit.Solitary, exp: Exp.Base, imgFront: harvester, imgBack: back_solitary, food: 1 },
  { name: 'Hunter', suit: Suit.Solitary, exp: Exp.Base, imgFront: hunter, imgBack: back_solitary, food: 1 },
  { name: 'Chandler', suit: Suit.Solitary, exp: Exp.Base, imgFront: chandler, imgBack: back_solitary,
    symbols: 2, gold: getGold('Gold', 3) },
  { name: 'Wattler', suit: Suit.Solitary, exp: Exp.Base, imgFront: wattler, imgBack: back_solitary, builders: 1 },
  { name: 'Fisher', suit: Suit.Solitary, exp: Exp.Base, imgFront: fisher, imgBack: back_solitary,
    lock: Villager.Shipwright, food: 1, gold: getGold('Gold', 3) },
  { name: 'Beekeeper', suit: Suit.Solitary, exp: Exp.Base, imgFront: beekeeper, imgBack: back_solitary,
    lock: Villager.Carpenter, gold: getGold('Gold', 4) },
  { name: 'Grocer', suit: Suit.Solitary, exp: Exp.Base, imgFront: grocer, imgBack: back_solitary,
    lock: Villager.Harvester, gold: getGold('Silver', 3, Condition.Each, "Food") },
  { name: 'Freemason', suit: Suit.Solitary, exp: Exp.Base, imgFront: freemason, imgBack: back_solitary,
    lock: Villager.Brewer, gold: getGold('Silver', 3, Condition.Each, "Builder") },
  { name: 'Priest', suit: Suit.Solitary, exp: Exp.Base, imgFront: priest, imgBack: back_solitary,
    lock: Villager.Chandler, gold: getGold('Silver', 3, Condition.Each, "solitary symbol", 2) },
  { name: 'Agent', suit: Suit.Solitary, exp: Exp.Base, imgFront: agent, imgBack: back_solitary,
    gold: getGold('Silver', 1, Condition.Any, "villager's coins sitting on top of the card") },
  { name: 'Plower', suit: Suit.Solitary, exp: Exp.Promo1, imgFront: plower, imgBack: back_solitary,
    gold: getGold('Silver', 2, Condition.Each, "grain symbol") },
  { name: 'Scribe', suit: Suit.Solitary, exp: Exp.Promo1, imgFront: scribe, imgBack: back_solitary,
    gold: getGold('Silver', 1, Condition.Each, "card in hand") },
  { name: 'Wholesaler', suit: Suit.Solitary, exp: Exp.Profiteers, imgFront: wholesaler, imgBack: back_solitary,
    gold: getGold('Silver', 3, Condition.Each, "set of 1 ore symbol, 1 hay symbol, & 1 wood symbol") },
  { name: 'Captain', suit: Suit.Solitary, exp: Exp.Profiteers, imgFront: captain, imgBack: back_solitary,
    gold: getGold('Bronze', 1, Condition.Each, "gold symbol") },
  /* Special Villagers */
  { name: 'Monk', suit: Suit.Special, exp: Exp.Base, imgFront: monk, imgBack: back_special,
    above: Villager.Unknown, below: [Villager.Unknown],
    desc: 'Can be used as any one villager in a Production Chain, except for the top (last) villager.',
    clarification: ["Can't be the top card (last) of a Production Chain at the end of your Build Phase.",
    'The card that is replaced must be immediately placed in your Village.',
    'Does not act as the card it is replacing, i.e., has no symbol other than the Special Suit Symbol.',
    'If used as the bottom (first) card of a Production Chain, it can have 2 cards on top of it. They must be of the same suit.'] },
  { name: 'Apprentice', suit: Suit.Special, exp: Exp.Base, imgFront: apprentice, imgBack: back_special,
    above: Villager.Unknown, below: [Villager.Unknown],
    desc: 'Can be used to replace any non-top villager (has at least one villager on it) in any Village.',
    clarification: ["Can't be the top card (last) of a Production Chain at the end of your Build Phase.",
      'The card that is replaced must be immediately placed in your Village.',
      "The Founders card of another player's Village may not be replaced, but your own Founders card can be.",
      "If you choose to replace your own Founders card, you may choose which side of it is face-up."] },
  { name: 'Tinner', suit: Suit.Special, exp: Exp.Base, imgFront: tinner, imgBack: back_special,
    desc: 'When played, any villagers played in your Village with padlocks can be unlocked for free during the current Build Phase.',
    clarification: ['Any villagers can be unlocked for free, even if they have different unlockers, regardless of if other players have the unlocking villagers.',
    "You may decide which villagers the Tinner applies to (in order to pay your own villagers for example)."],
    discard: true },
  { name: 'Smuggler', suit: Suit.Special, exp: Exp.Base, imgFront: smuggler, imgBack: back_special, lock: Villager.Shipwright,
    desc: 'Earn half of the printed gold value of a villager in your Village, rounding up.', discard: true },
  { name: 'Freelancer', suit: Suit.Special, exp: Exp.Profiteers, imgFront: freelancer, imgBack: back_special,
    desc: 'Any player may place 1 Gold on a Freelancer at the start of their Build Phase to get an extra Build Action.',
    clarification: ["You may pay any players' Freelancer, including your own, up to once per Build Phase.",
    'The maximum of 5 Build Actions per Build Phase still applies.'], use: 'Use at start of Build Phase' },
  /* Special Villagers - Saints */
  { name: 'Benefactor', suit: Suit.Special, exp: Exp.Saints, imgFront: benefactor, imgBack: back_special,
    desc: "Play a villager from your hand into your Village. It can't be a special villager.",
    clarification: ["You can't trade in the card you're playing to get a Basic villager. That action can only be taken during the Build Phase.",
    'If used to add Food to your villager, it is effective immediately, i.e, the current Draft Phase.'],
    draftPlay: true, discard: true },
  { name: 'Nun', suit: Suit.Special, exp: Exp.Saints, imgFront: nun, imgBack: back_special,
    desc: 'At the end of the game, the Nun awards an amount of Gold equal to the Silver value of any villager that you have only one of in your Village.'},
  { name: 'Pigeoneer', suit: Suit.Special, exp: Exp.Saints, imgFront: pigeoneer, imgBack: back_special,
    desc: 'Look at the top 6 cards of the Reserve & take any 1 of them directly to your hand. Return the rest in any order.',
    clarification: ['This does not count toward your Draft Limit.'], discard: true },
  { name: 'Prophet', suit: Suit.Special, exp: Exp.Saints, imgFront: prophet, imgBack: back_special,
    desc: 'Look through any stack on the Road & draft a villager from it. Return the rest of the stack to its place in any order.',
    clarification: ['This action counts as the Draft for this turn.',
    'May not be used to look through the Reserve (the Pigeoneer does that).'], draftPlay: true, discard: true },
  { name: 'Recruiter', suit: Suit.Special, exp: Exp.Saints, imgFront: recruiter, imgBack: back_special,
    desc: 'In every Draft Phase turn, you may choose to pay 1 Gold to draft 2 villagers instead of 1.',
    clarification: ['Your Food Limit still applies.', 'Replace face-up cards before drafting a second time.'],
    use: 'Use at start of any Draft Phase turn' },
  /* Special Villagers - Scoundrels */
  { name: 'Barbarian', suit: Suit.Special, exp: Exp.Scoundrels, imgFront: barbarian, imgBack: back_special,
    desc: 'Discard all villagers on the Road, taking the coins into your supply. Replace the villagers with villagers from the Reserve.',
    draftPlay: true, discard: true },
  { name: 'Courier', suit: Suit.Special, exp: Exp.Scoundrels, imgFront: courier, imgBack: back_special,
    desc: "In another player's turn, before a card is drafted, take a villager from the road directly to your hand.",
    clarification: ['Must be used before current player has drafted a card.', 'This does not count toward your Draft Limit.',
    'Replace face-up cards after drafting.'], draftPlay: true, discard: true },
  { name: 'Flaker', suit: Suit.Special, exp: Exp.Scoundrels, imgFront: flaker, imgBack: back_special,
    desc: "Take a villager from any player's Village Square directly to your hand.",
    clarification: ['This does not count toward your Draft Limit.', 'May be used on your own Village Square (thus allowing an extra draft).'],
    draftPlay: true, discard: true },
  { name: 'Noble', suit: Suit.Special, exp: Exp.Scoundrels, imgFront: noble, imgBack: back_special,
    desc: "Look through another player's hand & steal one villager from that hand. It can't be a special villager.",
    clarification: ["You may look at both sides of the other player's cards.", 'This does not count toward your Draft Limit.'], discard: true },
  { name: 'Schemer', suit: Suit.Special, exp: Exp.Scoundrels, imgFront: schemer, imgBack: back_special,
    desc: "Steal a top (last in a Production Chain) villager from any Village. It can't be a special Villager.",
    clarification: ['Any coins on the stolen villager go to the Supply of the player stolen from.',
    'May be used to take one of your own Villagers back to your hand.'], discard: true },
  { name: 'Thief', suit: Suit.Special, exp: Exp.Scoundrels, imgFront: thief, imgBack: back_special,
    desc: "In every Build Phase, take 3 Gold from another player's Supply & place them on the Thief.",
    clarification: ['Coins on the Theif may be scored by other villagers, such as the Agent & the Arkwright.',
    'You cannot steal coins from a player with fewer than 3 Gold in their Supply.',
    "You can only steal from another player's Supply, not from Gold placed on their villagers.",
    'Coins on the Thief are scored in the Market Phases, just like other villagers with coins placed on them.'], use: 'Use during Draft Phase' },
  { name: 'Sheriff', suit: Suit.Special, exp: Exp.Scoundrels, imgFront: sheriff, imgBack: back_special,
    desc: 'Discard a Thief belonging to any player. Take its coins to your Supply.',
    clarification: ['May be used on your own Thief to move the coins to your Supply.'], discard: true },
]

export const groups: { name: string, sets: CardSet[] }[] = [
  {
    name: 'all',
    sets: [
      { /* All Villagers */
        name: 'All', img: exp_all, color: '#CC6A00',
        cards: [Villager.Agent, Villager.Alchemist, Villager.Apprentice, Villager.Arkwright, Villager.Barbarian,
        Villager.BedBuilder, Villager.Beekeeper, Villager.Benefactor, Villager.Blacksmith, Villager.Brewer,
        Villager.Captain, Villager.Carpenter, Villager.Carter, Villager.Cartwright, Villager.Chandler,
        Villager.Cobbler, Villager.Cooper, Villager.Courier, Villager.Fisher, Villager.Flaker, Villager.Founders,
        Villager.Freelancer, Villager.Freemason, Villager.Fromager, Villager.Garcia, Villager.GlassBlower,
        Villager.Graper, Villager.Grazier, Villager.Grocer, Villager.Harvester, Villager.Hayer, Villager.Healey,
        Villager.HorseTrader, Villager.Hunter, Villager.Jeweler, Villager.Locksmith, Villager.LogRafter,
        Villager.Lumberjack, Villager.Mason, Villager.MilkMaid, Villager.Miner, Villager.Monk, Villager.Noble,
        Villager.Nun, Villager.OreMuler, Villager.Peddler, Villager.Pigeoneer, Villager.Plower, Villager.Poulterer,
        Villager.Priest, Villager.Prophet, Villager.Recruiter, Villager.Saddler, Villager.Schemer, Villager.Scribe,
        Villager.Seeker, Villager.Shepherd, Villager.Sheriff, Villager.Shipwright, Villager.Smuggler,
        Villager.Spelunker, Villager.Spinner, Villager.Swineherd, Villager.Tailor, Villager.Tanner, Villager.Thatcher,
        Villager.Thief, Villager.Tinner, Villager.Truffler, Villager.Vasel, Villager.Vintner, Villager.Wattler,
        Villager.Weaver, Villager.Wheeler, Villager.Wholesaler, Villager.WineTrader, Villager.WoodCarver]
      }
    ]
  },
  {
    name: 'suit',
    sets: [
      { /* Unknown Villager */
        name: 'Unknown', img: exp_base, color: '#D6D4CF',
        cards: [Villager.Unknown], hide: true
      },
      { /* Grains Villagers */
        name: 'Grains', img: suit_grains, color: '#92D1BB',
        cards: [Villager.Founders, Villager.Brewer, Villager.Poulterer, Villager.Swineherd, Villager.Truffler]
      },
      { /* Wood Villagers */
        name: 'Wood', img: suit_wood, color: '#9DC274',
        cards: [Villager.Lumberjack, Villager.Carpenter, Villager.Cooper, Villager.Shipwright, Villager.Wheeler,
          Villager.Cartwright, Villager.WoodCarver, Villager.LogRafter, Villager.Healey, Villager.Arkwright]
      },
      { /* Hay Villagers */
        name: 'Hay', img: suit_hay, color: '#7F499F',
        cards: [Villager.Hayer, Villager.Thatcher, Villager.BedBuilder, Villager.Grazier, Villager.MilkMaid,
          Villager.Fromager, Villager.Peddler, Villager.HorseTrader, Villager.OreMuler, Villager.Vasel, Villager.Carter]
      },
      { /* Ore Villagers */
        name: 'Ore', img: suit_ore, color: '#0D0709',
        cards: [Villager.Miner, Villager.Blacksmith, Villager.GlassBlower, Villager.Mason, Villager.Seeker,
          Villager.Spelunker, Villager.Jeweler, Villager.Locksmith, Villager.Garcia, Villager.Alchemist]
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
        cards: [Villager.Harvester, Villager.Hunter, Villager.Chandler, Villager.Wattler, Villager.Fisher,
          Villager.Beekeeper, Villager.Grocer, Villager.Freemason, Villager.Priest, Villager.Agent, Villager.Plower,
          Villager.Scribe, Villager.Wholesaler, Villager.Captain]
      },
      { /* Special Villagers */
        name: 'Special', img: suit_special, color: '#FE5240',
        cards: [Villager.Monk, Villager.Apprentice, Villager.Tinner, Villager.Smuggler, Villager.Freelancer,
          Villager.Benefactor, Villager.Nun, Villager.Pigeoneer, Villager.Prophet, Villager.Recruiter, Villager.Barbarian,
          Villager.Courier, Villager.Flaker, Villager.Noble, Villager.Schemer, Villager.Thief, Villager.Sheriff]
      }
    ]
  },
  {
    name: 'expansions',
    sets: [
      { /* None/Unknown */
        name: 'None', img: exp_base, color: '#D6D4CF',
        cards: [Villager.Unknown], hide: true
      },
      { /* Base Game */
        name: 'Base', img: exp_base, color: '#83D67F',
        cards: [Villager.Founders, Villager.Brewer, Villager.Poulterer, Villager.Swineherd, Villager.Truffler,
          Villager.Lumberjack, Villager.Carpenter, Villager.Cooper, Villager.Shipwright, Villager.Wheeler,
          Villager.Cartwright, Villager.WoodCarver, Villager.LogRafter, Villager.Hayer, Villager.Thatcher,
          Villager.BedBuilder, Villager.Grazier, Villager.MilkMaid, Villager.Fromager, Villager.Peddler,
          Villager.HorseTrader, Villager.OreMuler, Villager.Miner, Villager.Blacksmith, Villager.GlassBlower,
          Villager.Mason, Villager.Seeker, Villager.Spelunker, Villager.Jeweler, Villager.Locksmith, Villager.Graper,
          Villager.Vintner, Villager.WineTrader, Villager.Harvester, Villager.Hunter, Villager.Chandler,
          Villager.Wattler, Villager.Fisher, Villager.Beekeeper, Villager.Grocer, Villager.Freemason, Villager.Priest,
          Villager.Agent, Villager.Monk, Villager.Apprentice, Villager.Tinner, Villager.Smuggler]
      },
      { /* 4+ Players Expansion */
        name: '4+ Players', img: exp_4player, color: '#FF6153',
        cards: [Villager.Shepherd, Villager.Spinner, Villager.Weaver, Villager.Tailor, Villager.Tanner, Villager.Saddler, Villager.Cobbler]
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
        cards: [Villager.Wholesaler, Villager.Freelancer, Villager.Arkwright, Villager.Carter, Villager.Alchemist, Villager.Captain]
      },
      { /* Saints Expansion */
        name: 'Saints', img: exp_saints, color: '#E94FAC',
        cards: [Villager.Benefactor, Villager.Nun, Villager.Pigeoneer, Villager.Prophet, Villager.Recruiter]
      },
      { /* Scoundrels Expansion */
        name: 'Scoundrels', img: exp_scoundrels, color: '#2E629F',
        cards: [Villager.Barbarian, Villager.Courier, Villager.Flaker, Villager.Noble, Villager.Schemer, Villager.Thief, Villager.Sheriff]
      }
    ]
  }
]