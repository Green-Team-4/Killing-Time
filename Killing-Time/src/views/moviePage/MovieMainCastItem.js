import { Link } from "react-router-dom";
import styled from "styled-components";

const MovieItemBlock = styled.div`
  display: inline-block;
  margin: 20px;
  margin-left: 30px;
  padding: 0;
`;

const MovieMainCastItem = ({ result }) => {
  const { id, name, profile_path, character } = result;
  const img_url = `https://www.themoviedb.org/t/p/w220_and_h330_face${profile_path}`;
  const detail_url = `#/personDetail?id=${ id }`;

  return (
    <MovieItemBlock>
      <div>
        <div>
        
        <a href={ detail_url }>
          <img
            style={{ width: 140 }}
            src={img_url}
            alt="movie thumbnail"
            title={id}
          />
          </a>
          <br /><br />
        </div>
        <div style={{ width: 140, overflow: "hidden", textOverflow: "ellipsis"}}>
          <a style={{textDecoration: "none", color: "black"}} href={ detail_url }><strong>{name}</strong></a>
          <br />
          <span style={{ fontSize: 14 }}>{character}</span>
        </div>
      </div>
    </MovieItemBlock>
  );
};

export default MovieMainCastItem;