import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllMovies } from '../../actions/Actions'
import { Filters } from '../../Filter/Filters'
import { MovieCard } from '../Cards/MovieCard'

import './AllMovies.css'

export const AllMovies = () => {

    const { movieFiltered } = useSelector(state => state.movie)

    const dispatch = useDispatch()


    useEffect(() => {
        dispatch(getAllMovies())
    }, [dispatch])


    return (
        <>
            <Filters />
            <div className='movies__container'>
            {
                movieFiltered.length ? movieFiltered.map(movie => (
                    <div className='movies__item'>
                        <MovieCard
                        key={movie.id}
                        id={movie.id}
                        img={movie.img}
                        title={movie.title}
                        rate={movie.rate}
                        view={movie.view}
                    />
                    </div> 
                )) : <p>No se encontro ninguna pelicula con los datos especificados</p>
                
                    
    }
            </div>
           

        </>
    )
}
