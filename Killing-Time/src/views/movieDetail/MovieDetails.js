import { CCard, CCardBody, CCol, CRow } from "@coreui/react";
import axios from "axios";
import { useState } from "react";

const MovieDetails = ({ id }) => {
  
  const [result, setResult] = useState(null);
  const clickHandler = async (e) => {
    const language = "ko-KR";
    const apiKey = "403cc00da7a7725917c9acd69484bde6";
    const url = `https://api.themoviedb.org/3/movie/${ id }?api_key=${apiKey}&language=${language}`;
    const response = await axios.get(url);
    setResult(response.data);
  };

  return (
    <CRow>
      {/* <CCol xs={12}>
        <DocsCallout
          name="Chart"
          href="components/chart"
          content="React wrapper component for Chart.js 3.0, the most popular charting library."
        />
      </CCol> */}
      <button onClick={clickHandler}>호출</button>
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardBody>
          {/* <div>
                
                <img src={ img_url } alt="movie thumbnail" />
                
            </div>
            <div>
                <h2>
                    <a href={ id }>{ title }</a>
                </h2>
                <p>{ overview }</p>
            </div> */}
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  );
};

export default MovieDetails;
