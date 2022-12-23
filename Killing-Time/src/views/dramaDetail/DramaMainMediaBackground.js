import { Link } from "react-router-dom";
import styled from "styled-components";
import { CCard, CCardImage, CCardBody,  } from '@coreui/react';


const DramaMediaItemBlock = styled.div`
  display: inline-block;
  margin-bottom: 10px;
  margin-left: 0;
  margin-right: 10px;
  padding: 0;
`;

const DramaMainMediaItem = ({ result }) => {
  const { id, name, profile_path, character } = result;
  const img_url = `https://www.themoviedb.org/t/p/w220_and_h330_face${profile_path}`;

  return (
    <DramaMediaItemBlock>
      <CCard className='mb-0 border-gray' textColor='dark'>
          <Link to="/personList/personDetail" state={{ id: id }}>
            {profile_path !== null ? (
              <CCardImage src={img_url} alt={name} title={id} style={{ width: 140 }} />
            ) : (
              <CCardImage src="https://via.placeholder.com/220xh330" alt={name} title={id} style={{ width: 140 }} />
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
          <span style={{ fontSize: 14 }}>{character}</span>
        </CCardBody>
      </CCard>
    </DramaMediaItemBlock> 
  );
};

export default DramaMainMediaItem;
