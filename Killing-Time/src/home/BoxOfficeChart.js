import { CButton, CCard, CCardBody, CCardHeader, CCol, CTooltip } from "@coreui/react";
import { CChartLine } from "@coreui/react-chartjs";
import axios from "axios";
import { useEffect, useState } from "react";


const BoxOfficeChart = (props) => {

    let today = new Date();
    let year = today.getFullYear(); // 년도
    let month = today.getMonth() + 1;  // 월
    let date1 = today.getDate() ;  // 날짜
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
    const targetDt = `${year}${month}${date2}`;
    const itemPerPage = 5;
    const url = `http://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?key=${apikey}&targetDt=${targetDt}&itemPerPage=${itemPerPage}`
    const response = await axios.get(url);
    setBoxOfficeChart(response.data.boxOfficeResult);
  }
  boxOfficeChartLoad();
},[]);
    
const [activeIndex, setActiveIndex]=useState(0);

const tabClickHandler=(index)=>{
    setActiveIndex(index);
};



const tabContArr=[
    
    {
        tabTitle:(
            boxOfficeChart ? 
                boxOfficeChart.dailyBoxOfficeList.map((dailyBoxOfficeLists) => { 
                   var i = 0;
                    for (i = 0; i <= 5; i++){
                    
                    return (
               
            <CTooltip 
                content="일일 박스 오피스를 확인하세요."
                placement="bottom">
            <CButton color='light' style={{ fontSize: 18}} className={activeIndex===i ? "is-active" : ""} onClick={()=>tabClickHandler(i)}>                
            <small>{dailyBoxOfficeLists.movieNm} {i}</small>
                </CButton>
            </CTooltip>
            )}            
                })   
                 :
                 "aaa"
                 
        ),
        tabCont:(
            <div></div>
        )
    }
];

// return (
//     <div>
    //   <div className="tabs">
    //     {tabContArr.map((section, index)=>{
    //         return section.tabTitle
    //     })}
    //   </div>
//       <br />
//       <div>
//           {tabContArr[activeIndex].tabCont}
//       </div>
//     </div>
// );

    return (
        <>
        <CCol xs={10} style={{margin: "auto"}}>
        <CCard className="mb-4">
          <CCardHeader><strong>영화별 일일 관객수</strong>  <div className="tabs">{tabContArr.map((section, index)=>{
            return section.tabTitle
        })}
      </div> </CCardHeader>
          <CCardBody>
            <CChartLine
              data={{
                labels: [`${month}-${date1}`, `${month}-${date2}`, `${month}-${date3}`, `${month}-${date4}`, `${month}-${date5}`, `${month}-${date6}`, `${month}-${date7}`,`${month}-${date8}`],
                datasets: [
                  {
                    label: 'My First dataset',
                    backgroundColor: 'rgba(220, 220, 220, 0.2)',
                    borderColor: 'rgba(220, 220, 220, 1)',
                    pointBackgroundColor: 'rgba(220, 220, 220, 1)',
                    pointBorderColor: '#fff',
                    data: [6,7,33,66,33,55,88],
                  },
                  {
                    label: 'My Second dataset',
                    backgroundColor: 'rgba(151, 187, 205, 0.2)',
                    borderColor: 'rgba(151, 187, 205, 1)',
                    pointBackgroundColor: 'rgba(151, 187, 205, 1)',
                    pointBorderColor: '#fff',
                    data: [22,33,44,55,66,77,88],
                  },
                ],
              }}
            />
          </CCardBody>
        </CCard>
      </CCol>
        </>
    );
};

export default BoxOfficeChart;