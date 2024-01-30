import { useNavigate } from 'react-router-dom'
import { BeerListItem } from '../components/BeerListItem'
import { useBeers } from '../queries/useBeers'
import { useMemo, useState } from 'react'
import Fuse from 'fuse.js'

export const BeerListScreen = () => {
  const navigate = useNavigate()
  const { data: beers, isLoading, isError } = useBeers()
  // Instead of querying the API with parameters, we'll do a local fuzzy search using fuse
  const [search, setSearch] = useState('')
  // Avoid reindexing fuse unless beers changes
  const fuse = useMemo(
    () =>
      new Fuse(beers ?? [], {
        keys: ['name', 'description'], // Allow searching over title and description
        threshold: 0.2,
      }),
    [beers]
  )
  // Avoid repeated searches unless the fuse instance, beers, or search have changed
  const searchedBeers = useMemo(
    () => (search.length ? fuse.search(search).map(({ item }) => item) : beers),
    [fuse, beers, search]
  )

  // Let's get a list of all possible food pairings, and let the user choose them
  const foodPairings = beers?.flatMap((beer) => beer.food_pairing) ?? []
  const [selectedFoodPairing, setSelectedFoodPairing] = useState('')

  const filteredBeers = selectedFoodPairing
    ? searchedBeers?.filter(({ food_pairing }) =>
        food_pairing.includes(selectedFoodPairing)
      )
    : searchedBeers

  return (
    <>
      <div>
        <div>
          <input
            placeholder="Search"
            value={search}
            onChange={(event) => setSearch(event.target.value)}
          />
        </div>
        <div>
          <input
            list="food-pairings"
            placeholder="What's for dinner?"
            value={selectedFoodPairing}
            onChange={(event) => setSelectedFoodPairing(event.target.value)}
            type="search" // show a clear button
          />
          <datalist id="food-pairings">
            {foodPairings.map((foodPairing) => (
              <option key={foodPairing}>{foodPairing}</option>
            ))}
          </datalist>
        </div>
      </div>
      {isError ? (
        <div>Oops! Something went wrong</div>
      ) : isLoading ? (
        <div>Loading</div>
      ) : (
        <>
          <ul>
            {filteredBeers
              .slice(0, 10) // You should display only 10 drinks from the API.
              .map((beer) => (
                <BeerListItem
                  key={`beer-${beer.id}`}
                  beer={beer}
                  onClick={() => navigate(`/beer/${beer.id}`)}
                />
              ))}
          </ul>
        </>
      )}
    </>
  )
}
