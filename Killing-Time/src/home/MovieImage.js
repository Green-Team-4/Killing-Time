import axios from "axios";
import { useEffect, useState } from "react";
import MoviePosterItem from "./MoviePosterItem";


const MovieImage = ({ movieName, openDate }) => {

    const [moviePoster, setMoviePoster] = useState(null);
    
    useEffect ( () => {
        const loadMoivePoster = async (e) => {
            const apikey = "e937a96ff64a1a83e17dac4c4abc7d43";
            const url = `https://api.themoviedb.org/3/search/movie?api_key=${apikey}&language=ko&page=1&primary_release_year=${openDate}&query=${movieName}`;
            const response = await axios.get(url);
            setMoviePoster(response.data.results[0])
        }
        loadMoivePoster();
    }, [movieName, openDate]);
    
    if (!moviePoster) {
        return;
    }


    return (
        <>
            {
                moviePoster ?                         
                    <MoviePosterItem MoviePoster={moviePoster.poster_path} MovieId={moviePoster.id} />         
             : 
             "aaaaaaaaaaaaaaaaa"   
            }


        </>
    );

};

export default MovieImage;