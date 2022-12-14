import { Link } from "react-router-dom";
import styled from "styled-components";

const MovieItemBlock = styled.div`
  display: inline-block;
  margin: 10px;
`;

const MovieListItem = ({ result }) => {
  const { id, poster_path, title } = result;
  const img_url = `https://www.themoviedb.org/t/p/w220_and_h330_face${poster_path}`;

  return (
    <MovieItemBlock>
      <div style={{ width: 220 }}>
        <Link to="/movieDetail" state={{ id: id }}>
          <img src={img_url} alt="movie thumbnail" />
        </Link>
      </div>
      <div>
        <Link to="/movieDetail" state={{ id: id }}>
          {title}
        </Link>
      </div>
    </MovieItemBlock>
  );
};

export default MovieListItem;
