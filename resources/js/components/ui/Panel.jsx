import React from "react";
import styled from "styled-components";

const PanelUI = styled.div`
  display: inline-flex;
  flex-flow: column;
  box-shadow: 0px 1px 2px rgba(61, 70, 113, 0.17);
    
  > :not(:first-child) {
    border-top: 1px solid #dbeaf4;
    margin: 0 10px 10px 10px;
  }
  
  `;
  
  // padding-top:10px;

const Panel = ({ children }) => <PanelUI>{children}</PanelUI>;
export default Panel;
