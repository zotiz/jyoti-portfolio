import React from 'react'

import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,

} from '@ant-design/icons';
import { Layout, Button} from 'antd';
const { Header} = Layout;
const HeaderItem = ({collapsed,setCollapsed}) => {
  return (
    <>
      <Header className='bg-teal-400 border-b'>
          <Button
            type="text"
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onClick={() => setCollapsed(!collapsed)}
            className='h-16 -ml-8'
            style={{width:64}}
          />
        </Header>
    </>
  )
}

export default HeaderItem