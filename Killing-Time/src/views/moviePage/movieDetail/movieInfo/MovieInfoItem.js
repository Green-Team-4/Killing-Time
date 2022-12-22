import { CCard, CCardBody, CCol, CRow } from "@coreui/react";
import styled from "styled-components";

const MovieInfoItem = ({ result, otherResult, provider, dailyBoxOfficeList, movieInfo }) => {
  const {
    id,
    poster_path,
    backdrop_path,
    title,
    release_date,
    runtime,
    original_title,
    vote_average,
    production_countries,
    genres,
  } = result;

  const img_url = `https://www.themoviedb.org/t/p/w220_and_h330_face${poster_path}`;
  const year = release_date.split("-");
  const rate = Math.floor(vote_average * 10);
  var name = null;
  if (production_countries[0] !== undefined) {
    var { name } = production_countries[0];
  }
  
  const production_country = name;
  var genre_names = "";
  for (var i = 0; i < genres.length; i++) {
    if (i !== 0) genre_names = genre_names + "/";
    let { name } = genres[i];
    genre_names = genre_names + name;
  }

  let { overview, tagline } = result;
  let overview_f = overview;
  let tagline_f = tagline;
  if (tagline === "") {
    let { tagline } = otherResult;
    tagline_f = tagline;
  }
  if (overview === "") {
    let { overview } = otherResult;
    overview_f = overview;
  }

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
        return `https://play.google.com/store/search?q=${title}&c=movies`;
      case 8:
      case 1796:
        return "https://www.netflix.com/";
      case 96:
        return `https://serieson.naver.com/v2/search?query=${title}`;
      case 119:
        return "https://www.primevideo.com/";
      case 356:
        return `https://www.wavve.com/search?searchWord=${title}`;
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
          marginRight: 30,
          borderRadius: 10,
        }}
        width={50}
        src={`https://www.themoviedb.org/t/p/original/${buy.logo_path}`}
        alt="provier thumbnail"
        title={buy.provider_id}
      />
    );
  }
  
  let boxOffice = null;
  for (var i = 0; i < dailyBoxOfficeList.length; i++) {
    if (title === dailyBoxOfficeList[i].movieNm) {
      boxOffice = dailyBoxOfficeList[i];
    }
  }


  const MovieInfoItemBlock = styled.div`
    table {
      tr {
        td {
          padding-right: 10px;
          font-weight: 550;
          span {
            font-weight: normal;
            color: silver;
          }
        }
      }
    }
  `;
  const BackImg = styled.div`
    .ok {
      background-size: cover;
      background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
        url(https://www.themoviedb.org/t/p/w533_and_h300_bestv2/${backdrop_path});
      bacground-repeat: no-repeat;
      color: white;
    }
  `;

  return (
    <CRow>
      <CCol xs={10} style={{ margin: "auto" }}>
        <BackImg>
          <CCard className="mb-4 ok">
            <CCardBody style={{ paddingLeft: 40, paddingRight: 60 }}>
              <div style={{ display: "inline-block", marginTop: 20 }}>
                <img
                  src={img_url}
                  alt="movie poster thumbnail"
                  title={id}
                  style={{
                    borderRadius: 10,
                    border: 1,
                    borderColor: "whitesmoke",
                    borderStyle: "solid",
                  }}
                />
              </div>
              <div
                style={{
                  display: "inline-block",
                  marginLeft: 40,
                  verticalAlign: "top",
                  marginTop: 20,
                }}
              >
                <div
                  style={{ textAlign: "left", float: "left", maxWidth: 700 }}
                >
                  <div style={{ textAlign: "center" }}>
                    <h1 style={{ fontWeight: "bold" }}>{title}</h1>
                    <span style={{ fontSize: 14, fontWeight: "bold" }}>
                      {original_title}, {year[0]}
                    </span>
                  </div>
                </div>
                <br />
                <br />
                <br />
                <br />
                <br />
                <div style={{ clear: "both" }}>
                  <MovieInfoItemBlock>
                    <table>
                      <tbody>
                        <tr>
                          <td>
                            <span>개봉</span>
                          </td>
                          <td>{release_date}</td>
                          <td style={{ paddingLeft: 40 }}>
                            <span>평점</span>
                          </td>
                          <td>
                            {rate > 66 ? (
                              <strong style={{ color: "#68D168" }}>
                                ● {rate}%
                              </strong>
                            ) : rate > 33 ? (
                              <strong style={{ color: "#FFAF0A" }}>
                                ● {rate}%
                              </strong>
                            ) : (
                              <strong style={{ color: "#EB0000" }}>
                                ● {rate}%
                              </strong>
                            )}
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <span>장르</span>
                          </td>
                          <td>{genre_names}</td>
                          <td style={{ paddingLeft: 40 }}>
                            <span>누적관객</span>
                          </td>
                          {/* <td>{boxOffice.audiAcc}명</td> */}
                        </tr>
                        <tr>
                          <td>
                            <span>국가</span>
                          </td>
                          <td>{production_country}</td>
                          <td style={{ paddingLeft: 40 }}>
                            <span>등급</span>
                          </td>
                          <td></td>
                        </tr>
                        <tr>
                          <td>
                            <span>러닝타임</span>
                          </td>
                          <td>{runtime}분</td>
                          
                            <td style={{ paddingLeft: 40 }}>
                              {
                                boxOffice !== null ? <span>박스오피스</span> : ""
                              }
                            </td>
                            <td>
                              {
                                boxOffice !== null ? <div>{boxOffice.rank}위
                                { boxOffice.rankInten > 0 ? 
                                  (<span style={{ color: "#68D168", marginLeft: 10}}>▲ {boxOffice.rankInten}</span>) :
                                  (boxOffice.rankInten < 0) ?
                                  (<span style={{ color: "#EB0000", marginLeft: 10}}>▼ {boxOffice.rankInten}</span>) :
                                  (<span style={{ color: "lightgray", marginLeft: 10}}>- {boxOffice.rankInten}</span>)
                                }
                                </div> : ""
                              }
                            </td>
                          
                        </tr>
                      </tbody>
                    </table>
                  </MovieInfoItemBlock>
                </div>
                <br />
                <div>
                  {buy_url !== "" ? (
                    <div style={{ display: "inline-block", marginRight: 20 }}>
                      <p style={{ fontWeight: "bold" }}>Buy</p>
                      {buy_url !== ""
                        ? buy_url.map((buy) => (
                            <div style={{ display: "inline-block" }}>
                              <a href={searchMovie(buy)}>{showLogo(buy)}</a>
                            </div>
                          ))
                        : ""}
                    </div>
                  ) : (
                    ""
                  )}
                  {rent_url !== "" ? (
                    <div style={{ display: "inline-block", marginRight: 20 }}>
                      <p style={{ fontWeight: "bold" }}>Rent</p>
                      {rent_url !== ""
                        ? rent_url.map((rent) => (
                            <div style={{ display: "inline-block" }}>
                              <a href={searchMovie(rent)}>{showLogo(rent)}</a>
                            </div>
                          ))
                        : ""}
                    </div>
                  ) : (
                    ""
                  )}
                  {stream_url !== "" ? (
                    <div style={{ display: "inline-block", marginRight: 20 }}>
                      <p style={{ fontWeight: "bold" }}>Stream</p>
                      {stream_url !== ""
                        ? stream_url.map((stream) => (
                            <div style={{ display: "inline-block" }}>
                              <a href={searchMovie(stream)}>
                                {showLogo(stream)}
                              </a>
                            </div>
                          ))
                        : ""}
                    </div>
                  ) : (
                    ""
                  )}
                </div>
              </div>
              <div>
                {tagline_f ? (
                  <div>
                    <br />
                    <i style={{ fontWeight: "bold" }}>{tagline_f}</i>
                  </div>
                ) : (
                  ""
                )}
                {overview_f ? (
                  <div>
                    <br />
                    <p>{overview_f}</p>
                  </div>
                ) : (
                  ""
                )}
              </div>
            </CCardBody>
          </CCard>
        </BackImg>
      </CCol>
    </CRow>
  );
};

export default MovieInfoItem;
