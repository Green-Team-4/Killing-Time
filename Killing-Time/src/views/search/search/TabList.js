import { CButton, CTooltip } from '@coreui/react';
import React, { useState } from 'react';
import Movie from './Movie';
import Drama from './Drama';
import People from './People';


const TabList = (props) => {

    const [activeIndex, setActiveIndex]=useState(0);

    const tabClickHandler=(index)=>{
        setActiveIndex(index);
    };

    const tabContArr=[
        
        {
            tabTitle:(
                <CTooltip 
                    content="영화 순위를 확인하세요."
                    placement="bottom">
                    <CButton color='light' style={{ fontSize: 18}} className={activeIndex===0 ? "is-active" : ""} onClick={()=>tabClickHandler(0)}> 
                        인기 영화 TOP 20
                    </CButton>
                </CTooltip>
            ),
            tabCont:(
                <div><Movie /></div>
            )
        },
        {
            tabTitle:(
                <CTooltip 
                    content="TV 시리즈 순위를 확인하세요."
                    placement="bottom">
                    <CButton color='light' style={{ fontSize: 18}} className={activeIndex===1 ? "is-active" : ""} onClick={()=>tabClickHandler(1)}> 
                        인기 TV TOP 20
                    </CButton>
                </CTooltip>
            ),
            tabCont:(
                <div><Drama /></div>
            )
        },
        {
            tabTitle:(
                <CTooltip 
                    content="인물 순위를 확인하세요."
                    placement="bottom">
                    <CButton color='light' style={{ fontSize: 18}} className={activeIndex===2 ? "is-active" : ""} onClick={()=>tabClickHandler(2)}> 
                        인기 인물 TOP 20
                    </CButton>
                </CTooltip>
            ),
            tabCont:(
                <div><People /></div>
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