import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import ReviewAvgRating from './ReviewAvgRating'

// display the restaurant

const Restaurant = props => {
  const { restaurant } = props
  const { menuItems } = props
  // const { reviews } = props

  const [newMenuItem, setNewMenuItem] = useState({})
  const [newMenuDescription, setNewMenuDescription] = useState({})
  const [newReviewText, setNewReviewText] = useState('')
  const [reviewScore, setReviewScore] = useState(0)
  const [averageRating, setAverageRating] = useState(0)

  //const [menuItems, setMenuItems] = useState(restaurant.menuItems)

  // axios get reviews and use effect empty dependency array

  const sendMenuItemToApi = async () => {
    const resp = await axios.post(`/api/restaurant/${restaurant.id}/menuItem`, {
      dish: newMenuItem,
      description: newMenuDescription,
      rating: averageRating,
    })
    console.log(resp.data)
  }

  return (
    <>
      {/* <img src="" alt=""/> */}
      <main className="restaurant-details">
        <section className="restaurant-name">
          <h4>{restaurant.name} </h4>
          <p>{restaurant.foodType}</p>
        </section>
        <h6 className="location">
          {restaurant.address} {restaurant.city}, {restaurant.state}
        </h6>

        <p></p>
        <p className="menu">MENU</p>
        <section>
          <ul className="menu-items">
            {restaurant.menuItems &&
              restaurant.menuItems.map(menuItems => {
                return (
                  <>
                    <Link to={`/ReviewPage/${menuItems.id}`}>
                      <li>{menuItems.dish}</li>
                    </Link>
                    {/* <p><ReviewAvgRating review={review} /></p> */}
                  </>
                )
              })}
          </ul>

          <ul>
            {restaurant.reviews &&
              restaurant.reviews.map(reviews => {
                console.log(`${restaurant.reviews}blah`)
                return <li>{restaurant.reviews.comment}ok</li>
              })}
          </ul>
        </section>
        <section className="add-item-container">
          <p>Add a Dish</p>
          <input
            name="dish"
            id=""
            type="text"
            placeholder="Name of Dish"
            onChange={e => setNewMenuItem(e.target.value)}
          />

          <input
            name="description"
            id=""
            placeholder="Description"
            type="text"
            onChange={e => setNewMenuDescription(e.target.value)}
          />
          <button onClick={sendMenuItemToApi}>Add</button>
        </section>
      </main>
    </>
  )
}

export default Restaurant
