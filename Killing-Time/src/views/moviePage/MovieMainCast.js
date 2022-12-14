import { CButton } from "@coreui/react";
import axios from "axios";
import { useEffect, useState } from "react";
import MovieMainCastItem from "./MovieMainCastItem";

const MovieMainCast = ({ id }) => {
  const [cast, setCast] = useState(null);

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
    };
    loadMainCast();
  }, [id]);

  if (!cast) {
    return;
  }

  return (
    <>
    <h2>주요 출연진</h2>
    <table>
      <tr>
        <td>
      {
        cast.map((result) => {
          if(result.order < 6) {
            return <MovieMainCastItem key={result.id} result={result} />;
          } else {
            return '';
          }
        })
      }
      </td>
      <td>
      <CButton color="secondary" shape="rounded-pill"><storng>More ▶</storng></CButton>
      </td>
      </tr>
    </table>
    </>
  );
};

export default MovieMainCast;
