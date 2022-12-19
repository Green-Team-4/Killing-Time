import { useState } from "react";
import { Link } from "react-router-dom";


const MoviePosterItem = ({MoviePoster, MovieId}) => {



    return (
        
        <Link to="/moviePage/movieDetail" state={{ id: MovieId }} >
        <img src={MoviePoster} alt="" />
        </Link>
    );
};

export default MoviePosterItem;