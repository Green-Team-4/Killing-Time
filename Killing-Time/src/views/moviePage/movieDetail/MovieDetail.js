import MovieInfo from "./movieInfo/MovieInfo";
import { useLocation } from "react-router-dom";
import MovieMainCast from "./movieMainCast/MovieMainCast";
import MovieTrailer from "./movieTrailer/MovieTrailer";

const MovieDetail = (props) => {
  const location = useLocation();
  const id = location.state.id;

  return (
    <>
      <MovieInfo id={id} />
      <MovieMainCast id={id} />
      <MovieTrailer id={id} />
    </>
  );
};

export default MovieDetail;
