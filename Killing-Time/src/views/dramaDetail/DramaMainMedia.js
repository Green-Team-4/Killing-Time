import axios from "axios";
import { useEffect, useState } from "react";
import styled from "styled-components";
import { CCard, CCardBody, CCol, CCardHeader, CNav, CNavItem, CNavLink, CTabContent, CTabPane  } from "@coreui/react";
import DramaMainMediaVideo from "./DramaMainMediaVideo";
import DramaMainMediaBackground from "./DramaMainMediaBackground"
import DramaMainMediaPoster from "./DramaMainMediaPoster"
import React from 'react';

const DramaMainMediaBlock = styled.div`
  overflow: auto;
  white-space: nowrap;
  margin-left: -15px;
  margin-right: -15px;
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

const DramaMainMedia = ({ id }) => {
 
  const [allData, setAllData] = useState(null);
  const [activeKey, setActiveKey] = useState(1)

  useEffect(() => {
    const loadAllData = async (e) => {
      const language = "en-US";
      const apiKey = "da88cf78c356139f9420b764c0d77208";
      const baseUrl = "https://api.themoviedb.org/3/tv";
      const url1 = `${baseUrl}/${id}/videos?api_key=${apiKey}&language=${language}`;
      const response1 = await axios.get(url1);
      const url2 = `${baseUrl}/${id}/images?api_key=${apiKey}&language=${language},null`;
      const response2 = await axios.get(url2);     

      setAllData({ "video": response1.data, "background": response2.data })
      
    };
    loadAllData();

  }, [id]);

  if (!allData) {
    return "video=null";
  }

  return (
  
  <CCol xs={10} style={{margin: "auto"}}>
    <CCard className='mb-3 border-gray' textColor='dark' style={{margin:7}}>
      <CCardHeader style={{height:'45px'}}>
        <CNav style={{paddingLeft:0 , marginTop:-5}} variant="tabs" role="tablist">
          <CNavItem >
            <CNavLink style={{height:'42px'}}
              active={activeKey === 1}
              onClick={() => setActiveKey(1)}
            > <span style={{fontSize:18, fontWeight:"bold", color:"#696969", }}>동영상({allData.video.results.length})</span>
            </CNavLink>
          </CNavItem>
          <CNavItem>
            <CNavLink style={{height:'42px'}}
              active={activeKey === 2}
              onClick={() => setActiveKey(2)}
            >
              <span style={{fontSize:18, fontWeight:"bold", color:"#696969"}} >배경({allData.background.backdrops.length})
            </span>
            </CNavLink>
          </CNavItem>
          <CNavItem>
            <CNavLink style={{height:'42px'}}
              active={activeKey === 3}
              onClick={() => setActiveKey(3)}
            > <span style={{fontSize:18, fontWeight:"bold", color:"#696969"}}>포스터({allData.background.posters.length})</span>
            </CNavLink>
          </CNavItem>
        </CNav>
      </CCardHeader>
      <CCardBody>
        <CTabContent>
          <CTabPane role="동영상탭" aria-labelledby="" visible={activeKey === 1}>
            <CCol xs={15}>
              <CCardBody>
                <DramaMainMediaBlock style={{ marginTop:-15, marginBottom:-15}}>
                {allData.video.results.reverse().map((result) => {
                      return (
                        <DramaMainMediaVideo key={result.id} result={result} />
                      );
                  })}
                </DramaMainMediaBlock>
              </CCardBody>
            </CCol>
          </CTabPane>
          <CTabPane role="배경" aria-labelledby="" visible={activeKey === 2}>
            <CCol xs={15}>
              <CCardBody>
                <DramaMainMediaBlock style={{ marginTop:-15, marginBottom:-15}}>
                {allData.background.backdrops.map((result1) => {
                      return (
                        <DramaMainMediaBackground key={result1.id} result1={result1} />
                      );
                    })}
                </DramaMainMediaBlock>
              </CCardBody>
            </CCol>
          </CTabPane> 
          <CTabPane role="포스터" aria-labelledby="" visible={activeKey === 3}>
            <CCol xs={15}>
              <CCardBody>
                <DramaMainMediaBlock style={{marginTop:-15, marginBottom:-15}}>
                {allData.background.posters.map((result2) => {
                      return (
                        <DramaMainMediaPoster key={result2.id} result2={result2} />
                      );
                    })}
                </DramaMainMediaBlock>
              </CCardBody>
            </CCol>
          </CTabPane>
        </CTabContent>
      </CCardBody>
    </CCard>
  </CCol>
  );
};

export default DramaMainMedia;
