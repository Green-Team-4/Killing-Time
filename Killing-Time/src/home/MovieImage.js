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
            console.log(response.data)
            setMoviePoster(response.data)
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
                    <MoviePosterItem MoviePoster={moviePoster.results[0].poster_path} />         
             : 
             "aaaaaaaaaaaaaaaaa"   
            }


        </>
    );

};

export default MovieImage;