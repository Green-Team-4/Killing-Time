import { useLocation } from 'react-router-dom';
import DramaCreditList from './DramaCreditList';

const DramaCredit = (props) => {

  const location = useLocation();
  const id = location.state.id;
  
  return (
    <>
      <DramaCreditList id={id} />
    </>
  );

};

export default DramaCredit;
