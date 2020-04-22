import React, { useState } from 'react'
import axios from 'axios'
import { Redirect } from 'react-router-dom'
import Restaurant from '../components/Restaurant'

const ReviewPage = props => {
  // const { menuItemId } = props
  const menuItem = props.match.params.menuItemId

  const [review, setReview] = useState('')
  const [reviewScore, setReviewScore] = useState(0)

  const sendReviewToApi = async () => {
    console.log(props)
    const resp = await axios.post(`/api/menuItem/${menuItem}/review`, {
      rating: reviewScore,
      comment: review,
    })
    console.log(resp.data)
  }

  return (
    <>
      <main>
        <section>
          <h2>Reviews</h2>
          <p>it was good</p>
          <p>tasted ok</p>
          <h3>What is your overall rating for this dish?</h3>
          <section className="star-rating">
            <input
              id="rating1"
              type="radio"
              name="rating"
              value="1"
              onChange={() => setReviewScore(1)}
            />
            <label htmlFor="rating1"></label>
            <input
              id="rating2"
              type="radio"
              name="rating"
              value="2"
              onChange={() => setReviewScore(2)}
            />
            <label htmlFor="rating2"></label>
            <input
              id="rating3"
              type="radio"
              name="rating"
              value="3"
              onChange={() => setReviewScore(3)}
            />
            <label htmlFor="rating3"></label>
            <input
              id="rating4"
              type="radio"
              name="rating"
              value="4"
              onChange={() => setReviewScore(4)}
            />
            <label htmlFor="rating4"></label>
            <input
              id="rating5"
              type="radio"
              name="rating"
              value="5"
              onChange={() => setReviewScore(5)}
            />
            <label htmlFor="rating5"></label>
          </section>

          <h3>How would you rate the taste</h3>
          <textarea
            name="review"
            id=""
            cols="30"
            rows="10"
            value={review}
            onChange={e => setReview(e.target.value)}
          ></textarea>
          <button onClick={sendReviewToApi}>Submit Review</button>
          <h3></h3>
        </section>
      </main>
    </>
  )
}

export default ReviewPage
