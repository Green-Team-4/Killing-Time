
import styled from "styled-components";
import { CCardImage } from '@coreui/react';

const DramaMediaItemBlock = styled.div`
  display: inline-block;
  margin-bottom: 10px;
  margin-left: 0;
  margin-right: 5px;
  padding: 0;
`;

const DramaMainMediaPoster = ({ result2 }) => {
  const { id, name, file_path } = result2;
  const img_url = `https://www.themoviedb.org/t/p/w220_and_h330_face${file_path}`;

  return (
    <DramaMediaItemBlock>
      {file_path !== null ? (
        <CCardImage src={img_url} alt={name} title={id} style={{ height:250 }} />
      ) : (
        <CCardImage src="https://via.placeholder.com/220x330" alt={name} title={id} style={{ width: 200 }} />
      )}
    </DramaMediaItemBlock> 
  );
};

export default DramaMainMediaPoster;
