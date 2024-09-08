import React from 'react';
import { Badge, Col } from 'antd';  
import { WrapperAccount, WrapperHeader, WrapperTextHeader, WrapperText } from "./style";
import { ButtonInputSearch } from '../ButtonInputSearch/ButtonInputSearch';
import { DownOutlined, ShoppingCartOutlined, UserOutlined } from '@ant-design/icons';

export const HeaderComponent = () => {
  return (
    <WrapperHeader>
      <Col span={6} style={{ display: "flex" }}>
        <WrapperText style={{ margin: "auto", marginLeft: "0" }}>LAPTRINHTHATDE</WrapperText>
      </Col>
      <Col span={12}>
        <ButtonInputSearch placeholder="input search text" />
      </Col>
      <Col span={6} style={{ display: "flex" }}>
        <WrapperAccount style={{ margin: "auto" }}>
          <UserOutlined style={{ fontSize: '30px' }} />
          <div>
            <WrapperTextHeader>Đăng nhập/đăng ký</WrapperTextHeader>
            <div>
              <WrapperTextHeader>Tài khoản</WrapperTextHeader>
              <DownOutlined />
            </div>
          </div>
        </WrapperAccount>
        <div style={{ margin: "auto", marginRight: "0" }}>
          <Badge count = {4} size='small'>
            <ShoppingCartOutlined style={{ fontSize: '30px', color: "#fff" }} />
          </Badge>
          
          <WrapperTextHeader>Giỏ hàng</WrapperTextHeader>
        </div>
      </Col>
    </WrapperHeader>
  );
};
