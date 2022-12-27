
import { CCard, CCardBody, CCol, CRow, CContainer } from "@coreui/react";

const DramaDetailItem = ({ result, genres1, creators }) => {
    
    const { id, poster_path, name,first_air_date, original_name, overview, number_of_episodes, number_of_seasons, origin_country} = result;
    const genres = genres1 + "";
    const creator = creators + "";
  
    return (
        <CRow>
            <CCol xs={10} style={{ margin: "auto" }}>
                <CCard className="mb-2">
                    <CCardBody>
                        <div style={{ padding:0, display: "inline-block"}}>
                            <img style={{borderRadius: 10, }} src={`https://www.themoviedb.org/t/p/w220_and_h330_bestv2${poster_path}`} alt="drama thumbnail" title={id} /><br />
                        </div>
                        <CContainer style={{ marginLeft:'20px', width:650, display: "inline-block", verticalAlign:"middle"}}>
                            <CRow xs={{ gutter: 0 }}>
                                <CCol xs={{ span: 12 }}>
                                <div className="p-0"><h1>{name}</h1></div>
                                </CCol>                                
                                <CCol xs={{ span: 12 }}>
                                <div className="p-1">{original_name},{first_air_date} </div>
                                </CCol>                                
                                <CCol xs={{ span: 1 }}>
                                <div className="p-1" style={{fontWeight:"bold"}}>장르</div>
                                </CCol>
                                <CCol xs={{ span: 7 }}>
                                <div className="p-1 ">{genres}</div>
                                </CCol>
                                <CCol xs={{ span: 1 }}>
                                <div className="p-1" style={{fontWeight:"bold"}}>시즌</div>
                                </CCol>
                                <CCol xs={{ span: 3 }}>
                                <div className="p-1">총 {number_of_seasons} 회</div>
                                </CCol>
                                <CCol xs={{ span: 1 }}>
                                <div className="p-1" style={{fontWeight:"bold"}}>국가</div>
                                </CCol>
                                <CCol xs={{ span: 7 }}>
                                <div className="p-1">{origin_country}</div>
                                </CCol>
                                <CCol xs={{ span: 1 }}>
                                <div className="p-1 " style={{fontWeight:"bold"}}>회차</div>
                                </CCol>
                                <CCol xs={{ span: 3 }}>
                                <div className="p-1">총 {number_of_episodes} 회</div>
                                </CCol>
                               
                                <CCol xs={{ span: 1 }}>
                                <div className="p-1" style={{fontWeight:"bold"}}>제작</div>
                                </CCol>
                                <CCol xs={{ span: 11}}>
                                <div className="p-1"><h6>{creator}</h6></div>
                                </CCol>
                                <CCol xs={{ span: 12 }}>
                                <div className="p-0" ><h3>개요</h3></div>
                                </CCol>
                                <CCol xs={{ span: 12 }}>
                                <div className="p-0 " style={{ height: 100, overflow: "hidden", textOverflow: "ellipsis"}}>{overview}</div>
                                </CCol>
                            </CRow>
                        </CContainer>
                    </CCardBody>
                </CCard>
             </CCol>
        </CRow>
    );
};

export default DramaDetailItem;
