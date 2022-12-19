import React from 'react';
import { Link } from 'react-router-dom';
import { CCard, CCardImage, CCardTitle, CCardText, CCardBody, CCardHeader } from '@coreui/react';


 const IMG_API = "https://image.tmdb.org/t/p/w1280";

//가져올 목록
const Drama = ({id, name, poster_path, first_air_date, vote_average}) => (
    <CCard className='mb-3 border-dark' textColor='dark' style={{borderRadius:10, borderWidth:1, margin:7, width:222}}>
                <Link to="/dramaMain/dramaDetails" state={{ id: id }}>  
                        <CCardImage style={{width:220, height: 300, textAlign:'center', borderRadius:10}}
                        src={
                            poster_path 
                            ? IMG_API + poster_path
                            // 영화 포스터 깨질경우 아래 이미지로 대처
                            : "https://images.unsplash.com/photo-1485846234645-a62644f84728?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=740&q=80"
                            }
                            alt={name} />
                </Link>        
                <CCardHeader style={{backgroundColor:'#F0F8FF', fontSize:15, color:'black'}} className="movie-info">
                &nbsp;
                    <Link style={{fontSize:18, textDecoration:'none', color:'black'}} to="/dramaMain/dramaDetails" state={{ id: id }}>
                        <span style={{fontWeight:'bold'}}>{name}</span>
                    </Link>
                    </CCardHeader>
                    <CCardBody style={{display:'inline-block', backgroundColor:'#F5FFFA'}}>
                        <span style={{fontWeight:'bold'}}> 
                        첫 방영일 :  {first_air_date}
                        <br />
                        회원 점수 :  {vote_average}
                        </span>
                    </CCardBody>
                    <br />
    </CCard>
);

export default Drama;

// import React from 'react';
// import { Link } from 'react-router-dom';

// const IMG_API = "https://image.tmdb.org/t/p/w1280";

// // 가져올 목록
// const Drama = ({id, name, poster_path, first_air_date, vote_average }) => (
//     <div className="drama">
//         <p className='dramaa'>
//             <Link to="/dramaMain/dramaDetails" state={{ id: id }}>
//                 <div style={{width:240}}>
//                     <img style={{ width:220, height: 330, borderRadius:20}}
//                         src={
//                             poster_path 
//                             ? IMG_API + poster_path
//                             // 영화 포스터 깨질경우 아래 이미지로 대처
//                             : "https://images.unsplash.com/photo-1485846234645-a62644f84728?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=740&q=80"
//                             } 
//                             alt={name} />
//                     </div>
//                 </Link>
//                 <div style={{fontSize:15, color:'black'}} className="movie-info">
//                 &nbsp;
//                     <Link style={{fontSize:20, textDecoration:'none', color:'black'}} to="/dramaDetail" state={{ id: id }}>
//                         <h5 style={{fontWeight:'bold'}}>{name}</h5>
//                     </Link>
//                     <br />
//                 </div>
//                 <div>
//                     <span>
//                        첫 방송일 : {first_air_date}
//                        <br />
//                        평점 :  {vote_average}
//                     </span>
//                     <br />
//                 </div>
//             <br />
//         </p>
//     </div>
// );

// export default Drama;