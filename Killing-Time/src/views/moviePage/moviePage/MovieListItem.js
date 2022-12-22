import { Link } from "react-router-dom";
import styled from "styled-components";

const MovieItemBlock = styled.div`
  display: inline-block;
  margin: 10px;
`;

const MovieListItem = ({ result }) => {
  const { id, poster_path, title, vote_average, release_date } = result;
  const img_url = `https://www.themoviedb.org/t/p/w220_and_h330_face${poster_path}`;
  const rate = vote_average * 10;
  return (
    <>
      <MovieItemBlock>
        
      <Link to="/moviePage/movieDetail" state={{ id: id }} style={{textDecoration: "none", color: "black",}}>
        <div style={{ width: 220 }}>
          
            <img src={img_url} alt="movie thumbnail" style={{ borderRadius: 10 }} />
            
          
        </div>
        <div style={{fontSize: 14, textDecoration: "none", color: "black", width:220, textAlign: "center"}}>
          
            <div style={{ height: 21, overflow: "hidden", textOverflow: "ellipsis",}}>{title}</div>
            <div>
              <span>
              {
                              rate > 66 ? <strong style={{ color: "#369F36" }}>● {rate}%</strong> :
                              rate > 33 ? <strong style={{ color: "#FFAF0A" }}>● {rate}%</strong> :
                              <strong style={{ color: "#EB0000" }}>● {rate}%</strong>
                            }
              </span><br />
              개봉{release_date}
            </div>
          
        </div>
        </Link>
      </MovieItemBlock>
    </>
  );
};

export default MovieListItem;
