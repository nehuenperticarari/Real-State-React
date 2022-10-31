import { useEffect, useState } from 'react'
import BlogEntries from './BlogEntries.jsx'
import Spinner from './Spinner.jsx'
import axios from 'axios'
const FeaturedBlog = () => {
    const [featured, setFeatured] = useState({})
    const [loading, setLoading] = useState(true)
    
    useEffect(() => {
      //get some of the post from the db
        const getFeatured = async() => {
            setLoading(true)
            try {
                const {data} = await axios("http://localhost:3000/blog?_page=1&_limit=3")
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
    <section className='blog container'>
        <h2 className='blog__title'>Latest posts <span>from our blog</span></h2>
        {featured.map(entries => (
        <BlogEntries
        entries={entries}
        key={entries.id}
        />

        ))}
    </section>
  )
}

export default FeaturedBlog