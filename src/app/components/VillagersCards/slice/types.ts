export interface VillagersSuit {
  id: number
  name: string
  img: string
  color: string
  cards: VillagersCardDetails[]
}

export interface VillagersCardDetails {
  id: number
  name: string
  img_front: string
  img_back: string
}
