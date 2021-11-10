import React from 'react';
import { Layout } from 'antd';
import Sidebar from '../components/sidebar';

interface Props {
  isAuthenticated?: boolean,
  children: object,
}

const { Content, Sider } = Layout;

const App: React.FunctionComponent<Props> = ({children, isAuthenticated}) => {
  if (isAuthenticated) {
    return (
      <Layout style={{ minHeight: '100vh' }}>
        <Sidebar />
        <Content>
          {children}
        </Content>
      </Layout>
    )
  } else {
    return <>{children}</>
  }
}

export default App;
