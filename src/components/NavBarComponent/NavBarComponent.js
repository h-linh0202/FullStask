import React from 'react';
import { Checkbox, Rate } from 'antd';
import { WapperContent, WapperTextPrice, WapperTextValue, WrapperLableText } from './style';

export const NavBarComponent = () => {
    const onChange = () => {}

    const RenderContent = (type, options) => {
        switch (type) {
            case 'text':
                return options.map((option, index) => (
                    <WapperTextValue key={index}>{option}</WapperTextValue>
                ));

            case 'checkbox':
                return (
                    <Checkbox.Group style={{ width: '100%', display: 'flex', flexDirection: 'column' }} onChange={onChange}>
                        {options.map((option) => (
                            <Checkbox value={option.value}>{option.label}</Checkbox>
                        ))}
                    </Checkbox.Group>
                );

            case 'star':
                return options.map((option)=>{
                    return (
                        <div style={{display: 'flex', gap: 10}}>
                            <Rate disabled defaultValue={option} />
                            <span>Từ {option} sao</span>
                        </div>
                    )
                })

            case 'price':
                return options.map((option)=>{
                    return (
                       <WapperTextPrice>{option}</WapperTextPrice>
                    )
                })

    
            default:
                return null;
        }
    };

    return (
        <div>
            <WrapperLableText>Label</WrapperLableText>
            <WapperContent>  
                {RenderContent('text', ['tu lanh', 'tivi', 'may giat'])}
                {RenderContent('checkbox', [
                    { value: 'a', label: 'A' },
                    { value: 'B', label: 'B' },
                ])}
            </WapperContent>
            
            <WapperContent>  
                {RenderContent('star', [3, 4, 5])}
                
            </WapperContent>

            <WapperContent>  
                {RenderContent('price', ["dưới 40.000", 'trên 50.000'])}
                
            </WapperContent>

        </div>
    );
};
