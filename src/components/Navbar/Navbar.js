import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom'
import { filterByName } from '../../actions/Actions';



import './Navbar.css'

export const Navbar = () => {

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const [search, setSearch] = useState('')


    const handleSearch = ({ target }) => {
        setSearch(target.value)
    }

    const handleSubmit = (e) => {
        navigate('/movies')
        e.preventDefault()
        if (search.length !== 0) {
            
            dispatch(filterByName(search))
            setSearch('')



        }
    }



    return (
        <div className='navbar__container'  >

            <div className='navbar__items'>

                <Link to='/'><img className='navbar__icon--movie' src='/assets/movie-icon.svg' alt='movie' /></Link>
                <form onSubmit={handleSubmit}>
                    <input className='navbar__input'
                        type='text' name='search'
                        placeholder='Buscar una pelicula...'
                        autoComplete='off'
                        value={search}
                        onChange={handleSearch} />
                    <button className='navbar__btn' type='submit'><img src='/assets/search-icon.svg' alt='city' className='navbar__icon' /></button>
                </form>

                <Link className='navbar__link' to='/movie/create'><i className="far fa-plus-square fa-2x"></i>Añadir Película</Link>
            </div>

        </div>
    )
}