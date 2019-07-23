import React, { Fragment, useState } from "react";
import styled, { css } from "styled-components";
import Input from "./Input";
import Panel from "./Panel";
import PanelTitle from "./PanelTitle";

const TagInputUI = styled.div`
  max-height: 280px;
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  flex-flow: column;
  overflow: overlay;
`;
const TagInputUlUI = styled.ul`
  display: inline-flex;
  flex-wrap: wrap;
  margin: 0;
  padding: 0;
  width: 100%;
`;
const TagInputLiUI = styled.li`
  display: flex;
  align-items: center;
  list-style: none;
  margin: 0 5px 5px 0;

  color: #177ff2;
  padding: 5px;
  word-break: break-word;
  border: 1px solid #177ff2;
  box-sizing: border-box;
  border-radius: 2px;
`;
const TagInputDeleteBtnUI = styled.button`
  display: inline-flex;
  align-items: center;

  color: #177ff2;
  border: none;

  cursor: pointer;
  outline: none;
  font-size: 20px;
  height: 5px;
  justify-content: center;
  line-height: 0;
  margin-left: 8px;
  transform: rotate(45deg);
  width: 8px;
  padding: 0;
`;
const TagInput = ({ title, children, data, opened, logo, ...attrs }) => {
  const [tags, setTags] = useState([]);

  const handleClick = idx => {
    const currentElements = Object.assign({}, collapseElements);

    setCollapse({ ...currentElements, [idx]: !collapseElements[idx] });
  };

  const handleChange = e => {
    const val = e.target.value;
    if (e.key === "Enter" && val) {
      setTags([...tags, val]);
      e.target.value = "";
    }
  };

  const deleteTagFromArray = idx => {
    tags.splice(idx, 1);
    setTags([...tags]);
  };
  return (
    <Panel>
      <PanelTitle title="ЧПУ" />
      <TagInputUI>
        <TagInputUlUI>
          {tags.map((tag, idx) => {
            return (
              <TagInputLiUI key={idx}>
                {tag}
                <TagInputDeleteBtnUI onClick={() => deleteTagFromArray(idx)}>
                  +
                </TagInputDeleteBtnUI>
              </TagInputLiUI>
            );
          })}
        </TagInputUlUI>
        <Input
          width={"140px"}
          onKeyDown={e => handleChange(e)}
          placeholder={"Введите тег"}
        />
      </TagInputUI>
    </Panel>
  );
};
export default TagInput;
