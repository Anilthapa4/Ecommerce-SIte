import React from 'react'
import { Link } from 'react-router-dom'
const TestNav = () => {
  return (
    <>
    <Link to='/'>Home</Link>
    <Link to='/test'>About</Link>
    <Link to='/login'>login</Link>
    </>
  )
}

export default TestNav