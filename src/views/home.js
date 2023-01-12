import React from 'react'

import { Helmet } from 'react-helmet'

import Navbar from '../components/navbar.js'
import Menu from '../components/menu'
import './home.css'
import Slideshow from '../components/slideshow'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Japonaise Kitchen</title>
        <meta property="og:title" content="Japonaise Kitchen" />
      </Helmet>
      <Navbar></Navbar>
      <div className="home-container001">
        <img
          alt="image"
          src="/playground_assets/jk_white-1500w.png"
          className="home-image"
        />
      </div>
      <div id="about" className="home-container002">
        <div className="home-container003">
          <div className="about-div">
            <span className="home-text">LOCATION</span>
            <span className="home-text">Japonaise Kitchen</span>
            <span className="home-text">2/25-27 Lawson St, Byron Bay</span>
          </div>
          <div className="about-div">
            <span className="home-text">HOURS</span>
            <span className="home-text">11am - 2pm</span>
            <span className="home-text">5pm - 8pm</span>
            <span className="home-text">Monday to Sunday</span>
          </div>
          <div className="about-div">
            <span className="home-text">CONTACT</span>
            <a href="tel:0266855124" className="home-link">02 6685 5124</a>
            <a href="mailto:info@japonaisekitchen.com?subject=" className="home-link1">info@japonaisekitchen.com</a>
          </div>
        </div>
      </div>
      <Slideshow></Slideshow>
      <Menu></Menu>
      <div className="home-container156"></div>
      <div className="home-container157">
        <div className="home-container158">
          <span className="home-text">
            Japonaise Kitchen acknowledges and pays respect to the Arakwal
            people of the Bundjalung Nation, the Traditional Custodians of the
            lands on which we cook and create. We pay respect to their Elders past and present, and to all
            Aboriginal and Torres Strait Islander people.
          </span>
        </div>
        <div className="home-container159">
          <span className="home-text">© Japonaise Kitchen 2022</span>
        </div>
      </div>
    </div>
  )
}

export default Home
