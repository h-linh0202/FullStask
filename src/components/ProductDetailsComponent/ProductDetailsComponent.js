import { Col, Image, InputNumber, Rate, Row } from 'antd'
import React from 'react'
import imageProduct from "../../assets/images/imageProduct.jpg"
import imageProductSmall from "../../assets/images/imageProduct.jpg"
import { WrapperProductDetail } from './style'
import { Link } from 'react-router-dom'


export const ProductDetailsComponent = () => {
  return (
    <Row style={{background: "#fff"}}>
      <Col span={10}>
        <Image src={imageProduct} alt='image Product' preview={false} />
        <div style={{ display: "flex", width: "100%" }}>
          <Image style={{ width: "100%" }} src={imageProductSmall} alt='image small' preview={false} />
          <Image style={{ width: "100%" }} src={imageProductSmall} alt='image small' preview={false} />
          <Image style={{ width: "100%" }} src={imageProductSmall} alt='image small' preview={false} />
          <Image style={{ width: "100%" }} src={imageProductSmall} alt='image small' preview={false} />
        </div>
      </Col>

      <Col span={14} style={{ display: "flex" }}>
        <WrapperProductDetail >
          <h1 style={{ margin: "20px 0px", fontWeight: "400" }}>Sách - Thám tử lừng danh conan - Combo 10 tập từ 81 đến 90</h1>
          <div style={{ fontSize: "15px", display: 'flex', alignItems: 'center' }}>
            <Rate disabled defaultValue={5} style={{ color: '#FFD700' }} />
            <span style={{ marginLeft: '10px' }}>| Đã bán 100+</span>
          </div>

          <h1 style={{margin: "30px 50px", fontSize: "38px"}}>200.000</h1>
          <div style={{fontSize: " 16px", borderBottom: "1px solid #f7f7f7", paddingBottom: "15px"}}>Giao đến địa chỉ: 
            
            <span style={{fontWeight: '600'}}> 355 Lê Văn Khương, Phường Hiệp Thành, Quận 12, Tp.HCM - </span>
            <Link to="/about">Đổi địa chỉ</Link>

          </div>


          {/* Số lượng */}


          <div style={{marginTop: "20px", borderBottom: "1px solid #f7f7f7", paddingBottom: "15px"}}>

            <p style={{fontSize: "17px"}}>Số lượng</p>
            <div style={{display: "flex", width: "120px", border: "1px solid #444", height: "30px", fontSize: "18px", fontWeight: '600'}}>
              <p style={{margin: "auto", cursor:"pointer"}}>-</p>
              <p style={{margin: "auto", cursor:"pointer"}}>1</p>
              <p style={{margin: "auto", cursor:"pointer"}}>+</p>

            </div>
            
          </div>


           {/* button mua */}

          <div style={{height: "60px", width: "600px", display: "flex", marginTop: "40px", justifyContent: "space-between"}}>
            <p style={{height: "100%", width: "49%", background: "rgb(255, 66, 78)", borderRadius: "5px", textAlign: "center", fontWeight: "600", color: "#fff", display: "flex"}}><p style={{margin:"auto", fontSize: "18px", fontWeight: "600"}}>Chọn mua</p></p>
            <p style={{height: "100%", width: "49%", background: "none", borderRadius: "5px", textAlign: "center", fontWeight: "600", color: "rgb(26, 148, 255)", display: "flex", border: "1px solid rgb(26, 148, 255)" }}><p style={{margin:"auto", fontSize: "18px", fontWeight: "600"}}>Mua trả sau</p></p>
     
          </div>

          <h2 style={{marginTop: "50px"}}>Mô tả:</h2>
        </WrapperProductDetail>
      </Col>
    </Row>
  )
}
