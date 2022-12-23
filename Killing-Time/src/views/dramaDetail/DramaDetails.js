import { useLocation } from "react-router-dom";
import DramaDetailList from "./DramaDetailList";
import DramaMainCast from "./DramaMainCast";
import DramaMainMedia from "./DramaMainMedia";
import DramaMainRecommend from "./DramaMainRecommend";

const DramaDetails = (props) => {
    const location = useLocation();
    const id = location.state.id;
    
    return (
        <>
            <DramaDetailList id={id}/>

            <DramaMainCast id={id} />
            
            <DramaMainMedia id={id} />

            <DramaMainRecommend id={id} />

        </>
        
        
    );

};

export default DramaDetails;
