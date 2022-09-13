import React from 'react'
import {Button, Avatar ,Menu , Typography} from 'antd'
import {Link} from  'react-router-dom'; 
import { HomeOutlined, MoneyCollectOutlined, BulbOutlined, FundOutlined, MenuOutlined } from '@ant-design/icons';
import CryptoWorldLogo from './Images/CryWorld.png';

const Navbar = () => {
  return (
    <div className='nav-container'>
    
       <div className="logo-container">
        <Avatar src={CryptoWorldLogo} size='large' />
        <Typography.Title level={2} className='logo'> 
          <Link to='/'> CryptoWorld</Link>
        </Typography.Title>
       </div>
       <Menu>
        <Menu.Item icon={<HomeOutlined />}>
          <Link  to='/'>Home</Link>
        </Menu.Item>
        <Menu.Item icon={<FundOutlined />}>
          <Link  to='/Cryptocurrencies'>Cryptocurrencies</Link>
        </Menu.Item>
        <Menu.Item icon={<MoneyCollectOutlined/>}>
          <Link  to='/exchanges'>Exchanges</Link>
        </Menu.Item>
        <Menu.Item icon={<BulbOutlined/>}>
          <Link  to='/news' >News</Link>
        </Menu.Item>
        
                
        

       </Menu>
      </div>
  )
}

export default Navbar