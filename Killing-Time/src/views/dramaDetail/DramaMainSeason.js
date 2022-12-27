
import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { CButton, CCard, CCardBody, CCol, CTooltip, CCardHeader  } from "@coreui/react";
import DramaMainSeasonItem from "./DramaMainSeasonItem";


const DramaMainCastBlock = styled.div`


`;

const DramaMainSeason = ({ id }) => {
  const [season, setSeason] = useState(null);
  //const [seasons, setSeasons] = useState(null);

  useEffect(() => {
    const loadMainSeason = async (e) => {
      const language = "en-US";
      const apiKey = "da88cf78c356139f9420b764c0d77208";
      const baseUrl = "https://api.themoviedb.org/3/tv";
      const url = `${baseUrl}/${id}?api_key=${apiKey}&language=${language}`;
      
      const response = await axios.get(url);
      setSeason(response.data);
      //setSeasons(response.data.seasons);

      console.log(response.data);
       //console.log(response.data.results);
    };
    loadMainSeason();
  }, [id]);

  if (!season) {
    return "null null ";
  }

  return (
      
    <CCol xs={10} style={{margin: "auto"}}>
      <CCard className='mb-3 border-gray' textColor='dark' style={{margin:7}}>
        <CCardHeader>
          <div style={{display: 'inline-block', width:'100px', height:'0px', fontSize:18, fontWeight:"bold", color:"#696969"}}>
            현재 시즌
          </div>
          
        </CCardHeader>
          <CCardBody>
          <DramaMainCastBlock>
            {season.number_of_seasons > 1 ? (
              <DramaMainSeasonItem result={season.seasons[season.number_of_seasons-1]} id={id} />
            ) : (
              <DramaMainSeasonItem result={season.seasons[0]} id={id} />
            )}
          </DramaMainCastBlock>
        </CCardBody>
      </CCard>
    </CCol>
    
  );
};

export default DramaMainSeason;
