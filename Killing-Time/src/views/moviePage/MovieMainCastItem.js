import styled from "styled-components";

const MovieItemBlock = styled.div`
  display: inline-block;
  margin: 20px;
`;

const MovieMainCastItem = ({ result }) => {
  const { id, name, profile_path, character } = result;
  const img_url = `https://www.themoviedb.org/t/p/w220_and_h330_face${profile_path}`;

  return (
    <MovieItemBlock>
      
      <div>
        <img
          style={{ width: 140 }}
          src={img_url}
          alt="movie thumbnail"
          title={id}
        /><br />
      </div>
      <div style={{ width: 140}}>
        <strong>{name}</strong>
        <br />
        <span style={{fontSize: 14}}>{character}</span>
      </div>
    </MovieItemBlock>
  );
};

export default MovieMainCastItem;
