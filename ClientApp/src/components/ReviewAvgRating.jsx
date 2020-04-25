import React from 'react'

const ReviewAvgRating = props => {
  const menuItems = props
  const reviews = props

  let total = 0
  for (let i = 0; i < reviews.length; i++) {
    total += reviews[i].rating
  }
  const avg = total / reviews.length
  console.log('score' + reviews.rating)
  return <>{avg}</>
}

export default ReviewAvgRating
