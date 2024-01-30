type ValueWithUnit = {
  value: number
  unit: string
}

export type Beer = {
  id: number
  name: string
  tagline: string
  first_brewed: string
  description: string
  image_url: string
  abv: number
  ibu?: number
  target_fg: number
  target_og: number
  ebc?: number
  srm?: number
  ph?: number
  attenuation_level: number
  volume: ValueWithUnit
  boil_volume: ValueWithUnit
  method: {
    mash_temp?: {
      temp: ValueWithUnit
      duration?: number
    }[]
    fermentation: {
      temp: ValueWithUnit
    }
    twist?: string
  }
  ingredients: {
    malt?: {
      name: string
      amount: ValueWithUnit
    }[]
    hops?: {
      name: string
      amount: ValueWithUnit
      add: string
      attribute: string
    }[]
    yeast: string
  }
  food_pairing?: string[]
  brewers_tips: string
  contributed_by: string
}
