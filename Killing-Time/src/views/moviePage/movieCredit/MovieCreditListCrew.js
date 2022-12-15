import styled from "styled-components";

const MovieItemBlock = styled.div`
  
  margin: 20px;
  margin-left: 30px;
  padding: 0;
`;

const MovieCreditListCrew = ({ result }) => {
  const { id, name, profile_path, department, job } = result;
  const img_url = `https://www.themoviedb.org/t/p/w220_and_h330_face${profile_path}`;
  const detail_url = `#/personDetail?id=${ id }`;

  return (
    <MovieItemBlock>
      <div>
        <div style={{display: "inline-block"}}>
        <a href={ detail_url }>
          <img
            style={{ width: 140 }}
            src={img_url}
            alt="movie thumbnail"
            title={id}
          />
          </a>
          <br />
        </div>
        <div style={{display: "inline-block", marginLeft: 25}}>
        <a style={{textDecoration: "none", color: "black"}} href={ detail_url }><strong>{name}</strong></a>
          <br />
          {department}/{job}
        </div>
      </div>
    </MovieItemBlock>
  );
};

export default MovieCreditListCrew;
