import React, { useState } from 'react';
import Layout from 'components/Layout';
import H from 'components/ui/H';
import Button from 'components/ui/Button';
import Input from 'components/ui/Input';
import Sidebar from 'components/ui/Sidebar';
import Checkbox from 'components/ui/Checkbox';
import Switch from 'components/ui/Switch';
import links from '../mockup/links';

import logo from "../mockup/images/brand-logo.png"
            

const Kit = () => {
  const [isChecked, setChecker] = useState(false);

  return (
    <Layout>
      <Layout width="250px">
        <Sidebar data={links} title="Kazkommerts Securities" />
      </Layout>
      <img
            src={logo}
            alt="Brand name"
          />
      <Layout vertical>
        <H size="2" color="#d1d1d1">Kitdasfaaaaa</H>
        <Button link="/test">asdasddddd</Button>
        <Input />
        <label>
          <Checkbox
            checked={isChecked}
            onChange={() => setChecker(event.target.checked)}
          />
          <span style={{ marginLeft: 8 }}>Label Text</span>
        </label>
        <Switch />
        <h3>Kazkommerts Securities</h3>
      </Layout>
    </Layout>
  );
};

export default Kit;
