export const BeerListItem = ({ beer, onClick }) => {
  const { name, image_url, description } = beer
  return (
    <div role="button" onClick={onClick}>
      <h2>{name}</h2>
      <p>{description}</p>
      <img src={image_url} height={100} />
    </div>
  )
}
