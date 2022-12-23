import { Link } from "react-router-dom";
import styled from "styled-components";
import { CCard, CCardImage, CCardBody,  } from '@coreui/react';
import ReactPlayer from "react-player";


const DramaMediaBlock = styled.div`
  display: inline-block;
  margin-bottom: 10px;
  margin-left: 0;
  margin-right: 10px;
  padding: 0;

`;



const DramaMainMediaVideo = (props) => {
  
  const {result} = props;
 
  
  const video_url = `https://www.youtube.com/watch?v=${result.key}`;
 
  return (
    <DramaMediaBlock>
            {result.key !== null ? (
              <ReactPlayer url={video_url} controls />
            ) : (
              ""
            )}
    </DramaMediaBlock>
  );
};

export default DramaMainMediaVideo;
