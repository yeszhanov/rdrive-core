import React, { useState } from "react";
import styled from "styled-components";

const DropdownTitleUI = styled.span`
  font: 12px/15px Source Sans Pro;
  box-sizing: border-box;
  color: #4e5269;
  
`;
const DropdownIconUI = styled.svg`
  width: 11px;
  height: 7px;

  fill: none;
  position: absolute;
  right: 10px;
  top: 50%;
  transform: translateY(-50%);
`;
const DropdownTextWrapperUI = styled.div`
  position: relative;
`;
const DropdownTextUI = styled.div`
color: #3D4671;
  width: 140px;
  height: 35px;
  box-sizing: border-box;
  background: #fff;
  padding: 8px 7px 8px 10px;
  cursor: pointer;
  :hover {
    background: #edf4f9;
  }
  :active {
    background: #177ff2;
  }
`;
const DropdownDisplayUI = styled.div`
color: #3D4671;
  position: relative;
  background: #dbeaf4;
  width: 140px;
  height: 35px;
  box-sizing: border-box;
  cursor: pointer;
  border-radius: 2px;
  font: 15px/19px Source Sans Pro;
  margin-top: 5px;
  padding: 8px 7px 8px 10px;
`;
const DropdownContentUI = styled.div`
  position: absolute;
  left: 0;
  top: 100%;
  display: ${props => (props.isOpen ? "inline-flex" : "none")};
  flex-flow: column;
  z-index: 1000;
  box-shadow: 0px 4px 13px rgba(61, 70, 113, 0.25);
`;

const DropdownText = ({ data, title }) => {
  const [isOpen, setTrigger] = useState(false);
  const [isSelected, setSelector] = useState(null);
  const SelectIcon = idx => {
    setSelector(idx);
  };

  return (
    <DropdownTextWrapperUI onClick={() => setTrigger(!isOpen)}>
      <DropdownTitleUI>{title}</DropdownTitleUI>
      <DropdownDisplayUI>
        {isSelected !== null ? data[isSelected].name : "выбрать"}
        <DropdownIconUI viewBox="0 0 11 7">
          <path d="M1 1L5.5 6L10 1" stroke="#3D4671" />
        </DropdownIconUI>
      </DropdownDisplayUI>
      <DropdownContentUI isOpen={isOpen}>
        {data.map((item, idx) => {
          const { name } = item;
          if (isSelected != idx) {
            return (
              <DropdownTextUI key={idx} onClick={() => SelectIcon(idx)}>
                {name}
              </DropdownTextUI>
            );
          }
        })}
      </DropdownContentUI>
    </DropdownTextWrapperUI>
  );
};

export default DropdownText;
