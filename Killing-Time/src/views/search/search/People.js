import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { CCard, CCardImage, CCardTitle, CCardText, CCardBody, CCardHeader } from '@coreui/react';

 const IMG_API = "https://www.themoviedb.org/t/p/w300";


//가져올 목록
const People = ({id, name, profile_path, popularity, gender }) => (
    <CCard className='mb-3 border-dark' textColor='dark' style={{borderRadius:10, borderWidth:1, margin:7, width:202}}>
                <Link to="/personList/personDetail" state={{ id: id }}>  
                        <CCardImage style={{width:200, height: 270, textAlign:'center', borderRadius:10, borderBottomLeftRadius:0, borderBottomRightRadius:0}}
                        src={
                            profile_path 
                            ? IMG_API + profile_path
                            // 영화 포스터 깨질경우 아래 이미지로 대처
                            : "https://images.unsplash.com/photo-1485846234645-a62644f84728?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=740&q=80"
                            }
                            alt={name} />
                </Link>        
                <CCardHeader style={{backgroundColor:'#F0F8FF', fontSize:15, color:'black', overflow:'hidden', position:'relative'}} className="movie-info">
                &nbsp;
                    <Link style={{fontSize:17, textDecoration:'none', color:'black', position:'absolute'}} to="/personList/personDetail" state={{ id: id }}>
                        <span style={{fontWeight:'bold'}}>{name}</span>
                    </Link>
                    </CCardHeader>
                    <CCardBody style={{display:'inline-block', backgroundColor:'#F5FFFA'}}>
                        <span style={{fontWeight:'bold', fontSize:15}}> 
                        회원 선호도 :  {popularity}
                        <br />
                        {
                                `${gender}` === "2"
                                ?
                                <p>성별 : 남성</p>
                                : (
                                    `${gender}` === "1"
                                    ?
                                    <p>성별 : 여성</p>
                                    : 
                                    <p>-</p>
                                )
                            }
                        </span>
                    </CCardBody>
                    <br />
    </CCard>
);

export default People;