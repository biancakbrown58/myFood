import React from 'react'

const RestaurantList = props => {
  let { results } = props
  return (
    <div>
      <ul>
        {results.map(restaurant => {
          return <li>{restaurant.name}</li>
        })}
      </ul>
    </div>
  )
}

export default RestaurantList
