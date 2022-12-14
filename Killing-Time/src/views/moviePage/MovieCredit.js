import MovieInfo from "./MovieInfo";
import { useLocation } from 'react-router-dom';

const MovieCredit = (props) => {

  const location = useLocation();
  const id = location.state.id;
  
  return (
    <>
      <MovieInfo id={id} />
    </>
  );

};

export default MovieCredit;
