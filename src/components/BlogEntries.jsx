import { Link } from "react-router-dom"

const BlogEntries = ({entries}) => {

  return ( 
    <article className="entry">
        <div className="entry__img-container">
            <img src={entries.url} alt="" />
        </div>

        <div className="entry__content">
            <h3 className="entry__name">{entries.title}</h3>
            <p className="entry__meta">published on {new Date().toLocaleString() + ""} </p>
            <p className="entry__text">{entries.content}</p>
            <Link to={`/blog/${entries.id}`} className="entry__link">Read more</Link>
        </div>
    </article>
  )
}

export default BlogEntries