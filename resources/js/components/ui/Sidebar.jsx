import React, { Fragment, useState } from "react";
import styled, { css } from "styled-components";
import { Link } from "react-router-dom";
import { string } from "postcss-selector-parser";
import PreviewButton from "./PreviewButton";
import Button from "./Button";
import H from "./H";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import 'font-awesome/css/font-awesome.min.css';
const SidebarUI = styled.nav`
  
  color: #3d4671;
  border-right: 1px solid #dbeaf4;
  height:100%;
  width: 250px;
`;

const BrandUI = styled.div`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  height: 50px;
  width: 100%;
  border-bottom: 1px solid #dbeaf4;
  img {
    margin-right: 4px;
  }
  h6 {
    margin: 0;
    font-weight: bold;
    font-size: 12px;
  }

`;

const SidebarMainLinkUI = styled.div`
  display: flex;
  align-items: center;
  padding-left: 58px;
  height: 30px;
  border-bottom: 1px solid #dbeaf4;
`;
const SidebarLinkListUI = styled.ul`
  padding-top: 15px;
  padding-left: 0;
  list-style: none;
  height: 500px;
  border-bottom: 1px solid #dbeaf4;
  overflow-y: auto
    ${({ sub }) =>
      sub &&
      `
    list-style: none;
    height: auto;
    border-bottom: none;
    overflow-y: auto
    ${LinkUI}{
      padding-left: 78px;
    }
  `};
`;

const LinkUI = styled(Link)`
  display: flex;
  font-size: 14px;
  align-items: center;
  height: 100%;
  color: #737a9b;
  background-color: transparent;
  padding-left: 58px;
  text-decoration: none;
  
  
`;

const IconWrapperUI = styled.span`
position: absolute;
margin-left: 30px;
svg{
    path{
        fill:#737A9B;
    }
}
`

const LinkSubUI = styled(Link)`
  display: flex;
  font-size: 14px;
  align-items: center;
  height: 100%;
  color: #737a9b;
  background-color: transparent;
  padding-left: 78px;
  text-decoration: none;
  &:hover {
    background-color: #edf4f8;
    width:100%;
  }
  :before {
    content: '•';
    
    font-size: 6px;
  }
`;
const SidebarListItemUI = styled.li`
  position:relative;
  display:flex;
  align-items:center;
  min-height: 27px;
  cursor:pointer;
  &:hover {
    background-color: #edf4f8;
    width:100%;
  }
  ${({ isOpen }) =>
    isOpen &&
    `
      background-color:#737A9B;
      &:hover {
        background-color: #737A9B;
        
      }
      ${LinkUI}{
        color:#fff;
        
      }
      ${IconWrapperUI}{
          svg{
              path{
                  fill:#fff;
              }
          }
      }
      
  `};
  ${({ sub }) =>
    sub &&
    `
    display:none;
  `};
`;

const ButtonPlainUI = styled.button`
  background-color: transparent;
  color: #737a9b;
  cursor: pointer;
  &:hover {
    color: #177ff2;
  }
  i {
    position: relative;
    bottom: -2px;
  }
`;



const SidebarFooterUI = styled.div`
  display: flex;
  flex-flow: column;
  align-items: flex-start;
  padding-left: 58px;
  ${ButtonPlainUI} {
    border: 0;
    padding: 11px;
    position: relative;
    left: -0.75rem;
  }
  h3 {
    margin: 0;
    color: $color-primary-dark;
    font-weight: bold;
  }
  figure {
    margin: 22px 0 0 0;
  }
`;

const Test = styled.div`
  display: none;
  flex-flow: column;
  ${({ isOpen }) =>
    isOpen &&
    `
    display:flex
  `};
`;

const Sidebar = ({ title, children, data, opened,logo, ...attrs }) => {
  const [collapseElements, setCollapse] = useState({});

  const handleClick = idx => {
    const currentElements = Object.assign({}, collapseElements);

    setCollapse({ ...currentElements, [idx]: !collapseElements[idx] });
  };
  console.log(logo)

  return (
    <SidebarUI>
      <BrandUI>
        {/* <figure> */}
        <img
            src={require("../../../../public/images/brand-logo.png")}
            alt="Brand name"
          />
          <H size="6" bold>
          
            {title}
          </H>
        {/* </figure> */}
      </BrandUI>
      <SidebarMainLinkUI>
      
          <PreviewButton text="Перейти по ссылке"/>
      </SidebarMainLinkUI>
      <SidebarLinkListUI>
        {data.map((item, idx) => {
          return typeof item.data === "string" ? (
            <SidebarListItemUI key={idx}>
                <IconWrapperUI><FontAwesomeIcon icon="caret-right" /></IconWrapperUI>
              <LinkUI to="#">{item.name}</LinkUI>
            </SidebarListItemUI>
          ) : (
            <Fragment key={idx}>
              <SidebarListItemUI
                onClick={() => handleClick(idx)}
                isOpen={collapseElements[idx]}
              >
                  <IconWrapperUI><FontAwesomeIcon icon="caret-right" /></IconWrapperUI>
                <LinkUI to="#">{item.name}</LinkUI>
              </SidebarListItemUI>
              {item.data.map((subs, ids) => {
                return (
                  <SidebarListItemUI sub={!collapseElements[idx]} key={ids}>
                      
                    <LinkSubUI to="#">{subs.name}</LinkSubUI>
                  </SidebarListItemUI>
                );
              })}
            </Fragment>
          );
        })}
      </SidebarLinkListUI>
      <SidebarFooterUI>
        <ButtonPlainUI>
          {/* <i className="icon-delete" /> */}
          Корзина
        </ButtonPlainUI>

        <ButtonPlainUI>
          {/* <i className="icon-man" /> */}
          Пользователи
        </ButtonPlainUI>
        <ButtonPlainUI>
          {/* <i className="icon-gear" /> */}
          Настройки
        </ButtonPlainUI>
        <ButtonPlainUI>
          {/* <i className="icon-question-round" /> */}
          Раздел помощи
        </ButtonPlainUI>
        <figure className="sidebar__footer__signature">
          <H size="3" bold>
            Rocket Engine
          </H>
          <img
            src={require("../../../../public/images/image-rocketfirm-logo.png")}
            alt="Brand name"
          />
        </figure>
      </SidebarFooterUI>
    </SidebarUI>
  );
};
export default Sidebar;
