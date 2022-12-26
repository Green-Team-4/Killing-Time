import { CCard, CCardBody, CCardHeader, CCarousel, CCarouselItem, CCol, CRow } from "@coreui/react";
import axios from "axios";
import { useEffect, useState } from "react";
import MovieTrailerItem from "./MovieTrailerItem";

const MovieTrailer = ({ id }) => {
  const [results, setResults] = useState(null);

  useEffect(() => {
    const loadMoiveTrailer = async (e) => {
      const language = "ko-KR";
      const apiKey = "403cc00da7a7725917c9acd69484bde6";
      const baseUrl = "https://api.themoviedb.org/3/movie";
      let url = `${baseUrl}/${id}/videos?api_key=${apiKey}&language=${language}`;
      // https://api.themoviedb.org/3/movie/436270/videos?api_key=403cc00da7a7725917c9acd69484bde6&language=ko-KR
      let response = await axios.get(url);
      if(response.data.results.length < 1 ) {
        url = `${baseUrl}/${id}/videos?api_key=${apiKey}`;
        response = await axios.get(url);
      }
      const result = response.data.results.slice(0).reverse().map(num => num);
      setResults(result);
    };
    loadMoiveTrailer();
  }, [id]);

  if (!results) {
    return;
  }

  return (
    <>
      {
        results.length >= 1 ?
      
      <CRow>
        <CCol xs={10} style={{ margin: "auto" }}>
          <CCard className="mb-4">
            <CCardHeader>
            <span style={{ fontSize: 18, fontWeight: "bold", color: "#696969", paddingLeft: 10 }}>동영상</span>
            </CCardHeader>
            <CCardBody style={{ paddingLeft: 40, paddingRight: 40, marginTop: 20, marginBottom: 20, textAlign: "center" }}>
              { 
                results.length === 1 ? <MovieTrailerItem key={results[0].id} result={results[0]} /> :
                <CCarousel controls indicators style={{ backgroundColor: "black"}}>
                  {
                    results.map((result) => {
                      return (
                        <CCarouselItem>
                          <MovieTrailerItem key={result.id} result={result} />
                        </CCarouselItem>
                      );
                    })
                  }
                </CCarousel>
              }
            </CCardBody>
          </CCard>
        </CCol>
      </CRow>
      : ""
      }
    </>
  );
};

export default MovieTrailer;
