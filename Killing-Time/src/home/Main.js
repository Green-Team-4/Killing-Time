import { CCard, CCardBody, CCardHeader, CCarousel, CCarouselItem, CCol, CRow } from '@coreui/react';
import axios from 'axios';
import { useState } from 'react';
import { DocsExample } from 'src/components';

const Main = (props) => {
   
  const [ boxOffice, setBoxOffice ] = useState(null);
    const clickHandler = async (e) => {
      const apikey = "9ec0af98ce7854a7d4109bd050f4e2cf";
      const targetDt = 20221130;
      const itemPerPage = 5;
      const url = `http://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?key=${apikey}&targetDt=${targetDt}&itemPerPage=${itemPerPage}`
      const response = await axios.get(url);
      console.log(response.data);
      setBoxOffice(response.data.boxOfficeResult);
    };
    
    return (
    <CRow>
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>Card</strong> <small>Example</small>
          </CCardHeader>
          <CCardBody>
            <div>
              <button onClick={clickHandler}>뉴스 가져오기</button>
                <hr />
              <div>
                <ul>
                    {
                      boxOffice ?  
                       boxOffice.dailyBoxOfficeList.map((dailyBoxOfficeLists, idx) => {
                         return (
                           <li key={idx}>
                            <h4>{ dailyBoxOfficeLists.movieNm }</h4>
                            <h4>{ dailyBoxOfficeLists.salesAmt }</h4>
                           </li>
                         )
                       })   
                      // JSON.stringify(boxOffice)               
                    : "Plz click News button"
                    }
                </ul>
              </div>
            </div>
          </CCardBody>
        </CCard>      
      </CCol>
    </CRow>
    );
};

export default Main;