import React from 'react'
import { Link } from 'react-router-dom'

const Card = (props) => {
  //props is property to import data from parent compomemt to child component.
  return (
    <>
          <div className="col">
            <div className="card shadow">
              <img src={props.item.image}className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">{props.item.title.slice(0,15)}...</h5>
                <h5>${props.price}</h5>
                <Link className='btn btn-success' to={`/productdetails/${props.item.id}`}>View Details</Link>
              </div>
            </div>
          </div>
    </>
  )
}

export default Card