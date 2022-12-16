import { CCard, CCardBody, CCol, CRow } from "@coreui/react";
import styled from "styled-components";

const MovieInfoItem = ({ result, provider, otherResult }) => {
  const {
    id,
    poster_path,
    title,
    release_date,
    runtime,
    original_title,
    vote_average,
    production_countries,
    genres,
  } = result;
  let {overview, tagline} = result;
  let overview_f = overview;
  let tagline_f = tagline;

  var buy_url = "";
  var rent_url = "";
  var stream_url = "";
  if (tagline === "") {
    let {tagline} = otherResult;
    tagline_f = tagline;
  }
  if (overview === "") {
    let {overview} = otherResult;
    overview_f = overview;
  }
  if (provider !== undefined) {
    const { buy, rent, flatrate } = provider;

    if (buy !== undefined) {
      buy_url = buy.map((buy) => {
        var { logo_path } = buy;
        return `https://www.themoviedb.org/t/p/original/${logo_path}`;
      });
    }
    if (rent !== undefined) {
      rent_url = rent.map((rent) => {
        var { logo_path } = rent;
        return `https://www.themoviedb.org/t/p/original/${logo_path}`;
      });
    }
    if (flatrate !== undefined) {
      stream_url = flatrate.map((stream) => {
        var { logo_path } = stream;
        return `https://www.themoviedb.org/t/p/original/${logo_path}`;
      });
    }
  }
  const img_url = `https://www.themoviedb.org/t/p/w220_and_h330_face${poster_path}`;
  const year = release_date.split("-");
  const rate = Math.floor(vote_average * 10) / 10;
  let { name } = production_countries[0];
  const production_country = name;
  var genre_names = "";
  for (var i = 0; i < genres.length; i++) {
    if (i !== 0) {
      genre_names = genre_names + "/";
    }
    let { name } = genres[i];
    genre_names = genre_names + name;
  }

  const MovieInfoItemBlock = styled.div`
    table {
      tr {
        td {
          padding-right: 10px;
          font-weight: 550;
          span {
            font-weight: normal;
            color: gray;
          }
        }
      }
    }
  `;

  return (
    <CRow>
      <CCol xs={10} style={{ margin: "auto" }}>
        <CCard className="mb-4">
          <CCardBody>
            <div style={{ display: "inline-block", marginTop: 20 }}>
              <img src={img_url} alt="movie thumbnail" title={id} />
            </div>
            <div
              style={{
                display: "inline-block",
                marginLeft: 40,
                verticalAlign: "top",
                marginTop: 20,
              }}
            >
              <div style={{ textAlign: "left", float: "left" }}>
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
                          <strong style={{ color: "red" }}>★ </strong>
                          {rate}
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
                        <td></td>
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
                            <img
                              style={{
                                border: 1,
                                borderStyle: "solid",
                                marginRight: 30,
                                borderRadius: 10,
                              }}
                              width={50}
                              src={buy}
                              alt="provier thumbnail"
                            />
                          </div>
                        ))
                      : "  "}
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
                            <img
                              style={{
                                border: 1,
                                borderStyle: "solid",
                                marginRight: 30,
                                borderRadius: 10,
                              }}
                              width={50}
                              src={rent}
                              alt="provier thumbnail"
                            />
                          </div>
                        ))
                      : "  "}
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
                            <img
                              style={{
                                border: 1,
                                borderStyle: "solid",
                                marginRight: 30,
                                borderRadius: 10,
                              }}
                              width={50}
                              src={stream}
                              alt="provider thumbnail"
                            />
                          </div>
                        ))
                      : "  "}
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
      </CCol>
    </CRow>
  );
};

export default MovieInfoItem;
