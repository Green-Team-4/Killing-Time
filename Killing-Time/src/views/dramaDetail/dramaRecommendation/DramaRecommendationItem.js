import { Link } from "react-router-dom";
import styled from "styled-components";
import { CCard, CCardImage, CCardBody,  } from '@coreui/react';
import DramaMainCastItem from "./DramaMainCastItem";

const DramaItemBlock = styled.div`
  display: inline-block;
  margin: 10px;
  margin-left: 0;
  margin-right: 10px;
  padding: 0;
`;

const DramaMainCastItem = ({ result }) => {
  const { id, name, profile_path, character } = result;
  const img_url = `https://www.themoviedb.org/t/p/w220_and_h330_face${profile_path}`;

  return (
    <DramaItemBlock>
      <CCard className='mb-3 border-gray' textColor='dark'>
        
          <Link to="/personList/personDetail" state={{ id: id }}>
            {profile_path !== null ? (
              <CCardImage src={img_url} alt={name} title={id} style={{ width: 140 }} />
            ) : (
              <CCardImage
                src="https://via.placeholder.com/300x450"
                alt={name}
                title={id}
                style={{ width: 140 }}
              />
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
    </DramaItemBlock> 
  );
};

export default DramaMainCastItem;
