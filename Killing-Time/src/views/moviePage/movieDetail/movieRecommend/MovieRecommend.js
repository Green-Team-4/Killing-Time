import { CCard, CCardBody, CCardHeader, CCol, CNav, CNavItem, CNavLink, CRow, CTabContent, CTabPane } from "@coreui/react";
import axios from "axios";
import { useEffect, useState } from "react";
import styled from "styled-components";
import MovieRecommendItem from "./MovieRecommendItem";

const MovieRecommendBlock = styled.div`
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

const MovieRecommend = ({ id }) => {
  const [allData, setAllData] = useState(null);
  const [activeKey, setActiveKey] = useState(1);

  useEffect(() => {
    const loadMoiveRecommend = async (e) => {
      const language = "ko-KR";
      const apiKey = "403cc00da7a7725917c9acd69484bde6";
      const baseUrl = "https://api.themoviedb.org/3/movie";
      let recommend_url = `${baseUrl}/${id}/recommendations?api_key=${apiKey}&language=${language}&page=1`;
      // https://api.themoviedb.org/3/movie/436270/recommendations?api_key=403cc00da7a7725917c9acd69484bde6&language=ko-KR&page=1
      let resp_recommend = await axios.get(recommend_url);
      if(resp_recommend.data.results.length < 1 ) {
        recommend_url = `${baseUrl}/${id}/recommendations?api_key=${apiKey}`;
        resp_recommend = await axios.get(recommend_url);
      }
      
      let similar_url = `${baseUrl}/${id}/similar?api_key=${apiKey}&language=${language}&page=1`;
      // https://api.themoviedb.org/3/movie/436270/similar?api_key=403cc00da7a7725917c9acd69484bde6&language=ko-KR&page=1
      let resp_similar = await axios.get(similar_url);
      if(resp_similar.data.results.length < 1 ) {
        similar_url = `${baseUrl}/${id}/similar?api_key=${apiKey}`;
        resp_similar = await axios.get(similar_url);
      }
      
      const data = {};
      data.recommend = resp_recommend.data.results;
      data.similar = resp_similar.data.results;

      setAllData(data);
    };
    loadMoiveRecommend();
  }, [id]);

  if (!allData) {
    return;
  }

  return (
    <>
      { allData.recommend.length === 0 && allData.similar.length === 0 ? "" :
      <CRow>
        <CCol xs={10} style={{ margin: "auto" }}>
          <CCard className="mb-4">
            <CCardHeader style={{ height: "45px" }}>
              <CNav style={{ paddingLeft: 0, marginTop: -5 }} variant="tabs" role="tablist">
              <CNavItem>
                  <CNavLink style={{ height: "42px" }} active={activeKey === 1} onClick={() => setActiveKey(1)}>
                    <span style={{ fontSize: 18, fontWeight: "bold", color: "#696969" }}>비슷한 영화</span>
                  </CNavLink>
                </CNavItem>
                {
                  allData.recommend.length !== 0 ?
                <CNavItem>
                  <CNavLink style={{ height: "42px" }} active={activeKey === 2} onClick={() => setActiveKey(2)}>
                    <span style={{ fontSize: 18, fontWeight: "bold", color: "#696969" }}>추천 영화</span>
                  </CNavLink>
                </CNavItem> : ""
                  
                }
                
              </CNav>
            </CCardHeader>
            <CCardBody style={{ paddingLeft: 40, paddingRight: 40, marginTop: 20, marginBottom: 20, textAlign: "center" }}>
              <CTabContent>
                {
                  allData.recommend.length !== 0 ?
                <CTabPane role="추천영화" aria-labelledby="" visible={activeKey === 2}>
                  <MovieRecommendBlock>
                      
                        {
                          
                          allData.recommend.map((result) => {
                            return <MovieRecommendItem key={result.id} result={result} />;
                          })
                        }
                      
                  </MovieRecommendBlock>
                </CTabPane> : ""
                }
                <CTabPane role="비슷한영화" aria-labelledby="" visible={activeKey === 1}>
                <MovieRecommendBlock>
                      
                      {
                        
                        allData.similar.map((result) => {
                          return <MovieRecommendItem key={result.id} result={result} />;
                        })
                      }
                    
                </MovieRecommendBlock>
                </CTabPane> 
              </CTabContent>
            </CCardBody>
          </CCard>
        </CCol>
      </CRow>
      }
    </>
  );
};

export default MovieRecommend;
