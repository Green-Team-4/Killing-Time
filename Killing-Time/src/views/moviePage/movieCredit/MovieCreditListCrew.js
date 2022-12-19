import { CCard, CCardBody, CCol } from "@coreui/react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const MovieItemBlock = styled.div`
  
  margin: 20px;
  margin-left: 30px;
  padding: 0;
`;

const MovieCreditListCrew = ({ result }) => {
  const { id, name, profile_path, department, job } = result;
  const img_url = `https://www.themoviedb.org/t/p/w66_and_h66_face${profile_path}`;

  return (
    <MovieItemBlock>
      <CCol style={{margin: "auto"}}>
      <CCard className="mb-4">
        <CCardBody>
      <div>
        <div style={{display: "inline-block"}}>
        <Link to="/personList/personDetail" state={{ id: id }}>
        {profile_path !== null ? (
              <img src={img_url} alt={name} title={id} style={{  borderRadius: 10 }} />
            ) : (
              <img
                src="https://via.placeholder.com/66x66"
                alt={name}
                title={id}
                style={{ borderRadius: 10 }}
              />
            )}
          </Link>
          <br />
        </div>
        <div style={{display: "inline-block", marginLeft: 25}}>
        <Link to="/personList/personDetail" state={{ id: id }} style={{textDecoration: "none", color: "black"}}><strong>{name}</strong></Link>
          <br />
          {department}/{job}
        </div>
      </div>
      </CCardBody></CCard></CCol>
    </MovieItemBlock>
  );
};

export default MovieCreditListCrew;
