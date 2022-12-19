import moment from "moment/moment";
import { CCard, CCardBody, CCol, CRow } from "@coreui/react";

const DramaDetailItem = ({ result }) => {
    
    const { id, poster_path, name,first_air_date, original_name, overview} = result;
    
    
  
    return (
        <CRow>
            <CCol xs={10} style={{ margin: "auto" }}>
                <CCard className="mb-4">
                    <CCardBody>
                        <div>
                            <div style={{ padding:20, borderRadius: 40, opacity:'1', display: "inline-block"}}>
                            <img src={`https://www.themoviedb.org/t/p/w220_and_h330_bestv2${poster_path}`} alt="drama thumbnail" title={id} /><br />
                            
                            </div>
                            <div style={{ height:500, width:800, top:300, display: "inline-block"}}>
                                <h1>{name}({original_name})</h1><h3>개봉일: {moment(first_air_date).format('YYYY-MM')}</h3>
                                
                                <h4>개요dd</h4>
                                <h5>{overview}</h5>
                                <h5>{}</h5>
                                <h5>{}</h5>
                                
                            </div>
                            
                            
                            
                        </div>
                     </CCardBody>
                </CCard>
             </CCol>
        </CRow>
    );
};

export default DramaDetailItem;
