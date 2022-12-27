import { Link } from "react-router-dom";
import styled from "styled-components";
import { CCard,CImage, CCardImage, CCardBody, CRow,CCardTitle, CCardText, CCol  } from '@coreui/react';


const DramaItemBlock = styled.div`
  display: inline-block;
  margin-bottom: 10px;
  margin-left: 0;
  margin-right: 5px;
  padding: 0;
`;

const DramaMainCastItem = ({ result }) => {
  const {   overview, air_date, poster_path, season_number, episode_count} = result;
  const img_url = `https://www.themoviedb.org/t/p/w130_and_h195_bestv2${poster_path}`;
  
	//https://www.themoviedb.org/t/p/w130_and_h195_bestv2/phv2Jc4H8cvRzvTKb9X1uKMboTu.jpg
  return (
    <DramaItemBlock>
      <CCard className="mb-0" style={{ maxWidth: '1000px' }}>
        <CRow className="g-5">
          <CCol md={4}>
            <CCardImage src={img_url} style={{width:'135px'}} />
          </CCol>
          <CCol md={8}>
            <CCardBody style={{}}>
              <CCardTitle>시즌 {season_number}</CCardTitle>
              <CCardText>
        
              {overview == null ? (
                  <span>{air_date} / {episode_count }화 <br /> {overview} </span>
              ) : (
                <span>{air_date} 에 방영되었습니다. / {episode_count }화 <br /> {overview} </span>
              )} 
              </CCardText>
              <CCardText>
                <small className="text-medium-emphasis">Last updated 3 mins ago</small>
              </CCardText>
            </CCardBody>
          </CCol>
        </CRow>
      </CCard>








      
      {/* <CCard className='mb-0 border-gray' textColor='dark'>
          <Link to="/personList/personDetail" state={{ id: id }}>
            {profile_path !== null ? (
              <CCardImage orientation="top" src={img_url} alt={name} title={id} style={{ width: 140 }} />
            ) : (
              <CCardImage orientation="top" src="https://via.placeholder.com/220xh330" alt={name} title={id} style={{ width: 140 }} />
            )}
          </Link>
        <CCardBody
          style={{ width: 140, overflow: "hidden", textOverflow: "ellipsis", marginTop:"-10px", marginBottom:"-10px" }}
        >
          <Link
            to="/personList/personDetail"
            state={{ id: id }}
            style={{ textDecoration: "none", color: "black" }}
          >
            <strong>{name}</strong>
          </Link>
          <br />
          <span style={{ fontSize: 14 }}>{character}</span>
        </CCardBody>
      </CCard> */}
    </DramaItemBlock> 
  );
};

export default DramaMainCastItem;
