import { CCard, CCardBody, CCol, CRow } from "@coreui/react";
import styled from 'styled-components';
import axios from "axios";
import { useEffect, useState } from "react";

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
    div.profile_description {
        margin: 20px;
    }
    div.profile_description > h4 {
        font-weight: bold;
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

const PersonDetailInfo = ({id}) => {
    //console.log('id: ', id);

    const [name, setName] = useState(null);
    const [profile_path, setProfile_path] = useState(null);
    const [birthday, setBirthday] = useState(null);
    const [pob, setPob] = useState(null);
    const [gender, setGender] = useState(0);
    const [kfd, setKfd] = useState(null);
    const [biography, setBiography] = useState(null);
    
    const [facebookId, setFacebookId] = useState(null);
    const [instagramId, setInstagramId] = useState(null);
    const [twitterId, setTwitterId] = useState(null);

    const [ creditNum, setCreditNum] = useState(0);

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

            console.log(response.data);
            setName(response.data.name);
            setProfile_path(response.data.profile_path);
            setGender(response.data.gender);
            setBirthday(response.data.birthday);
            setPob(response.data.place_of_birth);
            setKfd(response.data.known_for_department);
            setBiography(response.data.biography);

            console.log(responseEx.data);
            setFacebookId(responseEx.data.facebook_id);
            setInstagramId(responseEx.data.instagram_id);
            setTwitterId(responseEx.data.twitter_id);

            console.log(responseMC.data);
            console.log(responseTC.data)
            console.log('Movie, Tv cast : ', 
                responseMC.data.cast.length +
                responseTC.data.cast.length);
            setCreditNum(
                responseMC.data.cast.length +
                responseTC.data.cast.length);
        }
        loadPersonList();
    }, [id] );
    const img_url =`https://www.themoviedb.org/t/p/w300_and_h450_bestv2${ profile_path }`;
    const genderValue = `${gender}`;
    const placeOfBirth = `${pob}`
    const knownForDepartment = `${kfd}`;
    const Biography = `${biography}`;
    const facebook = `${facebookId}`
    const instagram = `${instagramId}`
    const twitter = `${twitterId}`
    const facebookUrl = `https://www.facebook.com/${facebookId}`;
    const instagramUrl = `https://www.instagram.com/${instagramId}/`;
    const twitterUrl = `https://twitter.com/${twitterId}`;
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
                                genderValue === "2"
                                ?
                                <p>남성</p>
                                : (
                                    genderValue === "1"
                                    ?
                                    <p>여성</p>
                                    : 
                                    <p>-</p>
                                )
                            }
                            <span>생년월일</span>
                            <br/>
                            {
                                birthday != null
                                ?
                                <p>{birthday}</p>
                                :
                                <p>-</p>
                            }
                            <span>출생지</span>
                            {
                                placeOfBirth !== "null"
                                ?
                                <p>{pob}</p>
                                :
                                <p>-</p>
                            }
                            <span>유명 분야</span>
                            <br/>
                            {
                                knownForDepartment !== "null"
                                ?
                                <p>{kfd}</p>
                                :
                                <p>-</p>
                            }
                            <span>출연 작품 수</span>
                            <p>{creditNum}</p>
                            <div className="ExternalLink">
                            {
                                facebook !== "null"
                                ?
                                <a href={facebookUrl}>Facebook</a>
                                :
                                <></>
                            }
                            {
                                instagram !== "null"
                                ?
                                <a href={instagramUrl}>Instagram</a>
                                :
                                <></>
                            }
                            {
                                twitter !== "null"
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
                        {
                            Biography !== ""
                            ?
                            <p>{biography}</p>
                            :
                            <p>-</p>
                        }
                    </div>
                </CCardBody>
            </CCard>
        </CCol>
        </CRow>
        </PROFILE_BOX>
    );
};

export default PersonDetailInfo;
