import React from 'react'
import FeaturedBlog from '../components/FeaturedBlog.jsx'
import FeaturedStates from '../components/FeaturedStates.jsx'
import Footer from '../components/Footer.jsx'
import Header from '../components/Header.jsx'
import ItemListContainer from '../components/ItemListContainer.jsx'

const Home = () => {
  return (
    <>
      <Header/>
      <ItemListContainer/>
      <FeaturedStates/>
      <FeaturedBlog/>
      <Footer/>
    </>
  )
}

export default Home