import { cilSearch } from "@coreui/icons";
import CIcon from "@coreui/icons-react";
import axios from "axios";
import { useEffect, useState } from "react";
import { NumericFormat } from "react-number-format";
import { Link } from "react-router-dom";
import MovieImage from "./MovieImage";
import MoviePosterItem from "./MoviePosterItem";

const { CCol, CCard, CCardHeader, CCardBody, CTable, CTableRow, CTableHead, CTableHeaderCell, CTableBody, CTableDataCell } = require("@coreui/react")

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
      setBoxOffice(response.data.boxOfficeResult);
    }
    boxOfficeLoad();
  },[]);
  
 

    return(
      <CCol xs={10} style={{margin: "auto"}}>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>일일 박스오피스</strong>&nbsp;&nbsp;<small><Link to="/search"  style={{textDecoration:'none', color:'gray'}}>영화 더 찾아보기  <CIcon style={{width:17, verticalAlign: 'middle'}} icon={cilSearch} customClassName="nav-icon" /></Link></small>
          </CCardHeader>
          <CCardBody>           
              <CTable striped>
                <CTableHead>
                  <CTableRow>
                    <CTableHeaderCell scope="col" style={{width:50,textAlign:'center'}}>순위</CTableHeaderCell>
                    <CTableHeaderCell scope="col" style={{textAlign:'center'}}>포스터</CTableHeaderCell>
                    <CTableHeaderCell scope="col" style={{textAlign:'center'}}>제목</CTableHeaderCell>
                    <CTableHeaderCell scope="col" style={{textAlign:'center'}}>개봉일 </CTableHeaderCell>
                    <CTableHeaderCell scope="col" style={{textAlign:'center'}}>관객수</CTableHeaderCell>                    
                  </CTableRow>
                </CTableHead>
                <CTableBody>                  
                    {
                      // {dailyBoxOfficeLists.audiCnt}명
                       boxOffice ?  
                        boxOffice.dailyBoxOfficeList.map((dailyBoxOfficeLists, idx) => {
                          return (
                            <CTableRow key={idx}>
                              <CTableHeaderCell style={{textAlign:'center'}}>{dailyBoxOfficeLists.rank}</CTableHeaderCell>                              
                              <CTableDataCell style={{width:141, height:91, textAlign:'center'}}>
                                <MovieImage movieName={dailyBoxOfficeLists.movieNm} openDate={dailyBoxOfficeLists.openDt}/>
                                <MoviePosterItem />
                              </CTableDataCell>
                              <CTableDataCell style={{textAlign:'center'}}>{dailyBoxOfficeLists.movieNm}</CTableDataCell>
                              <CTableDataCell style={{textAlign:'center'}}>{dailyBoxOfficeLists.openDt}</CTableDataCell>
                              <CTableDataCell style={{textAlign:'center'}}>
                                <NumericFormat
                                  value={dailyBoxOfficeLists.audiCnt}
                                  displayType={'text'}
                                  thousandSeparator={true}
                                  renderText={(value) => <>{value}명</>}
                                />
                              </CTableDataCell>
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