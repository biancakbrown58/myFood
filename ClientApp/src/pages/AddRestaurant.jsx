import React, { useState } from 'react'
import axios from 'axios'
import { Redirect } from 'react-router-dom'

// his is trails mine is restaurant endpoint
const AddRestaurant = () => {
  const [restaurant, setRestaurant] = useState({})
  const [wasSuccessfullyCreated, setWasSuccessfullyCreated] = useState({
    shouldRedirect: false,
    newRestaurantInfo: {},
  })

  const updateRestaurantData = e => {
    const key = e.target.name
    const value = e.target.value
    setRestaurant(prevRestaurant => {
      prevRestaurant[key] = value
      return prevRestaurant
    })
  }
  const addRestaurantToApi = async () => {
    console.log('adding', restaurant)
    const resp = await axios.post('/api/restaurant', restaurant)
    if (resp.status === 201) {
      setWasSuccessfullyCreated({
        shouldRedirect: true,
        newRestaurantInfo: resp.data,
      })
    } else {
      // blah
    }
  }
  if (wasSuccessfullyCreated.shouldRedirect) {
    return (
      <Redirect
        to={{
          pathname: `/restaurant/${wasSuccessfullyCreated.newRestaurantInfo.id}`,
          state: { restaurant: wasSuccessfullyCreated.newRestaurantInfo },
        }}
      />
    )
  } else {
    return (
      <>
        <main>
          <section>
            <label htmlFor="">Name</label>
            <input type="text" name="name" onChange={updateRestaurantData} />
          </section>
          <section>
            <label htmlFor="">Address</label>
            <input type="text" name="address" onChange={updateRestaurantData} />
          </section>
          <section>
            <label htmlFor="">City</label>
            <input type="text" name="city" onChange={updateRestaurantData} />
          </section>
          <section>
            <label htmlFor="">State</label>
            <input type="text" name="state" onChange={updateRestaurantData} />
          </section>
          <section>
            <label htmlFor="">Type of Food</label>
            <input
              type="text"
              name="foodtype"
              onChange={updateRestaurantData}
            />
          </section>
          <button onClick={addRestaurantToApi}>Add Restaurant</button>
        </main>
      </>
    )
  }
}

export default AddRestaurant
