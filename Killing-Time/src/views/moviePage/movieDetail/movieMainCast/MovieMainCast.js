import { CButton, CCard, CCardBody, CCardHeader, CCol } from "@coreui/react";
import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import MovieMainCastItem from "./MovieMainCastItem";

const MovieMainCastBlock = styled.div`
  overflow: auto;
  white-space: nowrap;
  ::-webkit-scrollbar {
    height: 8px;
  }
  ::-webkit-scrollbar-thumb {
    background: #217af4;
    border-radius: 10px;
  }
  ::-webkit-scrollbar-track {
    border-radius: 10px;
    background: rgba(33, 122, 244, .1);
  }
`;

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
      console.log(response.data.cast)
      setCast(response.data.cast);
    };
    loadMainCast();
  }, [id]);

  if (!cast) {
    return;
  }

  return (
    <>
      {
        cast.length !== 0 ?
    <CCol xs={10} style={{margin: "auto"}}>
      <CCard className="mb-4">
        <CCardHeader>
        <span style={{ fontSize: 18, fontWeight: "bold", color: "#696969", paddingLeft: 10 }}>주요 출연진</span>
        </CCardHeader>
        <CCardBody>
    <MovieMainCastBlock style={{marginLeft: 20, marginRight: 20}}>
      <table>
        <tbody>
          <tr>
            <td>
              {cast.map((result) => {
                if (result.order < 10) {
                  return <MovieMainCastItem key={result.id} result={result} />;
                } else {
                  return "";
                }
              })}
            </td>
            <td>
              <div style={{ display: "inline-block" }}>
                <Link to="/moviePage/movieCredit" state={{ id: id }}>
                  <CButton
                    style={{ marginLeft: 20, marginRight: 20 }}
                    color="secondary"
                    shape="rounded-pill"
                  >
                    More ▶
                  </CButton>
                </Link>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </MovieMainCastBlock>
    </CCardBody>
    </CCard>
    </CCol> : ""
      }
    </>
  );
};

export default MovieMainCast;
