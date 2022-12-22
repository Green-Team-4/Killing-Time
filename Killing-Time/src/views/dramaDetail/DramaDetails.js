import { useLocation } from "react-router-dom";
import DramaDetailList from "./DramaDetailList";
import DramaMainCast from "./DramaMainCast";
import DramaMainRecommend from "./DramaMainRecommend";

const DramaDetails = (props) => {
    const location = useLocation();
    const id = location.state.id;
    
    return (
        <>
            <DramaDetailList id={id}/>
            
            111
            <DramaMainRecommend id={id} />
            
            222
            <DramaMainCast id={id} />
           
        </>
        
        
    );

};

export default DramaDetails;
