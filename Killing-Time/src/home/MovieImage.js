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
    
    


    return (
        <>
            {
                moviePoster ?                         
                    <MoviePosterItem MoviePoster={`https://www.themoviedb.org/t/p/w94_and_h141_bestv2${moviePoster.poster_path}`} MovieId={moviePoster.id} />         
             : 
             <MoviePosterItem MoviePoster={'https://images.unsplash.com/photo-1485846234645-a62644f84728?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=90&q=80'} />  
            }
        </>
    );

};

export default MovieImage;