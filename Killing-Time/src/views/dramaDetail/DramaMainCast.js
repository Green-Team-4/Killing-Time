
import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { CButton, CCard, CCardBody, CCol, CTooltip, CCardHeader  } from "@coreui/react";
import DramaMainCastItem from "./DramaMainCastItem";

const DramaMainCastBlock = styled.div`
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

const DramaMainCast = ({ id }) => {
  const [cast, setCast] = useState(null);

  // useEffect : mount(초기화), update(상태변화) 이벤트 처리기 등록
  useEffect(() => {
    const loadMainCast = async (e) => {
      const language = "ko-KR";
      const apiKey = "da88cf78c356139f9420b764c0d77208";
      const baseUrl = "https://api.themoviedb.org/3/tv";
      const url = `${baseUrl}/${id}/credits?api_key=${apiKey}&language=${language}`;
      const response = await axios.get(url);
      setCast(response.data.cast);
    };
    loadMainCast();
  }, [id]);

  if (!cast) {
    return;
  }

  return (
    
    <CCol xs={10} style={{margin: "auto"}}>
      <CCard className='mb-3 border-gray' textColor='dark' style={{margin:7}}>
        <CCardHeader>
          <div style={{display: 'inline-block', width:'140px', height:'0px', fontSize:18, fontWeight:"bold", color:"#696969"}}>
            주요 출연진({cast.length})
          </div>
          <div style={{display: 'inline-block', verticalAlign: 'SUPER'}}>
            <Link to="/dramaMain/dramaCredit" state={{ id: id }}>
                      {/* moviePage/movieCredit */}
            <CTooltip
              content="더 많은 출연진을 원하시면 클릭하세요."
              placement="right"
            >
              <CButton size="sm" color='warning' style={{ marginTop:'0px'}}>More</CButton>
            </CTooltip>
            </Link>
          </div>
        </CCardHeader>
          <CCardBody>
          <DramaMainCastBlock>
            {cast.map((result) => {
              if (result.order < 10) {
                return <DramaMainCastItem key={result.id} result={result} />;
              } else {
                return "";
              }
            })}
          </DramaMainCastBlock>
        </CCardBody>
      </CCard>
    </CCol>
    
  );
};

export default DramaMainCast;
