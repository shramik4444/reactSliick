// Write your code here

import './index.css'
const PlanetItem = props => {
  const {planetsList} = props
  const {id, name, imageUrl, description} = planetsList
  return (
    <div className="imgcont">
      <img src={imageUrl} className="imgstyle" alt={name} />
      <h1 className="parastyle">{name}</h1>
      <p className="parastyle">{description}</p>
    </div>
  )
}
export default PlanetItem
