import { useEffect, useMemo, useState } from 'react'
import Fuse from 'fuse.js'
import { ScrollRestoration } from 'react-router-dom'

import { BeerListItem } from '../components/BeerListItem'
import { SearchInput } from '../components/SearchInput'
import { Loading } from '../components/Loading'
import { ErrorMessage } from '../components/ErrorMessage'
import { useBeers } from '../queries'
import { Beer } from '../beer'

// You should display only 10 drinks from the API.
const PAGE_SIZE = 10

export const BeerListScreen = () => {
  const { data: beers, isLoading, isError, error } = useBeers()

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
  const numPages = Math.ceil((filteredBeers ?? []).length / PAGE_SIZE)
  const [pageIndex, setPageIndex] = useState(0)
  const startIndex = PAGE_SIZE * pageIndex
  useEffect(() => {
    // Every time the list of filtered beers changes, reset the pageIndex to 0
    setPageIndex(0)
  }, [numPages, filteredBeers])

  // Declare a component so we can render pagination at the top and bottom of the list
  const Pagination = () => (
    <div style={{ display: 'flex', justifyContent: 'center', margin: '1rem' }}>
      {numPages > 0
        ? [...Array(numPages)].map((_, index) => (
            <button
              key={index}
              onClick={() => setPageIndex(index)}
              style={{
                fontWeight: index === pageIndex ? 'bold' : undefined,
                paddingLeft: '1rem',
                paddingRight: '1rem',
              }}
            >
              {index}
            </button>
          ))
        : null}
    </div>
  )

  return (
    <>
      <ScrollRestoration />
      <div className="responsive-row" style={{ alignItems: 'center' }}>
        <h1 style={{ marginBottom: '2rem' }}>Brew View 🍺</h1>
        <SearchInput value={search} onChange={setSearch} />
      </div>
      {isError ? (
        <ErrorMessage
          message="Failed to load beers! Please try again"
          detailedMessage={(error as Error)?.message}
        />
      ) : isLoading ? (
        <Loading />
      ) : filteredBeers ? (
        <div style={{ paddingBottom: 80 }}>
          {filteredBeers.length > 0 ? (
            <>
              <Pagination />
              {filteredBeers
                .slice(startIndex, startIndex + PAGE_SIZE)
                .map((beer: Beer) => (
                  <BeerListItem key={`beer-${beer.id}`} beer={beer} />
                ))}
              <Pagination />
            </>
          ) : (
            <ErrorMessage message="No matching beers found!" />
          )}
        </div>
      ) : null}
    </>
  )
}
