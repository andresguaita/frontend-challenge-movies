import * as React from "react";
import { Routes, Route, BrowserRouter} from "react-router-dom";
import { AllMovies } from "../components/All Movies/AllMovies";
import { CreateMovie } from "../components/CreateMovie/CreateMovie";
import { Home } from "../components/home/Home";
import { MovieDetail } from "../components/MovieDetail/MovieDetail";
import { Navbar } from "../components/Navbar/Navbar";



export const AppRouter = () => {
    return (
        
        <BrowserRouter>
            <Navbar/>
            <Routes>

                
                
                <Route exact path="/" element={<Home/>} /> 
                 <Route exact path="/movies" element={<AllMovies/>} /> 
                 <Route exact path="/movie/create" element={<CreateMovie/>} />
                 <Route exact path="/movie/:id" element={<MovieDetail/>} />
               
                 

               
    
            </Routes>
        
        </BrowserRouter>
    )
}
