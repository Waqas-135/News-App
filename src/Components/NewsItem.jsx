import React from 'react'
import image from '../assets/Nimages.jpg'

const NewsItem = ({title, description, source, src, url}) => {
  return (

   <div className="card bg-dark text-light mb-3 d-inline-block my-3 mx-3 py-2 px-2 " style={{maxWidth:"18rem"}}>
     <span className="badge bg-secondary mb-1">{source}</span>
    <img src={src?src:image} className="card-img-top" alt="..."/>
    <div className="card-body">
      <h5 className="card-title">{title.slice(0,50)}</h5>
      <p className="card-text">{description ? description.slice(0,90): "To be Displayd Later"}</p>
      <a href={url} className="btn btn-primary">Read More</a>
    </div>
  </div>


  )
}

export default NewsItem