import { CCard, CCardBody, CCol, CRow } from "@coreui/react";
import styled from 'styled-components';
import axios from "axios";
import { useEffect, useRef, useState } from "react";
import moment from "moment";

const PROFILE_BOX = styled.div`
    div.profile_photo {
        display: inline-flex;
        width:300px;
        height:450px:
    }
    div.profile_photo > img {
        border-radius:2.5%;
        margin-left:20px;
        margin-top:10px;
    }
    div.profile_detail {
        display: inline-block;
        margin-left: 70px;
    }
    div.profile_detail > h1 {
        font-weight: bold;
    }
    div.profile_detail_details {
        padding-left:20px;
    }
    div.profile_detail_details > span {
        font-weight: bold;
    }
    div.profile_description > h4 {
        margin-top: 20px;
        margin-left:20px;
        font-weight: bold;
    }
    div#biographyBox {
        margin-left: 20px;
        margin-right: 20px;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 5;
        overflow: hidden;

        &.show {
            -webkit-line-clamp: unset;
        }                                                                                         div#biographyBox:active ~ d
    }
    div.ExternalLink {
        display: inline-block;
    }
    div.ExternalLink > a {
        margin-right: 15px;
        color: black;
        font-weight: bold;
        text-decoration-line : none;
    }
    div.ExternalLink > a:hover {
        color: gray;
    }
`;

const DiscriptButton = styled.button`
    position: absolute;
    bottom: 0;
    right: 0;
    border: none;
    margin: 0;
    background: linear-gradient(
        90deg,
        rgba(2, 0, 36, 1) 0%,
        rgba(255, 255, 255, 0) 0%,
        rgba(255, 255, 255, 1) 18%
    );
    color: Black;
    font-size: 1rem;

    &:hover {
        color: Gray;
        cursor: pointer;
        transform: translateY(-2px);
    }

    &.hide {
        display: none;
    }
`;

