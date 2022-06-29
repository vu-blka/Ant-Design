import "./App.css";

import "antd/dist/antd.css";

import AppHeader from "./components/common/header.js";
import AppHome from "./views/home.js";
import AppFooter from "./components/common/footer.js";

import { Layout } from "antd";
const { Header, Content, Footer } = Layout;

function App() {
  return (
    <Layout className="mainLayout">
      <Header>
        <AppHeader />
      </Header>
      <Content>
        <AppHome />
      </Content>
      <Footer>
        <AppFooter />
      </Footer>
    </Layout>
  );
}

export default App;
