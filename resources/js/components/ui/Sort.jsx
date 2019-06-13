import React from "react";
import styled from "styled-components";
import DropdownText from   "./DropdownText"
import data from     "../../mockup/data-for-dropdown"
const SortWrapperUI = styled.div`
  margin: 15px 0;
  width: 159px;
  height: 189px;
  background: #ffffff;
  box-shadow: 0px 1px 2px rgba(61, 70, 113, 0.17);
  border-radius: 2px;
`;

const SortTitleUI = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  
  height: 35px;
  font: 15px/19px Source Sans Pro;
  color: #3d4671;
`;

const SortBlockUI = styled.div`
display:flex;
justify-content: center;
  align-items: center;
border-top: 1px solid #dbeaf4;
height:77px;
`



const Sort = ({ checked, ...attrs }) => (
  <SortWrapperUI>
    <SortTitleUI>Сортировка</SortTitleUI>
    <SortBlockUI><DropdownText data={data} title="Клиент"/></SortBlockUI>
    
    <SortBlockUI><DropdownText data={data} title="Категория"/></SortBlockUI>
  </SortWrapperUI>
);

export default Sort;
