
import { CCard, CCardBody, CCol, CRow, CContainer } from "@coreui/react";

const DramaDetailItem = ({ result, genres1, creators, provider }) => {
    
    const { id, poster_path, name,first_air_date, original_name, overview, number_of_episodes, number_of_seasons, origin_country} = result;
    const genres = genres1 + "";
    const creator = creators + "";
  
    let buy_url = "";
    let rent_url = "";
    let stream_url = "";
    if (provider !== undefined) {
        let { buy, rent, flatrate } = provider;
        if (buy !== undefined) {
        buy_url = buy;
        }
        if (rent !== undefined) {
        rent_url = rent;
        }
        if (flatrate !== undefined) {
        stream_url = flatrate;
        }
    }
    
    function searchMovie(buy) {
        const provider_id = buy.provider_id;
        const provider_name = buy.provider_name;
        switch (provider_id) {
          case 3:
            return `https://play.google.com/store/search?q=${name}&c=movies`;
          case 8:
          case 1796:
            return "https://www.netflix.com/";
          case 96:
            return `https://serieson.naver.com/v2/search?query=${name}`;
          case 97:
            return `https://watcha.com/`;
          case 119:
            return "https://www.primevideo.com/";
          case 356:
            return `https://www.wavve.com/search?searchWord=${name}`;
          case 337:
            return "https://www.disneyplus.com/ko-kr";
          default:
            return `https://www.google.com/search?q=${provider_name}`;
        }
    }
    
    function showLogo(buy) {
        return (
            <img
            style={{
                border: 1,
                borderStyle: "solid",
                marginRight: 20,
                borderRadius: 10,
            }}
            width={50}
            src={`https://www.themoviedb.org/t/p/original/${buy.logo_path}`}
            alt="provier thumbnail"
            title={buy.provider_id}
            />
        );
    }

    return (
        <CRow>
            <CCol xs={10} style={{ margin: "auto" }}>
                <CCard className="mb-2">
                    <CCardBody>
                        <div style={{ padding:0, display: "inline-block"}}>
                            <img style={{borderRadius: 10, width:'270px' }} src={`https://www.themoviedb.org/t/p/w220_and_h330_bestv2${poster_path}`} alt="drama thumbnail" title={id} /><br />
                        </div>
                        <CContainer style={{ marginLeft:'10px', width:700, display: "inline-block", verticalAlign:"middle"}}>
                            <CRow xs={{ gutter: 0 }}>
                                <CCol xs={{ span: 12 }}>
                                <div className="p-1"><span style={{fontWeight:"bold", fontSize:"30px" }}>{name}</span></div>
                                </CCol>                                
                                <CCol xs={{ span: 12 }}>
                                <div className="p-1">{original_name},{first_air_date} </div>
                                </CCol>                                
                                <CCol xs={{ span: 1 }}>
                                <div className="p-1" style={{fontWeight:"bold"}}>장르</div>
                                </CCol>
                                <CCol xs={{ span: 7 }}>
                                <div className="p-1">{genres}</div>
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
                                <div style={{marginTop:0, marginBottom: 10}}>
                                    {buy_url !== "" ? (
                                        <div style={{ display: "inline-block", marginRight: 20 }}>
                                        <p style={{ fontWeight: "bold" }}>Buy</p>
                                        {
                                            buy_url.map((buy) => (
                                                <div style={{ display: "inline-block" }}>
                                                <a href={searchMovie(buy)}>{showLogo(buy)}</a>
                                                </div>
                                            ))
                                        }
                                        </div>
                                    ) : (
                                        ""
                                    )}
                                    {rent_url !== "" ? (
                                        <div style={{ display: "inline-block", marginRight: 20 }}>
                                        <p style={{ fontWeight: "bold" }}>Rent</p>
                                        { rent_url.map((rent) => (
                                                <div style={{ display: "inline-block" }}>
                                                <a href={searchMovie(rent)}>{showLogo(rent)}</a>
                                                </div>
                                            ))
                                        }
                                        </div>
                                    ) : (
                                        ""
                                    )}
                                    {stream_url !== "" ? (
                                        <div style={{ display: "inline-block", marginRight: 20 }}>
                                        <p style={{ fontWeight: "bold" }}>Stream</p>
                                        { stream_url.map((stream) => (
                                                <div style={{ display: "inline-block" }}>
                                                <a href={searchMovie(stream)}>
                                                    {showLogo(stream)}
                                                </a>
                                                </div>
                                            ))
                                        }
                                        </div>
                                    ) : (
                                        ""
                                    )}
                                </div>
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
