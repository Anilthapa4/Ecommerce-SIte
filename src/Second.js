import React from 'react'
import './Second.css'
import TestNav from './TestNav'

const second = () => {
  return (
    <>
    <TestNav/>
    <h1 className='title'>This is Second component.</h1>
    <img src='/images/bg2.jpg' alt='image' width='300'/>
    </>
  )
}

export default second