import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import Ratingstar from '../components/Ratingstar'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Productdetails = () => {
    const [product, setProduct] = useState({})
    const params = useParams()

    useEffect(() => {
        const pid = params.productId
        axios.get(`https://fakestoreapi.com/products/${pid}`)
            .then(res => setProduct(res.data))
            .catch(err => console.log(err))
    })
    // handling add to cart function
    const addToCart = () => {
        //fetching data from localstorage if exists otherwise it will assign empty array
        const cartItems = JSON.parse(localStorage.getItem('cartItems')) || []
        //assign product inforamtion in a object variable
        const productItem = {
            id: product.id,
            title: product.title,
            price: product.price,
            description: product.description,
            rating: product.rating,
            image:product.image,
            quantity: 1
        }
        // check if the prodcut is already in the cart
        const existingItem = cartItems.find((item) => item.id === product.id)
        if (existingItem) {
            toast.error(`${productItem.title} is already in the cart.`)
        }
        else {
            cartItems.push(productItem)
            localStorage.setItem('cartItems',JSON.stringify(cartItems))
            toast.success(`${productItem.title} is added to cart.`)
        }
    }
    return (
        <>
        <ToastContainer theme='colored' position='top-center'/>
            <div className='container my-5'>
                <div className='row d-flex justify-content-evenly align-items-center shadow'>
                    <div className='col-md-5'>
                        <img src={product.image} alt={product.title} className='img-fluid' />
                    </div>
                    <div className='col-md-5 '>
                        <h2 style={{ color: 'darkcyan' }}>{product.title}</h2>
                        <h2>${product.price}</h2>
                        <p>{product.description}</p>
                        <p><b>Category:</b> {product.category}</p>
                        {product.rating &&
                            <Ratingstar rating={product.rating.rate} />
                        }

                        <br /><br />
                        <button className='btn btn-warning my-3' onClick={addToCart}><b>Add to Cart</b></button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Productdetails