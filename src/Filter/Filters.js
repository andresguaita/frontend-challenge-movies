import React from 'react'
import { useDispatch } from 'react-redux'
import { filterByAlphabet, filterByCategory, filterByRating, getAllMovies } from '../actions/Actions'

import './Filters.css'

export const Filters = () => {

  const dispatch = useDispatch()

  

const handleCategory = ({target}) =>{
  dispatch(filterByCategory(target.value))
}

const handleRating = ({target}) =>{
  dispatch(filterByRating(target.value))
} 

const handleAlphabetOrder = ({target}) =>{
  dispatch(filterByAlphabet(target.value))
}

const handleReset = () =>{
  dispatch(getAllMovies())
}

  

  return (
    <div className='filter__content'>
      <section className='content-select'>


 <select onChange={handleCategory}>
              <option value='default-category'>Ordenar por Categoria</option>
              <option value='Acción'>Acción</option>
              <option value='Aventura'>Aventura</option>
              <option value='Comedia'>Comedia</option>
              <option value='Fantasía'>Fantasía</option>
              <option value='Drama'>Drama</option>
              <option value='Musical'>Musical</option>
              <option value='Suspenso'>Suspenso</option>
              <option value='Infantil'>Infantil</option>
              <option value='Terror'>Terror</option>
          </select>
         

  <select onChange={handleAlphabetOrder}>
              <option value='default'>Ordenar Alfabeticamente</option>
              <option value='A'>A-z</option>
              <option value='Z'>Z-a</option>
          </select>
         

   <select onChange={handleRating}>
              <option value='default'>Ordenar por Calificacion</option>
              <option value='des'>Desc</option>
              <option value='asc'>Asc</option>
          </select>

    <button className='button__filter' onClick={handleReset}>Limpiar Filtros</button>
         
</section>

    </div>
    
  )
  }
