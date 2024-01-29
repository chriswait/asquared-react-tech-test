import { useQuery } from 'react-query'

const useBeers = () =>
  useQuery({
    queryKey: ['beers'],
    queryFn: async () => {
      const response = await fetch('https://api.punkapi.com/v2/beers')
      return await response.json()
    },
  })

const App = () => {
  const { data: beers, isLoading, isError } = useBeers()
  return isError ? (
    <div>Oops! Something went wrong</div>
  ) : isLoading ? (
    <div>Loading</div>
  ) : (
    <>
      <h1>Beers!</h1>
      <ul>
        {beers.map(({ id, name }) => (
          <li key={`beer-${id}`}>{name}</li>
        ))}
      </ul>
    </>
  )
}

export default App
