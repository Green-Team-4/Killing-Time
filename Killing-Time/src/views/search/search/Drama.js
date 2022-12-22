import React from 'react';
import { Link } from 'react-router-dom';
import { CCard, CCardImage, CCardTitle, CCardText, CCardBody, CCardHeader } from '@coreui/react';

 const IMG_API = "https://image.tmdb.org/t/p/w1280";

//가져올 목록
const Drama = ({id, name, poster_path, first_air_date, vote_average}) => (
    <CCard className='mb-3 border-dark' textColor='dark' style={{borderRadius:10, borderWidth:1, margin:7, width:202}}>
                <Link to="/dramaMain/dramaDetails" state={{ id: id }}>  
                        <CCardImage style={{width:200, height: 270, textAlign:'center', borderRadius:10}}
                        src={
                            poster_path 
                            ? IMG_API + poster_path
                            // 영화 포스터 깨질경우 아래 이미지로 대처
                            : "https://images.unsplash.com/photo-1485846234645-a62644f84728?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=740&q=80"
                            }
                            alt={name} />
                </Link>        
                <CCardHeader style={{backgroundColor:'#F0F8FF', fontSize:15, color:'black', overflow:'hidden', position:'relative'}} className="movie-info">
                &nbsp;
                    <Link style={{fontSize:17, textDecoration:'none', color:'black', position:'absolute'}} to="/dramaMain/dramaDetails" state={{ id: id }}>
                        <span style={{fontWeight:'bold'}}>{name}</span>
                    </Link>
                    </CCardHeader>
                    <CCardBody style={{display:'inline-block', backgroundColor:'#F5FFFA'}}>
                        <span style={{fontWeight:'bold', fontSize:15}}> 
                        첫 방영일 :  {first_air_date}
                        <br />
                        회원 점수 :  {vote_average}
                        </span>
                    </CCardBody>
                    <br />
    </CCard>
);

export default Drama;