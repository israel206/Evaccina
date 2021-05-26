import { Layout, Menu, Breadcrumb } from 'antd';
import 'antd/dist/antd.css';
import ListaPessoa from './components/ListaPessoas';

const { Header, Content, Footer } = Layout;

function App() {
  return (
    <div>
      <Layout className="layout">
        <Header>
          <div className="logo" />
          <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']}>
            <Menu.Item key="1">Home</Menu.Item>
          </Menu>
        </Header>
        <Content style={{ padding: '0 50px' }}>
          <Breadcrumb style={{ margin: '16px 0' }}>
            <Breadcrumb.Item>Home</Breadcrumb.Item>
          </Breadcrumb>
          <div className="site-layout-content">
            <ListaPessoa></ListaPessoa>
          </div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>israel Developer FullStack ©2021 </Footer>
      </Layout>
      
    </div>
  );
}

export default App;
