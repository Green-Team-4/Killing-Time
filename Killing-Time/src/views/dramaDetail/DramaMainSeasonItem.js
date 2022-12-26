import { Link } from "react-router-dom";
import styled from "styled-components";
import { CCard, CCardImage, CCardBody,  } from '@coreui/react';


const DramaItemBlock = styled.div`
  display: inline-block;
  margin-bottom: 10px;
  margin-left: 0;
  margin-right: 5px;
  padding: 0;
`;

const DramaMainCastItem = ({ result }) => {
  const { id, name, profile_path, character } = result;
  const img_url = `https://www.themoviedb.org/t/p/w220_and_h330_face${profile_path}`;

  return (
    <DramaItemBlock>
      asdfadfsa
      {/* <CCard className='mb-0 border-gray' textColor='dark'>
          <Link to="/personList/personDetail" state={{ id: id }}>
            {profile_path !== null ? (
              <CCardImage orientation="top" src={img_url} alt={name} title={id} style={{ width: 140 }} />
            ) : (
              <CCardImage orientation="top" src="https://via.placeholder.com/220xh330" alt={name} title={id} style={{ width: 140 }} />
            )}
          </Link>
        <CCardBody
          style={{ width: 140, overflow: "hidden", textOverflow: "ellipsis", marginTop:"-10px", marginBottom:"-10px" }}
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
      </CCard> */}
    </DramaItemBlock> 
  );
};

export default DramaMainCastItem;
