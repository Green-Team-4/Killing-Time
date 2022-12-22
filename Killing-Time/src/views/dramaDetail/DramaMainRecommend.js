
import axios from "axios";
import { useEffect, useState } from "react";

import styled from "styled-components";
import { CCard, CCardBody, CCol, CCardHeader  } from "@coreui/react";
import DramaMainRecommendItem from "./DramaMainRecommendItem";

const DramaMainRecommendBlock = styled.div`
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

const DramaMainRecommend = ({ id }) => {
  const [recommend, setRecommend] = useState(null);

  // useEffect : mount(초기화), update(상태변화) 이벤트 처리기 등록
  useEffect(() => {
    const loadMainRecommend = async (e) => {
      const language = "ko-KR";
      const apiKey = "da88cf78c356139f9420b764c0d77208";
      const baseUrl = "https://api.themoviedb.org/3/tv";
      const url = `${baseUrl}/${id}/recommendations?api_key=${apiKey}&language=${language}`;
      const response = await axios.get(url);
      
      setRecommend(response.data.recommend);
      console.log(response.data.results);
    };
    loadMainRecommend();
  }, [id]);

  if (!recommend) {
    return;
  }

  return (
    
    <CCol xs={10} style={{margin: "auto"}}>
      <CCard className='mb-3 border-gray' textColor='dark' style={{margin:7}}>
        <CCardHeader>
          <div style={{display: 'inline-block', width:'140px', marginLeft: 20,}}>
            <h4>추천 영화</h4>
          </div>
          
        </CCardHeader>
          <CCardBody>
          <DramaMainRecommendBlock style={{marginLeft: 20, marginRight: 20}}>
            {recommend.map((result) => {
              if (result.order < 10) {
                return <DramaMainRecommendItem key={result.id} result={result} />;
              } else {
                return "";
              }
            })}
          </DramaMainRecommendBlock>
        </CCardBody>
      </CCard>
    </CCol>
    
  );
};

export default DramaMainRecommend;
