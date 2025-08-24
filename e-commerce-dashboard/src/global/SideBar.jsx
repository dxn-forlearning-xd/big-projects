import { Layout, Typography, Button, Image, Menu, Divider } from 'antd';
import { MenuOutlined } from '@ant-design/icons';
import { useState } from 'react';
import userImg from '../assets/user.png';
import {
  HomeOutlined,
  TeamOutlined,
  AppstoreOutlined,
  ProfileOutlined,
  PieChartOutlined,
  BarChartOutlined,
  LineChartOutlined,
} from '@ant-design/icons';
import { Link } from 'react-router-dom';

const { Sider } = Layout;

function SideBar() {
  const [isCollapsed, setIsCollapsed] = useState(false);

  return (
    <Sider
      collapsible
      collapsed={isCollapsed}
      collapsedWidth={60}
      trigger={null}
      width={250}
      style={{ background: '#414460ff', height: '100vh' }}
    >
      <div
        style={{
          padding: '16px',
          display: 'flex',
          justifyContent: 'space-between',
        }}
      >
        {!isCollapsed && (
          <Typography.Title level={5} style={{ margin: 0, color: 'white' }}>
            ADMINS
          </Typography.Title>
        )}
        <Button
          style={{ color: 'white' }}
          type="text"
          icon={<MenuOutlined />}
          onClick={() => setIsCollapsed(!isCollapsed)}
        />
      </div>

      {!isCollapsed && (
        <div style={{ marginTop: '24px', textAlign: 'center' }}>
          <Image
            width={100}
            src={userImg}
            preview={false}
            style={{ borderRadius: '50%' }}
          />
          <Typography.Title level={3} style={{ color: 'white' }}>
            名字
          </Typography.Title>
          <Typography style={{ color: '#74d361ff' }} type="secondary">
            管理员
          </Typography>
        </div>
      )}

      <div style={{ paddingLeft: isCollapsed ? undefined : '10%' }}></div>

      <Menu
        mode="inline"
        defaultSelectedKeys={['/']}
        style={{ height: '100%', borderRight: 0 }}
      >
        <Menu.Item key="/" icon={<HomeOutlined />}>
          <Link to="/">首页</Link>
        </Menu.Item>

        <Divider style={{ margin: '8px 0', backgroundColor: '#5b636dff' }} />

        <Menu.Item key="/products" icon={<AppstoreOutlined />}>
          <Link to="/products">商品管理</Link>
        </Menu.Item>
        <Menu.Item key="/contacts" icon={<TeamOutlined />}>
          <Link to="/contacts">顾客信息</Link>
        </Menu.Item>
        <Menu.Item key="/orders" icon={<ProfileOutlined />}>
          <Link to="/orders">订单管理</Link>
        </Menu.Item>

        <Divider style={{ margin: '8px 0', backgroundColor: '#5b636dff' }} />

        <Menu.Item key="/barchart" icon={<BarChartOutlined />}>
          <Link to="/barchart">条型图</Link>
        </Menu.Item>
        <Menu.Item key="/piechart" icon={<PieChartOutlined />}>
          <Link to="/piechart">饼状图</Link>
        </Menu.Item>
        <Menu.Item key="/linechart" icon={<LineChartOutlined />}>
          <Link to="/linechart">线型图</Link>
        </Menu.Item>
      </Menu>
    </Sider>
  );
}

export default SideBar;
