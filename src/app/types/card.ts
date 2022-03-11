type ErrateDate = {
  date: string
  timezone_type: number
  timezone: string
}

type DeckRequirementRandom = {
  target: string
  value: string
}

type DeckRequirement = {
  size: number
  card: unknown
  random: DeckRequirementRandom[]
}

type DeckOption = unknown

export type Card = {
  pack_code: string
  pack_name: string
  type_code: string
  faction_code: string
  faction_name: string
  position: number
  exceptional: boolean
  myriad: boolean
  code: string
  name: string
  real_name: string
  subname: string
  text: string
  real_text: string
  errate_date: ErrateDate
  quantity: number
  skill_willpower: number
  skill_intellect: number
  skill_combat: number
  skill_agility: number
  health: number
  health_per_investigator: false
  sanity: number
  deck_limit: number
  real_slot: string
  traits: string
  real_traits: string
  deck_requirements: DeckRequirement
  deck_options: DeckOption
  flavor: string,
  illustrator: string
  is_unique: boolean
  permanent: boolean
  double_sided: boolean
  back_text: string
  back_flavor: string
  octgn_id: string,
  url: string
  imagesrc: string
}
