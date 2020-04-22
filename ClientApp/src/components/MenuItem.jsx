import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

// "{menuItemId}/review"

const MenuItem = props => {
  // const { menuItem } = props

  // const [review, setReview] = useState()
  // const [reviewScore, setReviewScore] = useState(0)

  // const sendReviewToApi = async () => {
  //   const resp = await axios.post(`/api/menuItem/${menuItem.id}/review`, {
  //     rating: reviewScore,
  //     comment: review,
  //   })
  //   console.log(resp.data)
  //}

  return (
    <>
      <p>hi</p>
      {/* <textarea
        name=""
        id=""
        cols="30"
        rows="10"
        value={review}
        onChange={e => setReview(e.target.value)}
      ></textarea>
      <button onClick={sendReviewToApi}>Submit Review</button> */}
    </>
  )
}

export default MenuItem
