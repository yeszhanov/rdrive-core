import React, { useState } from 'react';
import Layout from 'components/Layout';
import H from 'components/ui/H';
import Button from 'components/ui/Button';
import Input from 'components/ui/Input';
import Sidebar from 'components/ui/Sidebar';
import Checkbox from 'components/ui/Checkbox';
import Star from 'components/ui/Star';
import Switch from 'components/ui/Switch';
import links from '../mockup/links';

            

const Kit = () => {
  const [isChecked, setChecker] = useState(false);
  const [isBookmarked, setBookmark] = useState(false);
  return (
    <Layout>
      <Layout width="250px" height="100vh">
        <Sidebar data={links} title="Kazkommerts Securities" />
      </Layout>
      <Layout vertical >
        <H size="1" bold color="#3D4671">Kitdasfaaaaa</H>
        <Button > Добавление </Button>
        <Button disabled> Disabled </Button>
        <Button system>Системные </Button>
        <Button link="/test">Ссылка</Button>
        <Input />
        <label>
          <Checkbox
            checked={isChecked}
            onChange={() => setChecker(event.target.checked)}
          />
          <span style={{ marginLeft: 8 }}>Label Text</span>
        </label>
        <Switch />
        <label>
        <Star 
          checked={isBookmarked}
          onChange={() => setBookmark(event.target.checked)}/>
        </label>
      </Layout>
    </Layout>
  );
};

export default Kit;
