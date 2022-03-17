import React, { useState } from 'react'
import { FaStar } from 'react-icons/fa'
import { useDispatch } from 'react-redux'
import { upDateMovieRate } from '../../actions/Actions'

import './StarRating.css'

export const StarRating = ({id,rating}) => {

  const dispatch = useDispatch()
  const [rate, setRate] = useState(rating)
  const [hover, setHover] = useState(null)

  const handleRating = (rate,id) =>{
    setRate(rate)
    dispatch(upDateMovieRate(id,rate))
  }
  return (
    <>
      {[...Array(5)].map((star,i) => {
        const ratingValue= i +1
        return (
          <label>
            <input type='radio' 
            name='rating' 
            className='radio__button' 
            value={rate} 
            onClick={()=> handleRating(ratingValue,id)}         
            
            />
            <FaStar 
            className='star' 
            color={ ratingValue <=( hover || rate)? "#ffc107" : "#e4e5e9"} size={25} 
            onMouseEnter={()=> setHover(ratingValue)}
            onMouseLeave={()=> setHover(null)}
            />
          </label>
          )
      })}

    </>
  )
}
