
import styled from "styled-components";
import { CCardImage } from '@coreui/react';

const DramaMediaItemBlock = styled.div`
  display: inline-block;
  margin-bottom: 10px;
  margin-left: 0;
  margin-right: 5px;
  padding: 0;
`;

const DramaMainMediaBackground = ({ result1 }) => {
  const { id, name, file_path } = result1;
  const img_url = `https://www.themoviedb.org/t/p/w533_and_h300_bestv2${file_path}`;
  return (
    <DramaMediaItemBlock>
      {file_path !== null ? (
        <CCardImage src={img_url} alt={name} title={id} style={{ width:400, height:250 }} />
      ) : (
        <CCardImage src="https://via.placeholder.com/533x300" alt={name} title={id} />
      )}
    </DramaMediaItemBlock> 
  );
};

export default DramaMainMediaBackground;
