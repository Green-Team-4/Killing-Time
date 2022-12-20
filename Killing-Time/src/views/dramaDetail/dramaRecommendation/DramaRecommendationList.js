import { CNav, CNavItem, CNavLink, CTabContent, CTabPane } from "@coreui/react";
import axios from "axios";
import styled from "styled-components";
import { useEffect, useState } from "react";
import { CButton, CCard, CCardBody, CCol, CTooltip, CCardHeader  } from "@coreui/react";
import { Link } from "react-router-dom";


const DramaMainCastBlock = styled.div`
  overflow: auto;
  white-space: nowrap;
  ::-webkit-scrollbar {
    height: 15px;
  }
  ::-webkit-scrollbar-thumb {
    background: #FF1493;
    border-radius: 0px;
  }

  ::-webkit-scrollbar-track {
    border-radius: 0px;
    background: #D8BFD8;
  }
`;


const DramaRecommendationList = ({ id }) => {
  const [recommendation, setRecommendation] = useState(null);
  

  // useEffect : mount(초기화), update(상태변화) 이벤트 처리기 등록
  useEffect(() => {
    const loadMainRecommendation= async (e) => {
      const language = "en-US";
      const apiKey = "da88cf78c356139f9420b764c0d77208";
      const baseUrl = "https://api.themoviedb.org/3/tv";
      const url = `${baseUrl}/${id}/recommendations?api_key=${apiKey}&language=${language}`;
      const response = await axios.get(url);
      setRecommendation(response.data.recommendation);
      
    };
    loadMainRecommendation();
  }, [id]);

  if (!recommendation) {
    return;
  }
 
  return (
    <>
       <CCol xs={10} style={{margin: "auto"}}>
      <CCard className='mb-3 border-gray' textColor='dark' style={{margin:7}}>
        <CCardHeader>
          <div style={{display: 'inline-block', width:'140px', marginLeft: 20,}}>
            <h4>주요 출연진</h4>
          </div>
          <div style={{display: 'inline-block', verticalAlign: 'SUPER'}}>
            <Link to="/dramaMain/dramaCredit" state={{ id: id }}>
                      {/* moviePage/movieCredit */}
            <CTooltip
              content="더 많은 출연진을 원하시면 클릭하세요."
              placement="top"
            >
              <CButton size="sm" color="secondary">More</CButton>
            </CTooltip>
            </Link>
          </div>
        </CCardHeader>
          <CCardBody>
          <DramaMainCastBlock style={{marginLeft: 20, marginRight: 20}}>
            {recommendation.map((result) => {
              if (result.order < 10) {
                return <DramaRecommendationItem key={result.id} result={result} />;
              } else {
                return "";
              }
            })}
          </DramaMainCastBlock>
        </CCardBody>
      </CCard>
    </CCol>
      
    </>
  );
};

export default DramaRecommendationList;
