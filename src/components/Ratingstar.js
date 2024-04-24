import React from 'react'
import { FaStar, FaStarHalfStroke, FaRegStar } from "react-icons/fa6";

const Ratingstar = (props) => {
    const rating = props.rating
    const stars = []
    for (let i = 1; i <= 5; i++) {
        if (i <= rating) {
            stars.push(<FaStar key={i} />)
        }
        else if (i == Math.ceil(rating) && !Number.isInteger(rating)) {
            stars.push(<FaStarHalfStroke key={i} />)
        }
        else {
            stars.push(<FaRegStar key={i} />)
        }
    }

    return (
        <>
            {stars}
        </>
    )
}

export default Ratingstar