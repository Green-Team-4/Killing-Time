import { useLocation } from 'react-router-dom';
import MovieCreditList from './MovieCreditList';

const MovieCredit = (props) => {

  const location = useLocation();
  const id = location.state.id;
  
  return (
    <>
      <MovieCreditList id={id} />
    </>
  );

};

export default MovieCredit;
