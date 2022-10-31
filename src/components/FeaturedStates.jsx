import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Spinner from './Spinner.jsx'
import Slider from './Slider.jsx'

const Featured = () => {
    const [featured, setFeatured] = useState({})
    const [loading, setLoading] = useState(true)
    

    useEffect(() => {
      //get some of the states from the db
        const getFeatured = async() => {
            setLoading(true)
            try {
                const {data} = await axios("http://localhost:3000/featured")
                setFeatured(data)
                setLoading(false)
              } catch (error) {
                console.error(error.message);
              }
        }
      return () => {
        getFeatured()
      }
    }, [])
    
    if(loading) return <div className='flex__spinner'><Spinner/></div>
   
  return (
    <div className='featured container'>
        <h2 className='featured__title'>Our <span>Featured</span></h2>

        <Slider
        featured={featured}
        />

 
    </div>
  )
}

export default Featured