
import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { CButton, CCard, CCardBody, CCol, CTooltip, CCardHeader  } from "@coreui/react";
import DramaMainSeasonItem from "./DramaMainSeasonItem";

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

const DramaMainSeason = ({ id }) => {
  const [season, setSeason] = useState(null);

  // useEffect : mount(초기화), update(상태변화) 이벤트 처리기 등록
  useEffect(() => {
    const loadMainSeason = async (e) => {
      const language = "ko-KR";
      const apiKey = "da88cf78c356139f9420b764c0d77208";
      const baseUrl = "https://api.themoviedb.org/3/tv";
      const url = `${baseUrl}/${id}?api_key=${apiKey}&language=${language}`;
      
      const response = await axios.get(url);
      setSeason(response.data.season);
      console.log(response.data);
    };
    loadMainSeason();
  }, [id]);

  if (!season) {
    return "season=null";
  }

  return (
      <div>
      정상출력
      </div>
    // <CCol xs={10} style={{margin: "auto"}}>
    //   <CCard className='mb-3 border-gray' textColor='dark' style={{margin:7}}>
    //     <CCardHeader>
    //       <div style={{display: 'inline-block', width:'140px', height:'0px', fontSize:18, fontWeight:"bold", color:"#696969"}}>
    //         주요 출연진({season.length})
    //       </div>
    //       <div style={{display: 'inline-block', verticalAlign: 'SUPER'}}>
    //         <Link to="/dramaMain/dramaCredit" state={{ id: id }}>
    //                   {/* moviePage/movieCredit */}
    //         <CTooltip
    //           content="더 많은 출연진을 원하시면 클릭하세요."
    //           placement="right"
    //         >
    //           <CButton size="sm" color='warning' style={{ marginTop:'0px'}}>More</CButton>
    //         </CTooltip>
    //         </Link>
    //       </div>
    //     </CCardHeader>
    //       <CCardBody>
    //       <DramaMainCastBlock>
    //         {season.map((result) => {
    //           if (result.order < 10) {
    //             return <DramaMainSeasonItem result={result} />;
    //           } else {
    //             return "";
    //           }
    //         })}
    //       </DramaMainCastBlock>
    //     </CCardBody>
    //   </CCard>
    // </CCol>
    
  );
};

export default DramaMainSeason;
