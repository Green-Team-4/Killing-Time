import { Link } from "react-router-dom";


const MoviePosterItem = ({MoviePoster, MovieId}) => {


    

    return (
        <Link to="/moviePage/movieDetail" state={{ id: MovieId }} >
        <img src={`https://www.themoviedb.org/t/p/w94_and_h141_bestv2${MoviePoster}`} alt="" />
        </Link>
    );
};

export default MoviePosterItem;