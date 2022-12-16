import { Link } from "react-router-dom";
import styled from "styled-components";

const MovieItemBlock = styled.div`
  
  margin: 20px;
  margin-left: 30px;
  padding: 0;
`;

const MovieCreditListCrew = ({ result }) => {
  const { id, name, profile_path, department, job } = result;
  const img_url = `https://www.themoviedb.org/t/p/w220_and_h330_face${profile_path}`;

  return (
    <MovieItemBlock>
      <div>
        <div style={{display: "inline-block"}}>
        <Link to="/personList/personDetail" state={{ id: id }}>
        {profile_path !== null ? (
              <img src={img_url} alt={name} title={id} style={{ width: 140 }} />
            ) : (
              <img
                src="https://via.placeholder.com/140x210"
                alt={name}
                title={id}
                style={{ width: 140 }}
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
    </MovieItemBlock>
  );
};

export default MovieCreditListCrew;
