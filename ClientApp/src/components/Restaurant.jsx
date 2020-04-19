import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

// display the restaurant

const Restaurant = props => {
  const { restaurant } = props
  const [newMenuItem, setNewMenuItem] = useState('')

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
        <h4 className="restaurant-name">{restaurant.name}</h4>
        <p>rating: ___ out of 5 stars</p>
        <p>{restaurant.foodType}</p>
        <h6 className="location">{restaurant.address}</h6>
        <h6 className="city-state">
          {restaurant.city}, {restaurant.state}
        </h6>
        <p>menu items:</p>
        <ul>
          <li>
            french fries make these clickable <button>review</button>
          </li>
          <li>cheeseburger</li>
          <li>salad</li>
          <li>Add Item</li>
          <input
            name=""
            id=""
            type="text"
            onChange={e => setNewMenuItem(e.target.value)}
          />
          <button onClick={sendMenuItemToApi}>Add Item</button>
        </ul>
        <Link to="/ReviewPage">Review this item</Link>
      </main>
    </>
  )
}

export default Restaurant
