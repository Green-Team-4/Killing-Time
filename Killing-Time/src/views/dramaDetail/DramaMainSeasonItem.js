
import { CImage, CCardBody,CCardTitle } from '@coreui/react';

const DramaMainCastItem = ({ result }) => {
  const { overview, air_date, poster_path, season_number, episode_count} = result;
  const img_url = `https://www.themoviedb.org/t/p/w130_and_h195_bestv2${poster_path}`;
  
  return (
    <div className="clearfix">
      <CImage  align="start" style={{borderRadius: 10}} src={img_url} width={150} height={225} />
      <CCardBody style={{ marginLeft:'150px'}}>
        {season_number === 0 ? (
          <CCardTitle>시즌 1 </CCardTitle> 
        ) : (
          <CCardTitle>시즌 {season_number}</CCardTitle>
        )} 

        {overview !== "" ? (
            <span>{air_date} / 총 {episode_count }화 <br /> {overview} </span>
        ) : (
          <span> {air_date} 에 방영되었습니다. / 총 {episode_count }화 <br /> {overview} </span>
        )} 
      </CCardBody>
    </div>
  );
};

export default DramaMainCastItem;
