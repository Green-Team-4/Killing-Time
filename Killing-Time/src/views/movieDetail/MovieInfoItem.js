import { CCard, CCardBody, CCol, CRow } from "@coreui/react";

const MovieInfoItem = ({ result }) => {
  
  const { id, poster_path, title, overview, genres, release_date, runtime, tagline } = result;
  const img_url = `https://www.themoviedb.org/t/p/w220_and_h330_face${ poster_path }`;

  return (
    <CRow>
      {/* <CCol xs={12}>
        <DocsCallout
          name="Chart"
          href="components/chart"
          content="React wrapper component for Chart.js 3.0, the most popular charting library."
        />
      </CCol> */}
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardBody>
            <div>
              <img src={img_url} alt="movie thumbnail" title={id} />
            </div>
            <div>
              { runtime }분&nbsp;
              개봉날짜&nbsp;{release_date}
              <h2>{title}</h2>
              <i>{tagline}</i>
              <p>{overview}</p>
            </div>
          </CCardBody>
        </CCard>
        <CCard>
          <CCardBody>
            <div>hi</div>
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  );
};

export default MovieInfoItem;
