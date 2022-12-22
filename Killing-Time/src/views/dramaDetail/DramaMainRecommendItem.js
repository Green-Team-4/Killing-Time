import styled from "styled-components";
import { CCard, CCardImage } from '@coreui/react';


const DramaRecommendItemBlock = styled.div`
  display: inline-block;
  margin: 10px;
  margin-left: 0;
  margin-right: 10px;
  padding: 0;
`;

const DramaMainRecommendItem = ({ result }) => {
  const { id, name, backdrop_path } = result;
  const img_url = `https://www.themoviedb.org/t/p/w250_and_h141_face${backdrop_path}`;

  return (
    <DramaRecommendItemBlock>
      <CCard className='mb-3 border-gray' textColor='dark'>
        
          
            {backdrop_path !== null ? (
              <CCardImage src={img_url} alt={name} title={id} style={{ width: 140 }} />
            ) : (
              <CCardImage
                src="https://via.placeholder.com/250x141"
                alt={name}
                title={id}
                style={{ width: 140 }}
              />
            )}
          
       
      </CCard>
    </DramaRecommendItemBlock> 
  );
};

export default DramaMainRecommendItem;
