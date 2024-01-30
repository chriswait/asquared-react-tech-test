import { useMemo, useState } from 'react'
import Fuse from 'fuse.js'

import { BeerListItem } from '../components/BeerListItem'
import { useBeers } from '../queries/useBeers'
import { SearchInput } from '../components/SearchInput'
import { Loading } from '../components/Loading'
import { ErrorMessage } from '../components/ErrorMessage'

export const BeerListScreen = () => {
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
  const filteredBeers = useMemo(
    () => (search.length ? fuse.search(search).map(({ item }) => item) : beers),
    [fuse, beers, search]
  )

  return (
    <>
      <h1 style={{ marginBottom: '2rem' }}>Brew View 🍺</h1>
      <SearchInput value={search} onChange={setSearch} />
      {isError ? (
        <ErrorMessage message="Failed to load beers! Please try again" />
      ) : isLoading ? (
        <Loading />
      ) : (
        <div style={{ paddingTop: 40, paddingBottom: 80 }}>
          {filteredBeers
            .slice(0, 10) // You should display only 10 drinks from the API.
            .map((beer) => (
              <BeerListItem key={`beer-${beer.id}`} beer={beer} />
            ))}
        </div>
      )}
    </>
  )
}
