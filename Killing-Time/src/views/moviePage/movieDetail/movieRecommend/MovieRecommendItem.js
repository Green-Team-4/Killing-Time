import { Link } from "react-router-dom";

const MovieRecommendItem = ({ result }) => {
  
  const { id, poster_path, title, vote_average, release_date } = result;
  const img_url = `https://www.themoviedb.org/t/p/w220_and_h330_face${poster_path}`;
  const rate = Math.floor(vote_average) * 10;

  return (
    <>
      <div style={{display: "inline-block", marginRight: 20}}>
      <Link to="/moviePage/movieDetail" state={{ id: id }} style={{textDecoration: "none", color: "black" }}>
      
        <div style={{marginBottom: 20}}>
          {
            poster_path !== null ? (
              <img src={img_url} alt={title} title={id} style={{ width: 140, borderRadius: 10 }} />
            ) : (
              <img src="https://via.placeholder.com/300x450" alt={title} title={id} style={{ width: 140, borderRadius: 10 }} />
            )
          }
        </div>
        <div style={{ width: 140, overflow: "hidden", textOverflow: "ellipsis", marginBottom: 20 }}>
            <div style={{ height: 21, overflow: "hidden", textOverflow: "ellipsis",}}>{title}</div>
            <div>
              <div style={{ textAlign: "left", fontSize: 12 }}>
              {
                rate > 66 ? <strong style={{ color: "#369F36" }}>● {rate}%</strong> :
                rate > 33 ? <strong style={{ color: "#FFAF0A" }}>● {rate}%</strong> :
                <strong style={{ color: "#EB0000" }}>● {rate}%</strong>
              }
              </div><div style={{ color: "gray", fontSize: 12, textAlign: "right" }}>개봉&nbsp;&nbsp;{release_date}</div>
            </div>
          
        </div>
      
      </Link>
      </div>
    </>
  );
};

export default MovieRecommendItem;
