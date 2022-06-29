import './App.css';

import 'antd/dist/antd.css';

import AppHeader from './components/common/header.js'
import AppHome from './views/home.js'


import { Layout } from 'antd';
const { Header, Content} = Layout;

function App() {
  return (
    <Layout className="mainLayout">
    <Header>
      <AppHeader />
    </Header>
    <Content>
      <AppHome />
    </Content>
  </Layout>
  );
}

export default App;
