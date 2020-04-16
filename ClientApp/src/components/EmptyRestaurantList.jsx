import React from 'react'
import { Link } from 'react-router-dom'
const EmptyRestaurantList = () => {
  return (
    <section>
      No restaurants were found... <Link to="/add">Add a restaurant here!</Link>
    </section>
  )
}

export default EmptyRestaurantList
