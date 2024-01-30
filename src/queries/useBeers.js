import { useQuery } from 'react-query'

export const useBeers = () =>
  useQuery({
    queryKey: ['beers'],
    queryFn: async () => {
      const response = await fetch('https://api.punkapi.com/v2/beers')
      return await response.json()
    },
  })
