import React, { useState } from 'react';
import './Layout.css'
import { Routes, Route } from 'react-router-dom'

import { Layout} from 'antd';
import Home from '../Pages/Home';
import About from '../Pages/About';
import Portfolio from '../Pages/Portfolio';
import Service from '../Pages/Service';
import Contact from '../Pages/Contact';
import MenuItems from './MenuItem';
import HeaderItem from './HeaderItem';


const { Sider, Content} = Layout;

const MyLayout = () => {
  const [collapsed, setCollapsed] = useState(true);
 
  return (
    <Layout>
      <Sider  trigger={null} collapsible  collapsed={collapsed}>
      {/* <div className="demo-logo-vertical bg-teal-700 h-16 flex justify-center items-center" >
        <img src="jj.png" alt="" className='w-11/12 brightness-125 '/> 
        </div> */}
        
      <MenuItems />
   
      </Sider>
      <Layout className=' bg-teal-400 min-h-full'>
        <HeaderItem setCollapsed={setCollapsed} collapsed={collapsed}/>
        <Content className='p-2 sm:p-4 md:p-8'>
        <div>
       
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/about" element={<About />} />
            <Route exact path="/portfolio" element={<Portfolio />} />
            <Route exact path="/service" element={<Service />} />
            <Route exact path="/contact" element={<Contact />} />
          </Routes>
        
      </div>
        </Content>
      </Layout>
    </Layout>
  );
};

export default MyLayout;