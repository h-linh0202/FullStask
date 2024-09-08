import React from 'react';
import { Button } from 'antd';

export const ButtonComponent = ({ size, style, ...rests }) => {
  return (
    <Button 
      size={size} 
      style={style} 
      {...rests} 
    />
  );
}
