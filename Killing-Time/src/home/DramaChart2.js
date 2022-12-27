import { cilSearch } from "@coreui/icons";
import CIcon from "@coreui/icons-react";
import { CCard, CCardBody, CCardHeader, CCol, CTable, CTableBody, CTableDataCell, CTableHead, CTableHeaderCell, CTableRow, CTooltip } from "@coreui/react";
import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";


const DramaChart2 = (props) => {
  

  const [dramaChart, setDramaChart] = useState(null);
    useEffect( () => {
      const loadDramaChart = async (e) => {
        const api_key = "6b4c779cba85c26ce5e2fc716ac93b81";
        const url = `https://api.themoviedb.org/3/tv/top_rated?api_key=${api_key}&language=ko-KR&page=1`;         
        const response = await axios.get(url);
        setDramaChart(response.data.results.splice(5,5));
        
      }
      loadDramaChart();
    },[]);
    

    return (
        <>
        <CCol xs={10} style={{margin: "auto"}}>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>TV 순위</strong>&nbsp;&nbsp;<small><CTooltip content="더 많은 TV 시리즈 찾아보기" placement="top"><Link to="/search"  style={{textDecoration:'none', color:'gray'}}>TV 더 찾아보기  <CIcon style={{width:17, verticalAlign: 'middle'}} icon={cilSearch} customClassName="nav-icon" /></Link></CTooltip></small>
          </CCardHeader>
          <CCardBody>
              <CTable hover>
                <CTableHead style={{fontWeight:'bold'}}>
                  <CTableRow>
                    <CTableHeaderCell scope="col" style={{width:50, textAlign:'center'}}>순위</CTableHeaderCell>
                    <CTableHeaderCell scope="col" style={{textAlign:'center'}}>포스터</CTableHeaderCell>
                    <CTableHeaderCell scope="col" style={{textAlign:'center'}}>이름</CTableHeaderCell>
                    <CTableHeaderCell scope="col" style={{textAlign:'center'}}>첫 방영 일</CTableHeaderCell>
                  </CTableRow>
                </CTableHead>
                <CTableBody style={{fontWeight:'bold',verticalAlign: 'middle'}}>
                  {
                    dramaChart ?
                    dramaChart.map( (dramaChart, idx) => {
                      return (
                    <CTableRow>
                      <CTableHeaderCell style={{textAlign:'center'}}>{idx + 6}</CTableHeaderCell>
                      <CTableDataCell style={{textAlign:'center'}}><Link to="/dramaMain/dramaDetails" state={{ id: dramaChart.id }}><img style={{width:101}} src={`https://www.themoviedb.org/t/p/w220_and_h330_face${dramaChart.poster_path}`} alt=""></img></Link></CTableDataCell>
                      <CTableDataCell style={{textAlign:'center'}}>{dramaChart.name}</CTableDataCell>
                      <CTableDataCell style={{textAlign:'center'}}>{dramaChart.first_air_date}</CTableDataCell>
                    </CTableRow>
                    )
                    })
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

export default DramaChart2;