import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { upDateMovieView } from '../../actions/Actions'
import { StarRating } from '../StarRating/StarRating'

import './MovieCard.css'

export const MovieCard = ({ id, img, title, rate, view }) => {

  const dispatch = useDispatch()

  const [movieView, setMovieView] = useState(view)

  const handleView = (e) => {
    const { checked } = e.target
    setMovieView(checked)
    dispatch(upDateMovieView(id, checked))
  }

  return (
    <>

      <section className="card">
        
        <div className="card__item">
        <div className='Link__container'>
          <button className='card__button'><Link to={`/movie/${id}`}>Mas info</Link></button>
        </div>
          <img src={img} className="card__picture" alt='poster' />
          <h2 className="card__title">{title}</h2>
          <div><StarRating id={id} rating={rate} /></div>
          <label className='card__view'><input className='card__view--input' type="checkbox" value={movieView} checked={movieView} onChange={handleView} />Vista</label>
        </div>

      </section>

    </>
  )
}
