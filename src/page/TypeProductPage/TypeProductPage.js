import React from 'react'
import {NavBarComponent} from '../../components/NavBarComponent/NavBarComponent';
import { CardComponent } from '../../components/CardComponent/CardComponent';
import { Col, Pagination, Row } from 'antd';
import { WrapperProducts } from './style';

export const TypeProductPage = () => {
    const onChange = ()=>{}
  return (
    <>
      <div>
        <Row style={{padding: "0 120px", background: "#efefef", flexWrap: "nowrap", paddingTop: "10px"}}>
            <Col span={4} style={{background: "#fff", marginRight: "10px", padding : "10px", borderRadius: "6px"}}>
                <NavBarComponent/>
            </Col>


            <Col span={20}>
              <WrapperProducts >
                  <CardComponent/>
                  <CardComponent/>
                  <CardComponent/>
                  <CardComponent/>
                  <CardComponent/>

              </WrapperProducts>
              <Pagination defaultCurrent={2} total={100} onChange={onChange} style={{margin: "auto", textAlign: "center", width: "30%"}} />
            </Col>

        </Row>
      </div>
      
    </>
    
  )
}
