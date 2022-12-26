import MovieInfo from "./movieInfo/MovieInfo";
import { useLocation } from "react-router-dom";
import MovieMainCast from "./movieMainCast/MovieMainCast";
import MovieTrailer from "./movieTrailer/MovieTrailer";
import MovieRecommend from "./movieRecommend/MovieRecommend";

const MovieDetail = (props) => {
  const location = useLocation();
  const id = location.state.id;

  return (
    <>
      <MovieInfo id={id} />
      <MovieMainCast id={id} />
      <MovieTrailer id={id} />
      <MovieRecommend id={id} />
    </>
  );
};

export default MovieDetail;
