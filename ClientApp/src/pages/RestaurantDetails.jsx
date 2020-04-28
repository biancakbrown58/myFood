import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import Restaurant from '../components/Restaurant'

//get restaurant data

const RestaurantDetails = props => {
  console.log(props)
  const restaurantId = props.match.params.restaurantId
  // const reviewsId = props.match.params.reviewsId

  const [restaurant, setRestaurant] = useState({})
  // const [review, setReview] = useState([])
  const getRestaurantData = async () => {
    const resp = await axios.get('/api/restaurant/' + restaurantId)
    console.log(resp.data)
    setRestaurant(resp.data)
  }
  // const getReview = async () => {
  //   const resp = await axios.get(`/api/restaurant/${restaurantId}`)
  //   console.log(resp.data)
  //   setReview(resp.data)
  // }
  useEffect(() => {
    getRestaurantData()
    // getReview()
  }, [])

  return (
    <>
      <Restaurant restaurant={restaurant} />
      {/* <Restaurant review={review} /> */}
      {/* <h4 className="restaurant-name">{restaurant.name}</h4> */}
    </>
  )
}

export default RestaurantDetails
