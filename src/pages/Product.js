import React, { useState, useEffect } from 'react'
import Card from '../components/Card'
import IncrementDecrement from '../hooks/IncrementDecrement'
import axios from 'axios'

const Product = () => {
    const [products, setProducts] = useState([])
    const [limit, setLimit] = useState(12)

    useEffect(() => {
        axios.get('https://fakestoreapi.com/products')
            .then(res => setProducts(res.data))
            .catch(err => console.log(err))
    }, [])

    return (
        <>
            <div className='container-fluid'>
                <div className='row d-flex justify-content-evenly'>
                    <div className='col-md-3'>
                        <h3>Departments</h3>
                        <a href='#' className='text-decoration-none'>Select All</a>
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                            <label className="form-check-label" for="flexCheckDefault">
                                Dell
                            </label>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                            <label className="form-check-label" for="flexCheckDefault">
                                Hp
                            </label>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                            <label className="form-check-label" for="flexCheckDefault">
                                MacBook
                            </label>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                            <label className="form-check-label" for="flexCheckDefault">
                                Acer
                            </label>
                        </div>
                        <h3>Deal Type</h3>
                        <ul className='list-unstyled'>
                            <li><a href='' className='fw-bold text-decoration-none'>All deals</a></li>
                            <li><a href='#' className='text-decoration-none'>Top deals</a></li>
                            <li><a href='#' className='text-decoration-none'>Best deals</a></li>
                        </ul>
                    </div>

                    <div className='col-md-8 my-4'>
                        <div className="row row-cols-1 row-cols-md-3 g-4">
                            {products.slice(0, limit).map((product,i) => (
                                <Card item={product} key={i} />
                            ))}
                        </div>
                        <div className='row d-flex justify-content-center my-3'>
                            <div className='col-md-6'>
                                {limit < products.length &&
                                    <button className='btn btn-warning m-2' onClick={() => setLimit(limit + 3)}>Load More</button>
                                }
                                {limit > 12 &&
                                    <button className='btn btn-danger' onClick={() => setLimit(limit - 3)}>Show Less</button>
                                }
                            </div>
                        </div>

                        {/* <IncrementDecrement /> */}
                    </div>
                </div>
            </div >
        </>
    )
}

export default Product