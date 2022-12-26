import { Link } from "react-router-dom";
import styled from "styled-components";
import { CCard, CCardImage, CCardBody,  } from '@coreui/react';

const DramaMediaItemBlock = styled.div`
  display: inline-block;
  margin-bottom: 10px;
  margin-left: 0;
  margin-right: 5px;
  padding: 0;
`;

const DramaMainMediaPoster = ({ result2 }) => {
  const { id, name, poster_path } = result2;
  const img_url = `https://www.themoviedb.org/t/p/w220_and_h330_face${poster_path}`;

  return (
    <DramaMediaItemBlock>
      <CCard className='mb-0 border-gray' textColor='dark'>
          <Link to="/dramaMain/dramaDetails" state={{ id: id }}>
            {poster_path !== null ? (
              <CCardImage src={img_url} alt={name} title={id} style={{ width: 200 }} />
            ) : (
              <CCardImage src="https://via.placeholder.com/220xh330" alt={name} title={id} style={{ width: 200 }} />
            )}
          </Link>
        <CCardBody
          style={{ width: 140, overflow: "hidden", textOverflow: "ellipsis" }}
        >
          <Link
            to="/personList/personDetail"
            state={{ id: id }}
            style={{ textDecoration: "none", color: "black" }}
          >
            <strong>{name}</strong>
          </Link>
          <br />
          <span style={{ fontSize: 14 }}></span>
        </CCardBody>
      </CCard>
    </DramaMediaItemBlock> 
  );
};

export default DramaMainMediaPoster;
