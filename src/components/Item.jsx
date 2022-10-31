import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import Footer from './Footer.jsx';
import Header from './Header.jsx';
import Spinner from './Spinner.jsx';

const Item = () => {
    const [state, setState] = useState({})
    const [loading, setLoading] = useState(false)
    const params = useParams()

    useEffect(() => {

        const getState = async () => {
            try {
                const url = `http://localhost:3000/estates/${params.id}`
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
    <>
        <Header/>
        <Link className='back' to={'/estate'}> ← Go back</Link>
        <main className='container item'>
            <div>
                <img src={state.url} alt={`img ${state.name}`} />
            </div>

            <div>
                <h1 className='item__title'>{state.name}</h1>
                <div className='item__social'>

                    <a href="https://facebook.com/" target="_blank" className="item__link">
                        <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="item__svg" viewBox="0 0 24 24">
                            <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                        </svg>
                    </a>
                    <a href='https://twitter.com/' target="_blank" className="item__link">
                        <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="item__svg" viewBox="0 0 24 24">
                            <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                        </svg>
                    </a>
                    <a href='https://www.whatsapp.com/' target="_blank" className="item__link">
                        <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="item__svg" viewBox="0 0 24 24">
                            <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                        </svg>
                    </a>
                </div>
                <p className='item__description'>{state.description}</p>
                <div className='item__bar'>
                    <p className='item__price'>$ {state.price}</p>
                    <button className='item__btn'>Contact us</button>
                </div>
            </div>

        </main>
        <Footer/>
    </>
  )
}

export default Item