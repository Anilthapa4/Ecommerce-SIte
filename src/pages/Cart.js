import React, { useState, useEffect, Fragment } from 'react'
import { FaTrash } from 'react-icons/fa6';
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

const Cart = () => {
    const [product, setProduct] = useState([])

    useEffect(() => {
        const cartData = localStorage.getItem('cartItems')
        setProduct(JSON.parse(cartData))
    }, [])

    const decreaseQty = (id) => {
        const updateproducts = product.map(item => {
            if (item.id === id && item.quantity > 1) {
                return { ...item, quantity: item.quantity - 1 }
                // ... is a rest operator where all the content remain as it is only the quantity changes
            }
            return item
        })
        setProduct(updateproducts)
        localStorage.setItem('cartItems', JSON.stringify(updateproducts))
    }

    const increaseQty = (id) => {
        const updateproducts = product.map(item => {
            if (item.id === id) {
                return { ...item, quantity: item.quantity + 1 }
                // ... is a rest operator where all the content remain as it is only the quantity changes
            }
            return item
        })
        setProduct(updateproducts)
        localStorage.setItem('cartItems', JSON.stringify(updateproducts))
    }

    // remove from the cart
    const removeCartHandler = (id, name) => {
        const cartItems = JSON.parse(localStorage.getItem('cartItems'))
        const filterCarts = cartItems.filter((item) => item.id !== id)
        localStorage.setItem('cartItems', JSON.stringify(filterCarts))
        setProduct(filterCarts)
        toast.success(`${name} is removed from the cart`)
    }
    return (
        <>
            <ToastContainer theme='colored' position='top=center' />
            <div className='container my-3'>
                <div className='row d-flex justify-content-between my-4'>
                    {product.length === 0 ?
                        <h2 className='my-5 text-Danger text-center'>Your cart is Empty</h2>
                        : (
                            <>


                                <div className='col-md-8 shadow'>
                                    {product.map((item, i) => (
                                        <Fragment key={i}>
                                            <hr />
                                            <div className='row d-flex align-items-center'>
                                                <div className='col-2'>
                                                    <img src={item.image} alt={item.title} width='50' />
                                                </div>
                                                <div className='col-3'>
                                                    <strong>{item.title}</strong>
                                                </div>
                                                <div className='col-2 text-primary'>
                                                    ${item.price}
                                                </div>
                                                <div className='col-3'>
                                                    <div className='d-flex'>
                                                        <button className='btn btn-danger' onClick={() => decreaseQty(item.id)}>-</button>
                                                        &nbsp;
                                                        <input type='number' className='form-control border-0 text-center' readOnly value={item.quantity}></input>
                                                        &nbsp;
                                                        <button className='btn btn-info' onClick={() => increaseQty(item.id)}>+</button>
                                                    </div>
                                                </div>
                                                <div className='col-1'>
                                                    <button className='btn btn-Dark' onClick={() => removeCartHandler(item.id, item.title)}><FaTrash /></button>
                                                </div>
                                            </div>
                                            <hr />
                                        </Fragment>
                                    ))}
                                </div>
                                <div className='col-md-3'>
                                    <div className='shadow p-2'>
                                        <h5>Cart Summary</h5>
                                        <hr />
                                        <span><strong>Units:</strong>{product.reduce((ac, item) => (ac + Number(item.quantity)), 0)} (Units)</span>
                                        <br />
                                        <span><strong>Total:</strong> ${product.reduce((ac, item) => (ac + item.quantity * item.price), 0)}</span>
                                        <hr />
                                        <button className='btn btn-warning'>Checkout</button>
                                    </div>
                                </div>
                            </>
                        )
                    }
                </div>
            </div>
        </>
    )
}

export default Cart