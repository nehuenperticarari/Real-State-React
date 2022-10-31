import useEstate from '../hook/useEstate.jsx'
import ItemList from './ItemList.jsx'
import Spinner from './Spinner.jsx'

const ItemListContainer = () => {
  const {estates, loading} = useEstate()

  if(loading) return <div className='flex__spinner'><Spinner/></div>
  
  return (
    <main className='container estates'>
        <h2 className="estates__title">Our <span>states</span></h2>

        <div className='estates__grid'>
          {estates.map(estate => (
            <ItemList
            estate={estate}
            key={estate.id}
            />
          ))}
            
        </div>

    </main>
  )
}

export default ItemListContainer