import React from 'react';

import { SearchOutlined } from '@ant-design/icons';  
import { InputComponent } from '../InputComponent/InputComponent'; 
import { ButtonComponent } from '../ButtonComponent/ButtonComponent';

export const ButtonInputSearch = (props) => { 
    const {
        size, placeholder,
        backgroundColorInput = "#fff",
        backgroundColorButton = "rgb(13, 92, 182",
        colorbutton = "#fff"
    } = props;

    return (
        <div style={{ display: 'flex' }} >
            <InputComponent 
                size={size} 
                placeholder={placeholder} 
                style={{
                    height: '50px', 
                    borderTopRightRadius: 0, 
                    borderBottomRightRadius: 0, 
                    backgroundColor: backgroundColorInput 
                }} 
            /> 
            <ButtonComponent 
                style={{
                    height: '50px', 
                    width: '80px', 
                    borderRadius: 0, 
                    backgroundColor: backgroundColorButton, 
                    color: colorbutton, 
                    border: 0 
                }}  
                size={size} 
                icon={<SearchOutlined style={{ fontSize: '24px' }} />} 
            />
        </div>
    );
}
