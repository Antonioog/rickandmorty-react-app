import React from 'react'
import "./styles.css/LocationCard.css"

const LocationInfo = ({location}) => {
  return (
    <section className='locationCard__info'>
        <h3 className='locationCard__title'>{location?.name}</h3>
        <ul className='locationCard__cont'>
          <li><span>Type:</span>{location?.type}</li>
          <li><span>Dimension:</span>{location?.dimension}</li>
          <li><span>Population:</span>{location?.residents.length}</li>
        </ul>
      </section>
  )
}

export default LocationInfo