import styled from "styled-components";
import { CCard, CCardImage  } from '@coreui/react';


const DramaMediaItemBlock = styled.div`
  display: inline-block;
  margin-bottom: 10px;
  margin-left: 0;
  margin-right: 10px;
  padding: 0;
`;

const DramaMainMediaBackground = ({ backDrop }) => {
  
  const img_url = `https://www.themoviedb.org/t/p/w130_and_h195_bestv2${backDrop}`;
  return (
    <DramaMediaItemBlock>
      <CCard className='mb-0 border-gray' textColor='dark'>
            {backDrop !== null ? (
              <CCardImage src={img_url}  style={{ }} />
            ) : (
              <CCardImage src="https://via.placeholder.com/130x195" />
            )}
      </CCard>
    </DramaMediaItemBlock> 
  );
};

export default DramaMainMediaBackground;
