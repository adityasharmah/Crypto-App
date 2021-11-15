import React from 'react';
import { Button,Menu, Typography, Avatar} from antd;
import {Link} from 'react-router-dom';
import {HomeOutlined, MoneyCollectOutlined, BulbOutlined, FundOutlined, MenuOutlined } from '@ant-design/icons';


const Navbar = () => {
  return (
    <div className = "nav-container">
      <div className = "logo-container">
        <Avatar/>
        <Typograpghy.Title level = {2} className = "logo">
          <Link to = "/">Cryptoverse</Link>
        </Typograpghy.Title>
        {/* <Button className = "menu-control-container">

        </Button> */}
      </div>
    </div>
  )
}

export default Navbar
