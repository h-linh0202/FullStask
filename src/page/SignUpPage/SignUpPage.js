import React from 'react'
import logoLogin from "../../assets/images/logoLogin.png";

import { ButtonLogin, InputLogin } from './style';
import { Link } from 'react-router-dom';
export const SignUpPage = () => {
  return (
    <div style={{display: "flex", height: "89.69vh", width: "100%", background: "rgba(0, 0, 0, 0.53)"}}>
      <div style={{height: "60%", width: "50%", background: "#fff", margin: "auto", borderRadius: "10px", display: "flex"}}>
          <div style={{height: "105%", width: "100%", backgroundColor: "#fff", margin: "auto", display: "flex"}}>
            
            <div style={{height: "100%", width: "65%", display: "flex"}}>
              <div style={{width: " 85%", height: "85%", margin:"auto"}}>
                <h1>Xin chào</h1>
                <p>Đăng nhập vào tài khoản</p>
                <div> 
                  <InputLogin placeholder='abc@gmail.com'></InputLogin>
                  <InputLogin placeholder='Password'></InputLogin>
                  <InputLogin placeholder='Comfirm Password'></InputLogin>
                </div>

                <ButtonLogin>Đăng nhập</ButtonLogin>
                <p style={{marginTop: "12.5px"}}> <Link style={{color: "blue", textDecoration: "none"}}>Quên mật khẩu ?</Link></p>
                <p style={{marginTop: "12.5px"}}>Chưa có tài khoản? <Link style={{color: "blue", textDecoration: "none"}}>Đăng ký</Link></p>
              </div>
            </div>




            <div style={{height: "100%", width: "40%", background: "linear-gradient(136deg, rgb(240, 248, 255) -1%, rgb(219, 238, 255) 85%)", display: "flex"}}>
              <div style={{width: "80%", height: "51%", margin: "auto", margin: "auto"}}>
                <img style={{height: "100%", width: "100%", margin: "auto", backgroundSize: "cover"}} src={logoLogin} />
                <h4 style={{textAlign: "center", marginTop: "10px"}}>Mua sắm tại LTTD</h4>
  
              </div>

            </div>

          </div>
      </div>
    </div>
  )
}
