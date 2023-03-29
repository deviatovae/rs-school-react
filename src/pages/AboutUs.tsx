import React from 'react'
import '../assets/AboutUs.scss'

export function AboutUs() {
  return (
    <div className="about-us">
      <p className="about-us__description">
        A beautiful scent can really set the scene in your home; whether it’s
        the heady aroma of fresh lavender or the sweet, floral notes of roses
        and peonies, your chosen scent is what gives your house its personality.
        Bougie offers to you wonderful candles that will bring unique and
        relaxing atmosphere into your home.
      </p>
      <p className="about-us__sign">
        Thanks for stopping by!
        <img className="about-us__logo" src="/img/logo1.png" alt="lavender" />
      </p>
    </div>
  )
}
