import { types } from "../types/types";
import axios from "axios";
import Swal from "sweetalert2";


export const getAllMovies = () =>{
    return async (dispatch) => {
        const resp = await fetch("https://andres-movie-backend.herokuapp.com/api/movies/all");
        const body = await resp.json();
        if (body.ok) {
          dispatch({type: types.GET_ALL_MOVIES, payload: body.movies})
        } 
      };
    
}

export const upDateMovieRate = (id,rate) =>{
    return async (dispatch) => {
        const resp = await axios.put(`https://andres-movie-backend.herokuapp.com/api/movie/rate/${id}`, { rate: rate });;
        if (resp.data.ok) {
          dispatch(getAllMovies())
        } 
      };
    
}

export const upDateMovieView = (id,view) =>{
    return async (dispatch) => {
        const resp = await axios.put(`https://andres-movie-backend.herokuapp.com/api/movie/view/${id}`, { view: view });;
        if (resp.data.ok) {
          dispatch(getAllMovies())
        } 
      };
    
}

export const filterByCategory = (category) =>{
    return (dispatch) =>{
        dispatch({type: types.FILTER_BY_CATEGORY, payload: category})
    }
}

export const filterByAlphabet = (order) =>{
    return (dispatch) =>{
        dispatch({type: types.FILTER_BY_ALPHABET, payload: order})
    }
}

export const filterByRating = ( order ) =>{
    return (dispatch) =>{
        dispatch({type: types.FILTER_BY_RATING, payload: order})
    }
}

export const filterByName= (title) =>{
    return async (dispatch) =>{
        try {
            const resp = await axios(`https://andres-movie-backend.herokuapp.com/api/movies/name`,{
            params:{
                title
            }
        })

        if(resp.data.ok){
            return dispatch({type: types.FILTER_BY_NAME, payload: resp.data.movies})
        }

        else {
            console.log('No se encontro')
        }
        
        
        } catch (error) {
            console.log(error)
        }     

    }
}

export const createMovie = (title,description,duration,rdate,img,trailer,categories) =>{
    return async (dispatch) => {
        const resp = await axios.post(`https://andres-movie-backend.herokuapp.com/api/movies/create`, 
        { title: title, 
          description: description, 
          duration: duration ,
          rdate: rdate,
          img: img,
          trailer: trailer,
          categories: categories
        });;
        if (resp.data.ok) {
            Swal.fire('Guardada', 'Pelicula creada exitosamente', 'success')
        } 
      };
    
}

export const getMovieDetail = (id)=>{
    return async (dispatch) =>{
        try {
            const resp = await axios(`https://andres-movie-backend.herokuapp.com/api/movie/${id}`)
        
            return dispatch({type: types.GET_MOVIE_DETAIL, payload: resp.data.movie})
        } catch (error) {
            console.log(error)
        }
        

    }
}