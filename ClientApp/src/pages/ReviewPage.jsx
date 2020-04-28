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

  const [overallRating, setOverallRating] = useState(0)
  const [flavorRating, setFlavorRating] = useState(0)
  const [portionSizeRating, setPortionSizeRating] = useState(0)
  const [textureRating, setTextureRating] = useState(0)
  const [sauceRating, setSauceRating] = useState(0)
  const [temperatureRating, setTemperatureRating] = useState(0)
  const [freshRating, setFreshRating] = useState(0)
  const [properlyCookedRating, setProperlyCookedRating] = useState(0)
  const [orderAgainRating, setOrderAgainRating] = useState(0)
  const [worthItRating, setWorthItRating] = useState(0)

  const getMenuItemData = async () => {
    const resp = await axios.get(`/api/menuItem/${menuItem}`)
    console.log(resp.data)
    setMenuItems(resp.data)
  }

  const sendReviewToApi = async () => {
    console.log(props)
    const resp = await axios.post(`/api/menuItem/${menuItem}/review`, {
      overallRating: overallRating,
      flavorRating: flavorRating,
      portionSizeRating: portionSizeRating,
      textureRating: textureRating,
      sauceRating: sauceRating,
      temperatureRating: temperatureRating,
      freshRating: freshRating,
      properlyCookedRating: properlyCookedRating,
      orderAgainRating: orderAgainRating,
      worthItRating: worthItRating,
      averageRating:
        overallRating +
        flavorRating +
        portionSizeRating +
        textureRating +
        sauceRating +
        temperatureRating +
        freshRating +
        properlyCookedRating +
        orderAgainRating +
        worthItRating,
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
                return (
                  <li>
                    <p>{reviews.comment}</p>
                    <p>{console.log(reviews.averageRating, 'page display')}</p>
                    <p>Total Rating: {reviews.averageRating}</p>
                  </li>
                )
              })}
          </ul>

          <h5 className="ask-for-review">
            How would you rate the {menuItems.dish}?
          </h5>

          <h6>What is your overall rating for this dish?</h6>
          <StarRatingComponent
            name="rate"
            starCount={5}
            value={overallRating}
            onStarClick={setOverallRating}
            onChange={setOverallRating}
            emptyStarColor={`lightgrey`}
          />

          <h6>How was the flavor? Too salty/bland? </h6>
          <StarRatingComponent
            name="rate"
            starCount={5}
            value={flavorRating}
            onStarClick={setFlavorRating}
            onChange={setFlavorRating}
            emptyStarColor={`lightgrey`}
          />
          <h6>How was the portion size? </h6>
          <StarRatingComponent
            name="rate"
            starCount={5}
            value={portionSizeRating}
            onStarClick={setPortionSizeRating}
            onChange={setPortionSizeRating}
            emptyStarColor={`lightgrey`}
          />
          <h6>How was the texture? Crunchy/Soggy </h6>
          <StarRatingComponent
            name="rate"
            starCount={5}
            value={textureRating}
            onStarClick={setTextureRating}
            onChange={setTextureRating}
            emptyStarColor={`lightgrey`}
          />
          <h6>Was there the right amount of sauce/was it too dry? </h6>
          <StarRatingComponent
            name="rate"
            starCount={5}
            value={sauceRating}
            onStarClick={setSauceRating}
            onChange={setSauceRating}
            emptyStarColor={`lightgrey`}
          />
          <h6>How was the temperature of the dish?</h6>
          <StarRatingComponent
            name="rate"
            starCount={5}
            value={temperatureRating}
            onStarClick={setTemperatureRating}
            onChange={setTemperatureRating}
            emptyStarColor={`lightgrey`}
          />
          <h6>Were the ingredients fresh? </h6>
          <StarRatingComponent
            name="rate"
            starCount={5}
            value={freshRating}
            onStarClick={setFreshRating}
            onChange={setFreshRating}
            emptyStarColor={`lightgrey`}
          />
          <h6>Was it cooked/assembled properly? </h6>
          <StarRatingComponent
            name="rate"
            starCount={5}
            value={properlyCookedRating}
            onStarClick={setProperlyCookedRating}
            onChange={setProperlyCookedRating}
            emptyStarColor={`lightgrey`}
          />
          <h6>Would you order it again? </h6>
          <StarRatingComponent
            name="rate"
            starCount={5}
            value={orderAgainRating}
            onStarClick={setOrderAgainRating}
            onChange={setOrderAgainRating}
            emptyStarColor={`lightgrey`}
          />
          <h6>Was it worth the cost? </h6>
          <StarRatingComponent
            name="rate"
            starCount={5}
            value={worthItRating}
            onStarClick={setWorthItRating}
            onChange={setWorthItRating}
            emptyStarColor={`lightgrey`}
          />
          <section className="comment-area">
            <h3>Additional Comments?</h3>
            <textarea
              name="review"
              id=""
              cols="30"
              rows="5"
              value={review}
              onChange={e => setReview(e.target.value)}
            ></textarea>
            <button className="submit-review-button" onClick={sendReviewToApi}>
              Submit Review
            </button>
          </section>
        </section>
      </main>
    </>
  )
}

export default ReviewPage
