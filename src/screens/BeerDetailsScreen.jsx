import { useNavigate, useParams } from 'react-router-dom'
import { useBeer } from '../queries/useBeer'

export const BeerDetailsScreen = () => {
  const navigate = useNavigate()
  let { id } = useParams()
  const { data: beers, isLoading, isError } = useBeer(id)

  if (isError) {
    return <div>Oops! Something went wrong</div>
  } else if (isLoading) {
    return <div>Loading</div>
  }

  const [beer] = beers
  return (
    <>
      <button onClick={() => navigate(-1)}>Back</button>
      <div>
        <h1>{beer.name}</h1>
        <p>{beer.tagline}</p>
        <img src={beer.image_url} height={100} />
        <p>{beer.description}</p>
        <div>ABV: {beer.abv}</div>
      </div>
    </>
  )
}
