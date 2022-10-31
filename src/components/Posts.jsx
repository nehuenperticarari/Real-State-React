import axios from 'axios'
import React, { useEffect, useState } from 'react'
import BlogEntries from './BlogEntries.jsx'
import Spinner from './Spinner.jsx'

const Posts = () => {
    const [post, setPosts] = useState({})
    const [loading, setLoading] = useState(true)

    useEffect(() => {
      //get the post from the db
        const getPosts = async() => {
            setLoading(true)
            try {
                const {data} = await axios("http://localhost:3000/blog")
                setPosts(data)
                setLoading(false)
              } catch (error) {
                console.error(error.message);
              }
        }
      return () => {
        getPosts()
      }
    }, [])
    
    if(loading) return <div className='flex__spinner'><Spinner/></div>
  return (
    <div className='container'>
        {post.map(entries => (
        <BlogEntries
        entries={entries}
        key={entries.id}
        />
        ))}
    </div>
  )
}

export default Posts