import MovieInfo from "./MovieInfo";
import { useLocation } from 'react-router-dom';

const MovieDetails = (props) => {

  const location = useLocation();
  const id = location.state.id;
  
  return (
    <div>
      <MovieInfo id={ id }/>
    </div>
  );

};

export default MovieDetails;
