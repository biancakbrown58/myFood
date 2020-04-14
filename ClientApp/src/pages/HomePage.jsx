import React from 'react'
// import HelloWorld from '../components/HelloWorld'
import { Link } from 'react-router-dom'

const HomePage = () => {
  return (
    <>
      <main className="hero">
        <h1>Welcome to myFoods!</h1>
        <Link to="/SearchPage">Search for Restaurants</Link>
      </main>
    </>
  )
}

export default HomePage
