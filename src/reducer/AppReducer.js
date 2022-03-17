import { types } from "../types/types"



const initialState = {
    allMovie: [],
    movieFiltered: [],
    movieDetail: {},


}



export const AppReducer = (state = initialState, action) => {
    switch (action.type) {

        case types.GET_ALL_MOVIES:
            return {
                ...state,
                allMovie: action.payload,
                movieFiltered: action.payload
            }

        case types.GET_MOVIE_DETAIL:
            return {
                ...state,
                movieDetail: action.payload
            }
        case types.FILTER_BY_CATEGORY:
            return {
                ...state,
                movieFiltered: state.allMovie.filter(movie => {
                    const movies = movie.categories.map((category) => (category.name));
                    return movies.includes(action.payload);
                })
            }

        case types.FILTER_BY_ALPHABET:
           
            return {
                ...state,
                movieFiltered: action.payload === 'A' ?
                    state.allMovie.sort((a, b) => a.title.localeCompare(b.title))
                    : state.allMovie.sort((a, b) => a.title.localeCompare(b.title)).reverse()
            }
        case types.FILTER_BY_RATING:
            return {
                ...state,
                movieFiltered:  action.payload === 'des'? 
                state.allMovie.sort((a,b)=> a.rate -b.rate)
                : state.allMovie.sort((a,b)=> a.rate -b.rate).reverse()
            }
        case types.FILTER_BY_NAME:
            return {
                ...state,
                movieFiltered: action.payload
            }
        default:
            return state
    }
}
