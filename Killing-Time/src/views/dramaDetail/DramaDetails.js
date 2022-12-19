import { useLocation } from "react-router-dom";
import DramaDetailList from "./DramaDetailList";
import DramaMainCast from "./DramaMainCast";

const DramaDetails = (props) => {
    const location = useLocation();
    const id = location.state.id;
    
    return (
        <div>
            <DramaDetailList id={id}/>
            <DramaMainCast id={id} />
        </div>
    );

};

export default DramaDetails;
