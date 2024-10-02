import styled from "styled-components";


export const Container = styled.div`
    width: 1024px;
    height: 44px;
    display: flex;
    align-items: center;
    border-radius: 8px;
    border: 1px solid #8A94A4;
    background-color: white;

    @media screen and (max-width: 1023px) {
        width: 90%;
    }
`

export const Icon = styled.img`
    width: 24px;
    height: 24px;
    margin-left: 10px;
`

export const InputSearch = styled.input`
    width: 90%;
    height: 100%;
    background-color: transparent;
    border: none;
    outline: none;
    font-family: Roboto;
    font-size: 16px;
    font-weight: 400;
    line-height: 20px;
    text-align: left;
    color: #2C2C2C;
`