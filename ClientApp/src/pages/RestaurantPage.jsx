import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

//like trail details & trail

const RestaurantPage = props => {
  console.log(props)
  const restaurantId = props.match.params.restaurantId

  const [restaurant, setRestaurant] = useState({})

  const getRestaurantData = async () => {
    const resp = await axios.get('/api/restaurant/' + restaurantId)
    console.log(resp.data)
    setRestaurant(resp.data)
  }

  useEffect(() => {
    getRestaurantData()
  }, [])

  return (
    <>
      <main className="restaurant-details">
        <h4 className="restaurant-name">{restaurant.name}</h4>
        <p>rating: ___ out of 5 stars</p>
        <p>{restaurant.foodType}</p>
        <h6 className="location">{restaurant.address}</h6>
        <h6 className="city-state">
          {restaurant.city}, {restaurant.state}
        </h6>
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
