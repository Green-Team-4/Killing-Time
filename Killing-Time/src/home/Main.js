import { CCard, CCardBody, CCardHeader, CCarousel, CCarouselItem, CCol, CRow } from '@coreui/react';
import axios from 'axios';
import { useState } from 'react';
import { DocsExample } from 'src/components';

const Main = (props) => {
    return (
        <CRow>
        <CCol xs={12}>
          <CCard className="mb-4">
            <CCardHeader>
              <strong>Carousel</strong> <small>Slide only</small>
            </CCardHeader>
            <CCardBody>
              <p className="text-medium-emphasis small">Here’s a carousel with slides</p>
              <DocsExample href="components/carousel">
                <CCarousel>
                  <CCarouselItem>
                    <div>aaaaaaaaaaaaaaa</div>
                  </CCarouselItem>
                </CCarousel>
              </DocsExample>
            </CCardBody>
          </CCard>
        </CCol>
        </CRow>
    );
};

export default Main;
