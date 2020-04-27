import React from 'react'
import { Link } from 'react-router-dom'
const EmptyRestaurantList = () => {
  return (
    <section>
      <p className="no-results">
        No restaurants were found...{' '}
        <p className="add-restaurant-link">
          <Link to="/add">Add a restaurant here!</Link>
        </p>
      </p>
    </section>
  )
}

export default EmptyRestaurantList
