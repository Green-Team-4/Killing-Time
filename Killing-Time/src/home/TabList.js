import { CButton, CTooltip } from '@coreui/react';
import React, { useState } from 'react';
import BoxOffice from './BoxOffice';
import DramaChart from './DramaChart';
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
                <div><BoxOffice /></div>
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
                <div><DramaChart /></div>
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