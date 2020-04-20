import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

// display the restaurant

const Restaurant = props => {
  const { restaurant } = props
  const [newMenuItem, setNewMenuItem] = useState('')
  const [menuItems, setMenuItems] = useState(restaurant.menuItems)

  const sendMenuItemToApi = async () => {
    const resp = await axios.post(`/api/restaurant/${restaurant.id}/menuItem`, {
      dish: newMenuItem,
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

            {/* <Link to={`/restaurant/${restaurant.id}`}>
              <li>{restaurant.name}</li>
            </Link> */}

            {restaurant.menuItems &&
              restaurant.menuItems.map(menuItems => {
                return (
                  <Link to={`/ReviewPage`}>
                    <li>{menuItems.dish}</li>
                  </Link>
                )
              })}
          </ul>
        </section>
        <section className="add-item-container">
          <p>Add Item</p>
          <input
            name=""
            id=""
            type="text"
            onChange={e => setNewMenuItem(e.target.value)}
          />
          <button onClick={sendMenuItemToApi}>Add Item</button>
        </section>
        <Link to="/ReviewPage">Review this item</Link>
      </main>
    </>
  )
}

export default Restaurant
