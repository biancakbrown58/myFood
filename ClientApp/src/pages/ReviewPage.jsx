import React, { useState, useEffect, useCallback, useMemo, useRef } from 'react'
import axios from 'axios'
import StarRatingComponent from 'react-star-rating-component'
// import StarRatings from './react-star-ratings'
import { Redirect } from 'react-router-dom'
import Restaurant from '../components/Restaurant'
import ReviewAvgRating from '../components/ReviewAvgRating'

const ReviewPage = props => {
  const menuItem = props.match.params.menuItemId
  const [menuItems, setMenuItems] = useState({})
  const [review, setReview] = useState([])

  const [reviewScore, setReviewScore] = useState(0)
  // const [reviewScore1, setReviewScore1] = useState(0)
  const [reviewScore2, setReviewScore2] = useState(0)
  const [reviewScore3, setReviewScore3] = useState(0)
  const [reviewScore4, setReviewScore4] = useState(0)
  const [reviewScore5, setReviewScore5] = useState(0)
  const [reviewScore6, setReviewScore6] = useState(0)
  const [reviewScore7, setReviewScore7] = useState(0)
  const [reviewScore8, setReviewScore8] = useState(0)
  const [reviewScore9, setReviewScore9] = useState(0)
  const [reviewScore10, setReviewScore10] = useState(0)
  const getMenuItemData = async () => {
    const resp = await axios.get(`/api/menuItem/${menuItem}`)
    console.log(resp.data)
    setMenuItems(resp.data)
  }

  const sendReviewToApi = async () => {
    console.log(props)
    const resp = await axios.post(`/api/menuItem/${menuItem}/review`, {
      rating:
        reviewScore +
        reviewScore2 +
        reviewScore3 +
        reviewScore4 +
        reviewScore5 +
        reviewScore6 +
        reviewScore7 +
        reviewScore8 +
        reviewScore9 +
        reviewScore10,
      comment: review,
    })
    console.log(resp.data)
  }

  useEffect(() => {
    getMenuItemData()
  }, [])

  // useEffect(() => {
  //   const total = review.reduce((acc, item) => acc + parseInt(item.rating), 0)
  //   const averageScore = total / review.length

  //   setReviewScore({ total, averageScore })
  //   console.log('avg is ' + total)
  // }, [review])

  return (
    <>
      <main>
        <section>
          <h5>Reviews</h5>
          <h6>Have you tried the {menuItems.dish}? Review it below!</h6>
          <h2 className="dish-name">{menuItems.dish}</h2>
          <h4>
            Total Reviews: {menuItems.reviews && menuItems.reviews.length}
          </h4>
          <ul className="reviews">
            {menuItems.reviews &&
              menuItems.reviews.map(reviews => {
                // let total = 0
                // for (let i = 0; i < reviews.rating.length; i++) {
                //   total += reviews.rating[i].rating
                // }
                // let avg = total / reviews.rating
                return (
                  <li>
                    <p>{reviews.comment}</p>
                    {/* <p>{reviews.reviewScore}</p> */}
                    {/* <ReviewAvgRating reviews={reviews} /> */}
                    <p>Total Rating: {reviews.rating}</p>
                    {/* <p>avg: {reviews.rating / 3}</p> */}
                  </li>
                )
              })}
          </ul>

          <h5>How would you rate the {menuItems.dish}?</h5>

          <h6>What is your overall rating for this dish?</h6>
          <StarRatingComponent
            name="rate"
            starCount={5}
            value={reviewScore}
            onStarClick={setReviewScore}
            onChange={setReviewScore}
            emptyStarColor={`lightgrey`}
          />

          <h6>How was the flavor? Too salty/bland? </h6>
          <StarRatingComponent
            name="rate"
            starCount={5}
            value={reviewScore2}
            onStarClick={setReviewScore2}
            onChange={setReviewScore2}
            emptyStarColor={`lightgrey`}
          />
          <h6>How was the portion size? </h6>
          <StarRatingComponent
            name="rate"
            starCount={5}
            value={reviewScore3}
            onStarClick={setReviewScore3}
            onChange={setReviewScore3}
            emptyStarColor={`lightgrey`}
          />
          <h6>How was the texture? Crunchy/Soggy </h6>
          <StarRatingComponent
            name="rate"
            starCount={5}
            value={reviewScore4}
            onStarClick={setReviewScore4}
            onChange={setReviewScore4}
            emptyStarColor={`lightgrey`}
          />
          <h6>Was there the right amount of sauce/was it too dry? </h6>
          <StarRatingComponent
            name="rate"
            starCount={5}
            value={reviewScore5}
            onStarClick={setReviewScore5}
            onChange={setReviewScore5}
            emptyStarColor={`lightgrey`}
          />
          <h6>How was the temperature of the dish?</h6>
          <StarRatingComponent
            name="rate"
            starCount={5}
            value={reviewScore6}
            onStarClick={setReviewScore6}
            onChange={setReviewScore6}
            emptyStarColor={`lightgrey`}
          />
          <h6>Were the ingredients fresh? </h6>
          <StarRatingComponent
            name="rate"
            starCount={5}
            value={reviewScore7}
            onStarClick={setReviewScore7}
            onChange={setReviewScore7}
            emptyStarColor={`lightgrey`}
          />
          <h6>Was it cooked/assembled properly? </h6>
          <StarRatingComponent
            name="rate"
            starCount={5}
            value={reviewScore8}
            onStarClick={setReviewScore8}
            onChange={setReviewScore8}
            emptyStarColor={`lightgrey`}
          />
          <h6>Would you order it again? </h6>
          <StarRatingComponent
            name="rate"
            starCount={5}
            value={reviewScore9}
            onStarClick={setReviewScore9}
            onChange={setReviewScore9}
            emptyStarColor={`lightgrey`}
          />
          <h6>Was it worth the cost? </h6>
          <StarRatingComponent
            name="rate"
            starCount={5}
            value={reviewScore10}
            onStarClick={setReviewScore10}
            onChange={setReviewScore10}
            emptyStarColor={`lightgrey`}
          />
          {/* X too salty */}
          {/* X presentation */}
          {/* X portion */}
          {/* X soggy or crunchy */}
          {/* X too much sauce */}
          {/* X dry */}
          {/* X temperature */}
          {/* X would you order it again */}
          {/* X fresh */}
          {/* X was your meal cooked properly */}
          {/* X was the meal worth the price */}

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
