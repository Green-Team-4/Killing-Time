import styled from "styled-components";
import { CCard, CCardImage  } from '@coreui/react';

const DramaMediaItemBlock = styled.div`
  display: inline-block;
  margin-bottom: 10px;
  margin-left: 0;
  margin-right: 10px;
  padding: 0;
`;

const DramaMainMediaBackground = ({ result }) => {
  const { id, name, poster_path } = result;

   	//https://www.themoviedb.org/t/p/w533_and_h300_bestv2/nTvM4mhqNlHIvUkI1gVnW6XP7GG.jpg
  const img_url = `https://www.themoviedb.org/t/p/w500_and_h282_face${poster_path}`;
  return (
    <DramaMediaItemBlock>
      <CCard className='mb-0 border-gray' textColor='dark'>
        <CCardImage src={img_url}  style={{ width:140}} />
      </CCard>
    </DramaMediaItemBlock> 
  );
};

export default DramaMainMediaBackground;
