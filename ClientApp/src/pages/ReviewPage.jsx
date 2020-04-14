import React from 'react'

const ReviewPage = () => {
  return (
    <>
      <main>
        <section>
          <h3>What is your overall rating for this dish?</h3>
          <section className="star-rating">
            <input id="rating1" type="radio" name="rating" value="1" />
            <label htmlFor="rating1"></label>

            <input id="rating2" type="radio" name="rating" value="2" />
            <label htmlFor="rating2"></label>
            <input id="rating3" type="radio" name="rating" value="3" />
            <label htmlFor="rating3"></label>
            <input id="rating4" type="radio" name="rating" value="4" />
            <label htmlFor="rating4"></label>
            <input id="rating5" type="radio" name="rating" value="5" />
            <label htmlFor="rating5"></label>
          </section>

          <h3>How would you rate the taste</h3>
          <h3></h3>
        </section>
      </main>
    </>
  )
}

export default ReviewPage
