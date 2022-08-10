import { Villager } from "data/card/cards";

export interface Config {
  name: string
  color: string
  cards: Villager[]
}

export interface UserDataState {
  configs: Config[];
  selectedExps: number[]
}
