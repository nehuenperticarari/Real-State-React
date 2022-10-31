import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Footer from './Footer.jsx';
import Header from './Header.jsx';
import Spinner from './Spinner.jsx';

const Entry = () => {
  const [state, setState] = useState({})
  const [loading, setLoading] = useState(false)
  const params = useParams()

  useEffect(() => {

      const getState = async () => {
          try {
              const url = `http://localhost:3000/blog/${params.id}`
              const {data} = await axios(url)
              setState(data)
            } catch (error) {
              console.error(error.message);
            }
      }
  
    return () => {
      setLoading(true)
      getState()
      setTimeout(() => {
          setLoading(false)
      }, 2000);
    }
  }, [])
  
  if(loading) return <div className='flex__spinner'><Spinner/></div>

  return (
    <div>
      <Header/>
      <article className='container article'>
        <h1 className='article__title'>{state.title}</h1>
        <img src={state.url} alt={`img ${state.title}`} />
        <p className='article__author'>Author: <span>{state.author}</span></p>
        <p className='article__content'>{state.content}</p>

      </article>

      <Footer/>
    </div>
  )
}

export default Entry