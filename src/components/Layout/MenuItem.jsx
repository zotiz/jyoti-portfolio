import React from 'react'
import { Link } from 'react-router-dom'
import {
  HomeOutlined,
  WalletOutlined ,
  UnorderedListOutlined,
  MessageOutlined,
  UserOutlined,
} from '@ant-design/icons';
import {  Menu} from 'antd';
const MenuItems = ({collapsed}) => {
  return (
  
       <Menu
          className='bg-teal-700 h-full min-h-screen py-12 font-semibold text-gray-300'
          theme='dark'
          mode="inline"
          defaultSelectedKeys={['1']}
        >
           <Menu.Item key="1" icon={<HomeOutlined />}>
            <Link to="/">Home</Link>
          </Menu.Item>
          <Menu.Item key="2" icon={<UserOutlined />}>
            <Link to="/about">About</Link>
          </Menu.Item>
          <Menu.Item key="3" icon={<WalletOutlined />}>
            <Link to="/portfolio">Portfolio</Link>
          </Menu.Item>
          <Menu.Item key="4" icon={<UnorderedListOutlined />}>
            <Link to="/service">Services</Link>
          </Menu.Item>
          <Menu.Item key="5" icon={<MessageOutlined />}>
            <Link to="/contact">Contact</Link>
          </Menu.Item>
        </Menu>
   
  )
}

export default MenuItems