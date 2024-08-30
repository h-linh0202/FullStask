import React from 'react';
import { Button } from 'antd';
export const ButtonComponent = ({ size, placeholder, style, ...rests }) => {
  return (
    <Button 
      size={size} 
      placeholder={placeholder} 
      style={style} 
      {...rests} 
    />
  );
}
