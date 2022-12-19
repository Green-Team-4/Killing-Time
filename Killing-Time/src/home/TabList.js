import { CButton } from '@coreui/react';
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
                <CButton color='light' style={{ fontSize: 18}} className={activeIndex===0 ? "is-active" : ""} onClick={()=>tabClickHandler(0)}> 일일 박스오피스 </CButton>
            ),
            tabCont:(
                <div><BoxOffice /></div>
            )
        },
        {
            tabTitle:(
                <CButton color='light' style={{ fontSize: 18}} className={activeIndex===1 ? "is-active" : ""} onClick={()=>tabClickHandler(1)}> TV 순위</CButton>
            ),
            tabCont:(
                <div><DramaChart /></div>
            )
        },
        {
            tabTitle:(
                <CButton color='light' style={{ fontSize: 18}} className={activeIndex===2 ? "is-active" : ""} onClick={()=>tabClickHandler(2)}> 영화 뉴스</CButton>
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