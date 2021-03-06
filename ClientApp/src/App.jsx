import React, { Component } from 'react'
import { Route, Switch } from 'react-router'
// import { BrowserRouter as Router, Link, Switch } from 'react-router-dom'
import { Link } from 'react-router-dom'

import { Layout } from './components/Layout'
import { Home } from './pages/Home'
import HelloWorld from './pages/_template/HelloWorld'
import HeyWorld from './pages/_template/HeyWorld'
import NotFound from './pages/NotFound'
import ReviewPage from './pages/ReviewPage'
// import RestaurantPage from './pages/RestaurantPage'
import RestaurantDetails from './pages/RestaurantDetails'
import HomePage from './pages/HomePage'
import FavoritesPage from './pages/FavoritesPage'
import './custom.scss'
import SearchPage from './pages/SearchPage'
import AddRestaurant from './pages/AddRestaurant'
import MenuItem from './components/MenuItem'
// import RestaurantDetails from './pages/RestaurantDetails'
export default class App extends Component {
  static displayName = App.name

  render() {
    return (
      <Layout>
        <header>
          {/* <h1>Welcome to myFood!</h1> */}
          <nav className="nav-bar">
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/SearchPage">Search for a Restaurant</Link>
              </li>
              <li>
                <Link to="/FavoritesPage">View Your Favorites</Link>
              </li>
            </ul>
          </nav>
        </header>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/SearchPage" component={SearchPage} />
          {/* <Route exact path="/ReviewPage" component={MenuItem} /> */}
          <Route exact path="/add" component={AddRestaurant} />
          <Route
            exact
            path="/restaurant/:restaurantId"
            component={RestaurantDetails}
          />
          <Route exact path="/FavoritesPage" component={FavoritesPage} />
          <Route exact path="/ReviewPage/:menuItemId" component={ReviewPage} />

          <Route exact path="*" component={NotFound} />
        </Switch>
      </Layout>
    )
  }
}
