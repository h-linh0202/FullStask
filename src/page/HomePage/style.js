import styled from "styled-components";
import { ButtonComponent } from "../../components/ButtonComponent/ButtonComponent";
export const WrapperTypeProduct = styled.div`
    display: flex;
    align-items: center;
    gap: 24px;
    justify-content: flex-start;
    border-bottom: 1px solid red;
    height: 45px
`

export const WrapperButtonMore = styled(ButtonComponent)`
    border: 1px solid rgb(11, 116, 229);
    color: rgb(11, 116, 229);
    width: 12%;
    height: 40px;
    border-radius: 4px;
    font-weight: 600;

    &:hover {
        color: #fff !;
        background: rgb(11, 116, 229);
    }
`;


export const WrapperProducts = styled.div`
    display: flex;
    align-items: center;
    margin-top: 20px;
    flex-wrap: wrap;
    justify-content: space-between;
    flex-wrap: wrap;

`