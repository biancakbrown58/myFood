import React from 'react'

const ReviewAvgRating = props => {
  // const menuItems = props
  const { reviews } = props

  let total = 0
  for (let i = 0; i < reviews.length; i++) {
    total += reviews[i].averageRating
  }
  const avg = total / reviews.length
  console.log('score' + reviews.averageRating)
  return <>{'⭐️' + Math.floor(avg) + ' / 50 '}</>
}

export default ReviewAvgRating
