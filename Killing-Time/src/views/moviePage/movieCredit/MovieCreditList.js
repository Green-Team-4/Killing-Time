import axios from "axios";
import { useEffect, useState } from "react";
import MovieCreditListCast from "./MovieCreditListCast";
import MovieCreditListCrew from "./MovieCreditListCrew";

// const MovieMainCastBlock = styled.div`
//   overflow: auto;
//   white-space: nowrap;
// `;

const MovieCreditList = ({ id }) => {
  const [cast, setCast] = useState(null);
  const [crew, setCrew] = useState(null);

  // useEffect : mount(초기화), update(상태변화) 이벤트 처리기 등록
  useEffect(() => {
    const loadMainCast = async (e) => {
      const language = "ko-KR";
      const apiKey = "403cc00da7a7725917c9acd69484bde6";
      const baseUrl = "https://api.themoviedb.org/3/movie";
      const url = `${baseUrl}/${id}/credits?api_key=${apiKey}&language=${language}`;
      // https://api.themoviedb.org/3/movie/436270/credits?api_key=403cc00da7a7725917c9acd69484bde6&language=ko-KR
      const response = await axios.get(url);
      setCast(response.data.cast);
      setCrew(response.data.crew);
    };
    loadMainCast();
  }, [id]);

  if (!cast) {
    return;
  }

  return (
    <>
      {/* <MovieMainCastBlock> */}
      <div style={{display: "inline-block"}}>
          <h4>출연진</h4>
              {cast.map((result) => {
                
                  return (
                    <MovieCreditListCast key={result.credit_id} result={result} />
                  );
                
              })}
              </div>
              <div style={{display: "inline-block",verticalAlign: "top", marginLeft: 100}}>
              <h4>제작진</h4>
              {crew.map((result) => {
                
                  return (
                    <MovieCreditListCrew key={result.credit_id} result={result} />
                  );
                
              })}
      </div>
      {/* </MovieMainCastBlock> */}
    </>
  );
};

export default MovieCreditList;
