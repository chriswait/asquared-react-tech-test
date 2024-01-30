import { Link } from 'react-router-dom'
import { TruncatedLine } from './TruncatedLine'

export const BeerListItem = ({ beer }) => {
  const { name, image_url, description } = beer
  return (
    <Link
      to={`/beer/${beer.id}`}
      style={{
        display: 'block',
        borderBottomWidth: 2,
        borderBottomStyle: 'solid',
        padding: 20,
      }}
    >
      <div
        className="responsive-row"
        style={{ gap: '2rem', alignItems: 'center' }}
      >
        <div style={{ flex: 1, width: '100%' }}>
          <h2>{name}</h2>
          {/* ...limited to one line, with ellipsis if the description is too long */}
          <TruncatedLine text={description} basedOn="letters" />
        </div>
        <div
          style={{
            width: 100,
            padding: 10,
            flexShrink: 0,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: 'white',
            borderRadius: 4,
          }}
        >
          <img src={image_url} height={180} />
        </div>
      </div>
    </Link>
  )
}
