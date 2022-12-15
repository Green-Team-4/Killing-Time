import { CCard, CCardBody, CCol, CRow } from "@coreui/react";
import axios from "axios";
import { useEffect, useState } from "react";
import PersonDetailCastItem from "./PersonDetailCastItem";

const PersonDetailCast = ({id}) => {
    console.log('id: ', id);
    const [castResults, setCastResults] = useState(null);

    // useEffect : mount(초기화), update(상태변화) 이벤트 처리기 등록
    useEffect(() => {
        const loadCastList = async (e) => {
            // const language = "ko-KR";
            const apiKey = "52b3ba71c5a67f1429c8e2d3877f3eb4";
            const url = 
            `https://api.themoviedb.org/3/person/${ id }/movie_credits?api_key=${ apiKey }`;
            const response = await axios.get(url)
            console.log('response.data:', response.data);
            setCastResults(response.data.cast);
            // debugger;
        }
        loadCastList();
    }, [id] );

    if (!castResults) {
        return;
    }

    return (
        <CRow>
        <CCol xs={12}>
            <CCard className="mb-4">
                <CCardBody>
                    <h2 style={{fontWeight:"bold"}}>Movie Credits</h2>
                    <br/>
                    {
                        castResults.map( (castResult) => {
                            return (<PersonDetailCastItem key={ castResult.id } castResult={ castResult } />);
                        })
                    }
                </CCardBody>
            </CCard>
        </CCol>
        </CRow>
    );
};

export default PersonDetailCast;













