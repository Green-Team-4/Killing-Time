import { useLocation } from "react-router-dom";
import DramaDetailList from "./DramaDetailList";
import DramaMainCast from "./DramaMainCast";
import DramaMainMedia from "./DramaMainMedia";
import DramaMainRecommend from "./DramaMainRecommend";
import DramaMainSeason from "./DramaMainSeason";

const DramaDetails = (props) => {
    const location = useLocation();
    const id = location.state.id;
    
    return (
        <>
            <DramaDetailList id={id}/>

            <DramaMainCast id={id} />
            
            <DramaMainMedia id={id} />

            <DramaMainRecommend id={id} />

            <DramaMainSeason id={id} />


        </>
        
        
    );

};

export default DramaDetails;
