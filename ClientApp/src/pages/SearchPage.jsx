import React, { useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import RestaurantList from '../components/RestaurantList'
import EmptyRestaurantList from '../components/EmptyRestaurantList'

const SearchPage = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const [results, setResults] = useState([])

  const searchButton = async () => {
    const resp = await axios.get(
      `/api/search/restaurant?searchTerm=${searchTerm}`
    )
    console.log(resp.data)
    setResults(resp.data)
  }

  return (
    <>
      <section className="search-container">
        <input
          className="search-box"
          type="search"
          value={searchTerm}
          onChange={e => setSearchTerm(e.target.value)}
          placeholder="Find a Restaurant..."
        />
        <button onClick={searchButton} className="search-button">
          Search
        </button>
      </section>
      <section>
        {results.length > 0 ? (
          <RestaurantList results={results} />
        ) : (
          <EmptyRestaurantList />
        )}

        <section>
          {/* <Link to="/RestaurantPage">View this Restaurant</Link> */}
          {/* <Link to="/add">Add a Restaurant</Link> */}
        </section>
      </section>
    </>
  )
}

export default SearchPage
