import { Link } from 'react-router-dom';
import { CCard, CCardImage, CCardBody, CCardHeader } from '@coreui/react';

 const IMG_API = "https://image.tmdb.org/t/p/w1280";

//가져올 목록

const Movie = ({id, title, poster_path, release_date, vote_average }) => {
    const rate = vote_average * 10;
    
    return (
    <CCard className='mb-3 border-dark' textColor='dark' style={{borderRadius:10, borderWidth:1, margin:7, width:202}}>
               
                <Link to="/moviePage/movieDetail" state={{ id: id }}>  
                        <CCardImage style={{width:200, height: 270, textAlign:'center', borderRadius:10, borderBottomLeftRadius:0, borderBottomRightRadius:0}}
                        src={
                            poster_path 
                            ? IMG_API + poster_path
                            // 영화 포스터 깨질경우 아래 이미지로 대처
                            : "https://images.unsplash.com/photo-1485846234645-a62644f84728?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=740&q=80"
                            }
                            alt={title} />
                </Link>        
                <CCardHeader style={{backgroundColor:'#F0F8FF', fontSize:15, color:'black', overflow:'hidden', position:'relative'}} className="movie-info">
                &nbsp;
                    <Link style={{fontSize:17, textDecoration:'none', color:'black', position:'absolute'}} to="/moviePage/movieDetail" state={{ id: id }}>
                        <span style={{fontWeight:'bold'}}>{title}</span>
                    </Link>
                    </CCardHeader>
                    <CCardBody style={{display:'inline-block', backgroundColor:'#F8F8FF'}}>
                        <span style={{fontWeight:'bold', fontSize:15}}> 
                        개봉일 :  {release_date}
                        <br />
                        회원 점수 :  {vote_average}
                        <br />
                        {
                              rate > 66 ? <strong style={{ color: "#369F36" }}>● {rate}%</strong> :
                              rate > 33 ? <strong style={{ color: "#FFAF0A" }}>● {rate}%</strong> :
                              <strong style={{ color: "#EB0000" }}>● {rate}%</strong>
                            }
                        </span>
                    </CCardBody>
                    <br />
    </CCard>
    );
};

export default Movie;