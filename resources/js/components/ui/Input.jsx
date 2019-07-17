import React from "react";

import styled from "styled-components";

const InputWrapperUI = styled.div`
  display:inline-flex;
  flex-flow:column;
  box-sizing:border-box;  
`

const InputLabelUI = styled.label`
  font: 12px/15px Source Sans Pro;
  color: #4e5269;
`;

const InputUI = styled.input`
  box-sizing: border-box;
  height: 35px;
  border-radius: 2px;
  border: 1px solid #dbeaf4;
  background-color: transparent;
  padding: 7px 10px;
  font-size: 15px;
  color: #3d4671;
  line-height: normal;
  width:${props => (props.width ? props.width : "auto")} ;

 
  outline: none;
  :focus {
    border-color: #177ff2;
  }
`;
// width:${props => (props.panel ? "140px" : "220px")} ;
const Input = ({ label,placeholder,width, ...attrs }) => (
  <InputWrapperUI>
    <InputLabelUI htmlFor="customInput">{label}</InputLabelUI>
    <InputUI id="customInput" width={width} placeholder={placeholder} {...attrs} />
  </InputWrapperUI>
);

export default Input;
