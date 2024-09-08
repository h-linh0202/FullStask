import React from 'react';
import { Card } from 'antd';
import { StyleNameProduct, WrapperPriceText, WrapperReportText } from './style';


export const CardComponent = () => {
  return (
    <Card
      hoverable
     
      style={{width: "19%", marginBottom: '20px'}}
 
      cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
    >
      <StyleNameProduct>Iphone</StyleNameProduct>
      <WrapperReportText>
        <span style={{marginRight: "4px"}}>
          <span>4.96 |</span>
        </span>
        <span>Đã bán 100+</span>
      </WrapperReportText>  

        <WrapperPriceText>
          1.000.000đ
          <p>-5%</p>
        </WrapperPriceText>

        
    </Card>
  
  );
};
