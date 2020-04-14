import React from 'react'
import { Link } from 'react-router-dom'

const SearchPage = () => {
  return (
    <>
      <section className="search-container">
        <input
          className="search-box"
          type="input"
          placeholder="Find a Restaurant..."
        />
        <button className="search-button">Search</button>
      </section>
      <h3>Restaurant List here</h3>
      <ul>
        <li>Billys BBQ</li>
        <li>Sallys Sandwiches</li>
        <li>Carols Cookies</li>
      </ul>
      <h5>A Restaurant</h5>
      <Link to="/RestaurantPage">View this Restaurant</Link>
    </>
  )
}

export default SearchPage
