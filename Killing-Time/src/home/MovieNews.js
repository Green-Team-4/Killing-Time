import { CCard, CCardBody, CCardHeader, CCol, CTable, CTableBody, CTableDataCell, CTableHead, CTableHeaderCell, CTableRow } from "@coreui/react";
import axios from "axios";
import { useEffect, useState } from "react";


const MovieNews = (props) => {
  

  const [movieNews, setMovieNews] = useState(null);
    useEffect( () => {
      const loadMovieNews = async (e) => {
        const query = "영화";
        const ClientId = "wU2XN4bqPL76KvebczSA";
        const ClientSecret = "In0G2tK4lo";
        const display = 5;
        const url = `/v1/search/news.json`; 
        
        const response = await axios.get(url, {
          params:{
            query: query,
            display: display,
            sort:'sim',
            start: 1
          },
          headers: {
            'X-Naver-Client-Id': ClientId,
            'X-Naver-Client-Secret': ClientSecret,
            'Access-Control-Allow-Origin': '*'
          }
        });
        console.log(response.data);
        setMovieNews(response.data);
      }
      loadMovieNews();
    },[]);
    return (
        <>
        <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>영화 뉴스</strong>
          </CCardHeader>
          <CCardBody>
              <CTable hover>
                <CTableHead>
                  <CTableRow>
                    <CTableHeaderCell scope="col">#</CTableHeaderCell>
                    <CTableHeaderCell scope="col">Class</CTableHeaderCell>
                    <CTableHeaderCell scope="col">Heading</CTableHeaderCell>
                    <CTableHeaderCell scope="col">Heading</CTableHeaderCell>
                  </CTableRow>
                </CTableHead>
                <CTableBody>
                  <CTableRow>
                    <CTableHeaderCell scope="row">1</CTableHeaderCell>
                    <CTableDataCell>Mark</CTableDataCell>
                    <CTableDataCell>Otto</CTableDataCell>
                    <CTableDataCell>@mdo</CTableDataCell>
                  </CTableRow>
                  
                </CTableBody>
              </CTable>
          </CCardBody>
        </CCard>
      </CCol>
        </>
    );

};

export default MovieNews;