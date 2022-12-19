import { useState } from "react";
import { CPagination } from "@coreui/react";
import { CPaginationItem } from "@coreui/react";
import { CButton, CInputGroup, CFormInput, CForm, CCol } from '@coreui/react'

function Pagination({ total, page, setPage }) {

    const start = Math.max(page - 2, 1);
    const pages = [];
    const [pageInputNum, setPageInputNum] = useState(0);

    if (start >= total - 3) {
        for (let idx = start; idx < start + 3; idx++) {
            pages.push(idx);
        }
    } else {
        for (let idx = start; idx < start + 10; idx++) {
            pages.push(idx);
        }
    }

    return (
        <>
            <CPagination align="center" size="sm" aria-label="Page navigation example" >
                <CPaginationItem onClick={() => setPage(page - 1)} disabled={page === 1}>
                <span style={{color:"#3399ff"}} >Previous</span>
                </CPaginationItem>

                {
                    start > 2
                        ?
                        <>
                            <CPaginationItem onClick={() => setPage(1)}>
                            <span style={{color:"#3399ff"}} >1</span>
                            </CPaginationItem>
                            <p> … </p>
                        </>
                        : (
                            start > 1
                                ?
                                <>
                                    <CPaginationItem onClick={() => setPage(1)}>
                                    <span style={{color:"#3399ff"}} >1</span>
                                    </CPaginationItem>
                                </>
                                :
                                <p></p>
                        )
                }
                {
                    pages
                        .map((i) => (
                            <CPaginationItem 
                                key={i}
                                onClick={() => setPage(i)}
                                active={parseInt(page) === i ? "page" : null}
                            >

                            <span style={{color:"#3399ff"}}>{i}</span>

                            </CPaginationItem>
                        ))
                }
                {
                    start < parseInt(total) - 5
                        ?
                        <>
                            <p> … </p>
                            <CPaginationItem onClick={() => setPage(total)}>
                            <span style={{color:"#3399ff"}} >Total</span>
                            </CPaginationItem>
                        </>
                        : (
                            start === parseInt(total) - 4
                                ?
                                <>
                                </>
                                :
                                start <= parseInt(total) - 3
                                    ?
                                    <>
                                        <CPaginationItem onClick={() => setPage(total)}>
                                        <span style={{color:"#3399ff"}} >Total</span>
                                        </CPaginationItem>
                                    </>
                                    :
                                    <>
                                    </>
                        )
                }
                <CPaginationItem onClick={() => setPage(page + 1)} disabled={page === total}>
                    <span style={{color:"#3399ff"}} >Next</span>
                </CPaginationItem>
                
                <div style={{width:30}}></div>

                <CForm>
                    <CCol>
                        <CInputGroup style={{width:170}}>
                            <CFormInput style={{width:50}} size="sm" onChange={(event) => setPageInputNum(event.target.value)}/>     
                            <CButton size="sm" color="secondary " variant="outline" onClick={() => setPage(pageInputNum)}>페이지로 이동</CButton>
                        </CInputGroup>
                    </CCol>
                 </CForm>
            </CPagination>

            
        </>
    );
}






export default Pagination;