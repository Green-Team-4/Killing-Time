import axios from "axios";
import { useEffect, useState } from "react";

const { CCol, CCard, CCardHeader, CCardBody, CTable, CTableRow, CTableHead, CTableHeaderCell, CTableBody, CTableDataCell } = require("@coreui/react")
const { DocsExample } = require("src/components")

const BoxOffice = (props) => {

  const [ boxOffice, setBoxOffice ] = useState(null);

    useEffect( () => {

    const boxOfficeLoad = async (e) => {

      let today = new Date();
      let year = today.getFullYear(); // 년도
      let month = today.getMonth() + 1;  // 월
      let date = today.getDate() - 1;  // 날짜


      const apikey = "9ec0af98ce7854a7d4109bd050f4e2cf";
      const targetDt = `${year}${month}${date}`;
      const itemPerPage = 5;
      const url = `http://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?key=${apikey}&targetDt=${targetDt}&itemPerPage=${itemPerPage}`
      const response = await axios.get(url);
      console.log(response.data);
      setBoxOffice(response.data.boxOfficeResult);
    }
    boxOfficeLoad();
  },[]);
  
 

    return(
        <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>일일 박스오피스</strong>
          </CCardHeader>
          <CCardBody>           
              <CTable striped>
                <CTableHead>
                  <CTableRow>
                    <CTableHeaderCell scope="col" style={{width:50}}>순위</CTableHeaderCell>
                    <CTableHeaderCell scope="col">포스터</CTableHeaderCell>
                    <CTableHeaderCell scope="col">제목</CTableHeaderCell>
                    <CTableHeaderCell scope="col">개봉일 </CTableHeaderCell>
                    <CTableHeaderCell scope="col">관객 증가 비율</CTableHeaderCell>                    
                  </CTableRow>
                </CTableHead>
                <CTableBody>                  
                    {
                      
                       boxOffice ?  
                        boxOffice.dailyBoxOfficeList.map((dailyBoxOfficeLists, idx) => {
                          return (
                            <CTableRow key={idx}>
                              <CTableHeaderCell>{dailyBoxOfficeLists.rank}</CTableHeaderCell>
                              <CTableDataCell><img src={dailyBoxOfficeLists.movieNm} alt="aaaa"></img></CTableDataCell>
                              <CTableDataCell>{dailyBoxOfficeLists.movieNm}</CTableDataCell>
                              <CTableDataCell>{dailyBoxOfficeLists.openDt}</CTableDataCell>
                              <CTableDataCell>{dailyBoxOfficeLists.audiChange}%</CTableDataCell>
                            </CTableRow>
                          )
                        })           
                     : "박스 오피스 로드 실패"
                     }                  
                </CTableBody>
              </CTable>
         </CCardBody>
        </CCard>
      </CCol>
    );
};

export default BoxOffice;