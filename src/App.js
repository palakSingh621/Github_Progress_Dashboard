import React from 'react';
import { Space } from 'antd';
import "./App.css";
import AppHeader from './Components/AppHeader/AppHeader';
import PageContent from './Components/PageContent/PageContent';
import AppFooter from './Components/AppFooter/AppFooter';
import SideMenu from './Components/SideMenu/SideMenu';

function App(){
  return <div className="App">
    <AppHeader/>
    <Space className="SideMenuAndPageContent">
      <SideMenu></SideMenu>
      <PageContent></PageContent>
    </Space>
    <AppFooter/>
  </div>
}

export default App;