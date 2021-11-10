import React, {useState} from 'react';
import { Menu, Layout } from 'antd';
import {
    SettingOutlined,
    LoginOutlined,
    HomeOutlined
  } from '@ant-design/icons';
import { useHistory } from 'react-router';  
import { logout } from '../../utils/token';

interface ClickParam {
    key: string;
}
  
const Sidebar = () => {
    let history = useHistory ();
    const { Sider } = Layout;

    //---State---//
    const [isCollapsed, setisCollapsed] = useState<boolean>(true)

    const onCollapse = () => {
        setisCollapsed(!isCollapsed);
    }


    const handleClick = (e: ClickParam) => {
        if (e.key !== 'logout') {
            alert('in dashboard')
          } else {
            logout()
            history.push('/login')
          }
    };

    return (
        <>
        <Sider collapsible collapsed={isCollapsed} onCollapse={onCollapse}>
          <div className="logo" />
          <Menu 
            theme="dark" 
            defaultSelectedKeys={['1']}
            mode="inline"
            onClick={handleClick}
          >
            <Menu.ItemGroup className="app-nav">
                <Menu.Item key="dashboard" icon={<HomeOutlined />}>
                    <span>Dashboard</span>
                </Menu.Item>
            </Menu.ItemGroup>

            <Menu.ItemGroup className="user-nav">
                <Menu.Item key="settings" icon={<SettingOutlined />}>
                    <span>Settings</span>
                </Menu.Item>
                <Menu.Item key="logout" icon={<LoginOutlined />}>
                    <span>Logout</span>
                </Menu.Item>
            </Menu.ItemGroup>
          </Menu>
        </Sider>
        </>
    )
}

export default Sidebar;