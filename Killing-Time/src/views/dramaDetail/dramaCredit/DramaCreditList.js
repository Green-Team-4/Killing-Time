import { CNav, CNavItem, CNavLink, CTabContent, CTabPane } from "@coreui/react";
import axios from "axios";
import { useEffect, useState } from "react";
import DramaCreditListCast from "./DramaCreditListCast";
import DramaCreditListCrew from "./DramaCreditListCrew";

const DramaCreditList = ({ id }) => {
  const [cast, setCast] = useState(null);
  const [crew, setCrew] = useState(null);
  const [activeKey, setActiveKey] = useState(1)

  // useEffect : mount(초기화), update(상태변화) 이벤트 처리기 등록
  useEffect(() => {
    const loadMainCast = async (e) => {
      const language = "en-US";
      const apiKey = "da88cf78c356139f9420b764c0d77208";
      const baseUrl = "https://api.themoviedb.org/3/tv";
      const url = `${baseUrl}/${id}/credits?api_key=${apiKey}&language=${language}`;
      // https://api.themoviedb.org/3/movie/436270/credits?api_key=403cc00da7a7725917c9acd69484bde6&language=ko-KR
      const response = await axios.get(url);
      setCast(response.data.cast);
      setCrew(response.data.crew);
    };
    loadMainCast();
  }, [id]);

  if (!cast) {
    return;
  }
 
  return (
    <>
      
      <CNav style={{paddingLeft:30}} variant="tabs" role="tablist">
      <CNavItem>
        <CNavLink
          active={activeKey === 1}
          onClick={() => setActiveKey(1)}
        > <span style={{fontSize:20, fontWeight:"bold"}}>시리즈 출연진</span>
        </CNavLink>
      </CNavItem>
      <CNavItem>
        <CNavLink
          
          active={activeKey === 2}
          onClick={() => setActiveKey(2)}
        >
          <span style={{fontSize:20, fontWeight:"bold"}} >시리즈 제작진</span>
        </CNavLink>
      </CNavItem>
      </CNav>
      <CTabContent>
      <CTabPane role="출연진탭" aria-labelledby="" visible={activeKey === 1}>
      <div
      style={{
        display: "grid",
        gridTemplateRows: "1fr ",
        gridTemplateColumns: "1fr 1fr",
    }}>
          {cast.map((result) => {
            return (
              <DramaCreditListCast key={result.credit_id} result={result} />
            );
          })}
        </div>
      </CTabPane>
      <CTabPane role="제작진탭" aria-labelledby="profile-tab" visible={activeKey === 2}>
      <div
      style={{
        display: "grid",
        gridTemplateRows: "1fr ",
        gridTemplateColumns: "1fr 1fr",
    }}>
          {crew.map((result) => {
            return (
              <DramaCreditListCrew key={result.credit_id} result={result} />
            );
          })}
        </div>
      </CTabPane>
      
    </CTabContent>










       
        
          
      
    </>
  );
};

export default DramaCreditList;