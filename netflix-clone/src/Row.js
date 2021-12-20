import React, { useState, useEffect } from 'react'
import axios from './axios'
import './Row.css';
import YouTube from "react-youtube"
import movieTrailer from "movie-trailer"


const posterUrl = "https://image.tmdb.org/t/p/original/"

function Row({ title, fetchUrl, isLargeRow }) {

    const [movies, setMovies] = useState([]);
    const [trailerUrl, setTrailerUrl] = useState('')


    useEffect(() => {
        async function fetchData(){
            const request = await axios.get(fetchUrl);  
            setMovies(request.data.results)
            return request;
        }

        fetchData();

    }, [fetchUrl])

    const opts ={
        height: "390",
        width: "99%",
        playerVars: {
          autoplay: 0,
        }
    }

    const handleClick = (movie) => {
        if(trailerUrl){
            setTrailerUrl('');
        }else{
            movieTrailer(movie?.name || "")
            .then(url => {
                const urlParams = new URLSearchParams(new URL(url).search);
                setTrailerUrl(urlParams.get('v'));
            }).catch(err => console.log(err))
        }
    }





    return (
        <div className="row">
            <h2>
                {title}
                <div className={`row_posters`}>
                    {
                        movies.map((movie) => (
                            <img onClick={() => handleClick(movie)} key={movie.id} className={`row_poster ${isLargeRow && "row_posterLarge"}`}  src={`${posterUrl}${isLargeRow ? movie.poster_path : movie.backdrop_path}`} alt={movie.name}/>
                        ))
                    }
                </div>
                {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}
            </h2>
        </div>
    )
}

export default Row
