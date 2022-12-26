
import styled from "styled-components";
import { CModalBody, CModal } from '@coreui/react';
import ReactPlayer from "react-player";
import {RiYoutubeFill} from 'react-icons/ri'
import { useState } from "react";

const DramaMediaBlock = styled.div`
  display: inline-block;
  margin-bottom: 10px;
  margin-left: 0px;
  margin-right: 0px;
  padding: 0;
  border-radius: 20;
`;

const DramaMainMediaVideo = (props) => {
  const {result} = props;
  const [visibleXL, setVisibleXL] = useState(false);
  
  const video_url = `https://www.youtube.com/watch?v=${result.key}`;
  const img_url = `https://img.youtube.com/vi/${result.key}/0.jpg`
  return (
    <> 
      <DramaMediaBlock>
        <RiYoutubeFill style={{position: "relative", display:"inline-block", left:"42%",}} onClick={() => setVisibleXL(!visibleXL)}  size={70} color='red'/>
        <img onClick={() => setVisibleXL(!visibleXL)} style={{width:400, height:250, display:"inline-block", marginLeft:'-65px'}} alt={""}  src={img_url} />
      </DramaMediaBlock>
      <CModal size="xl" alignment="center" visible={visibleXL} onClose={() => setVisibleXL(false)}>
        <CModalBody>
          <ReactPlayer width='100%' height={600} url={video_url} controls playing />
        </CModalBody>
      </CModal>
    </>
  );
};

export default DramaMainMediaVideo;
