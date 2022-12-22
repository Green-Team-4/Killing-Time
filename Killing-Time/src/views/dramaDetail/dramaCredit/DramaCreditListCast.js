import { CCard, CCardBody, CCol, CImage } from "@coreui/react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const DramaItemBlock = styled.div`
   margin-left: 10px;
`;

const DramaCreditListCast = ({ result }) => {
  const { id, name, character, profile_path, known_for_department, gender } = result;
  const img_url = `https://www.themoviedb.org/t/p/w138_and_h175_face/${profile_path}`;

  return (
    <DramaItemBlock>
      <CCol>
        <CCard className={`mb-3 border-top-secondary  border-top-4`}>
          <CCardBody>
            <div>
              <div>
                <Link to="/personDetail" state={{ id: id }}>
                  {profile_path !== null ? (
                    <CImage align="start" rounded src={img_url} alt={name} title={id} />
                  ) : (
                    <CImage align="start" rounded src={"https://via.placeholder.com/138x175"} />
                  )}
                </Link>
                <div style={{ marginLeft:160 }}>
                  <Link to="/personList/personDetail" state={{ id: id }} style={{textDecoration: "none", color: "black"}}>
                    <h5>{name}</h5>
                  </Link>
                  <span>{character}</span><br />
                  {gender === 1 ? ( <span>Female</span> ) : ( <span>Male</span> ) }<br />
                  <span>{known_for_department}</span><br />
                  
                </div>
                <br />
              </div>
            </div>
          </CCardBody>
        </CCard>
      </CCol>
    </DramaItemBlock>
  );
};

export default DramaCreditListCast;
