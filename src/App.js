import React from 'react';
import logo from './logo.svg';
import './App.css';
import Todostab from './components/Todostab.js';
import Userstab from './components/Userstab.js';
import { Tabs } from 'antd';
const { TabPane } = Tabs;

function App() {
  return (

    <div className='myTabs'>
      <Tabs defaultActiveKey='1'  size='large'>
        <TabPane tab='Tasks' key='1'>
          <Todostab/>
        </TabPane>
        <TabPane tab='Users' key='2'>
          <Userstab />
        </TabPane>
      </Tabs>

    </div>
  );
}

export default App;
