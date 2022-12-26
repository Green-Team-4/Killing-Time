import styled from "styled-components";
import { CCard, CCardImage, CWidgetStatsC } from '@coreui/react';
import { Link } from "react-router-dom";
import { NumericFormat } from "react-number-format";

const DramaRecommendItemBlock = styled.div`
  display: inline-block;
  margin: 0px;
  margin-left: 0;
  margin-right: 5px;
  padding: 0;
`;

const DramaMainRecommendItem = ({ result }) => {
  const { id, name, backdrop_path, vote_average } = result;
  const img_url = `https://www.themoviedb.org/t/p/w250_and_h141_face${backdrop_path}`;

  return (
    <DramaRecommendItemBlock>
      <CCard className='mb-2 border-gray'>
      <Link to="/dramaMain/dramaDetails" state={{ id: id }}>
            {backdrop_path !== null ? (
              <CCardImage orientation="top" src={img_url} alt={name} title={id} />
            ) : (
              <CCardImage src="https://via.placeholder.com/250xh141" alt={name} title={id} />
            )}
          </Link>
          {}
      <CWidgetStatsC 
        className="border-white"
        progress={{color: 'warning', value: vote_average * 10 }}
        title={<Link
          to="/dramaMain/dramaDetails"
          state={{ id: id }}
          style={{ textDecoration: "none", color: "black" }}
        >
          <div style={{ marginTop:'-9px', marginBottom:'-10px', width: 170, overflow: "hidden", textOverflow: "ellipsis"}}><strong>{name}</strong></div>
        </Link>}
        value= {<NumericFormat value={vote_average * 10} decimalScale={1} 
        displayType={'text'}      
        renderText={(value) => <div style={{ marginLeft:'200px', position:"absolute", top:'-5%', right:'5%'}}>
          { 
            vote_average * 10 >= 80 ? <span style={{ fontSize: 16, color:'#FF6347' }}>{value}%</span> :
            vote_average * 10 >= 60 ? <span style={{ fontSize: 16, color:'orange' }}>{value}%</span> :
            vote_average * 10 >= 1 ? <span style={{ fontSize: 16, color:'green' }}>{value}%</span> :
            ""
          }
            </div>}
          />}
        />      
      </CCard>
    </DramaRecommendItemBlock> 
  );
};

export default DramaMainRecommendItem;
