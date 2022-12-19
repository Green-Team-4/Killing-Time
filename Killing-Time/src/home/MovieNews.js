import { Alert } from "@coreui/coreui";
import { cilCaretBottom } from "@coreui/icons";
import CIcon from "@coreui/icons-react";
import { CCard, CCardBody, CCardHeader, CCol, CTable, CTableBody, CTableDataCell, CTableHead, CTableHeaderCell, CTableRow } from "@coreui/react";
import axios from "axios";
import moment from "moment/moment";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";


const MovieNews = (props) => {

    
    const [movieNews, setMovieNews] = useState([]);
    useEffect(() => {
        const start = 1;
        const display = 10;
        const url = `http://localhost:8080/web-scraping/movie-news?start=${start}&display=${display}`;
        axios.get(url)
             .then( (response) => {
                if (response.data.result === "success") {
                    setMovieNews(response.data.movieNews);
                    console.log(response.data.movieNews);
                } else {
                    Alert("스프링 서버 연결 실패");
                }
             });      
    }, []);


    return (
        <>
        <CCol xs={10} style={{margin: "auto"}}>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>영화 뉴스</strong> &nbsp;&nbsp;<small><Link to="/movieNewsList"  style={{textDecoration:'none', color:'gray'}}>뉴스 더보기 <CIcon style={{width:15, verticalAlign: 'middle'}} icon={cilCaretBottom} customClassName="nav-icon" /></Link></small>
          </CCardHeader>
          <CCardBody>
              <CTable hover >
                <CTableHead>
                  <CTableRow>
                    <CTableHeaderCell scope="col" style={{width:550}}>뉴스 타이틀</CTableHeaderCell>
                    <CTableHeaderCell scope="col" style={{width:390}}></CTableHeaderCell>
                    <CTableHeaderCell scope="col">게시일</CTableHeaderCell>
                  </CTableRow>
                </CTableHead>
                <CTableBody>
                  {
                    movieNews ?
                    movieNews.map((movie, idx) => {
                        return (
                    
                    <CTableRow key={idx}>
                    
                      <CTableHeaderCell><a href={movie.link} style={{color:"black"}}>{movie.title.replaceAll('&apos;', "'").replaceAll('&quot;', '"').replaceAll('<b>', '').replaceAll('</b>', '').replaceAll('&lt;', '<').replaceAll('&gt;', '>')}</a></CTableHeaderCell>
                      <CTableDataCell style={{width: 390, fontSize:13}}>{movie.description.replaceAll('&apos;', "'").replaceAll('&quot;', '"').replaceAll('<b>', '').replaceAll('</b>', '').replaceAll('&lt;', '<').replaceAll('&gt;', '>')}</CTableDataCell>
                      <CTableDataCell>{moment(movie.pubDate).format('YYYY-MM-DD')}</CTableDataCell>
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





        // <div>
        //     <h2>movie news</h2>
        // {
        //     movieNews ?
        //     movieNews.map((movie, idx) => {
        //         return (<p key={idx}>{movie.title}</p>);
        //     })
        //     :
        //     <div>No Data Found</div>
        // }
        // </div>
    );
};

export default MovieNews;