import { useState } from 'react'
import { useQuery } from 'react-query'

const useBeers = () =>
  useQuery({
    queryKey: ['beers'],
    queryFn: async () => {
      const response = await fetch('https://api.punkapi.com/v2/beers')
      return await response.json()
    },
  })

// The list screen should display a list of drinks, including
// - the drink's image,
// - the name of the drink, and
// - a description (limited to one line, with ellipsis if the description is too long).
const BeerListItem = ({ beer, onClick }) => {
  const { name, image_url, description } = beer
  return (
    <div role="button" onClick={onClick}>
      <h2>{name}</h2>
      <p>{description}</p>
      <img src={image_url} height={100} />
    </div>
  )
}

// The detail screen should display
// - the drink's image,
// - name of the drink,
// - alcohol by volume (abv),
// - tagline,
// - full description,
// - and one other piece of data of your choice.
const BeerDetails = ({ beer }) => {
  const {
    name,
    image_url,
    description,
    abv,
    tagline,
    // ingredients, method
  } = beer
  return (
    <div>
      <h1>{name}</h1>
      <p>{tagline}</p>
      <img src={image_url} height={100} />
      <p>{description}</p>
      <div>ABV: {abv}</div>
    </div>
  )
}

const App = () => {
  const { data: beers, isLoading, isError } = useBeers()
  const [selectedBeer, setSelectedBeer] = useState()
  return isError ? (
    <div>Oops! Something went wrong</div>
  ) : isLoading ? (
    <div>Loading</div>
  ) : selectedBeer ? (
    <>
      <button onClick={() => setSelectedBeer()}>Back</button>
      <BeerDetails beer={selectedBeer} />
    </>
  ) : (
    <>
      <h1>Beers!</h1>
      <ul>
        {beers.map((beer) => (
          <BeerListItem
            key={`beer-${beer.id}`}
            beer={beer}
            onClick={() => setSelectedBeer(beer)}
          />
        ))}
      </ul>
    </>
  )
}

export default App
