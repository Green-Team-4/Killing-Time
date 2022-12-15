import { Link } from "react-router-dom";


const MoviePosterItem = ({MoviePoster, MovieId}) => {


    const imgUrl = `https://www.themoviedb.org/t/p/w94_and_h141_bestv2${MoviePoster}`;

    return (
        <Link to="/moviePage/movieDetail" state={{ id: MovieId }} >
        <img src={imgUrl} alt="" />
        </Link>
    );
};

export default MoviePosterItem;