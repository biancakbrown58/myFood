import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import ReviewAvgRating from './ReviewAvgRating'

// display the restaurant

const Restaurant = props => {
  const { restaurant } = props
  const { menuItems } = props
  const reviews = props
  // const [newMenuItem, setNewMenuItem] = useState('')
  const [newMenuItem, setNewMenuItem] = useState({})
  const [newMenuDescription, setNewMenuDescription] = useState({})
  const [newReviewText, setNewReviewText] = useState('')
  const [reviewScore, setReviewScore] = useState(0)

  //const [menuItems, setMenuItems] = useState(restaurant.menuItems)

  const sendMenuItemToApi = async () => {
    const resp = await axios.post(`/api/restaurant/${restaurant.id}/menuItem`, {
      dish: newMenuItem,
      description: newMenuDescription,
    })
    console.log(resp.data)
  }

  return (
    <>
      {/* <img src="" alt=""/> */}
      <main className="restaurant-details">
        <section>
          <h4 className="restaurant-name">{restaurant.name}</h4>
          <p>{restaurant.foodType}</p>

          <p>rating: ___ out of 5 stars</p>

          <h6 className="location">{restaurant.address}</h6>
          <h6 className="city-state">
            {restaurant.city}, {restaurant.state}
          </h6>
        </section>
        <section>
          <ul className="menu-items">
            <p>Menu Items:</p>

            {restaurant.menuItems &&
              restaurant.menuItems.map(menuItems => {
                return (
                  <>
                    <Link to={`/ReviewPage/${menuItems.id}`}>
                      <li>{menuItems.dish}</li>
                    </Link>
                    <p>
                      <ReviewAvgRating reviews={reviews} />
                    </p>
                  </>
                )
              })}
          </ul>
        </section>
        <section className="add-item-container">
          <p>Add Item</p>
          <input
            name="dish"
            id=""
            type="text"
            onChange={e => setNewMenuItem(e.target.value)}
          />
          {/* <input
            name="dish"
            id=""
            type="text"
            onChange={e => setNewMenuItem(e.target.value)}
          /> */}
          <input
            name="description"
            id=""
            type="text"
            onChange={e => setNewMenuDescription(e.target.value)}
          />
          <button onClick={sendMenuItemToApi}>Add Item</button>
        </section>
      </main>
    </>
  )
}

export default Restaurant
