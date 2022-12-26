import { CCard, CCardBody, CCol, CImage } from "@coreui/react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const DramaItemBlock = styled.div`
  padding: 10px;
`;

const DramaCreditListCrew = ({ result }) => {
  const { id, name, profile_path, known_for_department, gender } = result;
  const img_url = `https://www.themoviedb.org/t/p/w138_and_h175_face/${profile_path}`;

  return (
    <DramaItemBlock>
      <CCol>
        <CCard className={`mb-3 border-top-secondary  border-top-4`}>
          <CCardBody>
            <div>
              <div>
                <Link to="/personList/personDetail" state={{ id: id }}>
                  {profile_path !== null ? (
                    <CImage align="start" rounded src={img_url} alt={name} title={id} />
                  ) : (
                    <CImage align="start" rounded src={"https://via.placeholder.com/138x175?text=No Image"} alt={name} title={id}/>
                  )}
                </Link>
                <div style={{ marginLeft:160 }}>
                  <Link to="/personList/personDetail" state={{ id: id }} style={{textDecoration: "none", color: "black"}}>
                    <h5>{name}</h5>
                  </Link>
                  <span>{known_for_department}</span><br />
                  {gender === 1 ? ( <span>Female11</span> ) : ( <span>Male</span> ) }<br />
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

export default DramaCreditListCrew;
