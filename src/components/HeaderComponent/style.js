import { Row } from 'antd';
import styled from 'styled-components';

export const WrapperHeader = styled(Row)`
    padding: 20px 120px;
    height: 100px;  
    background-color: rgb(26, 148, 255);
`;

export const WrapperText = styled.span`
    font-size: 18px;
    color: #fff;
    font-weight: bold;
    text-align: left;
`;

export const WrapperAccount = styled.div`
    display: flex;
    align-items: center;
    color: #fff;
    gap: 10px;
`;

export const WrapperTextHeader = styled.span`
    color: #fff;
`;
