import React from 'react'
import { Link } from 'react-router-dom'

const RestaurantPage = () => {
  return (
    <>
      <main className="restaurant-details">
        <h4 className="restaurant-name">Restaurant Name</h4>
        <p>rating: ___ out of 5 stars</p>
        <p>menu items:</p>
        <ul>
          <li>french fries make these clickable</li>
          <li>cheeseburger</li>
          <li>salad</li>
        </ul>

        <Link to="/ReviewPage">Review this item</Link>
      </main>
    </>
  )
}

export default RestaurantPage
