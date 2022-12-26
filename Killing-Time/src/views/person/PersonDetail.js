import { useLocation } from 'react-router-dom';
import PersonDetailCast from './PersonDetailCast';
import PersonDetailInfo from './PersonDetailInfo';

const PersonDetail = (props) => {

    const location = useLocation();
    const id = location.state.id;
    // const page = location.state.page;
    // console.log('page: ', page);

    return (
        <div>
            <PersonDetailInfo id={id}/>
            <PersonDetailCast id={id}/>
        </div>
    );
};

export default PersonDetail;
