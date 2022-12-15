import MovieInfo from "./MovieInfo";
import { useLocation } from "react-router-dom";
import MovieMainCast from "./MovieMainCast";

const MovieDetail = (props) => {
  const location = useLocation();
  const id = location.state.id;

  return (
    <>
      <MovieInfo id={id} />
      <MovieMainCast id={id} />
    </>
  );
};

export default MovieDetail;
