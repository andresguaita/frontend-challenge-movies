import React, { useEffect, useState } from 'react'
import moment from 'moment';
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { getAllMovies } from '../../actions/Actions'
import { MovieCard } from '../Cards/MovieCard'
import Slider from "react-slick";
import './Home.css'
import { useNavigate } from 'react-router-dom';



export const Home = () => {

    const isNewMovie = () => {

        let movies= []

        for (let i = 0; i < allMovie.length; i++) {
            const movieDate = allMovie[i].rdate.substring(0, 10)
            const now = moment(new Date())
            const duration = moment.duration(now.diff(movieDate))
            const days = duration.asDays()

            if (days < 21) {
                movies.push(allMovie[i])
            }

        }
        return movies
    }

    const settings = {
        className: "center",
        infinite: true,
        centerPadding: "60px",
        slidesToShow: 5,
        swipeToSlide: true,
        afterChange: function (index) {
            console.log(
                `Slider Changed to: ${index + 1}, background: #222; color: #bada55`
            );
        }
    };

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const [infantilMovie, setInfantilMovie] = useState([])
    const [actionMovie, setActionMovie] = useState([])
    const [adventureMovie, setAdventureMovie] = useState([])
    const [comedyMovie, setComedyMovie] = useState([])
    const [terrorMovie, setTerrorMovie] = useState([])
    const [newMovie, setNewMovie] = useState([])

    const { allMovie } = useSelector(state => state.movie)

    useEffect(() => {
        dispatch(getAllMovies())
    }, [dispatch])

    useEffect(() => {
        const infantil = allMovie.filter(movie => {
            const movies = movie.categories.map((category) => (category.name));
            return movies.includes("Infantil");
        })

        setInfantilMovie(infantil)
    }, [allMovie])

    useEffect(() => {
        const action = allMovie.filter(movie => {
            const movies = movie.categories.map((category) => (category.name));
            return movies.includes("Acción");
        })

        setActionMovie(action)
    }, [allMovie])

    useEffect(() => {
        const adventure = allMovie.filter(movie => {
            const movies = movie.categories.map((category) => (category.name));
            return movies.includes("Aventura");
        })

        setAdventureMovie(adventure)
    }, [allMovie])

    useEffect(() => {
        const comedy = allMovie.filter(movie => {
            const movies = movie.categories.map((category) => (category.name));
            return movies.includes("Comedia");
        })

        setComedyMovie(comedy)
    }, [allMovie])

    useEffect(() => {
        const terror = allMovie.filter(movie => {
            const movies = movie.categories.map((category) => (category.name));
            return movies.includes("Terror");
        })

        setTerrorMovie(terror)
    }, [allMovie])

    useEffect(() => {
       const newsMovies= isNewMovie()

       setNewMovie(newsMovies)

    }, [allMovie])


    const handleClick = ()=>{
        navigate('/movies')
    }

    return (
        <>
            <div className='button__container'>
            <h2 style={{ color: 'white', marginLeft: 5, fontSize: 30 }}>Novedades</h2>
            <button className='button__more' onClick={handleClick}>Ver mas</button>
            </div>
            <div className='Slider__container'>
                <Slider {...settings}>
                    {newMovie.length && newMovie.map(movie => (
                        <div key={movie.id}>
                            <MovieCard
                                id={movie.id}
                                img={movie.img}
                                title={movie.title}
                                rate={movie.rate}
                                view={movie.view}
                            />
                            
                        </div>


                    ))}
                </Slider>
            </div>

            <div className='button__container'>
            <h2 style={{ color: 'white', marginLeft: 5, fontSize: 30 }}>Acción</h2>
            <button className='button__more' onClick={handleClick}>Ver mas</button>
            </div>
            <div className='Slider__container'>
                <Slider {...settings}>
                    {actionMovie.length && actionMovie.map(movie => (
                        <div key={movie.id}>
                            <MovieCard
                                id={movie.id}
                                img={movie.img}
                                title={movie.title}
                                rate={movie.rate}
                                view={movie.view}
                            />
                        </div>
                    ))}
                </Slider>
            </div>

            <div className='button__container'>
            <h2 style={{ color: 'white', marginLeft: 5, fontSize: 30 }}>Aventura</h2>
            <button className='button__more' onClick={handleClick}>Ver mas</button>
            </div>
            <div className='Slider__container'>
                <Slider {...settings}>
                    {adventureMovie.length && adventureMovie.map(movie => (
                        <div key={movie.id}>
                            <MovieCard
                                id={movie.id}
                                img={movie.img}
                                title={movie.title}
                                rate={movie.rate}
                                view={movie.view}
                            />
                        </div>


                    ))}
                </Slider>
            </div>

            <div className='button__container'>
            <h2 style={{ color: 'white', marginLeft: 5, fontSize: 30 }}>Comedia</h2>
            <button className='button__more' onClick={handleClick}>Ver mas</button>
            </div>
            <div className='Slider__container'>
                <Slider {...settings}>
                    {comedyMovie.length && comedyMovie.map(movie => (
                        <div key={movie.id}>
                            <MovieCard
                                id={movie.id}
                                img={movie.img}
                                title={movie.title}
                                rate={movie.rate}
                                view={movie.view}
                            />
                        </div>


                    ))}
                </Slider>
            </div>



            <div className='button__container'>
            <h2 style={{ color: 'white', marginLeft: 5, fontSize: 30 }}>Infantil</h2>
            <button className='button__more' onClick={handleClick}>Ver mas</button>
            </div>
            <div className='Slider__container'>
                <Slider {...settings}>
                    {infantilMovie.length && infantilMovie.map(movie => (
                        <div key={movie.id}>
                            <MovieCard
                                id={movie.id}
                                img={movie.img}
                                title={movie.title}
                                rate={movie.rate}
                            />
                        </div>


                    ))}
                </Slider>
            </div>

            <div className='button__container'>
            <h2 style={{ color: 'white', marginLeft: 5, fontSize: 30 }}>Terror</h2>
            <button className='button__more' onClick={handleClick}>Ver mas</button>
            </div>
            <div className='Slider__container'>
                <Slider {...settings}>
                    {terrorMovie.length && terrorMovie.map(movie => (
                        <div key={movie.id}>
                            <MovieCard
                                id={movie.id}
                                img={movie.img}
                                title={movie.title}
                                rate={movie.rate}
                            />
                        </div>


                    ))}
                </Slider>
            </div>

        </>

    )
}
