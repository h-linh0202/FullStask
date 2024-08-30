import React from 'react';
import { TypeProduct } from '../../components/TypeProduct/TypeProduct';
import { WrapperTypeProduct } from './style';
import { SliderComponent } from '../../components/SliderComponent/SliderComponent';
import slider1 from "../../assets/images/slider1.jpg";
import slider2 from "../../assets/images/slider2.jpg";
import slider3 from "../../assets/images/slider3.jpg";

export const HomePage = () => {
  const arr = ["TV", "Tủ lạnh", "Laptop", "Điện thoại", "Máy giặt", "Máy sấy", "Bàn phím", "Chuột", "Máy ảnh", "Máy in", "Loa", "Tai nghe"];
  
  const arrImage = [slider1, slider2, slider3]; 

  return (
    <div style={{ padding: "0 120px" }}>
      <WrapperTypeProduct>
        {arr.map((item) => (
          <TypeProduct name={item} key={item} />
        ))}
      </WrapperTypeProduct>
      
      <SliderComponent arrImage={arrImage} /> 
    </div>
  );
};
