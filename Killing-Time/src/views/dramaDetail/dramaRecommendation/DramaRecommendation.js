import { useLocation } from 'react-router-dom';
import DramaRecommendationList from './DramaRecommendationList';

const DramaRecommendation = (props) => {

  const location = useLocation();
  const id = location.state.id;
  
  return (
    <>
      <DramaRecommendationList id={id} />
    </>
  );

};

export default DramaRecommendation;
