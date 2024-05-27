import Slider from 'react-slick'
import PlanetItem from '../PlanetItem'


import './index.css'

const PlanetsSlider = props => {
  const {planetsList} = props
  const {id} = planetsList
  const settings = {
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    swipeToSlide: true,
  }
  return (
    <div className="slider-container">
      <h1>PLANETS</h1>
      <Slider {...settings}>
        {planetsList.map(each => (
          <PlanetItem planetsList={each} key={each.id} />
        ))}
      </Slider>
    </div>
  )
}

export default PlanetsSlider
