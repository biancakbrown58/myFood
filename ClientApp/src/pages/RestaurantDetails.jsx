import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import Restaurant from '../components/Restaurant'

// get trail data

const RestaurantDetails = props => {
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
  // if (restaurant) {
  //   return <Restaurant restaurant={restaurant} />
  // } else {
  //   return
  // }

  return (
    <>
      <Restaurant restaurant={restaurant} />
      {/* <h4 className="restaurant-name">{restaurant.name}</h4> */}
    </>
  )
}

export default RestaurantDetails
