import React from 'react'
import Footer from '../components/Footer.jsx'
import Header from '../components/Header.jsx'
import Posts from '../components/Posts.jsx'

const Blog = () => {
  return (
    <>
    <Header/>
      <h1 className='blog__title container'>Our Blog</h1>
      <Posts/>
    <Footer/>
  </>
  )
}

export default Blog