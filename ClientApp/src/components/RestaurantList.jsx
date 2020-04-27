import React from 'react'
import { Link } from 'react-router-dom'
import RestaurantDetails from '../pages/RestaurantDetails'

const RestaurantList = props => {
  let { results } = props
  return (
    <div className="rest-container">
      <ul>
        {results.map(restaurant => {
          return (
            <>
              <section className="search-results">
                <Link to={`/restaurant/${restaurant.id}`}>
                  <li>{restaurant.name}</li>
                </Link>
              </section>
            </>
          )
        })}
      </ul>
    </div>
  )
}

export default RestaurantList
