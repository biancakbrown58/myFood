import React from 'react'
import { Link } from 'react-router-dom'
import RestaurantDetails from '../pages/RestaurantDetails'

const RestaurantList = props => {
  let { results } = props
  return (
    <div>
      <ul>
        {results.map(restaurant => {
          return (
            <Link to="/restaurant/:restaurantId">
              <li>{restaurant.name}</li>
            </Link>
          )
        })}
      </ul>
    </div>
  )
}

export default RestaurantList
