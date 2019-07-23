import React, { useState } from "react";
import styled, { css } from "styled-components";
//components
import Layout from "components/ui/Layout";
import H from "components/ui/H";
import Button from "components/ui/Button";
import DeleteButton from "components/ui/DeleteButton";
import Input from "components/ui/Input";
import Sidebar from "components/ui/Sidebar";
import Checkbox from "components/ui/Checkbox";
import Star from "components/ui/Star";
import Switch from "components/ui/Switch";
import PreviewButton from "components/ui/PreviewButton";
import DropdownArrows from "components/ui/DropdownArrows";
import DropdownText from "components/ui/DropdownText";
import AddButton from "components/ui/AddButton";
import Calendar from "components/ui/Calendar";
import Sort from "components/ui/Sort";
import Panel from "components/ui/Panel";
import PanelTitle from "components/ui/PanelTitle";
import Table from "components/ui/Table";
import TagInput from "components/ui/TagInput"
//data
import links from "../mockup/links";
import dataDropdownText from "../mockup/data-for-dropdown";

const WrapperUI = styled.div`
  display: flex;
  height: 100vh;
  box-sizing: border-box;
`;
const ContentWrapperUI = styled.div`
width:100%;
overflow:scroll;
padding:5px;
`;
const SectionBlock = styled.div`
  
`;





const Kit = () => {
  const [isChecked, setChecker] = useState(false);
  const [isBookmarked, setBookmark] = useState(false);
  // const sizes=[2,1,3,4,5]
  const sizes = ["2em " ,"3em " ,"5fr " ,"2fr " ,"2fr " ,"2fr " ,"2fr " ,"5em " ,"5em " ,"5em"]
  const titles = ['Id',"Type","Name","Category","Client","Date","Watched",'Amount',"State", "Delete"]


  const data =[
    {
      id:23,
      type:'test',
      name: 'joaaaahnny cageasdasdasd cageasdasdasd cageasdasdasd cageasdasdasd',
      category: 'selasdasler',
      client:'custom',
      date:'01-01-2019',
      watched: 'yes',
      amount:1231,
      state:'pending',
      delete:"delete" 

    },
    {
      id:211,
      type:'test',
      name: 'johnny cage',
      category: 'seller',
      client:'custsdsom',
      date:'01-01-2019',
      watched: 'yes',
      amount:1231,
      state:'pending',
      delete:"delete" 

    },
    {
      id:2222,
      type:'test',
      name: 'johnny cage',
      category: 'seller',
      client:'custom',
      date:'01-01-2019',
      watched: 'yes',
      amount:1231,
      state:'pending',
      delete:"delete" 
    }
  ]
  return (
    <WrapperUI>
      <div>
        <Sidebar
          data={links}
          title="Kazkommerts Securities"
          logo="../../../public/images/brand-logo.png"
        />
      </div>

      <ContentWrapperUI>
        <H size="1" bold color="#3D4671">
          Kitdasfaaaaa
        </H>
        <Button> Добавление </Button>
        <Button disabled> Disabled </Button>
        <Button system>Системные </Button>
        <Button link="/test">Ссылка</Button>
        <Input label="Подпись" />
        
        <DropdownArrows />
        <DropdownText data={dataDropdownText} title="Наборы"  />
        <Checkbox
          checked={isChecked}
          onChange={() => setChecker(event.target.checked)}
          label="Активность"
        />
        <Switch />
        <Star
          checked={isBookmarked}
          onChange={() => setBookmark(event.target.checked)}
        />
        <Table columns={10} titles={titles} data={data}>
          
    
          </Table>
        <Panel>
          <PanelTitle title="Категория" />
          <DropdownText data={dataDropdownText} title="Наборы" />
          <DropdownText data={dataDropdownText} title="Наборы" />
          <Input width={'140px'} label="Подпись" />
          <Input width={'140px'} label="Подпись" />
          <Input width={'140px'} label="Подпись" />
        </Panel>
        <DeleteButton text />
        <DeleteButton />
        <PreviewButton text="Предсмотр" />
        <Calendar />
        <AddButton />
        <br/>
        <br/>
        <TagInput />
        <br/>
        <br/>
        <Sort />
        
      </ContentWrapperUI>
    </WrapperUI>
  );
};

export default Kit;
