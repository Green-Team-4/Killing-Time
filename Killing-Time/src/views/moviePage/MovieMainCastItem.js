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

  return (
    <MovieItemBlock>
      <div>
        <div>
          <Link to="/personDetail" state={{ id: id }}>
            {profile_path !== null ? (
              <img src={img_url} alt={name} title={id} style={{ width: 140 }} />
            ) : (
              <img
                src="https://via.placeholder.com/300x450"
                alt={name}
                title={id}
                style={{ width: 140 }}
              />
            )}
          </Link>
          <br />
          <br />
        </div>
        <div
          style={{ width: 140, overflow: "hidden", textOverflow: "ellipsis" }}
        >
          <Link
            to="/personDetail"
            state={{ id: id }}
            style={{ textDecoration: "none", color: "black" }}
          >
            <strong>{name}</strong>
          </Link>
          <br />
          <span style={{ fontSize: 14 }}>{character}</span>
        </div>
      </div>
    </MovieItemBlock>
  );
};

export default MovieMainCastItem;
