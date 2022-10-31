import  { createContext, useEffect, useState } from 'react'
import axios from 'axios'


const EstateContext = createContext()
const initialPage = 1

const EstateProvider = ({children}) => {
  const [estates, setEstates] = useState({})
  const [allData, setAllData] = useState({})
  const [loading, setLoading] = useState(true)
  const [page, setPage] = useState(initialPage)

//Get the img from db with pages
  const getStates = async () => {
    try {
     const {data} = await axios(`http://localhost:3000/estates?_page=${page}&_limit=6`)
     setEstates(data)
    } catch (error) { 
      console.error(error.message);
    }
  }
  //bring all imgs of db
  const getAll = async () => {
    try {
     const {data} = await axios(`http://localhost:3000/estates`)
     setAllData(data)
    } catch (error) { 
      console.error(error.message);
    }
  }


  useEffect(() => {
    setLoading(true)
    
    getStates()
    getAll()
    setTimeout(() => {
      setLoading(false)
    }, 2500);
    
  }, [page])

  //calculate the limits of pages
  const maxPage = Math.ceil(allData.length / 6)
  
  const handlePageNext = () => {
    if(page < maxPage){
      setPage(page + 1)
    }
  }
  const handlePageBack = () => {
    if(page > 1){
      setPage(page - 1)
    }
  }
//send the information of the form to the db
  const sendData = async (datos) => {
    const config = {
      headers:{
        "Content-Type": "application/json",
      }
    }
    try {
      await axios.post("http://localhost:3000/data", datos, config )
    } catch (error) {
      console.error(error.message);
    }

  }
  
  return (
    <EstateContext.Provider
    value={{
      estates,
      loading,
      page,
      allData,
      handlePageNext,
      handlePageBack,
      sendData
   
    }}
    >{children}</EstateContext.Provider>
  )
}

export{
    EstateProvider
  }

export default EstateContext