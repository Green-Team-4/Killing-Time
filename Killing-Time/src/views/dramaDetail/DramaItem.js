
import { Link } from 'react-router-dom';

import { CCard, CCardImage, CCardTitle, CCardText, CCardBody, CCardHeader } from '@coreui/react';

const DramaItem = ({ result }) => {

    const { id, poster_path, name, first_air_date, vote_average} = result;
    const img_url = `https://www.themoviedb.org/t/p/w220_and_h330_face${ poster_path }`;
  
    return (
        <>
        
        <CCard className='mb-3 border-dark' textColor='dark' style={{margin:7}}>
            <Link to="/dramaMain/dramaDetails" state={{ id:id }}>
                <CCardImage style={{padding:0}} src={ img_url } alt="drama thumbnail" />
            </Link>
            <CCardHeader style={{height:55}}>
                <CCardTitle style={{fontSize:17, textAlign:'center',position:"relative", transform:"translateY(-50%)", top:'50%'}}>{ name }</CCardTitle>
            </CCardHeader>
            <CCardBody >
                <h12>출시일 : { first_air_date }</h12><br />
                <h12>회원 점수 : { vote_average }</h12>
            </CCardBody>
        </CCard>
        
        </>
    );

};

export default DramaItem;
