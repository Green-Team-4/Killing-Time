import { CCard, CCardBody, CCol, CRow } from "@coreui/react";
import { useEffect, useState } from "react";
import axios from "axios";
import PersonItem from "./PersonItem";
import Pagination from "./PersonPage";

const PersonList = (props) => {

    const [results, setResults] = useState(null);
    const [page, setPage] = useState(1);
    const [total_pages, setTotal_pages] = useState(null);

    // useEffect : mount(초기화), update(상태변화) 이벤트 처리기 등록
    useEffect( () => {
        const loadPersonList = async (e) => {
            const language = "ko-KR";
            const apiKey = "52b3ba71c5a67f1429c8e2d3877f3eb4";
            const url = 
            `https://api.themoviedb.org/3/person/popular?api_key=${ apiKey }&page=${page}&language=${language}`;
            const response = await axios.get(url)
            //console.log(response.data);
            setResults(response.data.results);
            setPage(response.data.page);
            setTotal_pages(response.data.total_pages);
        }
        loadPersonList();
    }, [page] );
    //console.log(results);
    //console.log(page);

    if (!results) {
        return;
    }

    return (
        <CRow>
        <CCol xs={12}>
            <CCard className="mb-4">
                <CCardBody>
                    <h3 style={{fontWeight:"bold", marginTop:"10px", marginLeft:"10px"}}>인기 인물</h3>
                    <br/>
                    {
                        results.map( (result) => {
                            return (<PersonItem key={ result.id } result={ result } />);
                        })
                    }
                    <Pagination
                        total={total_pages} 
                        page={page}
                        setPage={setPage}
                    />
                </CCardBody>
            </CCard>
        </CCol>
        </CRow>
    );

};

export default PersonList;
