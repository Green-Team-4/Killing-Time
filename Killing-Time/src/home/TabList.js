import { CButton, CCarousel, CCarouselItem, CTooltip } from '@coreui/react';
import React, { useState } from 'react';
import BoxOffice from './BoxOffice';
import BoxOffice2 from './BoxOffice2';
import BoxOfficeChart from './BoxOfficeChart';
import DramaChart from './DramaChart';
import DramaChart2 from './DramaChart2';
import MovieNews from './MovieNews';


const TabList = (props) => {

    const [activeIndex, setActiveIndex]=useState(0);

    const tabClickHandler=(index)=>{
        setActiveIndex(index);
    };

    const tabContArr=[
        
        {
            tabTitle:(
                <CTooltip 
                    content="일일 박스 오피스를 확인하세요."
                    placement="bottom">
                <CButton color='light' style={{ fontSize: 18}} className={activeIndex===0 ? "is-active" : ""} onClick={()=>tabClickHandler(0)}> 일일 박스오피스 </CButton>
                </CTooltip>
            ),
            tabCont:(
                <div>
                <CCarousel controls indicators dark>
                <CCarouselItem>
                    <BoxOffice />
                </CCarouselItem>
                <CCarouselItem>
                   <BoxOffice2 />
                </CCarouselItem>
                </CCarousel>
                </div>
            )
        },
        {
            tabTitle:(
                <CTooltip 
                    content="TV 시리즈 순위를 확인하세요."
                    placement="bottom">
                <CButton color='light' style={{ fontSize: 18}} className={activeIndex===1 ? "is-active" : ""} onClick={()=>tabClickHandler(1)}> TV 순위</CButton>
                </CTooltip>
            ),
            tabCont:(
                <div>
                    <CCarousel controls indicators dark>
                    <CCarouselItem>
                        <DramaChart />
                    </CCarouselItem>
                    <CCarouselItem>
                        <DramaChart2 />
                    </CCarouselItem>
                    </CCarousel>
                </div>
            )
        },
        {
            tabTitle:(
                <CTooltip 
                    content="영화 관련 뉴스를 확인하세요."
                    placement="bottom">
                <CButton color='light' style={{ fontSize: 18}} className={activeIndex===2 ? "is-active" : ""} onClick={()=>tabClickHandler(2)}> 영화 뉴스</CButton>
                </CTooltip>
            ),
            tabCont:(
                <div><MovieNews /></div>
            )
        },
        {
            tabTitle:(
                <CTooltip 
                    content="일일 박스오피스 관객수를 그래프로 확인하세요."
                    placement="bottom">
                <CButton color='light' style={{ fontSize: 18}} className={activeIndex===3 ? "is-active" : ""} onClick={()=>tabClickHandler(3)}> 박스오피스 그래프</CButton>
                </CTooltip>
            ),
            tabCont:(
                <div><BoxOfficeChart /></div>
            )
        }
    ];

    return (
        <div>
          <div className="tabs">
            {tabContArr.map((section, index)=>{
                return section.tabTitle
            })}
          </div>
          <br />
          <div>
          	{tabContArr[activeIndex].tabCont}
          </div>
        </div>
    );
};
export default TabList;