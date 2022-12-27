import { CButton, CCard, CCardBody, CCardHeader, CCol, CTooltip } from "@coreui/react";
import { CChartLine } from "@coreui/react-chartjs";
import axios from "axios";
import { useEffect, useState } from "react";


const BoxOfficeChart = (props) => {

    let today = new Date();
    let year = today.getFullYear(); // 년도
    let month = today.getMonth() + 1;  // 월
    let date2 = today.getDate() - 1;  // 날짜
    let date3 = today.getDate() - 2;  // 날짜
    let date4 = today.getDate() - 3;  // 날짜
    let date5 = today.getDate() - 4;  // 날짜
    let date6 = today.getDate() - 5;  // 날짜
    let date7 = today.getDate() - 6;  // 날짜
    let date8 = today.getDate() - 7;  // 날짜
    
    const [ boxOfficeChart, setBoxOfficeChart ] = useState(null);

    useEffect( () => {
        const boxOfficeChartLoad = async (e) => {

        const apikey = "9ec0af98ce7854a7d4109bd050f4e2cf";

        const dt = new Date();
        const results = [];
        for (let i = 1; i < 8; i++) {
          dt.setDate(dt.getDate() - 1);

          const targetDt = `${dt.getFullYear()}${dt.getMonth() + 1}${dt.getDate()}`;
          const itemPerPage = 5;
          const url = `http://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?key=${apikey}&targetDt=${targetDt}&itemPerPage=${itemPerPage}`
          const response = await axios.get(url);
          results.push(response.data.boxOfficeResult.dailyBoxOfficeList);
        }

        const boxOfficeData = results[0].map( (movie, idx) => {
        
          const boxOfficeByMovie = {
            movieCd : movie.movieCd,
            movieNm : movie.movieNm
          };
          const boxOffice = [movie.audiCnt];
          for (let j = 1; j < results.length; j++) {
            let found = false;
            for (let k = 0; k < results[j].length; k++) {
              if (movie.movieCd === results[j][k].movieCd) {
                boxOffice.push(results[j][k].audiCnt);
                found = true;
                break;
              }
            }
            if (!found) {
              boxOffice.push(0);
            }
          }
          boxOfficeByMovie.audiCntList = boxOffice;
          return boxOfficeByMovie;
          //boxOfficeData.push(boxOfficeByMovie);
        });

        setBoxOfficeChart(boxOfficeData);
        
      }
      boxOfficeChartLoad();
    },[]);
    
    
      // 일일박스오피스 차트

    return (
        <>
        <CCol xs={10} style={{margin: "auto"}}>
        <CCard className="mb-4">
          <CCardHeader><strong>영화별 일일 관객수</strong>  <div className="tabs">
      </div>
        </CCardHeader>
           <CCardBody>
             <CChartLine 
             data={{
               labels: [`${month}-${date8}`, `${month}-${date7}`, `${month}-${date6}`, `${month}-${date5}`, `${month}-${date4}`, `${month}-${date3}`, `${month}-${date2}`],
               datasets: boxOfficeChart?.map( (boxOfficeByMovie, idx) => {
                return {
                  label: boxOfficeByMovie.movieNm,
                  backgroundColor: 'rgba(151, 187, 205, 0.2)',
                  borderColor: ["	#FF69B4","#6495ED","#90EE90","#FFA07A","#8A2BE2"],
                  pointBackgroundColor: '#E6E6FA',
                  pointBorderColor: '#000',
                  data: boxOfficeByMovie.audiCntList.reverse()
                }
               })
             }}
            />
            </CCardBody>
        </CCard>
      </CCol>
        </>
    );
};

export default BoxOfficeChart;


