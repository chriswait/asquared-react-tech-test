import { useQuery } from 'react-query'

export const useBeer = (id) =>
  useQuery({
    queryKey: [`beer-${id}`],
    queryFn: async () => {
      const response = await fetch(`https://api.punkapi.com/v2/beers/${id}`)
      return await response.json()
    },
  })
