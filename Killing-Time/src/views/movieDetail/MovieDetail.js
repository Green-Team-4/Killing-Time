import { useParams } from "react-router-dom";

const NewsPage = (props) => {

    const params = useParams();
    // const category = params.category ? params.category : 'all';
    const category = params.category || 'all';

    return (
        <div>hi
        </div>
    );

};

export default NewsPage;
