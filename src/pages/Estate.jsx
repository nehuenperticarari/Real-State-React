import React from 'react'
import Footer from '../components/Footer.jsx'
import Header from '../components/Header.jsx'
import ItemListContainer from '../components/ItemListContainer.jsx'
import useEstate from '../hook/useEstate.jsx'

const Estate = () => {
  const {handlePageBack, handlePageNext, page, loading} = useEstate()
  return (
    <>
      <Header/>
    
      <ItemListContainer/>

      {loading ? null : (
            <div className='pagination container'> 
            <button
            className='pagination__btn'
            onClick={() => handlePageBack()}
            >Back</button>
            <p className='pagination__text'>{page}</p>
            <button
            className='pagination__btn'
            onClick={() => handlePageNext()}
            >Next</button>
            
          </div>
      )}

      <Footer/>
    </>
  )
}

export default Estate