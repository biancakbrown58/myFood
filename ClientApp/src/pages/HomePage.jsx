import React from 'react'
// import HelloWorld from '../components/HelloWorld'
import { Link } from 'react-router-dom'

const HomePage = () => {
  return (
    <>
      <main className="hero">
        <h1>Welcome to myFoods!</h1>
        <section className="search-link">
          <Link to="/SearchPage">Search for Restaurants</Link>
        </section>
      </main>
    </>
  )
}

export default HomePage
