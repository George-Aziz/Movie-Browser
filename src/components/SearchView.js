import Hero from './Hero';
import { Link } from 'react-router-dom';
import { useState } from 'react';

// TMBD API KEY: cbe1552e88ed208d8259d72aba116ab3
// EG Link: https://api.themoviedb.org/3/search/movie?api_key=cbe1552e88ed208d8259d72aba116ab3&language=en-US&query=joker&page=1&include_adult=false

const MovieCard = ({ movie }) => {
    const posterUrl = `https://image.tmdb.org/t/p/w500/${movie.poster_path}`
    const detailUrl = `/movies/${movie.id}`
    return (
        <div className='col-lg-3 col-md-3 col-2 my-4'>
            <div className="card">
                <img src={posterUrl} className="card-img-top" alt={movie.original_title} />
                <div className="card-body">
                    <h5 className="card-title">{movie.original_title}</h5>
                    <Link to={detailUrl} className="btn btn-primary">Show details</Link>
                </div>
            </div>
        </div>
    )
}

const SearchView = ({keyword, searchResults}) => {
    const title = `You are searching for ${keyword}`

    const resultsHtml = searchResults.map((obj, i) => {
            return <MovieCard movie={obj} key={i}/>
        })

    return (
        <>
        <Hero text={title}/>
        {resultsHtml.length 
        ? <div className='container'>
                <div className='row'> {resultsHtml} </div>
            </div> 
        : <h2 className='m-5'>Please search for a movie or please look for another movie!</h2>
        }
        </>
    )
}

export default SearchView;