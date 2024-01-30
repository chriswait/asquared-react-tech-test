import { useNavigate } from 'react-router-dom'
import { BeerListItem } from '../components/BeerListItem'
import { useBeers } from '../queries/useBeers'

export const BeerListScreen = () => {
  const { data: beers, isLoading, isError } = useBeers()
  const navigate = useNavigate()
  return isError ? (
    <div>Oops! Something went wrong</div>
  ) : isLoading ? (
    <div>Loading</div>
  ) : (
    <>
      <ul>
        {beers
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
  )
}
