import { CCard, CCardBody, CCardHeader, CCol, CTable, CTableBody, CTableDataCell, CTableHead, CTableHeaderCell, CTableRow } from "@coreui/react";
import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";


const DramaChart = (props) => {
  

  const [dramaChart, setDramaChart] = useState(null);
    useEffect( () => {
      const loadDramaChart = async (e) => {
        const api_key = "6b4c779cba85c26ce5e2fc716ac93b81";
        const url = `https://api.themoviedb.org/3/tv/popular?api_key=${api_key}&language=ko-KR&page=1`;         
        const response = await axios.get(url);
        setDramaChart(response.data);
      }
      loadDramaChart();
    },[]);


    return (
        <>
        <CCol xs={10} style={{margin: "auto"}}>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>드라마 차트</strong>
          </CCardHeader>
          <CCardBody>
              <CTable hover>
                <CTableHead>
                  <CTableRow>
                    <CTableHeaderCell scope="col" style={{width:50}}>순위</CTableHeaderCell>
                    <CTableHeaderCell scope="col">포스터</CTableHeaderCell>
                    <CTableHeaderCell scope="col">이름</CTableHeaderCell>
                    <CTableHeaderCell scope="col">첫 방영 일</CTableHeaderCell>
                  </CTableRow>
                </CTableHead>
                <CTableBody>
                  {
                    dramaChart ?
                    <CTableRow>
                      <CTableHeaderCell>1</CTableHeaderCell>
                      <CTableDataCell><Link to="/dramaMain/dramaDetails" state={{ id: dramaChart.results[0].id }}><img style={{width:101}} src={`https://www.themoviedb.org/t/p/w220_and_h330_face${dramaChart.results[0].poster_path}`} alt=""></img></Link></CTableDataCell>
                      <CTableDataCell>{dramaChart.results[0].name}</CTableDataCell>
                      <CTableDataCell>{dramaChart.results[0].first_air_date}</CTableDataCell>
                    </CTableRow>
                  :
                  ""
                  }
                  {
                    dramaChart ?
                    <CTableRow>
                      <CTableHeaderCell>2</CTableHeaderCell>
                      <CTableDataCell><Link to="/dramaMain/dramaDetails" state={{ id: dramaChart.results[1].id }}><img style={{width:101}} src={`https://www.themoviedb.org/t/p/w220_and_h330_face${dramaChart.results[1].poster_path}`} alt=""></img></Link></CTableDataCell>
                      <CTableDataCell>{dramaChart.results[1].name}</CTableDataCell>
                      <CTableDataCell>{dramaChart.results[1].first_air_date}</CTableDataCell>
                    </CTableRow>
                  :
                  ""
                  }
                  {
                    dramaChart ?
                    <CTableRow>
                      <CTableHeaderCell>3</CTableHeaderCell>
                      <CTableDataCell><Link to="/dramaMain/dramaDetails" state={{ id: dramaChart.results[2].id }}><img style={{width:101}} src={`https://www.themoviedb.org/t/p/w220_and_h330_face${dramaChart.results[2].poster_path}`} alt=""></img></Link></CTableDataCell>
                      <CTableDataCell>{dramaChart.results[2].name}</CTableDataCell>
                      <CTableDataCell>{dramaChart.results[2].first_air_date}</CTableDataCell>
                    </CTableRow>
                  :
                  ""
                  }
                  {
                    dramaChart ?
                    <CTableRow>
                      <CTableHeaderCell>4</CTableHeaderCell>
                      <CTableDataCell><Link to="/dramaMain/dramaDetails" state={{ id: dramaChart.results[3].id }}><img style={{width:101}} src={`https://www.themoviedb.org/t/p/w220_and_h330_face${dramaChart.results[3].poster_path}`} alt=""></img></Link></CTableDataCell>
                      <CTableDataCell>{dramaChart.results[3].name}</CTableDataCell>
                      <CTableDataCell>{dramaChart.results[3].first_air_date}</CTableDataCell>
                    </CTableRow>
                  :
                  ""
                  }
                  {
                    dramaChart ?
                    <CTableRow>
                      <CTableHeaderCell>4</CTableHeaderCell>
                      <CTableDataCell><Link to="/dramaMain/dramaDetails" state={{ id: dramaChart.results[4].id }}><img style={{width:101}} src={`https://www.themoviedb.org/t/p/w220_and_h330_face${dramaChart.results[4].poster_path}`} alt=""></img></Link></CTableDataCell>
                      <CTableDataCell>{dramaChart.results[4].name}</CTableDataCell>
                      <CTableDataCell>{dramaChart.results[4].first_air_date}</CTableDataCell>
                    </CTableRow>
                  :
                  ""
                  }
                </CTableBody>
              </CTable>
          </CCardBody>
        </CCard>
      </CCol>
        </>
    );

};

export default DramaChart;