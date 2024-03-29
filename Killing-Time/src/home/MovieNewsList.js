import { Alert } from "@coreui/coreui";
import { CCard, CCardBody, CCardHeader, CCol, CTable, CTableBody, CTableDataCell, CTableHead, CTableHeaderCell, CTableRow } from "@coreui/react";
import axios from "axios";
import moment from "moment/moment";
import { useEffect, useState } from "react";
import Pagination from "./NewsListPage";



const MovieNewsList = (props) => {

    
    const [page, setPage] = useState(1);    
    const [movieNewsList, setMovieNewsList] = useState([]);

    useEffect(() => {
        
        const display = 15;
        const url = `/Killing-Time/movie-news?start=${page}&display=${display}`;
        axios.get(url)
             .then( (response) => {
                if (response.data.result === "success") {
                    setMovieNewsList(response.data.movieNews);
                    
                    console.log(response.data.movieNews);
                } else {
                    Alert("스프링 서버 연결 실패");
                }
             });      
    }, [page]);

    return (
        <>
        <CCol xs={10} style={{margin: "auto"}}>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>영화 뉴스</strong>
          </CCardHeader>
          <CCardBody>
              <CTable hover >
                <CTableHead>
                  <CTableRow>
                    <CTableHeaderCell scope="col" style={{width:550}}>뉴스 타이틀</CTableHeaderCell>
                    <CTableHeaderCell scope="col" style={{width:390}}></CTableHeaderCell>
                    <CTableHeaderCell scope="col" style={{textAlign:'center'}}>게시일</CTableHeaderCell>
                  </CTableRow>
                </CTableHead>
                <CTableBody>
                  {
                    movieNewsList ?
                    movieNewsList.map((movie, idx) => {
                        return (
                    
                    <CTableRow key={idx}>
                    
                      <CTableHeaderCell><a href={movie.link} style={{color:"black"}}>{movie.title.replaceAll('&apos;', "'").replaceAll('&quot;', '"').replaceAll('<b>', '').replaceAll('</b>', '').replaceAll('&lt;', '<').replaceAll('&gt;', '>')}</a></CTableHeaderCell>
                      <CTableDataCell style={{width: 390, fontSize:13}}>{movie.description.replaceAll('&apos;', "'").replaceAll('&quot;', '"').replaceAll('<b>', '').replaceAll('</b>', '').replaceAll('&lt;', '<').replaceAll('&gt;', '>')}</CTableDataCell>
                      <CTableDataCell style={{textAlign:'center', fontWeight:'bold'}}>{moment(movie.pubDate).format('YYYY-MM-DD')}</CTableDataCell>
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
        <div> 
                <Pagination
                setPage={setPage}
                page={page}
                />
            </div>
      </CCol>
      
        </>
    );

};


export default MovieNewsList;