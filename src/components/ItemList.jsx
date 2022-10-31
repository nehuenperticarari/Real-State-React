import { Link } from 'react-router-dom'

const ItemList = ({estate}) => {
  return (
    <div className="estate">
        <div className="estate__img"
            style={{ backgroundImage:`linear-gradient(to right, rgba(27, 38, 44, .4) 0%, rgba(27, 38, 44, .4)100%), url(${estate.url})` }}
        >
            <h3 className="estate__name">{estate.name}</h3>
        </div>
        <div className="estate__content">
            <p className="estate__text">{estate.description}</p>
            <p className="estate__price">${estate.price}</p>
            <Link to={`/estate/${estate.id}`} className="estate__link">Show more</Link>
        </div>
    </div>
  )
}

export default ItemList