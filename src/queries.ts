import { useQuery } from 'react-query'
import { Beer } from './beer'

export const useBeers = () =>
  useQuery({
    queryKey: ['beers'],
    queryFn: async () => {
      const response = await fetch('https://api.punkapi.com/v2/beers')
      if (!response.ok) {
        const errorResponse = await response.json()
        throw new Error(errorResponse.message)
      }
      return (await response.json()) as Beer[]
    },
  })

export const useBeer = (id: number) =>
  useQuery({
    queryKey: [`beer-${id}`],
    queryFn: async () => {
      const response = await fetch(`https://api.punkapi.com/v2/beers/${id}`)
      if (!response.ok) {
        const errorResponse = await response.json()
        throw new Error(errorResponse.message)
      }
      return (await response.json()) as Beer[]
    },
  })
