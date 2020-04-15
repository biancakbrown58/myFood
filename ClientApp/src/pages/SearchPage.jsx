import React, { useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

const SearchPage = () => {
  return (
    <>
      <section className="search-container">
        <input
          className="search-box"
          type="search"
          placeholder="Find a Restaurant..."
        />
        <button className="search-button">Search</button>
      </section>
      <section>
        <ul></ul>
        <h3>Restaurant List here</h3>
        <ul>
          <li>Billys BBQ</li>
          <li>Sallys Sandwiches</li>
          <li>Carols Cookies</li>
        </ul>
        <h5>A Restaurant</h5>
        <section>
          <Link to="/RestaurantPage">View this Restaurant</Link>
          <Link to="/add">Add a Restaurant</Link>
        </section>
      </section>
    </>
  )
}

export default SearchPage
