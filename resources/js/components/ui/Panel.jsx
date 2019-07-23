import React,{Fragment} from "react";
import styled from "styled-components";

const PanelUI = styled.div`
  display: inline-flex;
  max-width: 160px;
  flex-flow: column;
  box-shadow: 0px 1px 2px rgba(61, 70, 113, 0.17);
  >:last-child {
    display:none;
  }   
  >:nth-child(odd){
    padding:10px;
  }
  
  
  `;
const PanelLineBreakUI=styled.div`
  width:100%;
  height:1px;
  background:#dbeaf4;
`


const Panel = ({ children }) => <PanelUI>{children.map((child,idx)=>{
  return(
    <Fragment key={idx}>
      {child}
      <PanelLineBreakUI/>
    </Fragment>
  )
})}</PanelUI>;
export default Panel;
