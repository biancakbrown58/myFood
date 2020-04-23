import React, { useState, useEffect, useCallback, useMemo, useRef } from 'react'
import axios from 'axios'
import StarRatingComponent from 'react-star-rating-component'
// import StarRatings from './react-star-ratings'
import { Redirect } from 'react-router-dom'
import Restaurant from '../components/Restaurant'
import ReviewAvgRating from '../components/ReviewAvgRating'

const ReviewPage = props => {
  // const { menuItemId } = props
  const menuItem = props.match.params.menuItemId
  const [menuItems, setMenuItems] = useState({})
  const [review, setReview] = useState('')
  // const [reviewScore, setReviewScore] = useState(0)
  const [reviewScore, setReviewScore] = useState('')
  const [reviewScore1, setReviewScore1] = useState(0)

  const getMenuItemData = async () => {
    const resp = await axios.get(`/api/menuItem/${menuItem}`)
    console.log(resp.data)
    setMenuItems(resp.data)
  }

  const sendReviewToApi = async () => {
    console.log(props)
    const resp = await axios.post(`/api/menuItem/${menuItem}/review`, {
      rating: reviewScore + reviewScore1,
      comment: review,
    })
    console.log(resp.data)
  }
  // const total = 0
  //   for (let i = 0; i < reviews.length; i++) {
  //     total += reviews[i].rating
  //   }
  //   const avg = total / reviews.length
  //   return <>{avg}</>

  useEffect(() => {
    getMenuItemData()
  }, [])

  return (
    <>
      <main>
        <section>
          <h5>Reviews</h5>
          <h2 className="dish-name">{menuItems.dish}</h2>

          <ul className="reviews">
            {menuItems.reviews &&
              menuItems.reviews.map(reviews => {
                return (
                  <li>
                    <p>{reviews.comment}</p>
                    <p>Total Rating: {reviews.rating}</p>
                  </li>
                )
              })}
          </ul>
          <h5>How would you rate the {menuItems.dish}?</h5>
          <h3>What is your overall rating for this dish?</h3>
          <StarRatingComponent
            name="rate"
            starCount={5}
            value={reviewScore}
            onStarClick={setReviewScore}
            onChange={setReviewScore}
            emptyStarColor={`lightgrey`}
            renderStarIcon={() => <span></span>}
          />

          <p>ok</p>
          <StarRatingComponent
            name="rate"
            starCount={5}
            value={reviewScore1}
            onStarClick={setReviewScore1}
            onChange={setReviewScore1}
            emptyStarColor={`lightgrey`}
            renderStarIcon={() => <span></span>}
          />
          {/* too salty */}
          {/* presentation */}
          {/* taste */}
          {/* portion */}
          {/* soggy or crunchy */}
          {/* too much sauce */}
          {/* dry */}
          {/* temperature */}
          {/* would you order it again */}
          {/* fresh */}
          {/* was your meal cooked properly */}
          {/* was the meal worth the price */}

          <h3>Additional Comments?</h3>
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
