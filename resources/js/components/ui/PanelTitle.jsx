import React from "react";
import styled from "styled-components";

const PanelTitleUI = styled.div`
  display: flex;
  align-items: center;
  height: 35px;
  font: 15px/19px Source Sans Pro;
  color: #3d4671;
  padding-left:10px;
`;

const PanelTitle = ({ title }) => <PanelTitleUI>{title}</PanelTitleUI>;
export default PanelTitle;
