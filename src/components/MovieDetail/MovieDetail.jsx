import React, { useEffect } from 'react'
import ReactPlayer from 'react-player/youtube'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useParams } from 'react-router-dom'
import { getMovieDetail } from '../../actions/Actions'
import { StarRating } from '../StarRating/StarRating'

import './MovieDetail.css'

export const MovieDetail = () => {

    const dispatch = useDispatch()

    const { id } = useParams()


    const { movieDetail } = useSelector(state => state.movie)

    const newFormat = movieDetail.duration?.split(':')

    const showDuration = newFormat?.length && `${newFormat[0]}h:${newFormat[1]}m`



    useEffect(() => {

        dispatch(getMovieDetail(id))


    }, [dispatch, id])

    return (
        <section className='detail'>

            <div className='detail__contain'>
                <figure className='detail__picture'>
                    <Link to='/movies' className='Link__back--detail'><img src='/assets/undo-icon.svg' alt='city' className='detail__icon--undo' />  Volver</Link>
                    <img src={movieDetail.img} className='detail__img' alt='flag' />
                </figure>
                <div className='detail__text'>
                    <h1 className='detail__title'>{movieDetail.title}</h1>
                    <h2>Sipnosis</h2>
                    <p className='detail__description'>{movieDetail.description}</p>
                    <hr />
                    <h2>Fecha de estreno</h2>
                    <h3>{movieDetail.rdate?.substring(0, 10)}</h3>
                    <hr />
                    <h2>Duración</h2>
                    <h3>{showDuration}</h3>
                    <hr />
                    <h2>Calificación</h2>
                    <StarRating  id={movieDetail.id} rating={movieDetail.rate} />
                    <ReactPlayer url={`${movieDetail.trailer}`}  width='100%' height='280px'/>
                </div>

            </div>

        </section>

    )
}
