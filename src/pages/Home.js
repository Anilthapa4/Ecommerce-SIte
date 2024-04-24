import React, { useState, useEffect } from 'react'
import Slide from '../components/Slide'
import Card from '../components/Card'
import axios from 'axios'

const Home = () => {
    const [products, setProducts] = useState([])

    // The first value, product, is our current state.
    // The second value, setProduct, is the function that is used to update our state.

        useEffect(() => {
            axios.get('https://fakestoreapi.com/products')
                .then(res => setProducts(res.data))
                .catch(err => console.log(err))
        }, [])

    return (
        <>
            <Slide />
            <div className='container-fluid my-3'>
                <div className="row row-cols-1 row-cols-md-4 g-4">
                    {products.slice(0, 8).map((product,i) => (
                        <Card item={product} key={i} />
                    ))}
                </div>
            </div>
        </>
    )
}

export default Home