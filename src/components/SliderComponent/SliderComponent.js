import React from 'react';
import { Image } from 'antd';
import Slider from 'react-slick';
import { LeftOutlined, RightOutlined } from '@ant-design/icons';

const NextArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <RightOutlined
      className={className}
      style={{ ...style, display: 'block', color: '#000', fontSize: '24px' }}
      onClick={onClick}
    />
  );
};

const PrevArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <LeftOutlined
      className={className}
      style={{ ...style, display: 'block', color: '#000', fontSize: '24px'}}
      onClick={onClick}
    />
  );
};

export const SliderComponent = ({ arrImage = [] }) => {

  if (!Array.isArray(arrImage)) {
    console.error('arrImage should be an array');
    return null;
  }

  const settings = {
    dots: false,  // Ẩn nút preview
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,  // Nút chuyển tiếp
    prevArrow: <PrevArrow />,  // Nút quay lại
  };

  const sliderStyle = {
    width: '100%',
    margin: '0 auto',
    maxWidth: '90%',
    height: '400px',
  };

  const imageWrapperStyle = {
    width: '100%',
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
  };

  const imageStyle = {
    maxWidth: '100%',
    maxHeight: '100%',
    objectFit: 'cover',
  };

  return (
    <div style={sliderStyle}>
      <Slider {...settings}>
        {arrImage.map((image, index) => (
          <div key={index} style={imageWrapperStyle}>
            <Image src={image} alt={`slider-${index}`} style={imageStyle} />
          </div>
        ))}
      </Slider>
    </div>
  );
}