const PersonDetailInfo = ({id}) => {
    // console.log('id: ', id);

    const [name, setName] = useState(null);
    const [profile_path, setProfile_path] = useState(null);
    const [birthday, setBirthday] = useState(null);
    const [deathday, setDeathday] = useState(null);
    const [place_of_birth, setPlace_of_birth] = useState(null);
    const [gender, setGender] = useState(0);
    const [known_for_department, setKnown_for_department] = useState(null);
    const [biography, setBiography] = useState(null);

    const biographyRef = useRef(null);
    
    const [facebookId, setFacebookId] = useState(null);
    const [instagramId, setInstagramId] = useState(null);
    const [twitterId, setTwitterId] = useState(null);

    const [creditNum, setCreditNum] = useState(0);

    const today = new moment().format('YYYY-MM-DD');

    useEffect( () => {
        const loadPersonList = async (e) => {
            const apiKey = "52b3ba71c5a67f1429c8e2d3877f3eb4";
            const url = 
            `https://api.themoviedb.org/3/person/${ id }?api_key=${ apiKey }`;
            const externalUrl = 
            `https://api.themoviedb.org/3/person/${ id }/external_ids?api_key=${ apiKey }`;
            const MovieCreditUrl = 
            `https://api.themoviedb.org/3/person/${ id }/movie_credits?api_key=${ apiKey }`;
            const TvCreditUrl =
            `https://api.themoviedb.org/3/person/${ id }/tv_credits?api_key=${ apiKey }`;
            
            const response = await axios.get(url);
            const responseEx = await axios.get(externalUrl);
            const responseMC = await axios.get(MovieCreditUrl);
            const responseTC = await axios.get(TvCreditUrl);

            // console.log(response.data);
            setName(response.data.name);
            setProfile_path(response.data.profile_path);
            setGender(response.data.gender);
            setBirthday(response.data.birthday);
            setDeathday(response.data.deathday);
            setPlace_of_birth(response.data.place_of_birth);
            setKnown_for_department(response.data.known_for_department);
            setBiography(response.data.biography);

            // console.log(responseEx.data);
            setFacebookId(responseEx.data.facebook_id);
            setInstagramId(responseEx.data.instagram_id);
            setTwitterId(responseEx.data.twitter_id);

            setCreditNum(
                responseMC.data.cast.length +
                responseTC.data.cast.length);
        }
        loadPersonList();
    }, [id] );
    const img_url =`https://www.themoviedb.org/t/p/w300_and_h450_bestv2${ profile_path }`;
    const facebookUrl = `https://www.facebook.com/${facebookId}`;
    const instagramUrl = `https://www.instagram.com/${instagramId}/`;
    const twitterUrl = `https://twitter.com/${twitterId}`;

    let birthdayText = `${birthday}`.slice(0,4)+"년 "+parseInt(`${birthday}`.slice(5,7))+"월 "+parseInt(`${birthday}`.slice(8,10))+"일";
    let deathdayText = `${deathday}`.slice(0,4)+"년 "+parseInt(`${deathday}`.slice(5,7))+"월 "+parseInt(`${deathday}`.slice(8,10))+"일";

    let age = 
    `${deathday}` !== "null"
    ?
    parseInt(`${deathday}`.slice(0, 4)) - parseInt(`${birthday}`.slice(0, 4))
    :
    parseInt(today.slice(0, 4)) - parseInt(`${birthday}`.slice(0, 4))
    
    return (
        <PROFILE_BOX>
        <CRow>
        <CCol xs={12}>
            <CCard className="mb-4">
                <CCardBody>
                    <div className="profile_photo">
                    {
                        profile_path != null
                        ?
                        <img src={img_url} alt={name} />
                        :
                        <img src="https://via.placeholder.com/300x450?text=Unknown+Photo" alt={name} />
                    }
                    </div>
                    <div className="profile_detail">
                        <h1>{name}</h1>
                        <br/>
                        <div className="profile_detail_details">
                            <span>성별</span>
                            <br/>
                            {
                                `${gender}` === "2"
                                ?
                                <p>남성</p>
                                : (
                                    `${gender}` === "1"
                                    ?
                                    <p>여성</p>
                                    : 
                                    <p>-</p>
                                )
                            }
                            {
                                `${birthday}` !== "null"
                                ?
                                (
                                    `${deathday}` === "null"
                                    ?
                                    <>
                                    <span>생일</span>
                                    <br/>
                                    <p>{birthdayText} ({age}세)</p>
                                    </>
                                    :
                                    <>
                                    <span>생일 / 사망일</span>
                                    <br/>
                                    <p>{birthdayText} ~ {deathdayText} (향년 {age}세)</p>
                                    </>
                                )
                                :
                                <>
                                <span>생일</span>
                                <br/>
                                <p>-</p>
                                </>
                            }
                            <span>출생지</span>
                            {
                                `${place_of_birth}` !== "null"
                                ?
                                <p>{place_of_birth}</p>
                                :
                                <p>-</p>
                            }
                            <span>유명 분야</span>
                            <br/>
                            {
                                `${known_for_department}` !== "null"
                                ?
                                (
                                    `${known_for_department}` === "Acting"
                                    ?
                                    <p>연기</p>
                                    :
                                    (
                                        `${known_for_department}` === "Directing"
                                        ?
                                        <p>연출</p>
                                        :
                                        (
                                            `${known_for_department}` === "Writing"
                                            ?
                                            <p>각본</p>
                                            :
                                            <p>{known_for_department}</p>
                                        )
                                    )
                                )
                                :
                                <p>-</p>
                            }
                            <span>출연 작품 수</span>
                            <p>{creditNum}</p>
                            <div className="ExternalLink">
                            {
                                `${facebookId}` !== "null"
                                ?
                                <a href={facebookUrl}>Facebook</a>
                                :
                                <></>
                            }
                            {
                                `${instagramId}` !== "null"
                                ?
                                <a href={instagramUrl}>Instagram</a>
                                :
                                <></>
                            }
                            {
                                `${twitterId}` !== "null"
                                ?
                                <a href={twitterUrl}>Twitter</a>
                                :
                                <></>
                            }
                            </div>
                            <br/><br/>
                        </div>
                    </div>
                    <div className="profile_description">
                        <h4>약력</h4>
                        <div id="biographyBox" ref={biographyRef}>
                        {
                            `${biography}` !== ""
                            ?
                            <>
                            {biography}
                            {
                           `${biography}`.length > 666
                            ?
                            <DiscriptButton 
                            onClick={(event) => 
                                {
                                    biographyRef.current.classList.add("show")
                                    event.currentTarget.classList.add("hide")
                                }
                            }
                            >...더보기
                            </DiscriptButton>
                            :
                            <></>
                            }
                            </>
                            :
                            <p>-</p>
                        }
                        </div>
                        
                    </div>
                </CCardBody>
            </CCard>
        </CCol>
        </CRow>
        </PROFILE_BOX>
    );
};

export default PersonDetailInfo;
