import { CCard, CCardBody, CCol, CRow } from "@coreui/react";
import styled from 'styled-components';
import axios from "axios";
import { useEffect, useState } from "react";

const PROFILE_BOX = styled.div`
    div.profile_photo {
        display: inline-flex;
        margin-bottom:20px;
        width:300px;
        height:450px:
    }
    div.profile_detail {
        display: inline-block;
        margin-left: 30px;
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
`;

const PersonDetailInfo = ({id}) => {
    //console.log('id: ', id);

    const [name, setName] = useState(null);
    const [profile_path, setProfile_path] = useState(null);
    const [birthday, setBirthday] = useState(null);
    const [gender, setGender] = useState(0);
    const [kfd, setKfd] = useState(null);
    const [biography, setBiography] = useState(null);    

    useEffect( () => {
        const loadPersonList = async (e) => {
            //const language = "ko-KR";
            const apiKey = "52b3ba71c5a67f1429c8e2d3877f3eb4";
            const url = 
            `https://api.themoviedb.org/3/person/${ id }?api_key=${ apiKey }`;
            const response = await axios.get(url)
            console.log(response.data)
            setName(response.data.name);
            setProfile_path(response.data.profile_path);
            setBirthday(response.data.birthday);
            setGender(response.data.gender);
            setKfd(response.data.known_for_department);
            setBiography(response.data.biography);
        }
        loadPersonList();
    }, [id] );
    const img_url =`https://www.themoviedb.org/t/p/w300_and_h450_bestv2${ profile_path }`;
    const genderValue = `${gender}`;
    //console.log('Gender Value:', genderValue);
    const knownForDepartment = `${kfd}`;
    const Biography = `${biography}`;

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
                        <img src="https://via.placeholder.com/300x450" alt={name} />
                    }
                    </div>
                    <div className="profile_detail">
                        <h1>{name}</h1>
                        <br/>
                        <div className="profile_detail_details">
                            <span>BirthDay</span>
                            <br/>
                            {
                                birthday != null
                                ?
                                <p>{birthday}</p>
                                :
                                <p>Unknown</p>
                            }
                            <span>Gender</span>
                            <br/>
                            {
                                genderValue === "2"
                                ?
                                <p>Male</p>
                                : (
                                    genderValue === "1"
                                    ?
                                    <p>Female</p>
                                    : 
                                    <p>Unknown</p>
                                )
                            }
                            <span>Known for department</span>
                            <br/>
                            {
                                knownForDepartment != null
                                ?
                                <p>{kfd}</p>
                                :
                                <p>Unknown</p>
                            }
                            <br/>
                            <br/>
                            <br/>
                            <br/>
                            <br/>
                            <br/>
                            <br/>
                        </div>
                    </div>
                    <div className="profile_description">
                        <h4>Biography</h4>
                        {
                            Biography !== ""
                            ?
                            <p>{biography}</p>
                            :
                            <p>No Discription</p>
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
