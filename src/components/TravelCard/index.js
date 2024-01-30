import './index.css'

const TravelCard = props => {
  const {itemDetails} = props
  const {name, imageUrl, description} = itemDetails
  return (
    <li className="list-item">
      <img className="image" src={imageUrl} alt={name} />
      <h3 className="card-heading">{name}</h3>
      <p className="card-para">{description}</p>
    </li>
  )
}

export default TravelCard
