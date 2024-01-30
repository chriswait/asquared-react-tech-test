import { Link, useParams } from 'react-router-dom'
import { useBeer } from '../queries/useBeer'
import { Divider } from '../components/Divider'
import { Stat } from '../components/Stat'
import { Loading } from '../components/Loading'
import { ErrorMessage } from '../components/ErrorMessage'

const BeerDetails = ({ beer }) => (
  <>
    <h1>{beer.name}</h1>
    <h2>{beer.tagline}</h2>
    <p>{beer.description}</p>

    <Divider />

    <div
      className="responsive-row"
      style={{
        justifyContent: 'space-between',
        alignItems: 'center',
        gap: '2rem',
      }}
    >
      <div style={{ width: '100%' }}>
        <Stat label="First Brewed" value={beer.first_brewed} />
        <Stat label="ABV" value={beer.abv} />
        {/* European Brewery Convention */}
        <Stat label="EBC" value={beer.ebc} />
        {/* International Bitterness Units */}
        <Stat label="IBU" value={beer.ibu} />
        <Stat label="PH" value={beer.ph} />
        {/* Standard Research Method */}
        <Stat label="SRM" value={beer.srm} />
        {/* Final Gravity */}
        <Stat label="Target FG" value={beer.target_fg} />
        {/* Original Gravity */}
        <Stat label="Target OG" value={beer.target_og} />
        <Stat label="Attenuation Level" value={beer.attenuation_level} />
        <Stat
          label="Boil Volume"
          value={`${beer.boil_volume.value} ${beer.boil_volume.unit}`}
        />
        <Stat
          label="Volume"
          value={`${beer.volume.value} ${beer.volume.unit}`}
        />
      </div>
      <div
        style={{
          width: 200,
          padding: 10,
          flexShrink: 0,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: 'white',
        }}
      >
        <img src={beer.image_url} height={400} />
      </div>
    </div>

    <Divider />

    <div
      className="responsive-row"
      style={{ gap: '1rem', justifyContent: 'space-between' }}
    >
      <div style={{ flex: 1 }}>
        <h2>Food Pairings</h2>
        {beer.food_pairing.map((pairing) => (
          <div key={pairing}>- {pairing}</div>
        ))}
      </div>
      <div style={{ flex: 1 }}>
        <h2>Brewers Tips</h2>
        <div>{beer.brewers_tips}</div>
      </div>
    </div>

    <Divider />

    <h2>Ingredients</h2>
    <div
      className="responsive-row"
      style={{ gap: '1rem', justifyContent: 'space-between' }}
    >
      <div>
        <h3>Hops</h3>
        {beer.ingredients.hops.map((hop) => (
          <div key={`${hop.name}-${hop.add}`}>
            {hop.name} - ({hop.add})
          </div>
        ))}
      </div>
      <div>
        <h3>Malt</h3>
        {beer.ingredients.malt.map((malt) => (
          <div key={malt.name}>{malt.name}</div>
        ))}
      </div>
      <div>
        <h3>Yeast</h3>
        <div>{beer.ingredients.yeast}</div>
      </div>
    </div>
  </>
)

export const BeerDetailsScreen = () => {
  let { id } = useParams()
  const { data: beers, isLoading, isError } = useBeer(id)
  return (
    <div style={{ paddingTop: 40, paddingBottom: 80 }}>
      <Link to="/">Go Back</Link>
      {isError ? (
        <ErrorMessage message="Failed to load beer details! Please try again" />
      ) : isLoading ? (
        <Loading />
      ) : beers?.[0] ? (
        <BeerDetails beer={beers[0]} />
      ) : null}
    </div>
  )
}
