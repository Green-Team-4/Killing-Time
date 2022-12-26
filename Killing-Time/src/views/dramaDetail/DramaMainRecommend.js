
import axios from "axios";
import { useEffect, useState } from "react";
import styled from "styled-components";
import { CCard, CCardBody, CCol, CCardHeader  } from "@coreui/react";
import DramaMainRecommendItem from "./DramaMainRecommendItem";

const DramaMainRecommendBlock = styled.div`
  overflow: auto;
  white-space: nowrap;
  ::-webkit-scrollbar {
    height: 12px;
  }
  ::-webkit-scrollbar-thumb {
    background: #FF1493;
    border-radius: 5px;
  }

  ::-webkit-scrollbar-track {
    border-radius: 5px;
    background: #FFE4E1;
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
                       //https://api.themoviedb.org/3/tv/119051/recommendations?api_key
      const response = await axios.get(url);
      
      setRecommend(response.data);
      //console.log(response.data.results);
      
    };
    loadMainRecommend();
  }, [id]);

  if (!recommend) {
    return;
  }
  
  if (recommend)return (
    <CCol xs={10} style={{margin: "auto"}}>
      <CCard className='mb-3 border-gray' textColor='dark' style={{margin:7}}>
        <CCardHeader >
          <div style={{ height:'25px', fontSize:18, fontWeight:"bold", color:"#696969"}}>
            <span>추천 드라마({recommend.results.length})</span>
          </div>
        </CCardHeader>
          <CCardBody style={{overflow: "hidden", textOverflow: "ellipsis"}}>
          <DramaMainRecommendBlock style={{}}>
            {recommend.results.map((result) => {
              return <DramaMainRecommendItem key={result.id} result={result} />;
            })}
          </DramaMainRecommendBlock>
        </CCardBody>
      </CCard>
    </CCol>
  );
};

export default DramaMainRecommend;
