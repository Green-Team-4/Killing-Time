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
  const [video, setVideo] = useState(null);
  const [background, setBackground] = useState(null);
  const [poster, setPoster] = useState(null);
  const [activeKey, setActiveKey] = useState(1)

  useEffect(() => {
    const loadMainMediaVideo = async (e) => {
      const language = "en-US";
      const apiKey = "da88cf78c356139f9420b764c0d77208";
      const baseUrl = "https://api.themoviedb.org/3/tv";
      const url = `${baseUrl}/${id}/videos?api_key=${apiKey}&language=${language}`;
                       //https://api.themoviedb.org/3/tv/119051/recommendations?api_key
      const response = await axios.get(url);
      
      setVideo(response.data);
      //console.log(response.data.results);
    };
    loadMainMediaVideo();

  }, [id]);

  useEffect(() => {
    const loadMainMediaBackground = async (e) => {
      const language = "en-US";
      const apiKey = "da88cf78c356139f9420b764c0d77208";
      const baseUrl = "https://api.themoviedb.org/3/tv";
      const url = `${baseUrl}/${id}/images?api_key=${apiKey}&language=${language}`;
      const response = await axios.get(url);
        
      setBackground(response.data);
      console.log(response.data.backdrops);
    };
    loadMainMediaBackground();
  }, [id]);

  useEffect(() => {
    const loadMainMediaPoster = async (e) => {
      const language = "en-US";
      const apiKey = "da88cf78c356139f9420b764c0d77208";
      const baseUrl = "https://api.themoviedb.org/3/tv";
      const url = `${baseUrl}/${id}/images?api_key=${apiKey}&language=${language}`;
      const response = await axios.get(url);
      
      setPoster(response.data);
      //console.log(response.data.results);
    };
    loadMainMediaPoster();
  }, [id]);

  if (!video) {
    return;
  }
  
  return (
  
    <CCol xs={10} style={{margin: "auto"}}>
    <CCard className='mb-3 border-gray' textColor='dark' style={{margin:7}}>
      <CCardHeader style={{height:'56px'}}>
      <CNav style={{paddingLeft:0}} variant="tabs" role="tablist">
        <CNavItem>
          <CNavLink
            active={activeKey === 1}
            onClick={() => setActiveKey(1)}
          > <span style={{fontSize:20, fontWeight:"bold", color:"#696969"}}>동영상</span>
          </CNavLink>
        </CNavItem>
        <CNavItem>
          <CNavLink
            active={activeKey === 2}
            onClick={() => setActiveKey(2)}
          > <span style={{fontSize:20, fontWeight:"bold", color:"#696969"}} >배경</span>
          </CNavLink>
        </CNavItem>
        <CNavItem>
          <CNavLink
            active={activeKey === 3}
            onClick={() => setActiveKey(3)}
          > <span style={{fontSize:20, fontWeight:"bold", color:"#696969"}}>포스터</span>
          </CNavLink>
        </CNavItem>
      </CNav>
    </CCardHeader>
    <CCardBody>
      <CTabContent>
        <CTabPane role="동영상탭" aria-labelledby="" visible={activeKey === 1}>
          <CCol xs={15}>
            <CCardBody>
              <DramaMainMediaBlock>
               {video.results.reverse().map((result) => {
                    return (
                      <DramaMainMediaVideo result={result} />
                    );
                })}
              </DramaMainMediaBlock>
            </CCardBody>
          </CCol>
        </CTabPane>
        <CTabPane role="배경" aria-labelledby="" visible={activeKey === 2}>
          <CCol xs={15}>
            <CCardBody>
              <DramaMainMediaBlock>
              {background.backdrops.reverse().map((result) => {
                    return (
                      <DramaMainMediaBackground result={result} />
                    );
                  })}
              </DramaMainMediaBlock>
            </CCardBody>
          </CCol>
        </CTabPane> 
        <CTabPane role="포스터" aria-labelledby="" visible={activeKey === 3}>
          <CCol xs={15}>
            <CCardBody>
              <DramaMainMediaBlock style={{}}>
              {poster.posters.reverse().map((result) => {
                    return (
                      <DramaMainMediaPoster result={result} />
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
