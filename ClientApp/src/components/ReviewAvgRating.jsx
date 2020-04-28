import React from 'react'

const ReviewAvgRating = props => {
  // const menuItems = props
  const { review } = props

  let total = 0
  for (let i = 0; i < review.length; i++) {
    total += review[i].averageRating
  }
  const avg = total / review.length
  console.log('score' + review.averageRating)
  return <>{avg}</>
}

export default ReviewAvgRating
