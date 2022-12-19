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
                    Previous
                </CPaginationItem>

                {
                    start > 2
                        ?
                        <>
                            <CPaginationItem onClick={() => setPage(1)}>
                                1
                            </CPaginationItem>
                            <p> … </p>
                        </>
                        : (
                            start > 1
                                ?
                                <>
                                    <CPaginationItem onClick={() => setPage(1)}>
                                        1
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

                                <>{i}</>

                            </CPaginationItem>
                        ))
                }
                {
                    start < parseInt(total) - 5
                        ?
                        <>
                            <p> … </p>
                            <CPaginationItem onClick={() => setPage(total)}>
                                {total}
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
                                            {total}
                                        </CPaginationItem>
                                    </>
                                    :
                                    <>
                                    </>
                        )
                }
                <CPaginationItem onClick={() => setPage(page + 1)} disabled={page === total}>
                    Next
                </CPaginationItem>
                <div style={{width:30}}></div>
                <CForm className="row g-3">
                    <CCol xs="auto">
                        <CInputGroup style={{width:200, margin:""}} className="mb-1">
                            <CFormInput style={{width:50}} size="sm"  aria-describedby="button-addon2" onChange={(event) => setPageInputNum(event.target.value)}/>     
                            <CButton size="sm" color="primary" variant="outline" onClick={() => setPage(pageInputNum)}>페이지로 이동</CButton>
                        </CInputGroup>
                    </CCol>
                 </CForm>
            </CPagination>

            
        </>
    );
}






export default Pagination;